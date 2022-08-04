let quotesDiv = document.getElementById("quotes")
let catDiv = document.getElementById("cat-pic")
let catButton = document.getElementById("give-cat")

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