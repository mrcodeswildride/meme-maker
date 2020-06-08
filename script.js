let meme = document.getElementById(`meme`)
let topParagraph = document.getElementById(`topParagraph`)
let bottomParagraph = document.getElementById(`bottomParagraph`)

let topText = document.getElementById(`topText`)
let topColor = document.getElementById(`topColor`)
let topSize = document.getElementById(`topSize`)

let bottomText = document.getElementById(`bottomText`)
let bottomColor = document.getElementById(`bottomColor`)
let bottomSize = document.getElementById(`bottomSize`)

let dropdown = document.getElementById(`dropdown`)

topText.addEventListener(`input`, showTopText)
topColor.addEventListener(`input`, changeTopColor)
topSize.addEventListener(`input`, changeTopSize)

bottomText.addEventListener(`input`, showBottomText)
bottomColor.addEventListener(`input`, changeBottomColor)
bottomSize.addEventListener(`input`, changeBottomSize)

dropdown.addEventListener(`change`, changeImage)

function showTopText() {
  topParagraph.innerHTML = topText.value
}

function changeTopColor() {
  topParagraph.style.color = topColor.value
}

function changeTopSize() {
  topParagraph.style.fontSize =  `${topSize.value}px`
}

function showBottomText() {
  bottomParagraph.innerHTML = bottomText.value
}

function changeBottomColor() {
  bottomParagraph.style.color = bottomColor.value
}

function changeBottomSize() {
  bottomParagraph.style.fontSize = `${bottomSize.value}px`
}

function changeImage() {
  meme.style.backgroundImage = `url("${dropdown.value}")`
}