document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".sidebar-toggle");
    const outerSidebar = document.querySelector(".outer-sidebar");

    function showOverlay() {
        document.body.classList.add('overlay-visible');
    }

    function hideOverlay() {
        document.body.classList.remove('overlay-visible');
    }

    toggleBtn.addEventListener("click", function (event) {
        console.log("btn clicked");
        event.stopPropagation();
        outerSidebar.classList.toggle("show-sidebar");

        if (outerSidebar.classList.contains("show-sidebar")) {
            showOverlay();
            document.addEventListener("click", closeSidebarOnClickOutside);
        } else {
            hideOverlay();
            document.removeEventListener("click", closeSidebarOnClickOutside);
        }
    });

    function closeSidebarOnClickOutside(event) {
        if (!outerSidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
            outerSidebar.classList.remove("show-sidebar");
            hideOverlay();
            document.removeEventListener("click", closeSidebarOnClickOutside);
        }
    }

    const sidebarAElements = document.querySelectorAll(".links a");
    sidebarAElements.forEach(aElement => {
        aElement.addEventListener("click", function () {
            outerSidebar.classList.remove("show-sidebar");
            hideOverlay();
            document.removeEventListener("click", closeSidebarOnClickOutside);
        });
    });
});
