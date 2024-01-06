

const initSlider = () => {


  const imageList = document.querySelector(".slider-wrapper .center_div");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  let maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  const scrollAmount = imageList.clientWidth;

  const handleSlideButtons = () => {
    slideButtons[0].style.visibility = imageList.scrollLeft <= 0 ? "hidden" : "visible";
    slideButtons[1].style.visibility = imageList.scrollLeft >= maxScrollLeft ? "hidden" : "visible";
  };

  document.querySelector(".slider-wrapper").addEventListener("click", (event) => {
    const button = event.target.closest(".slide-button");
    if (button) {
      const direction = button.id === "prev-slide" ? -1 : 1;
      imageList.scrollBy({ left: scrollAmount * direction, behavior: "smooth" });
    }
  });

  imageList.addEventListener("scroll", handleSlideButtons);



  //remove the loader
  



};


window.addEventListener("load", initSlider);




document.addEventListener('DOMContentLoaded', function () {

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  
  // Restore scrolling when the loader disappears
  function enableScroll() {
    document.body.style.overflow = '';
  }

  function hideLoaderAndRevealContent() {
    document.querySelector('.loader-wrapper').style.display = 'none';
      document.querySelector('#content').classList.remove('hidden');
   
  }
 
  window.addEventListener("load",()=> {
    setTimeout(() => {
    hideLoaderAndRevealContent()
  
    }, 3000)
  })

});




