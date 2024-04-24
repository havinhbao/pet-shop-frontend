var Product = [
    {
      id: 1,
      name: "Husky",
      price: "1.000.000",
      quantity: "1",
      total: "1.000.000",
      time: "12/03/2024",
    },
    {
      id: 2,
      name: "Golden",
      price: "1.500.000",
      quantity: "2",
      total: "3.000.000",
      time: "14/03/2024",
    },
    {
        id: 3,
        name: "Shiba",
        price: "1.500.000",
        quantity: "1",
        total: "1.500.000",
        time: "20/03/2024",
      },
      {
        id: 4,
        name: "Mèo Anh Lông Ngắn",
        price: "1.300.000",
        quantity: "2",
        total: "2.600.000",
        time: "25/03/2024",
      },
  ];
  
function showProducts() {
  var html = "";
  var d = 0;
  for (var i = 0; i < Product.length; i++) {
    d++;
    html + "<tr>";
    html += "<td>" + d + "</td>";
    html += "<input type='hidden' value='" + i + "' id='editIndex'>";
    html += "<td>" + Product[i].name + "</td>";
    html += "<td >" + Product[i].price + "</td>";
    html += "<td>" + Product[i].quantity + "</td>";
    html += "<td>" + Product[i].total + "</td>";
    html += "<td>" + Product[i].time + "</td>";
    html += "</tr>";
  }
  document.getElementById("tbl").innerHTML = html;
}

showProducts();