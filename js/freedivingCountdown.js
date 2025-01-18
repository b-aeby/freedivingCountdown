const official_times = ["2 minutes to official top",
    "1'30",
    "1 minute",
    "30 seconds",
    "20",
    "10",
    "5",
    "4",
    "3",
    "2",
    "1",
    "official top",
    "plus 1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "20",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "start cancelled"]

var muted = false;

const speak = function (text) {
    if (!muted) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
    }
}

var timer = new easytimer.Timer();

timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
    var timeplus = timer.getTotalTimeValues().seconds;
    if (timeplus === 31) {
        speak('start cancelled');
        timer.stop();
        // timer.reset();
    } else if (timeplus === 30) {
        speak('30')
    } else if (timeplus === 29) {
        speak('29')
    } else if (timeplus === 28) {
        speak('28')
    } else if (timeplus === 27) {
        speak('27')
    } else if (timeplus === 26) {
        speak('26')
    } else if (timeplus === 25) {
        speak('25')
    } else if (timeplus === 20) {
        speak('20')
    } else if (timeplus === 10) {
        speak('10')
    } else if (timeplus === 9) {
        speak('9')
    } else if (timeplus === 8) {
        speak('8')
    } else if (timeplus === 7) {
        speak('7')
    } else if (timeplus === 6) {
        speak('6')
    } else if (timeplus === 5) {
        speak('5')
    } else if (timeplus === 4) {
        speak('4')
    } else if (timeplus === 3) {
        speak('3')
    } else if (timeplus === 2) {
        speak('2')
    } else if (timeplus === 1) {
        speak('plus 1')
    } else {
        console.log(timeplus);
    }
});

var timer_countdown = new easytimer.Timer();

timer_countdown.addEventListener('secondsUpdated', function (e) {
    $('#countdownExample .values').html(timer_countdown.getTimeValues().toString());
    var timeleft = timer_countdown.getTotalTimeValues().seconds;
    if (timeleft === 120) {
        speak('2 minutes to official top');
        console.log("2 minutes to official top");
    } else if (timeleft === 90) {
        speak('1 30');
    } else if (timeleft === 60) {
        speak('1 minute');
    } else if (timeleft === 30) {
        speak('30 seconds')
    } else if (timeleft === 20) {
        speak('20')
    } else if (timeleft === 10) {
        speak('10')
    } else if (timeleft === 5) {
        speak('5')
    } else if (timeleft === 4) {
        speak('4')
    } else if (timeleft === 3) {
        speak('3')
    } else if (timeleft === 2) {
        speak('2')
    } else if (timeleft === 1) {
        speak('1')
    } else {
        console.log(timeleft);
    }

});


timer_countdown.addEventListener('targetAchieved', function (e) {
    $('#countdownExample .values').html('Official top');
    speak('official top')
    timer.start();
});

const freedivingCountdown = function () {
    timer_countdown.start({ countdown: true, startValues: { minutes: 2, seconds: 10 } });
}

freedivingCountdown();