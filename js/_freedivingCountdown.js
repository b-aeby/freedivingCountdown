var muted = false;
const delay = 300;
let not_started = true;

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


// Declaration
class aidaCountdown {
    constructor(year, month, day, hour, minute, second) {
        this.startTime = new Date(year, month, day, hour, minute, second);
        console.log(this.startTime.toString());
        this.timer = new easytimer.Timer();
        this.timer_countdown = new easytimer.Timer();
        
        this.timer.addEventListener('secondsUpdated', function (event) {
            // $('#basicUsage').html(timer.getTimeValues().toString());
            // Add timeout delay to refresh display?
            console.log(this);

            // setTimeout(function () {
            //     $('.countdown').html(this.getTimeValues().toString());

            // }, delay);

            // var timeplus = this.getTotalTimeValues().seconds;
            // if (timeplus === 31) {
            //     audio_start_cancelled.play();
            //     this.timer.stop();
            //     // timer.reset();
            // } else if (timeplus === 30) {
            //     audio_30.play();
            // } else if (timeplus === 29) {
            //     audio_29.play();
            // } else if (timeplus === 28) {
            //     audio_28.play();
            // } else if (timeplus === 27) {
            //     audio_27.play();
            // } else if (timeplus === 26) {
            //     audio_26.play();
            // } else if (timeplus === 25) {
            //     audio_25.play();
            // } else if (timeplus === 20) {
            //     audio_20.play();
            // } else if (timeplus === 10) {
            //     audio_10.play();
            // } else if (timeplus === 9) {
            //     audio_9.play();
            // } else if (timeplus === 8) {
            //     audio_8.play();
            // } else if (timeplus === 7) {
            //     audio_7.play();
            // } else if (timeplus === 6) {
            //     audio_6.play();
            // } else if (timeplus === 5) {
            //     audio_5.play();
            // } else if (timeplus === 4) {
            //     audio_4.play();
            // } else if (timeplus === 3) {
            //     audio_3.play();
            // } else if (timeplus === 2) {
            //     audio_2.play();
            // } else if (timeplus === 1) {
            //     audio_plus_1.play();
            // } else {
            //     console.log(timeplus);
            // }
        });

        
        this.timer_countdown.addEventListener('secondsUpdated', function (event) {
            
            console.log(this);

            // var timeleft = this.getTotalTimeValues().seconds;

            // setTimeout(function () {
            //     $('.countdown').html(this.getTimeValues().toString());
            // }, delay);

            // if (timeleft === 120) {
            //     audio_m120.play();
            //     console.log("2 minutes to official top");
            // } else if (timeleft === 90) {
            //     audio_m90.play();
            // } else if (timeleft === 60) {
            //     audio_m60.play();
            // } else if (timeleft === 30) {
            //     audio_m30.play();
            // } else if (timeleft === 20) {
            //     audio_20.play();
            // } else if (timeleft === 10) {
            //     audio_10.play();
            // } else if (timeleft === 5) {
            //     audio_5.play();
            // } else if (timeleft === 4) {
            //     audio_4.play();
            // } else if (timeleft === 3) {
            //     audio_3.play();
            // } else if (timeleft === 2) {
            //     audio_2.play();
            // } else if (timeleft === 1) {
            //     audio_1.play();
            // } else {
            //     console.log(timeleft);
            // }
        });

        this.timer_countdown.addEventListener('targetAchieved', function (event) {
            $('#countdownExample .values').html('Official top');
            // speak('official top')
            audio_ot.play();
            // this.start();
        });
    }



    // Getter
    get get_startTime() {
        return this.startTime.toString();
    }

    start() {
        const now = new Date();
        var deltaT = this.startTime - now;
        console.log(this.startTime.toString());
        console.log(now.toString());
        console.log(deltaT.toString());
        var diff_as_date = new Date(deltaT);
        this.timer_countdown.start({
            countdown: true,
            startValues: {
                hours: diff_as_date.getHours(),
                minutes: diff_as_date.getMinutes(),
                seconds: diff_as_date.getSeconds()
            }
        });
    }
}



var timer = new easytimer.Timer();

timer.addEventListener('secondsUpdated', function (e) {
    // $('#basicUsage').html(timer.getTimeValues().toString());
    // Add timeout delay to refresh display?
    setTimeout(function () {
        $('.countdown').html(timer.getTimeValues().toString());

    }, delay);

    var timeplus = timer.getTotalTimeValues().seconds;
    if (timeplus === 31) {
        audio_start_cancelled.play();
        timer.stop();
        // timer.reset();
    } else if (timeplus === 30) {
        audio_30.play();
    } else if (timeplus === 29) {
        audio_29.play();
    } else if (timeplus === 28) {
        audio_28.play();
    } else if (timeplus === 27) {
        audio_27.play();
    } else if (timeplus === 26) {
        audio_26.play();
    } else if (timeplus === 25) {
        audio_25.play();
    } else if (timeplus === 20) {
        audio_20.play();
    } else if (timeplus === 10) {
        audio_10.play();
    } else if (timeplus === 9) {
        audio_9.play();
    } else if (timeplus === 8) {
        audio_8.play();
    } else if (timeplus === 7) {
        audio_7.play();
    } else if (timeplus === 6) {
        audio_6.play();
    } else if (timeplus === 5) {
        audio_5.play();
    } else if (timeplus === 4) {
        audio_4.play();
    } else if (timeplus === 3) {
        audio_3.play();
    } else if (timeplus === 2) {
        audio_2.play();
    } else if (timeplus === 1) {
        audio_plus_1.play();
    } else {
        console.log(timeplus);
    }
});

var timer_countdown = new easytimer.Timer();

timer_countdown.addEventListener('secondsUpdated', function (e) {
    var timeleft = timer_countdown.getTotalTimeValues().seconds;

    setTimeout(function () {
        $('.countdown').html(timer_countdown.getTimeValues().toString());
    }, delay);

    if (timeleft === 120) {
        audio_m120.play();
        console.log("2 minutes to official top");
    } else if (timeleft === 90) {
        audio_m90.play();
    } else if (timeleft === 60) {
        audio_m60.play();
    } else if (timeleft === 30) {
        audio_m30.play();
    } else if (timeleft === 20) {
        audio_20.play();
    } else if (timeleft === 10) {
        audio_10.play();
    } else if (timeleft === 5) {
        audio_5.play();
    } else if (timeleft === 4) {
        audio_4.play();
    } else if (timeleft === 3) {
        audio_3.play();
    } else if (timeleft === 2) {
        audio_2.play();
    } else if (timeleft === 1) {
        audio_1.play();
    } else {
        console.log(timeleft);
    }
});


timer_countdown.addEventListener('targetAchieved', function (e) {
    $('#countdownExample .values').html('Official top');
    // speak('official top')
    audio_ot.play();
    timer.start();
});

// const freedivingCountdown = function (sec) {
//     timer_countdown.start({ countdown: true, startValues: { minutes: 2, seconds: 60 - sec } });
// }




function display_clock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    var minutes_str;
    var seconds_str;

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
    const time = `${hours}:${minutes_str}:${seconds_str}`;

    setTimeout(function () {
        $('.clock').html(time);
    }, delay)

    // if (not_started) {
    //     freedivingCountdown(seconds);
    //     not_started = false;
    // }


}

setInterval(display_clock, 1000);