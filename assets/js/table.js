

function addData() {
    var field1 = document.getElementById("field1").value;
    var field2 = document.getElementById("field2").value;
    var field3 = document.getElementById("field3").value;
    var field4 = document.getElementById("field4").value;
    var field5 = document.getElementById("field5").value;

    var table = document.getElementById("table");

    // Kontrol et: Aynı öğe zaten mevcutsa uyarı göster
    for (var rowCount = 0; rowCount < table.rows.length; rowCount++) {
        if (table.rows[rowCount].cells[0].innerHTML === field1) {
            alert("Bu öğe zaten mevcut!");
            return;
        }
    }

    // Yeni bir satır oluştur
    var row = table.insertRow(table.rows.length);

    // Hücreleri ekle
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    // Hücrelere verileri ata
    cell1.innerHTML = field1;
    cell2.innerHTML = field2;
    cell3.innerHTML = field3;
    cell4.innerHTML = field4;
    cell5.innerHTML = field5;
    cell6.innerHTML = ' <button type="button" class="btn btn-danger w-50" data-bs-toggle="modal" data-bs-target="#removeModal" onclick="SendRemove(this)"> ' + '<i class="bi bi-trash"></i> ' + ' </button>' + '<button type="button" class="btn btn-primary w-50" data-bs-toggle="modal" data-bs-target="#editModal" onclick="SendEdit(this)"> ' + '<i class="bi bi-pencil-square"></i> ' + ' </button>';
}


var globalRow;
function SendRemove(button) {
    var row = button.parentNode.parentNode;
    var item = row.cells[0].innerHTML + " | " + row.cells[1].innerHTML + " | " + row.cells[2].innerHTML + " | " + row.cells[3].innerHTML + " | " + row.cells[4].innerHTML;
    document.getElementById("item-info").innerHTML = item;
    globalRow = row;
}

function remove(globalRow) {
    globalRow.parentNode.removeChild(globalRow);
}

//edit
var editRow;
function SendEdit(button) {

    var row = button.parentNode.parentNode;

    var cell1 = row.cells[0].innerHTML;
    var cell2 = row.cells[1].innerHTML;
    var cell3 = row.cells[2].innerHTML;
    var cell4 = row.cells[3].innerHTML;
    var cell5 = row.cells[4].innerHTML;

    
    document.getElementById("edit_field1").value = cell1;
    document.getElementById("edit_field2").value = cell2;
    document.getElementById("edit_field3").value = cell3;
    document.getElementById("edit_field4").value = cell4;
    document.getElementById("edit_field5").value = cell5;

    editRow = row;
}

function save(editRow){
    var field1 = document.getElementById("edit_field1").value;
    var field2 = document.getElementById("edit_field2").value;
    var field3 = document.getElementById("edit_field3").value;
    var field4 = document.getElementById("edit_field4").value;
    var field5 = document.getElementById("edit_field5").value;

    editRow.cells[0].innerHTML = field1;
    editRow.cells[1].innerHTML = field2;
    editRow.cells[2].innerHTML = field3;
    editRow.cells[3].innerHTML = field4;
    editRow.cells[4].innerHTML = field5;
}
