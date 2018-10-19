// Get the modal
var modal = document.getElementById('id01');
var modal = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function displayProductAddForm() {
    document.getElementById('id01').style.display = 'block';
    console.log("product form clicked");
}

const user = [{
    name: 'oluwaseun paul',
    group: 'attendants',
    username: 'devx',
    password: '12345',
    userId: 68
}];

localStorage.setItem('currentUser', JSON.stringify(user));
// document.getElementById('userId').value = JSON.parse( localStorage.getItem('currentUser') )[0].userId;

window.currentUserName = localStorage.getItem('name');
// document.getElementById('username').innerHTML = window.currentUserName;

//Function to create a new product through the interface
function handleRequestResponse() {

    const products = JSON.parse(this.responseText);

    Object.values(products).map(function (product) {
        // console.log(product);

        let tr = document.createElement('tr'); //<tr> </tr>
        tr.innerHTML = `<td><img src="${product.img}"></td>
                <td><p><strong>${product.name}</strong></p><p>${product.description}</p></td>
                <td>${product.price}</td>
                <td>${product.qty}</td>
                <td>${product.category}</td>
                <td><button>Add to cart</button></td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>`;

        document.getElementById("products_table").appendChild(tr);
    });
}

var http = new XMLHttpRequest();
http.open('GET', 'http://localhost:9000/products');
http.addEventListener('load', handleRequestResponse);
http.send();

function handleaAddProductResponse() {
    console.log(this.responseText);
}

function sendaddNewProductRequest(event) {

    event.preventDefault();

    var productName = document.getElementById('pname').value;
    var productprice = document.getElementById('pprice').value;
    var productQuantity = document.getElementById('quantity').value;
    var productCat = document.getElementById('category').value;

    var product = {
        name: productName,
        price: productprice,
        category: productCat,
        qty: productQuantity
    };

    console.log(product);

    var http = new XMLHttpRequest();

    http.open('POST', 'http://localhost:9002/products', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.addEventListener('load', handleaAddProductResponse);
    http.send(JSON.stringify(product));
}