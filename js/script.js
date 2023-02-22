document.querySelectorAll(".panel").forEach((panel) =>
    panel.addEventListener("click", (e) => handleClick(e.target))
)

function handleClick(target) {
    target.classList.toggle("clicked");
}