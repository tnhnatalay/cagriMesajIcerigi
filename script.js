let hr = document.querySelector('#hr');
let md = document.querySelector('#mn');
let sc = document.querySelector('#sc');
let msc = document.querySelector('#msc');

setInterval(() =>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    let ms = day.getMilliseconds()/2.8;
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm+(ss/60)}deg)`;
    sc.style.transform = `rotateZ(${ss+(ms/60)}deg)`;
    msc.style.transform = `rotateZ(${ms}deg)`;

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let amPm = h >= 12 ? "PM" : "AM";

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = amPm;
})

