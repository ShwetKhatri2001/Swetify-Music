const initSlider = () => {
  
    const imageList = document.querySelector(".slider-wrapper .center_div");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    

    slideButtons.forEach(button => {
        button.addEventListener("click",()=>{
            const direction = button.id === "prev-slide"? -1: 1;
            const scrollAmount = imageList.clientWidth*direction;
            imageList.scrollBy({left:scrollAmount, behaviour:"smooth"});
        })
    })

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft? "none" : "block";
    }
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();  
    });
}

window.addEventListener("load",initSlider);