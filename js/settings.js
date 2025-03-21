var table;
var settings_mode = "startlist";
var manual_settings;
var countdowns = [];

//define data array
var startlist = [
    {
        id: 1, type: "STA", time: "10:45", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "", country: "", lastname: "Starter 1", firstname: "" },
            { zone: "B", gender: "", country: "", lastname: "Starter 2", firstname: "" }
        ]
    },
    {
        id: 2, type: "STA", time: "10:57", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "FRA", lastname: "Maire", firstname: "Christelle" },
            { zone: "B", gender: "f", country: "SUI", lastname: "Lechevalier", firstname: "Michèle" },
            { zone: "C", gender: "f", country: "GER", lastname: "Schmitt", firstname: "Anna-Karina" },
            { zone: "D", gender: "m", country: "SUI", lastname: "Plüss", firstname: "Jonas" }
        ]
    },
    {
        id: 3, type: "STA", time: "11:09", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "m", country: "SUI", lastname: "Dupont", firstname: "Julien" },
            { zone: "B", gender: "f", country: "FRA", lastname: "Regnier", firstname: "Manon" },
            { zone: "C", gender: "f", country: "SUI", lastname: "Stüssi", firstname: "Gina" },
            { zone: "D", gender: "f", country: "SUI", lastname: "Schmed", firstname: "Corina" }
        ]
    },
    {
        id: 4, type: "STA", time: "11:21", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Falciola", firstname: "Vanessa" },
            { zone: "B", gender: "f", country: "SUI", lastname: "Argenziano", firstname: "Simone" },
            { zone: "C", gender: "m", country: "SUI", lastname: "Bächtold", firstname: "Thomas" },
            { zone: "D", gender: "m", country: "FRA", lastname: "Glaser", firstname: "David" }
        ]
    },
    {
        id: 5, type: "STA", time: "11:33", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Kollep", firstname: "Lara" },
            { zone: "B", gender: "f", country: "SUI", lastname: "Autunno", firstname: "Elsa" },
            { zone: "C", gender: "f", country: "MAR", lastname: "Chellai", firstname: "Oulfa" },
            { zone: "D", gender: "f", country: "FRA", lastname: "Martin", firstname: "Alice" }
        ]
    },
    {
        id: 6, type: "STA", time: "11:45", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Melileo", firstname: "Andrea" },
            { zone: "B", gender: "m", country: "ESP", lastname: "Llibre", firstname: "Oleguer" },
            { zone: "C", gender: "m", country: "TUR", lastname: "Pelenk", firstname: "Okan" },
            { zone: "D", gender: "m", country: "SUI", lastname: "Amiot", firstname: "Jonathan" }
        ]
    },
    {
        id: 7, type: "STA", time: "11:57", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "m", country: "SUI", lastname: "Fonjallaz", firstname: "David" },
            { zone: "B", gender: "m", country: "BEL", lastname: "Hubert", firstname: "Lancelot" },
            { zone: "C", gender: "m", country: "SUI", lastname: "Piguet", firstname: "Hugo" },
            { zone: "D", gender: "m", country: "SUI", lastname: "Gunzenhauser", firstname: "Ronny" }
        ]
    },
    {
        id: 8, type: "DYN/DYNB", time: "13:12", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "", country: "", lastname: "Starter 1", firstname: "" },
            { zone: "B", gender: "", country: "", lastname: "Starter 2", firstname: "" }
        ]
    },
    {
        id: 9, type: "DYN/DYNB", time: "13:20", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "GER", lastname: "Schmitt", firstname: "Anna-Karina" },
            { zone: "B", gender: "m", country: "GBR", lastname: "Palmer", firstname: "Darryl" }
        ]
    },
    {
        id: 10, type: "DYN/DYNB", time: "13:28", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Richoz", firstname: "Fanny" },
            { zone: "B", gender: "m", country: "SUI", lastname: "Langer", firstname: "Chris " }
        ]
    },
    {
        id: 11, type: "DYN/DYNB", time: "13:36", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Mühlberg", firstname: "Sarah Loraine" },
            { zone: "B", gender: "f", country: "GER", lastname: "Lodes", firstname: "Melissa" }
        ]
    },
    {
        id: 12, type: "DYN/DYNB", time: "13:44", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Cid", firstname: "Isabelle" },
            { zone: "B", gender: "f", country: "SUI", lastname: "Robert", firstname: "Lucie" }
        ]
    },
    {
        id: 13, type: "DYN/DYNB", time: "13:52", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Argenziano", firstname: "Simone" },
            { zone: "B", gender: "m", country: "SUI", lastname: "Brauchli", firstname: "Christian" }
        ]
    },
    {
        id: 14, type: "DYN/DYNB", time: "14:00", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "m", country: "SUI", lastname: "Morel", firstname: "Ivan" },
            { zone: "B", gender: "m", country: "SUI", lastname: "Logean", firstname: "Antoine" }
        ]
    },
    {
        id: 15, type: "DYN/DYNB", time: "14:08", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "FRA", lastname: "Maire", firstname: "Christelle" },
            { zone: "B", gender: "f", country: "FRA", lastname: "Regnier", firstname: "Manon" }
        ]
    },
    {
        id: 16, type: "DYN/DYNB", time: "14:16", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Stüssi", firstname: "Gina" },
            { zone: "B", gender: "f", country: "SUI", lastname: "Falciola", firstname: "Vanessa" }
        ]
    },
    {
        id: 17, type: "DYN/DYNB", time: "14:24", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "MAR", lastname: "Chellai", firstname: "Oulfa" },
            { zone: "B", gender: "f", country: "SUI", lastname: "Giuntini", firstname: "Violante" }
        ]
    },
    {
        id: 18, type: "DYN/DYNB", time: "14:32", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Stalder", firstname: "Tatiana" },
            { zone: "B", gender: "m", country: "ITA", lastname: "Bertini", firstname: "Massimiliano" }
        ]
    },
    {
        id: 19, type: "DYN/DYNB", time: "14:40", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "m", country: "SUI", lastname: "Perrenoud", firstname: "Dylan" },
            { zone: "B", gender: "f", country: "BOL", lastname: "Duenas", firstname: "Erika" }
        ]
    },
    {
        id: 20, type: "DYN/DYNB", time: "14:48", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Walter", firstname: "Heidi" },
            { zone: "B", gender: "f", country: "SUI", lastname: "Kollep", firstname: "Lara" }
        ]
    },
    {
        id: 21, type: "DYN/DYNB", time: "14:46", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "m", country: "FRA", lastname: "Glaser", firstname: "David" },
            { zone: "B", gender: "m", country: "ESP", lastname: "Llibre", firstname: "Oleguer" }
        ]
    },
    {
        id: 22, type: "DYN/DYNB", time: "15:04", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "m", country: "GER", lastname: "Rodewald", firstname: "Adam Jerzy" },
            { zone: "B", gender: "m", country: "SUI", lastname: "Witschi", firstname: "Alex" }
        ]
    },
    {
        id: 23, type: "DYN/DYNB", time: "15:12", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "m", country: "SUI", lastname: "Amiot", firstname: "Jonathan" },
            { zone: "B", gender: "m", country: "SUI", lastname: "Plüss", firstname: "Jonas" }
        ]
    },
    {
        id: 24, type: "DYN/DYNB", time: "15:20", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "m", country: "SUI", lastname: "Dupont", firstname: "Julien" },
            { zone: "B", gender: "f", country: "SUI", lastname: "Schmed", firstname: "Corina" }
        ]
    },
    {
        id: 25, type: "DYN/DYNB", time: "15:28", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "m", country: "TUR", lastname: "Pelenk", firstname: "Okan" },
            { zone: "B", gender: "m", country: "SUI", lastname: "Fonjallaz", firstname: "David" }
        ]
    },
    {
        id: 26, type: "DYN/DYNB", time: "15:36", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "m", country: "SUI", lastname: "Piguet", firstname: "Hugo" },
            { zone: "B", gender: "f", country: "ITA", lastname: "Troia", firstname: "Roberta" }
        ]
    },
    {
        id: 27, type: "DYN/DYNB", time: "15:44", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Vecera", firstname: "Marina" },
            { zone: "B", gender: "f", country: "SUI", lastname: "Bläsi", firstname: "Andrea" }
        ]
    },
    {
        id: 28, type: "DNF", time: "16:10", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "", country: "", lastname: "Starter 1", firstname: "" },
            { zone: "B", gender: "", country: "", lastname: "Starter 2", firstname: "" }
        ]
    },
    {
        id: 29, type: "DNF", time: "16:18", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "m", country: "SUI", lastname: "Langer", firstname: "Chris" },
            { zone: "B", gender: "f", country: "SUI", lastname: "Dubois", firstname: "Oxana" }
        ]
    },
    {
        id: 30, type: "DNF", time: "16:26", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Giuntini", firstname: "Violante" },
            { zone: "B", gender: "f", country: "GER", lastname: "Lodes", firstname: "Melissa" }
        ]
    },
    {
        id: 31, type: "DNF", time: "16:34", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Cid", firstname: "Isabelle" },
            { zone: "B", gender: "f", country: "SUI", lastname: "Robert", firstname: "Lucie" }
        ]
    },
    {
        id: 32, type: "DNF", time: "16:42", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Richoz", firstname: "Fanny" },
            { zone: "B", gender: "m", country: "SUI", lastname: "Morel", firstname: "Ivan" }
        ]
    },
    {
        id: 33, type: "DNF", time: "16:50", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Walter", firstname: "Heidi" },
            { zone: "B", gender: "f", country: "SUI", lastname: "Melileo", firstname: "Andrea" }
        ]
    },
    {
        id: 34, type: "DNF", time: "16:58", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "SUI", lastname: "Stalder", firstname: "Tatiana" },
            { zone: "B", gender: "m", country: "SUI", lastname: "Perrenoud", firstname: "Dylan" }
        ]
    },
    {
        id: 35, type: "DNF", time: "17:06", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "ITA", lastname: "Troia", firstname: "Roberta" },
            { zone: "B", gender: "m", country: "SUI", lastname: "Brauchli", firstname: "Christian" }
        ]
    },
    {
        id: 36, type: "DNF", time: "17:14", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "m", country: "SUI", lastname: "Logean", firstname: "Antoine" },
            { zone: "B", gender: "f", country: "SUI", lastname: "Kyburz", firstname: "Dalida" }
        ]
    },
    {
        id: 37, type: "DNF", time: "17:22", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "m", country: "SUI", lastname: "Witschi", firstname: "Alex" },
            { zone: "B", gender: "m", country: "SUI", lastname: "Bächtold", firstname: "Thomas" }
        ]
    },
    {
        id: 38, type: "DNF", time: "17:30", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "f", country: "FRA", lastname: "Vidberg", firstname: "Florie" },
            { zone: "B", gender: "m", country: "BEL", lastname: "Hubert", firstname: "Lancelot" }
        ]
    },
];



var myOffcanvas = document.getElementById('offcanvasRight')

myOffcanvas.addEventListener('shown.bs.offcanvas', function () {
    // do something...
    if (table === undefined) {
        console.log('table undefined');
        table = new Tabulator("#startlist-table", {
            data: startlist, //assign data to table
            // autoColumns: true, //create columns from data field names
            layout: "fitColumns",
            groupBy: "type",
            dataTree: true,
            columns: [
                // {title:"#", field:"id", responsive:10},
                { title: "Time", field: "time", responsive: 0 },
                { title: "zone", field: "zone", responsive: 0 },
                { title: "gender", field: "gender", responsive: 0 },
                { title: "country", field: "country", responsive: 0 },
                { title: "lastname", field: "lastname", responsive: 0 },
                { title: "firstname", field: "firstname", responsive: 0 },

            ]
        });
    }


})
//initialize table

$("#switchMode").on("change", function () {
    if ($(this).is(':checked')) {
        settings_mode = "startlist";
        // $("#startlist-table").removeClass("d-none");
        $("#manualSettings").addClass("d-none");
        table.setData(startlist);
        resetCountdowns();
        setupCountdowns();
    } else {
        settings_mode = "manual";
        // $("#startlist-table").addClass("d-none");
        $("#manualSettings").removeClass("d-none");
        table.setData(manual_settings);
        resetCountdowns();
        setupCountdowns();
    }
    console.log(`Settings mode : ${settings_mode}`);
})


const programManualStarts = (settingsForm) => {
    console.log(settingsForm.startTime.value, settingsForm.interval.value, settingsForm.repetitions.value);

    let startTimeH = settingsForm.startTime.value.split(":")[0];
    let startTimeM = settingsForm.startTime.value.split(":")[1];
    let startTime = luxon.DateTime.fromObject({ hours: startTimeH, minutes: startTimeM });
    let interval = settingsForm.interval.value;
    let rep = settingsForm.repetitions.value;
    manual_settings = [];
    for (let i = 0; i < rep; i++) {
        let thisStartTime = startTime.plus({ minutes: i * interval })
        let start = { id: i + 1, time: thisStartTime.toLocaleString(luxon.DateTime.TIME_24_SIMPLE) };
        manual_settings.push(start);
    }
    console.log(manual_settings);
    table.setData(manual_settings);

    resetCountdowns();
    setupCountdowns();
}


const setupCountdowns = () => {    
    var actualSettings;
    if (settings_mode === "startlist") {
        actualSettings = startlist;
        $(".startersInfo").removeClass('d-none');
    } else {
        actualSettings = manual_settings;
        $(".startersInfo").addClass('d-none');
    }
    actualSettings.forEach((start) => {
        console.log(start);
        let newCD = new aidaCountdown(start);
        countdowns.push(newCD);
        console.log(countdowns);
    })
    countdowns.forEach((cd) => {
        cd.start();
    })
}


const resetCountdowns = () => {
    countdowns.forEach((cd) => {
        cd.cancel();
    })
    countdowns = [];
    timer_display = '--:--:--';
    const emptyStart = {
        id: 0, type: "STA", time: "", zone: "", gender: "", lastname: "", firstname: "", _children: [
            { zone: "A", gender: "", country: "", lastname: "", firstname: "" },
            { zone: "B", gender: "", country: "", lastname: "", firstname: "" },
            { zone: "C", gender: "", country: "", lastname: "", firstname: "" },
            { zone: "D", gender: "", country: "", lastname: "", firstname: "" }
        ]
    };
    display_starters(emptyStart);
}


setupCountdowns();
