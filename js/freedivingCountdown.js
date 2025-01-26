var muted = false;
const delay = 300;

const otm120 = new Audio(src = "audio/otm120.mp3", type = "audio/mp3")
const otm90 = new Audio(src = "audio/otm90.mp3", type = "audio/mp3")
const otm60 = new Audio(src = "audio/otm60.mp3", type = "audio/mp3")
const otm30 = new Audio(src = "audio/otm30.mp3", type = "audio/mp3")
const otm20 = new Audio(src = "audio/otm20.mp3", type = "audio/mp3")
const otm10 = new Audio(src = "audio/otm10.mp3", type = "audio/mp3")
const otm5 = new Audio(src = "audio/otm5.mp3", type = "audio/mp3")
const otm4 = new Audio(src = "audio/otm4.mp3", type = "audio/mp3")
const otm3 = new Audio(src = "audio/otm3.mp3", type = "audio/mp3")
const otm2 = new Audio(src = "audio/otm2.mp3", type = "audio/mp3")
const otm1 = new Audio(src = "audio/otm1.mp3", type = "audio/mp3")
const ot = new Audio(src = "audio/ot.mp3", type = "audio/mp3")
const otp1 = new Audio(src = "audio/otp1.mp3", type = "audio/mp3")
const otp2 = new Audio(src = "audio/otp2.mp3", type = "audio/mp3")
const otp3 = new Audio(src = "audio/otp3.mp3", type = "audio/mp3")
const otp4 = new Audio(src = "audio/otp4.mp3", type = "audio/mp3")
const otp5 = new Audio(src = "audio/otp5.mp3", type = "audio/mp3")
const otp6 = new Audio(src = "audio/otp6.mp3", type = "audio/mp3")
const otp7 = new Audio(src = "audio/otp7.mp3", type = "audio/mp3")
const otp8 = new Audio(src = "audio/otp8.mp3", type = "audio/mp3")
const otp9 = new Audio(src = "audio/otp9.mp3", type = "audio/mp3")
const otp10 = new Audio(src = "audio/otp10.mp3", type = "audio/mp3")
const otp20 = new Audio(src = "audio/otp20.mp3", type = "audio/mp3")
const otp25 = new Audio(src = "audio/otp25.mp3", type = "audio/mp3")
const otp26 = new Audio(src = "audio/otp26.mp3", type = "audio/mp3")
const otp27 = new Audio(src = "audio/otp27.mp3", type = "audio/mp3")
const otp28 = new Audio(src = "audio/otp28.mp3", type = "audio/mp3")
const otp29 = new Audio(src = "audio/otp29.mp3", type = "audio/mp3")
const otp30 = new Audio(src = "audio/otp30.mp3", type = "audio/mp3")
const otp31 = new Audio(src = "audio/otp31.mp3", type = "audio/mp3")

otm120.preload = 'auto';
otm120.play();
otm120.pause();

otm90.preload = 'auto';
otm60.preload = 'auto';
otm30.preload = 'auto';
otm20.preload = 'auto';
otm10.preload = 'auto';
otm5.preload = 'auto';
otm4.preload = 'auto';
otm3.preload = 'auto';
otm2.preload = 'auto';
otm1.preload = 'auto';
ot.preload = 'auto';
otp1.preload = 'auto';
otp2.preload = 'auto';
otp3.preload = 'auto';
otp4.preload = 'auto';
otp5.preload = 'auto';
otp6.preload = 'auto';

otp7.preload = 'auto';
otp7.play();
otp7.pause();

otp8.preload = 'auto';
otp9.preload = 'auto';
otp10.preload = 'auto';
otp20.preload = 'auto';
otp25.preload = 'auto';
otp26.preload = 'auto';
otp27.preload = 'auto';
otp28.preload = 'auto';
otp29.preload = 'auto';
otp30.preload = 'auto';
otp31.preload = 'auto';

var timer = new easytimer.Timer();

timer.addEventListener('secondsUpdated', function (e) {
    // $('#basicUsage').html(timer.getTimeValues().toString());
    // Add timeout delay to refresh display?
    setTimeout(function () {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        var minutes_str;
        var seconds_str;

        if (minutes<10){
            minutes_str = `0${minutes}`;
        } else {
            minutes_str = `${minutes}`;
        }

        if (seconds<10){
            seconds_str = `0${seconds}`;
        } else {
            seconds_str = `${seconds}`;
        }
        const time = `${hours}:${minutes_str}:${seconds_str}`;
        $('.clock').html(time);
        $('.countdown').html(timer.getTimeValues().toString());

    }, delay);

    var timeplus = timer.getTotalTimeValues().seconds;
    if (timeplus === 31) {
        otp31.play();
        timer.stop();
        // timer.reset();
    } else if (timeplus === 30) {
        otp30.play();
    } else if (timeplus === 29) {
        otp29.play();
    } else if (timeplus === 28) {
        otp28.play();
    } else if (timeplus === 27) {
        otp27.play();
    } else if (timeplus === 26) {
        otp26.play();
    } else if (timeplus === 25) {
        otp25.play();
    } else if (timeplus === 20) {
        otp20.play();
    } else if (timeplus === 10) {
        otp10.play();
    } else if (timeplus === 9) {
        otp9.play();
    } else if (timeplus === 8) {
        otp8.play();
    } else if (timeplus === 7) {
        otp7.play();
    } else if (timeplus === 6) {
        otp6.play();
    } else if (timeplus === 5) {
        otp5.play();
    } else if (timeplus === 4) {
        otp4.play();
    } else if (timeplus === 3) {
        otp3.play();
    } else if (timeplus === 2) {
        otp2.play();
    } else if (timeplus === 1) {
        otp1.play();
    } else {
        console.log(timeplus);
    }
});

var timer_countdown = new easytimer.Timer();

timer_countdown.addEventListener('secondsUpdated', function (e) {
    var timeleft = timer_countdown.getTotalTimeValues().seconds;

    setTimeout(function () {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        var minutes_str;
        var seconds_str;
        
        if (minutes<10){
            minutes_str = `0${minutes}`;
        } else {
            minutes_str = `${minutes}`;
        }

        if (seconds<10){
            seconds_str = `0${seconds}`;
        } else {
            seconds_str = `${seconds}`;
        }
        const time = `${hours}:${minutes_str}:${seconds_str}`;

        $('.clock').html(time);
        $('.countdown').html(timer_countdown.getTimeValues().toString());
    }, delay);

    if (timeleft === 120) {
        otm120.play();
        console.log("2 minutes to official top");
    } else if (timeleft === 90) {
        otm90.play();
    } else if (timeleft === 60) {
        otm60.play();
    } else if (timeleft === 30) {
        otm30.play();
    } else if (timeleft === 20) {
        otm20.play();
    } else if (timeleft === 10) {
        otm10.play();
    } else if (timeleft === 5) {
        otm5.play();
    } else if (timeleft === 4) {
        otm4.play();
    } else if (timeleft === 3) {
        otm3.play();
    } else if (timeleft === 2) {
        otm2.play();
    } else if (timeleft === 1) {
        otm1.play();
    } else {
        console.log(timeleft);
    }
});


timer_countdown.addEventListener('targetAchieved', function (e) {
    $('#countdownExample .values').html('Official top');
    // speak('official top')
    ot.play();
    timer.start();
});

const freedivingCountdown = function () {
    timer_countdown.start({ countdown: true, startValues: { minutes: 2, seconds: 10 } });
}

freedivingCountdown();
