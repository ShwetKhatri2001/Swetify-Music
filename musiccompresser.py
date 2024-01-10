'''
This code mandates installation of ffmpeg prior in system and included in system path
IN linux - https://www.tecmint.com/install-ffmpeg-in-linux/
FOR windows - https://www.gyan.dev/ffmpeg/builds/   download ffmpeg-git-full.7z and then go to bin set this location to environment path 
Run this using py musiccompressor.py
'''

import os
import subprocess


def compress_audio_files(music_folder):
    compressed_files = []
    skipped_files = []
    total_original_size = 0
    total_compressed_size = 0

    # Get user confirmation for overwriting all files
    choice = input(f"Overwrite existing files in {music_folder}? (y/n): ")
    if choice.lower() != "y":
        print("Skipping compression.")
        exit()

    # Recursively traverse the folder structure
    for root, directories, files in os.walk(music_folder):
        for filename in files:
            if filename.endswith(".mp3"):
                original_audio_path = os.path.join(root, filename)
                current_path, original_filename = os.path.split(original_audio_path)

                original_size = os.path.getsize(original_audio_path) / (1024 * 1024)  # Convert bytes to MB
                total_original_size += original_size

                # Check bitrate
                bitrate_info = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "a:0", "-show_entries", "stream=bit_rate", "-of", "default=noprint_wrappers=1:nokey=1", original_audio_path], capture_output=True, text=True )
                original_bitrate = int(bitrate_info.stdout)

                if original_bitrate <= 128000:  # Skip if already compressed
                    print(f"Skipping {original_audio_path} as it's already at or below 128kbps.")
                    skipped_files.append(f"\'{original_audio_path}\'")
                    total_compressed_size += original_size
                    continue

                # Generate temporary filename
                temp_filename = "temp_music.mp3"
                temp_audio_path = os.path.join(current_path, temp_filename)

                # Compress using ffmpeg
                try:
                    subprocess.run(["ffmpeg", "-y", "-i", original_audio_path, "-b:a", "108k", "-vbr", "3", "-ac", "2", temp_audio_path], check=True)

                    # Replace original file
                    os.replace(temp_audio_path, original_audio_path)

                    print(f"Compression successful for {original_audio_path}!")

                    compressed_size = os.path.getsize(original_audio_path) / (1024 * 1024)
                    total_compressed_size += compressed_size

                    compressed_files.append(f"\'{original_audio_path}\' compressed from {original_size:.2f} Mb to {compressed_size:.2f} Mb")

                except subprocess.CalledProcessError as e:
                    print(f"Error compressing {original_audio_path}: {e}")
                    #since this music could not be compressed so add it to skipped list 
                    skipped_files.append("\'{original_audio_path}\'")
                    total_compressed_size += original_size
    return compressed_files, skipped_files, total_original_size, total_compressed_size




if __name__ == "__main__":
    #Enter location to music folder, lets hardcode it 
    music_folder = "./songs-images"

    compressed_files, skipped_files, total_original_size, total_compressed_size = compress_audio_files(music_folder)
    # Clear the screen before displaying the summary
    os.system("cls" if os.name == "nt" else "clear")  # Windows or other OS

    # Display summary
    print("\n", "=" * 30, "Compression Summary", "=" * 30)

    if compressed_files:
        print("\nCompressed files:")
        for record in compressed_files:
            print(f"-  {record}")  # Slightly adjusted indentation for clarity

    if skipped_files:
        print("\nSkipped files (already compressed):")
        for record in skipped_files:
            print(f"-  {record}")  # Added indication for compression reason

    print("\nTotal compressed files:", len(compressed_files))
    print("Total skipped files:", len(skipped_files))  # Added total count
    print(f"Total volume of files processed : {total_original_size:.2f}  Mb")
    print(f"Total volume of files post compression : {total_compressed_size:.2f} Mb")
    print(f"Total compression done : {(total_original_size - total_compressed_size):.2f} Mb")

