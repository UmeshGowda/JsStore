function downLoad(fileName) {
    var Result = [];
    var Table = document.querySelector('#divResultSQL table tbody');
    for (var i = 1, rowLength = Table.rows.length; i < rowLength; i++) {
        var Obj = {};
        for (var j = 0, colLength = Table.rows[i].cells.length; j < colLength; j++) {
            if (j == 1 || j == 4) {
                Obj[Table.rows[0].cells[j].innerText] = Table.rows[i].cells[j].innerText;
            } else {
                Obj[Table.rows[0].cells[j].innerText] = Number(Table.rows[i].cells[j].innerText);
            }
        }
        Result.push(Obj);
    }
    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(Result)], {
        type: "text/json"
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName + ".json";
    a.click();
    //console.log(Result);
}