const circles = document.querySelectorAll(".circle");
const description = document.querySelector("textarea");

circles.forEach(circle => {
    circle.addEventListener("click", () => {
        const color = circle.classList[1];
        description.style.borderColor = color;
    });
});
