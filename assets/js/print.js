function printTable() {
    var table = document.getElementById("table");

    var printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Tablo Çıktısı</title> <style>tr{border-bottom: 1px solid #ddd;}</style>  </head><body>');
    printWindow.document.write('<h2>Stok listesi:</h2>');
  
    printWindow.document.write('<table border="1" style="width:100%;">');
    var rowCount = table.rows.length;
    for (var i = 0; i < rowCount; i++) {
      printWindow.document.write('<tr>');
      var cells = table.rows[i].cells;
      var columnCount = cells.length-1;
      for (var j = 0; j < columnCount; j++) {
        printWindow.document.write('<td>' + cells[j].innerHTML + '</td>');
      }
      printWindow.document.write('</tr>');
    }
    printWindow.document.write('</table>');
  
    printWindow.document.write('</body></html>');
    printWindow.document.close();
  
    printWindow.print();
}
