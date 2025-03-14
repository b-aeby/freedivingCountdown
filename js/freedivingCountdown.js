var muted = false;
const delay = 150;

var timer_display = '--:--:--';

const audio_m120 = new Audio(src = "audio/otm120.mp3", type = "audio/mp3")
const audio_m90 = new Audio(src = "audio/otm90.mp3", type = "audio/mp3")
const audio_m60 = new Audio(src = "audio/otm60.mp3", type = "audio/mp3")
const audio_m30 = new Audio(src = "audio/otm30.mp3", type = "audio/mp3")
const audio_ot = new Audio(src = "audio/ot.mp3", type = "audio/mp3")
const audio_plus_1 = new Audio(src = "audio/plus_1.mp3", type = "audio/mp3")
const audio_start_cancelled = new Audio(src = "audio/start_cancelled.mp3", type = "audio/mp3")

const audio_1 = new Audio(src = "audio/1.mp3", type = "audio/mp3")
const audio_2 = new Audio(src = "audio/2.mp3", type = "audio/mp3")
const audio_3 = new Audio(src = "audio/3.mp3", type = "audio/mp3")
const audio_4 = new Audio(src = "audio/4.mp3", type = "audio/mp3")
const audio_5 = new Audio(src = "audio/5.mp3", type = "audio/mp3")
const audio_6 = new Audio(src = "audio/6.mp3", type = "audio/mp3")
const audio_7 = new Audio(src = "audio/7.mp3", type = "audio/mp3")
const audio_8 = new Audio(src = "audio/8.mp3", type = "audio/mp3")
const audio_9 = new Audio(src = "audio/9.mp3", type = "audio/mp3")
const audio_10 = new Audio(src = "audio/10.mp3", type = "audio/mp3")
const audio_20 = new Audio(src = "audio/20.mp3", type = "audio/mp3")
const audio_25 = new Audio(src = "audio/25.mp3", type = "audio/mp3")
const audio_26 = new Audio(src = "audio/26.mp3", type = "audio/mp3")
const audio_27 = new Audio(src = "audio/27.mp3", type = "audio/mp3")
const audio_28 = new Audio(src = "audio/28.mp3", type = "audio/mp3")
const audio_29 = new Audio(src = "audio/29.mp3", type = "audio/mp3")
const audio_30 = new Audio(src = "audio/30.mp3", type = "audio/mp3")

audio_m120.preload = 'auto';
audio_m120.play();
audio_m120.pause();

audio_m90.preload = 'auto';
audio_m60.preload = 'auto';
audio_m30.preload = 'auto';
audio_ot.preload = 'auto';
audio_plus_1.preload = 'auto';
audio_start_cancelled.preload = 'auto';

audio_1.preload = 'auto';
audio_2.preload = 'auto';
audio_3.preload = 'auto';
audio_4.preload = 'auto';
audio_5.preload = 'auto';
audio_6.preload = 'auto';
audio_7.preload = 'auto';
audio_8.preload = 'auto';
audio_9.preload = 'auto';
audio_10.preload = 'auto';
audio_20.preload = 'auto';
audio_25.preload = 'auto';
audio_26.preload = 'auto';
audio_27.preload = 'auto';
audio_28.preload = 'auto';
audio_29.preload = 'auto';
audio_30.preload = 'auto';

class aidaCountdown {
    constructor(year, month, day, hour, minute, second) {
        this.startTime = new Date(year, month, day, hour, minute, second);
        console.log(this.startTime.toString());
        this.timer_countdown = new easytimer.Timer();
        this.timer_countdown.addEventListener('secondsUpdated', this.countDownSecond);
        this.timer_countdown.addEventListener('targetAchieved', this.countDownAchieved);
        this.timer_countUp = new easytimer.Timer();
        this.timer_countUp.addEventListener('secondsUpdated', this.countUpSecond);
    }

    countDownSecond = (event) => {
        console.log('countDownSecond!', this);
        const timeleft = this.timer_countdown.getTotalTimeValues().seconds;
        
        if (timeleft < 6*60) {
            timer_display = this.timer_countdown.getTimeValues().toString();
        }

        if (timeleft === 120) {
            setTimeout(function(){audio_m120.play();}, delay);
            console.log("2 minutes to official top");
        } else if (timeleft === 90) {
            setTimeout(function(){audio_m90.play();}, delay);
        } else if (timeleft === 60) {
            setTimeout(function(){audio_m60.play();}, delay);
        } else if (timeleft === 30) {
            setTimeout(function(){audio_m30.play();}, delay);
        } else if (timeleft === 20) {
            setTimeout(function(){audio_20.play();}, delay);
        } else if (timeleft === 10) {
            setTimeout(function(){audio_10.play();}, delay);
        } else if (timeleft === 5) {
            setTimeout(function(){audio_5.play();}, delay);
        } else if (timeleft === 4) {
            setTimeout(function(){audio_4.play();}, delay);
        } else if (timeleft === 3) {
            setTimeout(function(){audio_3.play();}, delay);
        } else if (timeleft === 2) {
            setTimeout(function(){audio_2.play();}, delay);
        } else if (timeleft === 1) {
            setTimeout(function(){audio_1.play();}, delay);
        } else {
            console.log(timeleft);
        }
    }

    countDownAchieved = (event) => {
        console.log('countDownAchieved!', this);
        this.timer_countUp.start();
        setTimeout(function(){audio_ot.play();}, delay);     
    }

    countUpSecond = (event) => {
        console.log('countUpSecond!', this);
        var timeplus = this.timer_countUp.getTotalTimeValues().seconds;
        timer_display = this.timer_countUp.getTimeValues().toString()
        if (timeplus === 31) {
            setTimeout(function(){audio_start_cancelled.play();}, delay);
            this.timer_countUp.stop();
            timer_display = '--:--:--';
            // timer.reset();
        } else if (timeplus === 30) {
            setTimeout(function(){audio_30.play();}, delay);
        } else if (timeplus === 29) {
            setTimeout(function(){audio_29.play();}, delay);
        } else if (timeplus === 28) {
            setTimeout(function(){audio_28.play();}, delay);
        } else if (timeplus === 27) {
            setTimeout(function(){audio_27.play();}, delay);
        } else if (timeplus === 26) {
            setTimeout(function(){audio_26.play();}, delay);
        } else if (timeplus === 25) {
            setTimeout(function(){audio_25.play();}, delay);
        } else if (timeplus === 20) {
            setTimeout(function(){audio_20.play();}, delay);
        } else if (timeplus === 10) {
            setTimeout(function(){audio_10.play();}, delay);
        } else if (timeplus === 9) {
            setTimeout(function(){audio_9.play();}, delay);
        } else if (timeplus === 8) {
            setTimeout(function(){audio_8.play();}, delay);
        } else if (timeplus === 7) {
            setTimeout(function(){audio_7.play();}, delay);
        } else if (timeplus === 6) {
            setTimeout(function(){audio_6.play();}, delay);
        } else if (timeplus === 5) {
            setTimeout(function(){audio_5.play();}, delay);
        } else if (timeplus === 4) {
            setTimeout(function(){audio_4.play();}, delay);
        } else if (timeplus === 3) {
            setTimeout(function(){audio_3.play();}, delay);
        } else if (timeplus === 2) {
            setTimeout(function(){audio_2.play();}, delay);
        } else if (timeplus === 1) {
            setTimeout(function(){audio_plus_1.play();}, delay);
        } else {
            console.log(timeplus);
        }
    }

    start() {
        const now = new Date();
        var deltaT = this.startTime - now;
        console.log(this.startTime.toString());
        console.log(now.toString());
        console.log(deltaT.toString());
        var diff_as_date = new Date(deltaT);
        setTimeout(() => {
            this.timer_countdown.start({
                countdown: true,
                startValues: {
                    hours: diff_as_date.getHours(),
                    minutes: diff_as_date.getMinutes(),
                    seconds: diff_as_date.getSeconds()
                }
            });
        }, diff_as_date.getMilliseconds())
        
    }
}

function display_clock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    var minutes_str;
    var seconds_str;

    if (hours < 10) {
        hours_str = `0${hours}`;
    } else {
        hours_str = `${hours}`;
    }

    if (minutes < 10) {
        minutes_str = `0${minutes}`;
    } else {
        minutes_str = `${minutes}`;
    }

    if (seconds < 10) {
        seconds_str = `0${seconds}`;
    } else {
        seconds_str = `${seconds}`;
    }
    const time = `${hours_str}:${minutes_str}:${seconds_str}`;

    $('.clock').html(time);
    $('.countdown').html(timer_display);

}

// Sync clock display on full second
var ms_offset = new Date().getMilliseconds();
setTimeout(function(){
    setInterval(display_clock, 1000);
}, ms_offset + 50) // 50 ms added to avoid discrepancies between clock and timers



//TODO:
// Remplacer cdn par fichiers en cache?
// Fonction pour programmer une série de starts 
//  - heure premier départ
//  - intervalle en minutes
//  - nombre de répétitions
// UI -> panneau latéral pour les paramètres + animation
// Fonction pour "muter" après le dernier départ
//  - Clic sur un bouton
//  - Clavier bluetooth? à tester comme télécommande + touche de fonction?
//  - récativer à chaque nouveau compte à rebours
// Fonction pour annuler tous les départs en lot
//  - reset
// Barre de progression avec nombre de départs restants