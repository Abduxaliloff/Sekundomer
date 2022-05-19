const WatchHour = document.querySelector('.hour');
const WatchMinut = document.querySelector('.minut');
const WatchSecond = document.querySelector('.second');
const WatchStart = document.querySelector('.start');
const WatchStop = document.querySelector('.stop');
const WatchClear = document.querySelector('.clear');



WatchStart.addEventListener('click', function () {
    Interval = setInterval(() => {
        stopWatch()
    }, 100);
    
})
WatchStop.addEventListener('click', function () {
    clearInterval(Interval)
})
WatchClear.addEventListener('click', function () {
    clearInterval(Interval)
    WatchHour.textContent = "00" 
    WatchMinut.textContent = "00" 
    WatchSecond.textContent = "00"
    hisob = 0
})
        

let hisob = 0
function stopWatch() {
    hisob++
    if (hisob <= 59 ) {
        WatchSecond.innerHTML = hisob
    }
    if (hisob <= 9) {
        WatchSecond.innerHTML = "0" + hisob
        // WatchMinut.innerHTML = "0" + hisob
        // WatchHour.innerHTML = "0" + hisob
    }
    if (hisob > 59) {
        hisob = 0
        WatchSecond.innerHTML = hisob
        WatchMinut.innerHTML++
    }
    if (WatchMinut.innerHTML > 59) {
        WatchMinut.innerHTML = 0
        WatchHour.innerHTML++
    }
}
