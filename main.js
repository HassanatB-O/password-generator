let chars = ["-", 1, "_", 2, 3, "+", 4, "z", "a", ">", ".", "/", 7, "t", "f", "y", "r", "D", "L", "c", "S", ",", "I", "|", "s", "Z", "9", "!"]
let passwordLength = 15;

let passOne = document.querySelector("#pass-one");
let passTwo = document.getElementById("pass-two")
let passThree = document.getElementById("pass-three")
let passFour = document.getElementById("pass-four")

function generatePass(){
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        passOne.value += chars[randomNumber]
    }
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        passTwo.value += chars[randomNumber]
    }
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        passThree.value += chars[randomNumber]
    }
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        passFour.value += chars[randomNumber]
    }
}

document.getElementById("copy").addEventListener('click', copy);
async function copy(){
    let text = document.querySelector("#pass-one").value;
    passOne.value = " ";
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard")
}

document.getElementById("copy1").addEventListener('click', copy1);
async function copy1(){
    let text = document.querySelector("#pass-two").value;
    passTwo.value = " ";
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard")
}

document.getElementById("copy2").addEventListener('click', copy2);
async function copy2(){
    let text = document.querySelector("#pass-three").value;
    passThree.value = " ";
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard")
}

document.getElementById("copy3").addEventListener('click', copy3);
async function copy3(){
    let text = document.querySelector("#pass-four").value;
    passFour.value = " ";
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard")
}