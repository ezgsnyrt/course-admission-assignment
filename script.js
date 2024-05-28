function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("click", function (e) {
    if (e.target.closest(".section-header")) {
        const currentCollapsible = e.target.closest(".collapsible");

        // If the element which was clicked is already active, remove the active class and return
        if (currentCollapsible.classList.contains("active")) {
            currentCollapsible.classList.remove("active");
            return;
        }

        // Remove the active class in the collapsible elements
        document.querySelectorAll(".collapsible").forEach((collapsible) => {
            collapsible.classList.remove("active");
        });

        // When clicking on a collapsible element, add or remove active class
        currentCollapsible.classList.add("active");
    }
});



