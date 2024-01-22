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
};

window.addEventListener("load", initSlider);

document.addEventListener("DOMContentLoaded", function () {
    // Fetch contributors data from the JSON file
    fetch("contributors.json")
      .then(response => response.json())
      .then(data => displayContributors(data))
      .catch(error => console.error("Error fetching contributors:", error));
  });
  
  // Function to display contributors in the HTML
  function displayContributors(contributors) {
    const contributorsList = document.getElementById("contributors-list");
  
    // Iterate through the contributors and create list items
    contributors.forEach(contributor => {
      // Fetch the GitHub user details to get the profile picture
      fetch(`https://api.github.com/users/${contributor.github}`)
        .then(response => response.json())
        .then(user => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `
            <div class="contributor-item">
              <img src="${user.avatar_url}" alt="${contributor.name}'s profile picture" class="contributor-image">
              <a href="https://github.com/${contributor.github}" target="_blank">${contributor.name}</a>
            </div>`;
          contributorsList.appendChild(listItem);
        })
        .catch(error => console.error(`Error fetching GitHub user (${contributor.github}) details:`, error));
    });
  }
  