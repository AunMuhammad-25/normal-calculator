const display=document.getElementById("display");
const button=document.querySelectorAll(".btn");
const clearButton=document.getElementById("clear");
const equalsButton=document.getElementById("equals");

button.forEach(function (button) {
    button.addEventListener("click", function () {
        display.value += button.getAttribute("data-value");
        
    })
    
})

clearButton.addEventListener("click" , function () {
    display.value="";
    
})

equalsButton.addEventListener("click" , function () {
    display.value=eval(display.value);
    
})