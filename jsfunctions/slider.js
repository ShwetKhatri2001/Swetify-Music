function handleSlider(direction) {
    const prevButton = document.getElementById('prev-slide');
      const nextButton = document.getElementById('next-slide');
      const slider = document.getElementById('centerdiv');
      const scrollAmount = 300; // Adjust as needed
     
      if (direction === 'next') {
          slider.scrollLeft += scrollAmount;
      } else if (direction === 'prev') {
          slider.scrollLeft -= scrollAmount;
      }
      prevButton.style.display = slider.scrollLeft > 0 ? 'block' : 'none';
      nextButton.style.display = slider.scrollLeft < (slider.scrollWidth - slider.clientWidth) ? 'block' : 'none';
  }

  // Attach event listeners to buttons
  document.getElementById('prev-slide').addEventListener('click', function () {
      handleSlider('prev');
  });

  document.getElementById('next-slide').addEventListener('click', function () {
      handleSlider('next');
  });