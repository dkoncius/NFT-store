"use strict";

var URL = "https://simple-nft-app.glitch.me";
var cards = document.querySelector(".cards");

function getUrl(){
    return fetch(URL)
.then(response => response.json());
}

function loadCards(data){
    // Clean cards element
    cards.innerHTML = "";

    if(data){
        data.map(x => {
            var newCard = document.createElement("div");
            newCard.classList.add("card");
            newCard.innerHTML =
            `
            <img src="${x.image}" alt="${x.category}">
            <div class="text">
                <h3 class="name">${x.name}</h3>
                <p class="category">${x.category}</p>
                <p class="price"><b>Price: </b>$${x.price.toLocaleString("en")}</p>
            </div>
            `

            cards.style.opacity = 0;

            setTimeout(function(){
                cards.prepend(newCard);
                cards.style.opacity = 1;
            }, 300);
        })

        return data;
    }
  
    console.log(data);
}

getUrl()
.then(loadCards)
.then(filterDataByCity)
.catch(e => console.log(e))

function filterDataByCity(data){
    var cityBtns = document.getElementsByClassName("btn");
    for(var x of cityBtns){
        x.addEventListener("click", function(){

            // Filters data
            if(this.innerText != "All"){
                var filter = data.filter(x => x.category === this.innerText);
                loadCards(filter)
            } else {
                loadCards(data);
            }

            // Add style to button
            for(var x of cityBtns){
                x.classList.remove("active");
            }

            this.classList.add("active");
        })
    }
}

