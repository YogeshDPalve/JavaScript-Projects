const btnE1 = document.querySelector(".btn");
const inputE1 = document.querySelector("input");
const messageE1 = document.querySelector(".message");
const errorE1 = document.querySelector(".error");

btnE1.addEventListener("click",displayMessage);

function displayMessage(){
    if(inputE1.value){
        messageE1.textContent = inputE1.value;
        inputE1.value ="";
    }else{
        errorE1.style.display = "block";
        setInterval(()=>{
            errorE1.style.display = "none";
        },10000);
    }
}