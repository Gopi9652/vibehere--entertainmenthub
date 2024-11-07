// Corrected JavaScript with comments explaining changes

// Get the button element (navigation toggle button)
var navButton = document.getElementById("nav");

// Track the visibility state of the navigation menu
var a=1// 'false' means the menu is hidden initially

// Add an event listener for the button click event
navButton.addEventListener('click', function() {
    var menu = document.getElementById("hd2"); // Get the menu element

    // Toggle the menu visibility
    if (a==1) {
        menu.style.display = "block"; // Show the menu
        a=0        // Update the state to 'visible'
    } else {
        menu.style.display = "none";  // Hide the menu
        a=1       // Update the state to 'hidden'

    }
});
links=document.getElementById('#hd2 a')
links.forEach(link => {
            link.addEventListener('click', function() {
                // Remove the 'active' class from all links
                links.forEach(l => l.classList.remove('active'));

                // Add the 'active' class to the clicked link
                this.classList.add('active');
            });
        });