// In the name of Allah

//DOM
let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElements = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElements);
console.log(myQueryElement);
console.log(document.forms[0]);

let myElement = document.querySelector(".js");
console.log(myElement.innerHTML);
console.log(myElement.textContent);
myElement.innerHTML = "Text from <span>Main.js</span> File";
myElement.textContent = "Text from <span>Main.js</span> File";

document.images[0].src = "google.com";
document.images[0].alt = "a test picture";
document.images[0].title = "google";

let myLink = document.querySelector("a");
myLink.setAttribute("href", "up");

console.log(myLink.attributes);
console.log(myLink.hasAttribute("data"));
console.log(myLink.hasAttributes());
myLink.removeAttribute("href");

let element = document.createElement("div");
let attr = document.createAttribute("data-custom");
let text = document.createTextNode("Product One");
let comment = document.createComment("This is div");
element.className = "product";
element.setAttributeNode(attr);
element.appendChild(comment);
element.appendChild(text);
document.body.appendChild(element);