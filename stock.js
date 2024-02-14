const add = document.getElementById("addition");
const del = document.getElementById("delete");
const edit = document.getElementById("edit");
let tbl = document.getElementById("tbl");

add.addEventListener("click", () => {
    
    let tr = document.createElement("tr"); 
    for (let i = 0; i < 3; i++) {
        let td = document.createElement("td");
        td.textContent = "ウェルスナビ";
        tr.appendChild(td);
    }
    tbl.appendChild(tr);
})

del.addEventListener("click",()=>{
    let rw = tbl.rows.length;
    tbl.deleteRow(rw-1);
})

edit.addEventListener("click",()=>{
    
})