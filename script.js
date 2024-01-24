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
  // script.js

async function fetchContributors(owner, repo) {
  try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`);
      
      if (!response.ok) {
          throw new Error(`Failed to fetch contributors for ${owner}/${repo}. Status: ${response.status}`);
      }

      const contributors = await response.json();
      return contributors;
  } catch (error) {
      console.error(`Error fetching contributors for ${owner}/${repo}:`, error);
      // You might want to handle the error or display a message to the user
      return [];
  }
}

async function displayContributors(contributors) {
  const contributorsList = document.getElementById("contributors-list");

  for (const contributor of contributors) {
      try {
          const response = await fetch(`https://api.github.com/users/${contributor.login}`);
          if (!response.ok) {
              throw new Error(`Failed to fetch GitHub user (${contributor.login}) details. Status: ${response.status}`);
          }

          const user = await response.json();

          const listItem = document.createElement("li");
          listItem.innerHTML = `
              <div class="contributor-item">
                  <img src="${user.avatar_url}" alt="${contributor.login}'s profile picture" class="contributor-image">
                  <a href="https://github.com/${contributor.login}" target="_blank">${contributor.login}</a>
              </div>`;
          contributorsList.appendChild(listItem);
      } catch (error) {
          console.error(`Error fetching GitHub user (${contributor.login}) details:`, error);
          // You might want to display an error message to the user
      }
  }
}


const owner = 'ShwetKhatri2001';
const repo = 'Swetify-Music';

fetchContributors(owner, repo)
    .then(contributors => {
        // Do something with the contributors, e.g., display them
        displayContributors(contributors);
    });
