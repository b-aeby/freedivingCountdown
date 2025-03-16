//define data array
var startlist = [
    {
        id: 1, type: "STA", time: "10:45", zone: "", gender:"", lastname: "", firstname: "", _children: [
            { zone: "A", gender:"", country: "", lastname: "Starter1", firstname: "" },
            { zone: "B", gender:"", country: "", lastname: "Starter2", firstname: "" }
        ]
    },
    {
        id: 2, type: "STA", time: "10:57", zone: "", gender:"", lastname: "", firstname: "", _children: [
            { zone: "A", gender:"f", country: "FRA", lastname: "Maire", firstname: "Christelle" },
            { zone: "B", gender:"f", country: "SUI", lastname: "Lechevalier", firstname: "Michèle" },
            { zone: "C", gender:"f", country: "GER", lastname: "Schmitt", firstname: "Anna-Karina" },
            { zone: "D", gender:"m", country: "SUI", lastname: "Plüss", firstname: "Jonas" }
        ]
    },
    {
        id: 3, type: "STA", time: "11:09", zone: "", gender:"", lastname: "", firstname: "", _children: [
            { zone: "A", gender:"m", country: "SUI", lastname: "Dupont", firstname: "Julien" },
            { zone: "B", gender:"f", country: "FRA", lastname: "Regnier", firstname: "Manon" },
            { zone: "C", gender:"f", country: "SUI", lastname: "Stüssi", firstname: "Gina" },
            { zone: "D", gender:"f", country: "SUI", lastname: "Schmed", firstname: "Corina" }
        ]
    },
    {
        id: 4, type: "DYN/DYNB", time: "13:12", zone: "", gender:"", lastname: "", firstname: "", _children: [
            { zone: "A", gender:"", country: "", lastname: "Starter1", firstname: "" },
            { zone: "B", gender:"", country: "", lastname: "Starter2", firstname: "" }
        ]
    },
];

var myOffcanvas = document.getElementById('offcanvasRight')
myOffcanvas.addEventListener('shown.bs.offcanvas', function () {
    // do something...
    var table = new Tabulator("#startlist-table", {
        data: startlist, //assign data to table
        // autoColumns: true, //create columns from data field names
        groupBy:"type",
        dataTree:true,
        columns:[
            {title:"#", field:"id", responsive:10},
            {title:"Time", field:"time", responsive:0},
            {title:"zone", field:"zone", responsive:0},
            {title:"gender", field:"gender", responsive:0},
            {title:"country", field:"country", responsive:0},
            {title:"lastname", field:"lastname", responsive:0},
            {title:"firstname", field:"firstname", responsive:0},

        ]
    });
})
//initialize table
