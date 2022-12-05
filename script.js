const submit = document.querySelector(".submit");
const errorbtn = document.querySelector("#error");
const errormsg = document.querySelector("#errormsg");
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", validate)
submit.addEventListener("click", validate)

function validate(e){
    e.preventDefault()

    const inputValue = input.value.trim();
    console.log(inputValue);

    if(!isEmail(inputValue)){
        errorbtn.style.display = "block";
        errormsg.style.display = "block";
    }
    else{
        errormsg.style.display = "none";
        errorbtn.style.display = "none";
    }
}

function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}