document.getElementById("color-changer").onclick = function () {
    let paraElements = document.getElementsByTagName("p")
    let headingThreeElement = document.getElementsByTagName("h3")
    let codeElement = document.getElementsByTagName("code")
    if (this.checked) {
        document.querySelector("body").style.backgroundColor = "#131416";
        document.querySelector("header").style.backgroundColor = "#131416";
        document.querySelector("#my-logo").style.color = "white";
        document.querySelector("#closure-heading").style.color = "#f2eb81";
        document.querySelector(".icon-change i").className = "fa fa-sun-o";
        for (let i = 0; i < paraElements.length; i++) paraElements[i].style.color = "#e1e3e0";
        for (let i = 0; i < headingThreeElement.length; i++) headingThreeElement[i].style.color = "#e1e3e0";
        for (let i = 0; i < codeElement.length; i++) codeElement[i].style.color = "#fae884";
        for (let i = 0; i < codeElement.length; i++) codeElement[i].style.backgroundColor = "black";
    }
    else {
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("header").style.backgroundColor = "white";
        document.querySelector("#my-logo").style.color = "black";
        document.querySelector("#closure-heading").style.color = "#138ec9";
        document.querySelector(".icon-change i").className = "fa fa-moon-o";
        for (let i = 0; i < paraElements.length; i++) paraElements[i].style.color = "black";
        for (let i = 0; i < headingThreeElement.length; i++) headingThreeElement[i].style.color = "black";
        for (let i = 0; i < codeElement.length; i++) codeElement[i].style.color = "black";
        for (let i = 0; i < codeElement.length; i++) codeElement[i].style.backgroundColor = "rgb(243, 243, 243)";

    }
}