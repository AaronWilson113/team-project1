var listItems = document.getElementById("list");
var input = document.getElementById("input");
var apiKey = "5f98d4bec4884e4aaefb1ad9c736d947"
function getFirstItem() {

    var requestString = "https://api.spoonacular.com/food/products/search?query=tomatoe&number=20&apiKey=5f98d4bec4884e4aaefb1ad9c736d947"

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

    var requestString = "https://api.spoonacular.com/food/products/search?query=apples&number=20&apiKey=5f98d4bec4884e4aaefb1ad9c736d947"

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

    var requestString = "https://api.spoonacular.com/food/products/search?query=trailmix&number=20&apiKey=5f98d4bec4884e4aaefb1ad9c736d947"

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

    var requestString = "https://api.spoonacular.com/food/products/search?query=salsa&number=20&apiKey=5f98d4bec4884e4aaefb1ad9c736d947"

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

    var requestString = "https://api.spoonacular.com/food/products/search?query=eggs&number=40&apiKey=5f98d4bec4884e4aaefb1ad9c736d947"

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

    var requestString = "https://api.spoonacular.com/food/products/search?query=soup&number=40&apiKey=5f98d4bec4884e4aaefb1ad9c736d947"

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

function getTomatoData(){
    var foodDataApi = "https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1103276&api_key=XFPwxrCBhyPpLKYcOMBeL1x6bvAgVxL9GeTMaxfM"
        fetch(foodDataApi)
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          for (var i = 0; i < data[0].foodNutrients.length; i++){
            console.log("Tomato Nutrients: " + data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount)
            
          }
        });
  }

  function getAppleData(){
    var foodDataApi = "https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1102644&api_key=XFPwxrCBhyPpLKYcOMBeL1x6bvAgVxL9GeTMaxfM"
        fetch(foodDataApi)
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          for (var i = 0; i < data[0].foodNutrients.length; i++){
            console.log("Apple Nutrients: " + data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount)
          }
        });
  }

  function getJumboEggData(){
    var foodDataApi = "https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1663010&api_key=XFPwxrCBhyPpLKYcOMBeL1x6bvAgVxL9GeTMaxfM"
        fetch(foodDataApi)
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          for (var i = 0; i < data[0].foodNutrients.length; i++){
            console.log("Jumbo Brown Egg Nutrients: " + data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount)
          }
        });
  }
  function getCraisinData(){
    var foodDataApi = "https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1919941&api_key=XFPwxrCBhyPpLKYcOMBeL1x6bvAgVxL9GeTMaxfM"
        fetch(foodDataApi)
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          for (var i = 0; i < data[0].foodNutrients.length; i++){
            console.log("Craisin Trailmix Nutrients: " + data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount)
          }
        });
  }
  function getChiliData(){
    var foodDataApi = "https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1913808&api_key=XFPwxrCBhyPpLKYcOMBeL1x6bvAgVxL9GeTMaxfM"
        fetch(foodDataApi)
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          for (var i = 0; i < data[0].foodNutrients.length; i++){
            console.log('Chili Mix Nutrients: ' + data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount)
          }
        });
  }
  function getSalsaData(){
    var foodDataApi = "https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1855206&api_key=XFPwxrCBhyPpLKYcOMBeL1x6bvAgVxL9GeTMaxfM"
        fetch(foodDataApi)
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          for (var i = 0; i < data[0].foodNutrients.length; i++){
            console.log("Amy's Salsa Nutrients: " + data[0].foodNutrients[i].nutrient.name + ': ' + data[0].foodNutrients[i].amount)
          }
        });
  }


  
getFirstItem();
getSecondItem();
getThirdItem();
getFourthItem();
getFifthItem();
getSixthItem();
getTomatoData();
getAppleData();
getJumboEggData();
getCraisinData();
getChiliData();
getSalsaData();
