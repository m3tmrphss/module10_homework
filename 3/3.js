let input = document.querySelector(`.form-control`);
let btn1 = document.querySelector(`.button1`);
let btn2 = document.querySelector(`.button2`);
let result = document.querySelector(`.result`);

let socket = new WebSocket('wss://echo-ws-service.herokuapp.com')

btn1.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    result.innerHTML +=`<div class="message">${input.value}</div>`;
    setTimeout(() => {
        socket.send(input.value)
        result.innerHTML += `<div class="message message-server">${input.value}</div>`   
    }, 700)
    setTimeout(() => {
        input.value = ``
    }, 701)   
    
});

btn2.addEventListener(`click`, (e) => {
    e.preventDefault();
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((pos) => {
            result.innerHTML += `<div class="message"><a href="https://www.openstreetmap.org/#map=18/${pos.coords.latitude}/${pos.coords.longitude}">Гео-локация</a></div>`
            socket.send(pos.coords.latitude, pos.coords.longitude)
        })
    } else {
        result.innerHTML += `<div class="message">Ошибка!</div>`
    }
})