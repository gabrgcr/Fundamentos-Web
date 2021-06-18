let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

function validaNome(){
    if (nome.value.startsWith === " " || nome.value.length === 0)
        nome.style.backgroundColor = "#ff4d4d";
    else
        nome.style.backgroundColor = "#36b336";
}