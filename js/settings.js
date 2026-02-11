var table;
var settings_mode = "manual"; //[manual, startList]
var manual_settings = [];
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
            data: manual_settings, //assign data to table
            layout: "fitData",
            groupBy: "type",
            dataTree: true,
            dataTreeStartExpanded: true, // Ouvrir tous les groupes par défaut
            columnDefaults: {
                resizable: false
            },
            columns: [
                { 
                    title: "Time / Type", 
                    field: "time", 
                    responsive: 0,
                    formatter: function(cell, formatterParams, onRendered) {
                        const data = cell.getRow().getData();
                        
                        // Pour les lignes parents (groupes) - ont _children
                        if (data._children && Array.isArray(data._children)) {
                            return `<strong>${data.time} - ${data.type} (${data._children.length})</strong>`;
                        }
                        // Pour les lignes enfant
                        return data.time;
                    }
                },
                { title: "Zone", field: "zone", responsive: 0,
                    formatter: function(cell) {
                        const data = cell.getRow().getData();
                        // Ne rien afficher pour les lignes parent
                        if (data._children && Array.isArray(data._children)) {
                            return ""; 
                        }
                        return data.zone || "";
                    }
                },
                { title: "Gender", field: "gender", responsive: 0,
                    formatter: function(cell) {
                        const data = cell.getRow().getData();
                        // Ne rien afficher pour les lignes parent
                        if (data._children && Array.isArray(data._children)) {
                            return ""; 
                        }
                        const gender = data.gender;
                        if (gender === "f") {
                            return '<i class="fa-solid fa-venus" style="color: #ff69b4;"></i>';
                        } else if (gender === "m") {
                            return '<i class="fa-solid fa-mars" style="color: #4169e1;"></i>';
                        }
                        return "";
                    }
                },
                { title: "Country", field: "country", responsive: 0,
                    formatter: function(cell) {
                        const data = cell.getRow().getData();
                        // Ne rien afficher pour les lignes parent
                        if (data._children && Array.isArray(data._children)) {
                            return ""; 
                        }
                        const country = data.country;
                        if (!country) return "";
                        
                        try {
                            const countryData = convertIOCCountryCode(country);
                            if (countryData.ISO2.toLowerCase() !== 'ioc') {
                                return `<div style="display: flex; align-items: center; gap: 8px;"><img src="img/flags/h40/${countryData.ISO2.toLowerCase()}.png" alt="" height="20" style="width: 30px; object-fit: contain;"><strong style="min-width: 35px;">${country}</strong></div>`;
                            }
                        } catch (e) {
                            console.error('Country conversion error:', e);
                        }
                        return country;
                    }
                },
                { title: "Lastname", field: "lastname", responsive: 0 },
                { title: "Firstname", field: "firstname", responsive: 0 },

            ]
        });
    }


})
//initialize table

$("#switchMode").on("change", function () {
    if ($(this).is(':checked')) {
        // Mode STARTLIST
        settings_mode = "startlist";
        $("#switchMode_label").html("Mode startlist");
        $("#switchImport").prop("checked", false);
        
        // Afficher la section import, masquer la section manuel
        $("#startlistSettings").removeClass("d-none");
        $("#manualSettings").addClass("d-none");
        
        if (table !== undefined) {
            table.setData(startlist);
        }
        resetCountdowns();
        setupCountdowns();
    } else {
        // Mode MANUEL
        settings_mode = "manual";
        $("#switchMode_label").html("Mode manuel");
        $("#switchImport").prop("checked", false);
        
        // Afficher la section manuel, masquer la section import
        $("#startlistSettings").addClass("d-none");
        $("#manualSettings").removeClass("d-none");
        
        if (table !== undefined) {
            table.setData(manual_settings);
        }
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


// Excel import function
const importExcelFile = (form) => {
    const file = form.excelFile.files[0];
    if (!file) {
        alert('Veuillez sélectionner un fichier');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            
            // Get array format (not json) for better control
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            // Build startlist from Excel data
            startlist = buildStartlistFromJudgingSheet(jsonData);
            console.log('Imported startlist:', startlist);
            
            if (startlist.length === 0) {
                alert('Aucun départ trouvé dans le fichier');
                return;
            }
            
            // Reset and setup countdowns with imported data
            settings_mode = "startlist";
            // S'assurer que le switchMode est en mode startlist
            $("#switchMode").prop("checked", true).trigger("change");
            resetCountdowns();
            setupCountdowns();
            
            alert(`${startlist.length} départs importés avec succès!`);
        } catch (error) {
            console.error('Error parsing Excel file:', error);
            alert('Erreur lors de la lecture du fichier: ' + error.message);
        }
    };
    reader.readAsArrayBuffer(file);
};

const buildStartlistFromJudgingSheet = (rows) => {
    const startlist = [];
    const startGroups = new Map(); // Map of time -> {type, children}
    
    if (!rows || rows.length < 6) {
        console.error('Excel file too short or empty');
        return startlist;
    }
    
    // Find all event sections and their types
    // Look for header rows where column B = 'Gender'
    let sections = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (row && row[1] === 'Gender' && row[2] === 'Country' && row[3] === 'Last name') {
            // Found a header row, now find the event type
            let eventType = 'STA'; // default
            
            // Check the row above (row i-1) for event type in column K (index 10)
            if (i > 0 && rows[i-1]) {
                const typeCell = rows[i-1][10];
                if (typeCell && typeof typeCell === 'string') {
                    if (typeCell.includes('DYN')) {
                        eventType = 'DYN/DYNB';
                    } else if (typeCell.includes('DNF')) {
                        eventType = 'DNF';
                    } else if (typeCell.includes('STA') || typeCell.includes('Apnea')) {
                        eventType = 'STA';
                    }
                }
            }
            
            sections.push({
                headerRowIndex: i,
                type: eventType
            });
        }
    }
    
    console.log('Found sections:', sections);
    
    if (sections.length === 0) {
        console.error('No data sections found in the spreadsheet');
        return startlist;
    }
    
    // Process each section
    sections.forEach((section, sectionIndex) => {
        const headerRowIndex = section.headerRowIndex;
        const eventType = section.type;
        
        // Data starts after the header row
        const dataStartRow = headerRowIndex + 1;
        // Data ends at next header or end of file
        const nextHeaderRow = sectionIndex < sections.length - 1 ? 
            sections[sectionIndex + 1].headerRowIndex : 
            rows.length;
        
        console.log(`Processing ${eventType} section: rows ${dataStartRow} to ${nextHeaderRow}`);
        
        // Parse data rows in this section
        for (let rowIndex = dataStartRow; rowIndex < nextHeaderRow && rowIndex < rows.length; rowIndex++) {
            const row = rows[rowIndex];
            if (!row || row.length < 13) continue;
            
            const lastName = row[3];  // Column D - Last name
            const firstName = row[4]; // Column E - First name
            const gender = row[1];    // Column B - Gender
            const country = row[2];   // Column C - Country
            const zone = row[12];     // Column M - Zone/Lane
            let startTime = row[11];  // Column L - Official Top (start time)
            
            // Skip empty rows or no start time
            if (!lastName || !startTime) {
                continue;
            }
            
            // Skip rows that are section headers or separators
            if (typeof lastName === 'string' && (lastName.includes('Startzeit') || lastName.includes('Gender'))) {
                continue;
            }
            
            // Convert time to HH:MM format
            let timeStr = '';
            
            if (typeof startTime === 'string') {
                // If it's already a string like "10:00:00", convert to "10:00"
                if (startTime.includes(':')) {
                    const parts = startTime.split(':');
                    timeStr = `${parts[0]}:${parts[1]}`;
                } else {
                    continue; // Skip if can't parse
                }
            } else if (typeof startTime === 'number') {
                // Convert Excel time decimal format (e.g., 0.416667 = 10:00:00)
                const hours = Math.floor(startTime * 24);
                const minutes = Math.round((startTime * 24 - hours) * 60);
                timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
            } else {
                continue; // Skip if format not recognized
            }
            
            // Create unique key combining time and event type
            const groupKey = `${timeStr}_${eventType}`;
            
            if (!startGroups.has(groupKey)) {
                startGroups.set(groupKey, { 
                    type: eventType, 
                    time: timeStr,
                    children: [] 
                });
            }
            
            const groupData = startGroups.get(groupKey);
            groupData.children.push({
                zone: zone ? String(zone).trim() : '',
                firstname: firstName ? String(firstName).trim() : '',
                lastname: lastName ? String(lastName).trim() : '',
                gender: gender ? String(gender).trim() : '',
                country: country ? String(country).trim() : ''
            });
        }
    });
    
    // Convert Map to startlist array, sorted by time
    let id = 1;
    const sortedKeys = Array.from(startGroups.keys()).sort((a, b) => {
        // Extract time part (before _TYPE)
        const aTime = a.split('_')[0];
        const bTime = b.split('_')[0];
        const [aH, aM] = aTime.split(':').map(Number);
        const [bH, bM] = bTime.split(':').map(Number);
        return (aH * 60 + aM) - (bH * 60 + bM);
    });
    
    sortedKeys.forEach(key => {
        const groupData = startGroups.get(key);
        const startEntry = {
            id: id++,
            type: groupData.type,
            time: groupData.time,
            zone: "",
            gender: "",
            lastname: "",
            firstname: "",
            _children: groupData.children
        };
        startlist.push(startEntry);
    });
    
    console.log('Final startlist:', startlist);
    return startlist;
};

// Event listener for import mode - force startlist mode if import is checked
$("#switchImport").on("change", function () {
    if ($(this).is(":checked")) {
        // Si on coche import, passer en mode startlist
        $("#switchMode").prop("checked", true).trigger("change");
    }
});

// setupCountdowns();
resetCountdowns();
$("#switchMode").trigger("change");
