
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"; /*Aqui vai ser dado as opções de letras ou numeros de sua preferencia*/
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value; /*Pega a quantidade de caracteres que o usuario quer*/

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

//função para criar senha aleatoria 
function generatePassword(){
    //"Variavel" pass
    let pass = "";
    
     
    for(let i=0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random()* n ));
         
    }
    
    containerPassword.classList.remove("hide"); //fazer a senha apararecer na tela 
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
