function editProduct() {
    var productNameElement = document.getElementById('product-name');
    var productPriceElement = document.getElementById('product-price');
    var productQuantityElement = document.getElementById('product-quantity');

    var newName = prompt("Nhập tên thú cưng:");
    var newPrice = prompt("Nhập giá mới :");
    var newQuantity = prompt("Nhập số lượng :");

    productNameElement.innerText = newName;
    productPriceElement.innerText = newPrice;
    productQuantityElement.innerText = newQuantity;
}
function xoa() {

    var xacnhanxoa = confirm("Bạn có chắc muốn xoá thú cưng này khỏi giỏ hàng không?");

    if (confirmation) {
        var productElement = document.getElementById('product-item');
        productElement.remove();
    }
}
