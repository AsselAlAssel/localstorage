let table = document.getElementById("tableId"),
    divTable = document.getElementById("divTable"),
    item = document.getElementById("item"),
    quantity = document.getElementById("quantity");
var x, key, val;

/*  get data from input  */
function keyAndVal() {
    key = item.value.trim();
    val = quantity.value.trim();
    item.innerHTML = "";
    quantity.innerHTML = "";

}

/*   print all keys and values in the table  */
function show() {
    while (table.rows.length > 1)
        table.deleteRow(-1);

    var z = Object.keys(localStorage);
    for (let i = 0; i < z.length; i++) {;
        var row = table.insertRow(-1);
        var c1 = row.insertCell(0),
            c2 = row.insertCell(1);
        c1.innerHTML = z[i];
        c2.innerHTML = localStorage.getItem(z[i]);
    }

}

/* clear all table and the localstorage */
document.getElementById("clear").addEventListener("click", function() {
    localStorage.clear();
    show();
});
/*  add */
document.getElementById("save").addEventListener("click", add);

function add() {
    keyAndVal();

    if (key != "" && val != "" && !isNaN(val)) {
        localStorage.setItem(key, val);
        show();
    } else {
        alert("wrong input")
    }
}

/*  modify */
document.getElementById("modify").addEventListener("click", modify);

function modify() {
    keyAndVal();
    if (key != "" && val != "" && !isNaN(val)) {
        x = Object.keys(localStorage);
        if (x.includes(key)) {
            localStorage.setItem(key, val);
            show();

        } else {
            alert("wrong item")
        }
    } else {
        alert("wrong input")
    }


}

/*  remove  */
document.getElementById("remove").addEventListener("click", remove);

function remove() {
    keyAndVal();
    if (key != "") {
        x = Object.keys(localStorage);
        if (x.includes(key)) {
            localStorage.removeItem(key);
            show();

        } else {
            alert("wrong item")
        }
    } else {
        alert("wrong input")
    }
}