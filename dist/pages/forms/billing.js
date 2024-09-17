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
  