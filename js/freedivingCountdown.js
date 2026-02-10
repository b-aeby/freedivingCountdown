const delay = 0;
var muted = false;
var timer_display = '--:--:--';
var displayedStartId;

const audio_wn = new Audio(src = "audio/whiteNoise_3s.mp3", type = "audio/mp3")
const audio_m5min = new Audio(src = "audio/otm5min.mp3", type = "audio/mp3")
const audio_m4min = new Audio(src = "audio/otm4min.mp3", type = "audio/mp3")
const audio_m3min = new Audio(src = "audio/otm3min.mp3", type = "audio/mp3")
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

// audio_m5min.preload = 'auto';
// audio_m4min.preload = 'auto';
// audio_m3min.preload = 'auto';
// audio_m120.preload = 'auto';
// audio_m90.preload = 'auto';
// audio_m60.preload = 'auto';
// audio_m30.preload = 'auto';
// audio_ot.preload = 'auto';
// audio_plus_1.preload = 'auto';
// audio_start_cancelled.preload = 'auto';

// audio_1.preload = 'auto';
// audio_2.preload = 'auto';
// audio_3.preload = 'auto';
// audio_4.preload = 'auto';
// audio_5.preload = 'auto';
// audio_6.preload = 'auto';
// audio_7.preload = 'auto';
// audio_8.preload = 'auto';
// audio_9.preload = 'auto';
// audio_10.preload = 'auto';
// audio_20.preload = 'auto';
// audio_25.preload = 'auto';
// audio_26.preload = 'auto';
// audio_27.preload = 'auto';
// audio_28.preload = 'auto';
// audio_29.preload = 'auto';
// audio_30.preload = 'auto';

// Charger tous les fichiers audio au démarrage
function preloadAudio() {
    [audio_wn, audio_m5min, audio_m4min, audio_m3min, audio_m120, audio_m90, audio_m60, audio_m30, audio_ot, audio_plus_1, audio_start_cancelled, audio_1, audio_2, audio_3, audio_4, audio_5, audio_6, audio_7, audio_8, audio_9, audio_10, audio_20, audio_25, audio_26, audio_27, audio_28, audio_29, audio_30].forEach(audio => {
        audio.load();
    });
}

preloadAudio();

let newWorker;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(reg => {
    reg.addEventListener('updatefound', () => {
      newWorker = reg.installing;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          // New version is ready! Show the toast.
          showUpdateToast();
        }
      });
    });
  });
}

function showUpdateToast() {
  const toast = document.getElementById('update-toast');
  toast.classList.add('show');
}

function reloadPage() {
  window.location.reload();
}

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

let activeCountdown = null;

class aidaCountdown {
    constructor(start) {
        this.startDetails = start;
        const today = new Date();
        const [hours, minutes] = start.time.split(":");
        this.startTimeDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes, 0);
        console.log(this.startTimeDate.toString());
        this.timeDelta = new TimeDelta(this.startTimeDate);
        this.timerInterval = null;
        this.startAnnounced = false;
        this.hasStarted = false;
    }

    timerTick = () => {
        const deltaT = this.timeDelta.getTimeDeltaInSeconds();

        // Afficher le timer
        timer_display = this.formatTimeDelta(deltaT);

        if (deltaT > 0) {
            // AVANT le départ (deltaT > 0)
            this.hasStarted = false;
            if (deltaT <= 3 * 60) {
                // Afficher les participants 3 minutes avant
                if (muted) {
                    toggle_mute();
                }
                if (displayedStartId !== this.startDetails.id) {
                    if (this.startDetails._children) {
                        display_starters(this.startDetails);
                    }
                }
            }

            // Annonces avant le départ
            if (deltaT === 190 || deltaT === 130 || deltaT === 100 || deltaT === 70 || deltaT === 40) {
                play_audio(audio_wn);
                console.log('WN');
            } else if (deltaT === 180) {
                play_audio(audio_m3min);
            } else if (deltaT === 120) {
                play_audio(audio_m120);
            } else if (deltaT === 90) {
                play_audio(audio_m90);
            } else if (deltaT === 60) {
                play_audio(audio_m60);
            } else if (deltaT === 30) {
                play_audio(audio_m30);
            } else if (deltaT === 20) {
                play_audio(audio_20);
            } else if (deltaT === 10) {
                play_audio(audio_10);
            } else if (deltaT === 5) {
                play_audio(audio_5);
            } else if (deltaT === 4) {
                play_audio(audio_4);
            } else if (deltaT === 3) {
                play_audio(audio_3);
            } else if (deltaT === 2) {
                play_audio(audio_2);
            } else if (deltaT === 1) {
                play_audio(audio_1);
            }
        } else if (deltaT <= 0) {
            // APRÈS le départ (deltaT < 0)
            this.hasStarted = true;
            const timePlus = Math.abs(deltaT);

            // Annoncer le départ une seule fois
            if (!this.startAnnounced) {
                console.log('Start achieved!', this);
                play_audio(audio_ot);
                this.startAnnounced = true;
            }

            // Arrêter après 31 secondes
            if (timePlus >= 31) {
                play_audio(audio_start_cancelled);
                this.cancel();
                timer_display = '--:--:--';
                return;
            }

            // Annonces après le départ
            if (timePlus === 30) {
                play_audio(audio_30);
            } else if (timePlus === 29) {
                play_audio(audio_29);
            } else if (timePlus === 28) {
                play_audio(audio_28);
            } else if (timePlus === 27) {
                play_audio(audio_27);
            } else if (timePlus === 26) {
                play_audio(audio_26);
            } else if (timePlus === 25) {
                play_audio(audio_25);
            } else if (timePlus === 20) {
                play_audio(audio_20);
            } else if (timePlus === 10) {
                play_audio(audio_10);
            } else if (timePlus === 9) {
                play_audio(audio_9);
            } else if (timePlus === 8) {
                play_audio(audio_8);
            } else if (timePlus === 7) {
                play_audio(audio_7);
            } else if (timePlus === 6) {
                play_audio(audio_6);
            } else if (timePlus === 5) {
                play_audio(audio_5);
            } else if (timePlus === 4) {
                play_audio(audio_4);
            } else if (timePlus === 3) {
                play_audio(audio_3);
            } else if (timePlus === 2) {
                play_audio(audio_2);
            } else if (timePlus === 1) {
                play_audio(audio_plus_1);
            }
        }
    }

    start() {
        const now = new Date();
        const deltaT_ms = this.timeDelta.getTimeDelta(now);
        const deltaT_seconds = Math.floor(deltaT_ms / 1000);
        console.log(deltaT_seconds);
        console.log(this.startTimeDate.toString());
        console.log(now.toString());
        console.log(deltaT_ms);
        if (deltaT_seconds > 10) {
            // Remplacer activeCountdown seulement si :
            // - Il n'y a pas de départ actif, OU
            // - Le départ actif est terminé (hasStarted=true et on continue jusqu'au cancel), OU
            // - Ce nouveau départ est plus proche (et l'actif n'a pas encore commencé)
            if (!activeCountdown || activeCountdown.hasStarted === false && deltaT_seconds < activeCountdown.timeDelta.getTimeDeltaInSeconds()) {
                activeCountdown = this;
            }
            this.timerTick();
        }
    }

    cancel() {
        activeCountdown = null;
        this.startAnnounced = false;
    }

    formatTimeDelta(seconds) {
        const h = Math.floor(Math.abs(seconds) / 3600);
        const m = Math.floor((Math.abs(seconds) % 3600) / 60);
        const s = Math.abs(seconds) % 60;
        const h_str = h < 10 ? `0${h}` : `${h}`;
        const m_str = m < 10 ? `0${m}` : `${m}`;
        const s_str = s < 10 ? `0${s}` : `${s}`;
        return `${h_str}:${m_str}:${s_str}`;
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
    
    // Appeler timerTick pour le compte à rebours s'il y en a un d'actif
    if (activeCountdown) {
        activeCountdown.timerTick();
    }
    
    $('.countdown').html(timer_display);
}

// Sync clock display on full second
var ms_offset = new Date().getMilliseconds();
setTimeout(function () {
    setInterval(display_clock, 1000);
}, ms_offset - 50) // x ms added to avoid discrepancies between clock and timers

const display_starters = function (start) {
    $(`#starterA_firstname`).html('');
    $(`#starterA_lastname`).html('');
    $(`#starterA_gender`).html('');
    $(`#starterA_country`).html('');
    $(`#starterB_firstname`).html('');
    $(`#starterB_lastname`).html('');
    $(`#starterB_gender`).html('');
    $(`#starterB_country`).html('');
    $(`#starterC_firstname`).html('');
    $(`#starterC_lastname`).html('');
    $(`#starterC_gender`).html('');
    $(`#starterC_country`).html('');
    $(`#starterD_firstname`).html('');
    $(`#starterD_lastname`).html('');
    $(`#starterD_gender`).html('');
    $(`#starterD_country`).html('');

    start._children.forEach(function (starter) {
        $(`#starter${starter.zone}_firstname`).html(starter.firstname);
        $(`#starter${starter.zone}_lastname`).html(starter.lastname);
        if (starter.gender == "f") {
            $(`#starter${starter.zone}_gender`).html('<i class="fa-solid fa-venus"></i>');
        } else if (starter.gender == "m") {
            $(`#starter${starter.zone}_gender`).html('<i class="fa-solid fa-mars"></i>');
        } else {
            $(`#starter${starter.zone}_gender`).html('');
        };

        let country = convertIOCCountryCode(starter.country);
        if (country.ISO2.toLowerCase() != 'ioc') {
            console.log(`<img src="img/flags/h40/${country.ISO2.toLowerCase()}.png" alt="">`);
            $(`#starter${starter.zone}_country`).html(`<img src="img/flags/h40/${country.ISO2.toLowerCase()}.png" alt="" height="25">`);
        }
    })
    if (start.type === "STA") {
        $(".staOnly").removeClass("d-none");
    } else {
        $(".staOnly").addClass("d-none");
    }

    displayedStartId = start.id;
};


let wakeLock = null;

const requestWakeLock = async () => {
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => {
            console.log('Wake Lock was released');
        });
        console.log('Wake Lock is active');
    } catch (err) {
        console.error(`${err.name}, ${err.message}`);
    }
};

requestWakeLock();

const handleVisibilityChange = () => {
    if (wakeLock !== null && document.visibilityState === 'visible') {
        requestWakeLock();
    }
};

document.addEventListener('visibilitychange', handleVisibilityChange);