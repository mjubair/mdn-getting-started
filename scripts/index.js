let myImage = document.querySelector("img");
let myTitle = document.querySelector("h1");
let myButton = document.querySelector("button");

myImage.onclick = function () {
  let src = this.getAttribute("src");

  if (src === "images/firefox.png") {
    this.setAttribute("src", "images/firefox-1.png");
  } else {
    this.setAttribute("src", "images/firefox.png");
  }
};

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myTitle.textContent = "Mozilla is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myTitle.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
