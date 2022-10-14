const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/wallet.png") {
    myImage.setAttribute("src", "images/wallet1.png");
  } else {
    myImage.setAttribute("src", "images/wallet.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hi ${myName} let us create a ETH Wallet `;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hi ${storedName} let us create a ETH Wallet `;
}
myButton.onclick = () => {
  setUserName();
};


