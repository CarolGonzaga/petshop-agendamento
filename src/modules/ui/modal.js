const modal = document.querySelector(".modal");
const openBtn = document.querySelector("aside button");
const closeBtn = document.querySelector(".modal .close");

openBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    modal.classList.add("active");
    document.body.classList.add("modal-open");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
    }
});
