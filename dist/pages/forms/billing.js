document.getElementById("button").addEventListener("click", (e) => {
    e.preventdefault;
    let productname = document.getElementById("productname");
    let productamount = document.getElementById("productamount");
    let productquantity = document.getElementById("productquantity");
    let total = productamount.value * productquantity.value;
  
    let table = document.getElementById("productdata");
  
    let newrow = table.insertRow(table.rows.length);
    let no = table.rows.length;
    let productnodata = newrow.insertCell(0);
    let productnamedata = newrow.insertCell(1);
    let producamountdata = newrow.insertCell(2);
    let productquantitydata = newrow.insertCell(3);
    let producttotaldata = newrow.insertCell(4);
    let remove = newrow.insertCell(5);
  
    productnodata.innerHTML = no;
    productnamedata.innerHTML = productname.value;
    producamountdata.innerHTML = productamount.value;
    productquantitydata.innerHTML = productquantity.value;
    producttotaldata.innerHTML = total;
    remove.innerHTML =
      "<button onclick={removefunction(this)} class='btn btn-primary'>Remove</button>";
  
    productname.value = "";
    productamount.value = "";
    productquantity.value = "";
  
    updatetotal();
  });
  
  function updatetotal() {
    let totalvalue = 0;
    let rows = document.getElementById("productdata");
    for (let i = 0; i < rows.rows.length; i++) {
      totalvalue += parseFloat(rows.rows[i].cells[4].innerHTML);
    }
    document.getElementById("h1").innerHTML = `Total Amount :₹${totalvalue}`;
  }
  
  function removefunction(params) {
    console.log(params);
    let removedata = params.parentNode.parentNode;
    console.log(removedata);
    removedata.parentNode.removeChild(removedata);
    updatetotal();
  }
  function generatingpdf(){
    let tableclone = document.getElementById("formtable").cloneNode(true);
    let tableclonerowsandcolumn = tableclone.outerHTML;
    var invoiceWindow = window.open('', '_blank');
    invoiceWindow.document.write('<head><style>');
    invoiceWindow.document.write('body { font-family: Arial, sans-serif; }');
    invoiceWindow.document.write('table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }');
    invoiceWindow.document.write('th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }');
    invoiceWindow.document.write('th { background-color: #f2f2f2; }');
    invoiceWindow.document.write('#totalAmount { font-weight: bold; }');
    invoiceWindow.document.write('#invoiceTitle { text-align: center; font-size: 24px; margin-bottom: 20px; }');
    invoiceWindow.document.write('</style>');
    invoiceWindow.document.write('</head><body>');
    invoiceWindow.document.write('<h2 id="invoiceTitle">Invoice</h2>');
    invoiceWindow.document.write(tableclonerowsandcolumn);
    invoiceWindow.document.close();
    invoiceWindow.print();

}