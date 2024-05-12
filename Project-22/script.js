const submitBtnE1 = document.querySelector(".submitBtn")
const okBtnE1 = document.querySelector(".okBtn")
const popUpE1 = document.querySelector(".pop-up")

submitBtnE1.addEventListener("click", () => {
    popUpE1.classList.add("pop-up-open")
});

okBtnE1.addEventListener("click", () => {
    popUpE1.classList.add("pop-up-open")
});
