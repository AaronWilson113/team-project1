var listItems = document.getElementById("list");

function getApi() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=tomatoe&number=40&apiKey=87bd7010d4a5438794178908bda2a69e"

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

        foodItem1.textContent = data.products[15].title;

        listItems.append(foodItem1);
   
    })

}

getApi();