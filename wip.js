window.addEventListener("load", () => {
    const container = document.querySelector(".wip-container");
    container.style.transform = "scale(1.05)";
    setTimeout(() => {
        container.style.transform = "scale(1)";
        container.style.transition = "transform 0.6s ease";
    }, 200);

    
});
