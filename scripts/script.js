var openButton = document.querySelector("header nav button:nth-of-type(3)");
var sluitButton = document.querySelector("header nav button:nth-of-type(4)");

function openMenu() {  
    var deNav = document.querySelector("header nav");
    deNav.classList.toggle("toonMenu");
    document.documentElement.classList.toggle("toonMenu");
}  

// function sluitMenu() {
//     var deNav = document.querySelector("header nav");
//     deNav.classList.remove("toonMenu");
// }

openButton.onclick = openMenu;
// sluitButton.onclick = sluitMenu;
