let quotesDiv = document.getElementById("quotes")

let catDiv = document.getElementById("cat-pic")
let catButton = document.getElementById("give-cat")
let firstButton = document.getElementById("first-button")
let secondButton = document.getElementById("second-button")
let thirdButton = document.getElementById("third-button")


fetch("https://api.kanye.rest")
.then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
})

catButton.addEventListener("click", evt => {
    fetch("https://api.thecatapi.com/v1/images/search?")
    .then(res => res.json())
    .then(cats => {
        cats.forEach(cat => {
            catDiv.innerHTML = `<h3>Some cat and a unicode cat &#128049; </h3>
            <img src="${cat.url}" alt="kitty" />`
        })
    })
})

function modifyCounter(counter, displayCounter){
    counter += 1
    displayCounter.innerHTML = `<p> ${counter} </p>`
    return counter
}

let firstButtonClickCount = 0
let firstButtonClickCountDisplay = document.getElementById("first-button-count")
firstButton.addEventListener("click", evt => modifyCounter(firstButtonClickCount, firstButtonClickCountDisplay))