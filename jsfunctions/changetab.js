function changeTab(clickedTab, functionName) {
    // Remove 'active' class from all tabs
    var tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(function (tab) {
      tab.classList.remove('active');
    });
    // Add 'active' class to the clicked tab
    clickedTab.classList.add('active');
    // Call the corresponding function
    window[functionName]();
  }