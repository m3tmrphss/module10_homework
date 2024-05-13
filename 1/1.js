let btn = document.querySelector(`.btn`);
let icon1 = document.querySelector(`.icon1`)
let icon2 = document.querySelector(`.icon2`);

btn.addEventListener(`click`, () => {
    icon1.classList.toggle(`d-none`)
    icon2.classList.toggle(`d-none`)
})