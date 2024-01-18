/*function toggleMenu() {
    var element = document.getElementById('links');
    var displayValue = window.getComputedStyle(element, null).getPropertyValue('display');
    if(displayValue=="none") {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
    }
}*/

function toggleMenu() {
    var element = document.getElementById('links');
    element.classList.toggle('visible');
}