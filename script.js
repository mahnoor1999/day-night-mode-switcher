let bodyBgColor = document.querySelector("body");
let headerBgColor = document.querySelector("header");
let logoColor = document.querySelector("#my-logo");
let headingColor = document.querySelector("#closure-heading");
let iconClass = document.querySelector(".icon-change i");
let paraElements = document.getElementsByTagName("p");
let headingThreeElement = document.getElementsByTagName("h3");
let codeElement = document.getElementsByTagName("code");
let iconCheckbox = document.getElementById("color-changer");
let dark = {
  bodyBg: "#131416",
  headerBg: "#131416",
  logoColor: "white",
  headingColor: "#f2eb81",
};
let light = {
  bodyBg: "white",
  headerBg: "white",
  logoColor:  "black",
  headingColor: "#138ec9",
};

iconCheckbox.onclick = function () {
  if (this.checked) {
    bodyBgColor.style.backgroundColor = dark.bodyBg;
    headerBgColor.style.backgroundColor = dark.headerBg;
    logoColor.style.color = dark.logoColor;
    headingColor.style.color = dark.headingColor;
    iconClass.className = "fa fa-sun-o";
    for (let i = 0; i < paraElements.length; i++)
      paraElements[i].style.color = "#e1e3e0";
    for (let i = 0; i < headingThreeElement.length; i++)
      headingThreeElement[i].style.color = "#e1e3e0";
    for (let i = 0; i < codeElement.length; i++)
      codeElement[i].style.color = "#fae884";
    for (let i = 0; i < codeElement.length; i++)
      codeElement[i].style.backgroundColor = "black";
  } else {
    bodyBgColor.style.backgroundColor = light.bodyBg;
    headerBgColor.style.backgroundColor = light.headerBg;
    logoColor.style.color = light.logoColor;
    headingColor.style.color = light.headingColor;
    iconClass.className = "fa fa-moon-o";
    for (let i = 0; i < paraElements.length; i++)
      paraElements[i].style.color = "black";
    for (let i = 0; i < headingThreeElement.length; i++)
      headingThreeElement[i].style.color = "black";
    for (let i = 0; i < codeElement.length; i++)
      codeElement[i].style.color = "black";
    for (let i = 0; i < codeElement.length; i++)
      codeElement[i].style.backgroundColor = "rgb(243, 243, 243)";
  }
};
