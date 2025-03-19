const delay = 0;
var muted = false;
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



const toggle_mute = () => {
    if (muted == false) {
        muted = true;
        $("#btn-mute .fa-volume-off").addClass('d-none');
        $("#btn-mute .fa-volume-xmark").removeClass('d-none');
    } else {
        muted = false;
        $("#btn-mute .fa-volume-off").removeClass('d-none');
        $("#btn-mute .fa-volume-xmark").addClass('d-none');
    }
    console.log(`Mute : ${muted}`);
}


addEventListener("keypress", (event) => {
    if (event.code == "KeyM") {
        toggle_mute();
    }
});

$("#btn-mute").on("click", function (event) {
    event.preventDefault();
    toggle_mute();
});

const play_audio = (sound) => {
    if (!muted) {
        setTimeout(function () {
            sound.play();
        }, delay);
    }
}

class aidaCountdown {
    constructor(start) {
        this.startDetails = start;
        this.startTime = luxon.DateTime.fromObject({ hours: start.time.split(":")[0], minutes: start.time.split(":")[1] });
        console.log(this.startTime.toString());
        this.timer_countdown = new easytimer.Timer();
        this.timer_countdown.addEventListener('secondsUpdated', this.countDownSecond);
        this.timer_countdown.addEventListener('targetAchieved', this.countDownAchieved);
        this.timer_countUp = new easytimer.Timer();
        this.timer_countUp.addEventListener('secondsUpdated', this.countUpSecond);
    }

    countDownSecond = (event) => {
        // console.log('countDownSecond!', this);
        const timeleft = this.timer_countdown.getTotalTimeValues().seconds;

        if (timeleft < 5 * 60) {
            timer_display = this.timer_countdown.getTimeValues().toString();
            if(muted){
                toggle_mute();
            }
            
        }

        if (timeleft === 120) {
            // setTimeout(function(){audio_m120.play();}, delay);
            console.log("2 minutes to official top");
            play_audio(audio_m120);
        } else if (timeleft === 90) {
            play_audio(audio_m90);
        } else if (timeleft === 60) {
            play_audio(audio_m60);
        } else if (timeleft === 30) {
            play_audio(audio_m30);
        } else if (timeleft === 20) {
            play_audio(audio_20);
        } else if (timeleft === 10) {
            play_audio(audio_10);
        } else if (timeleft === 5) {
            play_audio(audio_5);
        } else if (timeleft === 4) {
            play_audio(audio_4);
        } else if (timeleft === 3) {
            play_audio(audio_3);
        } else if (timeleft === 2) {
            play_audio(audio_2);
        } else if (timeleft === 1) {
            play_audio(audio_1);
        } else {
            // console.log(timeleft);
            
        }
    }

    countDownAchieved = (event) => {
        console.log('countDownAchieved!', this);
        this.timer_countUp.start();
        play_audio(audio_ot);
    }

    countUpSecond = (event) => {
        // console.log('countUpSecond!', this);
        var timeplus = this.timer_countUp.getTotalTimeValues().seconds;
        timer_display = this.timer_countUp.getTimeValues().toString()
        if (timeplus === 31) {
            play_audio(audio_start_cancelled);
            this.timer_countUp.stop();
            timer_display = '--:--:--';
            // timer.reset();
        } else if (timeplus === 30) {
            play_audio(audio_30);
        } else if (timeplus === 29) {
            play_audio(audio_29);
        } else if (timeplus === 28) {
            play_audio(audio_28);
        } else if (timeplus === 27) {
            play_audio(audio_27);
        } else if (timeplus === 26) {
            play_audio(audio_26);
        } else if (timeplus === 25) {
            play_audio(audio_25);
        } else if (timeplus === 20) {
            play_audio(audio_20);
        } else if (timeplus === 10) {
            play_audio(audio_10);
        } else if (timeplus === 9) {
            play_audio(audio_9);
        } else if (timeplus === 8) {
            play_audio(audio_8);
        } else if (timeplus === 7) {
            play_audio(audio_7);
        } else if (timeplus === 6) {
            play_audio(audio_6);
        } else if (timeplus === 5) {
            play_audio(audio_5);
        } else if (timeplus === 4) {
            play_audio(audio_4);
        } else if (timeplus === 3) {
            play_audio(audio_3);
        } else if (timeplus === 2) {
            play_audio(audio_2);
        } else if (timeplus === 1) {
            play_audio(audio_plus_1);
        } else {
            // console.log(timeplus);
        }
    }

    start() {
        const now = luxon.DateTime.now();
        var deltaT = this.startTime.diff(now, 'seconds');
        var deltaT_seconds = deltaT.values.seconds.toFixed(0);
        var deltaT_millisecs = (1000 * deltaT.values.seconds % 1).toFixed(0);
        console.log(deltaT_seconds);
        console.log(this.startTime.toString());
        console.log(now.toString());
        console.log(deltaT);
        if (deltaT_seconds > 10) {
            setTimeout(() => {
                this.timer_countdown.start({
                    countdown: true,
                    startValues: { seconds: deltaT_seconds }
                });
            }, deltaT_millisecs)
        }
    }

    cancel() {
        this.timer_countdown.stop();
        this.timer_countUp.stop();
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
setTimeout(function () {
    setInterval(display_clock, 1000);
}, ms_offset + 10) // x ms added to avoid discrepancies between clock and timers

const display_starters = function (start) {
    start._children.forEach((starter) => ( $(`#starter${starter.zone}_firstname`).html(starter.firstname) ))
                            };


//TODO:
// OK - Remplacer cdn par fichiers en cache?
// Fonction pour programmer une série de starts 
//  - heure premier départ
//  - intervalle en minutes
//  - nombre de répétitions
// OK - UI -> panneau latéral pour les paramètres + animation
// OK - Fonction pour "muter" après le dernier départ
// OK -  - Clic sur un bouton
// OK - - Clavier bluetooth? à tester comme télécommande + touche de fonction?
//  - récativer à chaque nouveau compte à rebours
// Fonction pour annuler tous les départs en lot
//  - reset
// ? Barre de progression avec nombre de départs restants
