var listItems = document.getElementById("list");
var apiKey = "78864f41cea947c889abb37111d67773"
function getFirstItem() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=tomatoe&number=20&apiKey=78864f41cea947c889abb37111d67773"

    fetch(requestString)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var foodItem1 = document.createElement("h3");
        foodItem1.textContent = data.products[15].title;
        listItems.append(foodItem1);  
    })
}

function getSecondItem() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=apples&number=20&apiKey=78864f41cea947c889abb37111d67773"

    fetch(requestString)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var foodItem1 = document.createElement("h3");
        foodItem1.textContent = data.products[3].title;
        listItems.append(foodItem1);  
    })
}

function getThirdItem() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=trailmix&number=20&apiKey=78864f41cea947c889abb37111d67773"

    fetch(requestString)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var foodItem1 = document.createElement("h3");
        foodItem1.textContent = data.products[3].title;
        listItems.append(foodItem1);  
    })
}

function getFourthItem() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=salsa&number=20&apiKey=78864f41cea947c889abb37111d67773"

    fetch(requestString)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var foodItem1 = document.createElement("h3");
        foodItem1.textContent = data.products[8].title;
        listItems.append(foodItem1);  
    })
}

function getFifthItem() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=eggs&number=40&apiKey=78864f41cea947c889abb37111d67773"

    fetch(requestString)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var foodItem1 = document.createElement("h3");
        foodItem1.textContent = data.products[7].title;
        listItems.append(foodItem1);  
    })
}

function getSixthItem() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=soup&number=40&apiKey=78864f41cea947c889abb37111d67773"

    fetch(requestString)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        for (var i = 0 ; i < data.products.length; i++) {
            console.log(data.products[i].title)
        }
        var foodItem1 = document.createElement("h3");
        foodItem1.textContent = data.products[37].title;
        listItems.append(foodItem1);  
    })
}
getFirstItem();
getSecondItem();
getThirdItem();
getFourthItem();
getFifthItem();
getSixthItem();