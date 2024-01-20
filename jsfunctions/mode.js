document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggle-switch');
    const nav = document.getElementById("header-nav");
    const side = document.getElementById("side-panel");
    const footer = document.getElementById("footer");
    const playlist = document.getElementsByClassName("playlist-card");
    const artist = document.getElementsByClassName("artist-card");
    const contact = document.getElementsByClassName("modal-div")[0];

    // Check the user's preference for dark mode
    const isDarkMode = sessionStorage.getItem('dark-mode') === 'enabled';

    // Set initial mode based on user preference
    if (isDarkMode) {
        enableDarkMode();
        toggleSwitch.checked = true;
    }

    // Toggle between light and dark mode on switch change
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            // If switch is checked, enable dark mode
            enableDarkMode();
        } else {
            // If switch is unchecked, disable dark mode
            disableDarkMode();
        }
    });

    function enableDarkMode() {
        nav.classList.add('dark-mode');
        // side.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        for(let l=0;l<playlist.length;l++){
            playlist[l].classList.add('dark-mode');
        }
        for(let l=0;l<artist.length;l++){
            artist[l].classList.add('dark-mode');
        }
        contact?contact.classList.add('dark-mode'):"";
        // Save user preference to local storage
        sessionStorage.setItem('dark-mode', 'enabled');
    }
    
    function disableDarkMode() {
        nav.classList.remove('dark-mode');
        // side.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');
        for(let l=0;l<playlist.length;l++){
            playlist[l].classList.remove('dark-mode');
        }
        for(let l=0;l<artist.length;l++){
            artist[l].classList.remove('dark-mode');
        }
        // Save user preference to local storage
        contact?contact.classList.remove('dark-mode'):"";
        sessionStorage.setItem('dark-mode', 'disabled');
    }
});
