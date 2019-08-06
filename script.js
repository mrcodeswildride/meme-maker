var box = document.getElementById("box");
var topText = document.getElementById("topText");
var bottomText = document.getElementById("bottomText");

var topTextInput = document.getElementById("topTextInput");
var topTextColor = document.getElementById("topTextColor");
var topTextFontSize = document.getElementById("topTextFontSize");
var bottomTextInput = document.getElementById("bottomTextInput");
var bottomTextColor = document.getElementById("bottomTextColor");
var bottomTextFontSize = document.getElementById("bottomTextFontSize");
var backgroundImage = document.getElementById("backgroundImage");

topTextInput.addEventListener("input", setTopText);
topTextColor.addEventListener("input", setTopTextColor);
topTextFontSize.addEventListener("input", setTopTextFontSize);
bottomTextInput.addEventListener("input", setBottomText);
bottomTextColor.addEventListener("input", setBottomTextColor);
bottomTextFontSize.addEventListener("input", setBottomTextFontSize);
backgroundImage.addEventListener("input", setBackgroundImage);

function setTopText() {
    topText.innerHTML = topTextInput.value;
}

function setTopTextColor() {
    topText.style.color = topTextColor.value;
}

function setTopTextFontSize() {
    topText.style.fontSize = topTextFontSize.value + "px";
}

function setBottomText() {
    bottomText.innerHTML = bottomTextInput.value;
}

function setBottomTextColor() {
    bottomText.style.color = bottomTextColor.value;
}

function setBottomTextFontSize() {
    bottomText.style.fontSize = bottomTextFontSize.value + "px";
}

function setBackgroundImage() {
    box.style.backgroundImage = 'url("' + backgroundImage.value + '")';
}
