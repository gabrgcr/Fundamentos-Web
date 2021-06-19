let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOK = false;
let emailOK = false;
let assuntoOK = false;
let mapa=document.querySelector("#mapa");

function validaNome(){
    if (nome.value.startsWith === " " || nome.value.length === 0)
    {
        nome.style.backgroundColor = "#ff4d4d";
        nomeOK = false;
    }
    else
    {
        nome.style.backgroundColor = "#36b336";
        nomeOK = true;
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#email");

    if (email.value.indexOf("@") < 1 || email.value.indexOf(".") < 3 || email.value.length < 6) {
        email.style.backgroundColor = "#ff4d4d";
        emailOK = false;
    }
    else
    {
        email.style.backgroundColor = "#36b336";
        emailOK = true;
    }
}

function enviar(){
    if (nomeOK == true && emailOK == true)
    {
        alert("Formulário enviado com sucesso!")
    }
    else
    {
        alert("Preencha todos os campos corretamente!")
    }
}

function mapaZoom(){
    mapa.style.width = 800px;
    mapa.style.height = 600px;
}

function mapaNormal(){
    mapa.style.width = 400px;
    mapa.style.height = 250px;
}