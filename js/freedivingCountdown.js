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

const synth = window.speechSynthesis;

const otm120 = new SpeechSynthesisUtterance("2 minutes to official top");
const otm90 = new SpeechSynthesisUtterance("1 30");
const otm60 = new SpeechSynthesisUtterance("1 minute");
const otm30 = new SpeechSynthesisUtterance("30 seconds");
const otm20 = new SpeechSynthesisUtterance("20");
const otm10 = new SpeechSynthesisUtterance("10");
const otm5 = new SpeechSynthesisUtterance("5");
const otm4 = new SpeechSynthesisUtterance("4");
const otm3 = new SpeechSynthesisUtterance("3");
const otm2 = new SpeechSynthesisUtterance("2");
const otm1 = new SpeechSynthesisUtterance("1");
const ot = new SpeechSynthesisUtterance("Official top");
const otp1 = new SpeechSynthesisUtterance("Plus 1");
const otp2 = new SpeechSynthesisUtterance("2");
const otp3 = new SpeechSynthesisUtterance("3");
const otp4 = new SpeechSynthesisUtterance("4");
const otp5 = new SpeechSynthesisUtterance("5");
const otp6 = new SpeechSynthesisUtterance("6");
const otp7 = new SpeechSynthesisUtterance("7");
const otp8 = new SpeechSynthesisUtterance("8");
const otp9 = new SpeechSynthesisUtterance("9");
const otp10 = new SpeechSynthesisUtterance("10");
const otp20 = new SpeechSynthesisUtterance("20");
const otp25 = new SpeechSynthesisUtterance("25");
const otp26 = new SpeechSynthesisUtterance("26");
const otp27 = new SpeechSynthesisUtterance("27");
const otp28 = new SpeechSynthesisUtterance("28");
const otp29 = new SpeechSynthesisUtterance("29");
const otp30 = new SpeechSynthesisUtterance("30");
const otp31 = new SpeechSynthesisUtterance("Start cancelled");

otm120.voice = synth.getVoices()[0];
otm120.pitch = 1;
otm120.rate = 1;
otm120.lang = "en-US"

otm90.voice = synth.getVoices()[0];
otm90.pitch = 1;
otm90.rate = 1;
otm90.lang = "en-US"

otm60.voice = synth.getVoices()[0];
otm60.pitch = 1;
otm60.rate = 1;
otm60.lang = "en-US"

otm30.voice = synth.getVoices()[0];
otm30.pitch = 1;
otm30.rate = 1;
otm30.lang = "en-US"

otm20.voice = synth.getVoices()[0];
otm20.pitch = 1;
otm20.rate = 1;
otm20.lang = "en-US"

otm10.voice = synth.getVoices()[0];
otm10.pitch = 1;
otm10.rate = 1;
otm10.lang = "en-US"

otm5.voice = synth.getVoices()[0];
otm5.pitch = 1;
otm5.rate = 1;
otm5.lang = "en-US"

otm4.voice = synth.getVoices()[0];
otm4.pitch = 1;
otm4.rate = 1;
otm4.lang = "en-US"

otm3.voice = synth.getVoices()[0];
otm3.pitch = 1;
otm3.rate = 1;
otm3.lang = "en-US"

otm2.voice = synth.getVoices()[0];
otm2.pitch = 1;
otm2.rate = 1;
otm2.lang = "en-US"

otm1.voice = synth.getVoices()[0];
otm1.pitch = 1;
otm1.rate = 1;
otm1.lang = "en-US"

ot.voice = synth.getVoices()[0];
ot.pitch = 1;
ot.rate = 1;
ot.lang = "en-US"

otp1.voice = synth.getVoices()[0];
otp1.pitch = 1;
otp1.rate = 1;
otp1.lang = "en-US"

otp2.voice = synth.getVoices()[0];
otp2.pitch = 1;
otp2.rate = 1;
otp2.lang = "en-US"

otp3.voice = synth.getVoices()[0];
otp3.pitch = 1;
otp3.rate = 1;
otp3.lang = "en-US"

otp4.voice = synth.getVoices()[0];
otp4.pitch = 1;
otp4.rate = 1;
otp4.lang = "en-US"

otp5.voice = synth.getVoices()[0];
otp5.pitch = 1;
otp5.rate = 1;
otp5.lang = "en-US"

otp6.voice = synth.getVoices()[0];
otp6.pitch = 1;
otp6.rate = 1;
otp6.lang = "en-US"

otp7.voice = synth.getVoices()[0];
otp7.pitch = 1;
otp7.rate = 1;
otp7.lang = "en-US"

otp8.voice = synth.getVoices()[0];
otp8.pitch = 1;
otp8.rate = 1;
otp8.lang = "en-US"

otp9.voice = synth.getVoices()[0];
otp9.pitch = 1;
otp9.rate = 1;
otp9.lang = "en-US"

otp10.voice = synth.getVoices()[0];
otp10.pitch = 1;
otp10.rate = 1;
otp10.lang = "en-US"

otp20.voice = synth.getVoices()[0];
otp20.pitch = 1;
otp20.rate = 1;
otp20.lang = "en-US"

otp25.voice = synth.getVoices()[0];
otp25.pitch = 1;
otp25.rate = 1;
otp25.lang = "en-US"

otp26.voice = synth.getVoices()[0];
otp26.pitch = 1;
otp26.rate = 1;
otp26.lang = "en-US"

otp27.voice = synth.getVoices()[0];
otp27.pitch = 1;
otp27.rate = 1;
otp27.lang = "en-US"

otp28.voice = synth.getVoices()[0];
otp28.pitch = 1;
otp28.rate = 1;
otp28.lang = "en-US"

otp29.voice = synth.getVoices()[0];
otp29.pitch = 1;
otp29.rate = 1;
otp29.lang = "en-US"

otp30.voice = synth.getVoices()[0];
otp30.pitch = 1;
otp30.rate = 1;
otp30.lang = "en-US"

otp31.voice = synth.getVoices()[0];
otp31.pitch = 1;
otp31.rate = 1;
otp31.lang = "en-US"

// const speak = function (text) {
//     if (!muted) {
//     let utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "en-US";
//     window.speechSynthesis.cancel();
//     speechSynthesis.speak(utterance);
//     }
// }

var timer = new easytimer.Timer();

timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
    var timeplus = timer.getTotalTimeValues().seconds;
    if (timeplus === 31) {
        synth.cancel();
        synth.speak(otp31);
        timer.stop();
        // timer.reset();
    } else if (timeplus === 30) {
        synth.cancel();
        synth.speak(otp30)
    } else if (timeplus === 29) {
        synth.cancel();
        synth.speak(otp29)
    } else if (timeplus === 28) {
        synth.cancel();
        synth.speak(otp28)
    } else if (timeplus === 27) {
        synth.cancel();
        synth.speak(otp27)
    } else if (timeplus === 26) {
        synth.cancel();
        synth.speak(otp26)
    } else if (timeplus === 25) {
        synth.cancel();
        synth.speak(otp25)
    } else if (timeplus === 20) {
        synth.cancel();
        synth.speak(otp20)
    } else if (timeplus === 10) {
        synth.cancel();
        synth.speak(otp10)
    } else if (timeplus === 9) {
        synth.cancel();
        synth.speak(otp9)
    } else if (timeplus === 8) {
        synth.cancel();
        synth.speak(otp8)
    } else if (timeplus === 7) {
        synth.cancel();
        synth.speak(otp7)
    } else if (timeplus === 6) {
        synth.cancel();
        synth.speak(otp6)
    } else if (timeplus === 5) {
        synth.cancel();
        synth.speak(otp5)
    } else if (timeplus === 4) {
        synth.cancel();
        synth.speak(otp4)
    } else if (timeplus === 3) {
        synth.cancel();
        synth.speak(otp3)
    } else if (timeplus === 2) {
        synth.cancel();
        synth.speak(otp2)
    } else if (timeplus === 1) {
        synth.cancel();
        synth.speak(otp1)
    } else {
        console.log(timeplus);
    }
});

var timer_countdown = new easytimer.Timer();

timer_countdown.addEventListener('secondsUpdated', function (e) {
    $('#countdownExample .values').html(timer_countdown.getTimeValues().toString());
    var timeleft = timer_countdown.getTotalTimeValues().seconds;
    if (timeleft === 120) {
        synth.cancel();
        synth.speak(otm120);
        console.log("2 minutes to official top");
    } else if (timeleft === 90) {
        synth.cancel();
        synth.speak(otm90);
    } else if (timeleft === 60) {
        synth.cancel();
        synth.speak(otm60);
    } else if (timeleft === 30) {
        synth.cancel();
        synth.speak(otm30)
    } else if (timeleft === 20) {
        synth.cancel();
        synth.speak(otm20)
    } else if (timeleft === 10) {
        synth.cancel();
        synth.speak(otm10)
    } else if (timeleft === 5) {
        synth.cancel();
        synth.speak(otm5)
    } else if (timeleft === 4) {
        synth.cancel();
        synth.speak(otm4)
    } else if (timeleft === 3) {
        synth.cancel();
        synth.speak(otm3)
    } else if (timeleft === 2) {
        synth.cancel();
        synth.speak(otm2)
    } else if (timeleft === 1) {
        synth.cancel();
        synth.speak(otm1)
    } else {
        console.log(timeleft);
    }

});


timer_countdown.addEventListener('targetAchieved', function (e) {
    $('#countdownExample .values').html('Official top');
    // speak('official top')
    synth.cancel();
    synth.speak(ot);
    timer.start();
});

const freedivingCountdown = function () {
    timer_countdown.start({ countdown: true, startValues: { minutes: 2, seconds: 10 } });
}

freedivingCountdown();
