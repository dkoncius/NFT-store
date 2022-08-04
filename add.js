"use strict";

var URL = "https://simple-nft-app.glitch.me";

var submit = document.getElementById("submit");
var image = document.getElementById("image");
var price = document.getElementById("price");
var nftName = document.getElementById("nftName");
var category = document.getElementById("category");

submit.addEventListener("click", function(e){
    e.preventDefault();
    
    if(image.value, category.value, price.value, nftName.value){
        var data = {
            image: image.value,
            category: category.value,
            price: Number(price.value),
            name: nftName.value
        }

        postData(data);
    } else {
        alert("Užpildykite visus laukelius")
    }
});

function postData(data){
     fetch(URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        alert(result.msg);
         window.location.href = "index.html"
      })
      .catch(e => console.log(e))
}