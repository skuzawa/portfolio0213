const add = document.getElementById("addition");
const del = document.getElementById("delete");
const edit = document.getElementById("edit");
const editBtn = document.getElementById("edit_button");
const editBox = document.getElementById("edit-box");
let tbl = document.getElementById("tbl");


add.addEventListener("click", () => {
    // const XLSX = require("xlsx");
    // // xlsxファイルを読み込む
    // const Utils = XLSX.utils;
    // const workbook = XLSX.readFile('stock_data.xlsx');

    // // ワークシートを取得する
    // const sheetName = workbook.SheetNames[0];
    // alert(sheetName);
    // const worksheet = workbook.Sheets[sheetName];

    // alert(worksheet["A1"]);

    let tr = document.createElement("tr");
    for (let i = 0; i < 3; i++) {
        let td = document.createElement("td");
        td.textContent = "ウェルスナビ";
        tr.appendChild(td);
    }
    tbl.appendChild(tr);
})

del.addEventListener("click", () => {
    let rw = tbl.rows.length;
    tbl.deleteRow(rw - 1);
})

edit.addEventListener("click", () => {
    const addBox = document.createElement("input");
    const addMessage = document.createElement("p");

    addBox.type = "text";
    addMessage.textContent = "銘柄コードを入力して下さい";
    editBox.appendChild(addMessage);
    editBox.appendChild(addBox);
})

editBtn.addEventListener("click", () => {
    let tr = document.createElement("button");

})