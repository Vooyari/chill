let sec = 0;
let clearTime;
let run = true;

const startPause = document.getElementById("start-pause");
const clear = document.getElementById('stop');

function stopwatch() {
    if (run) {
        clearTime = setInterval(() => {
            sec++;
            console.log(sec + ' секунда');
        }, 1000);
        run = false;
    } else {
        console.log('Пауза');
        clearInterval(clearTime);
        run = true;
    };
};
function clearStopwatch() {
    console.log('Сброс секундомера');
    clearInterval(clearTime);
    sec = 0;
    run = true;
};

startPause.addEventListener('click', stopwatch);
clear.addEventListener('click', clearStopwatch);
