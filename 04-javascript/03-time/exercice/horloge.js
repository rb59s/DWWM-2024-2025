const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");

setInterval(()=>{
    let time = new Date()
    console.log(time);

    let minute = time.getMinutes()

    let hourz = time.getHours()

    let secondes = time.getSeconds()
    console.log(minute, hourz, secondes);

    sec.style.rotate = secondes * 6 + "deg"
    min.style.rotate = minute * 6 + "deg"
    hour.style.rotate = hourz * 30 + "deg"
    


}, 1000)





