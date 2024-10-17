/* Criando slideshow */

// declarando as variáveis

let imagens =[
    "src/assets/img1.jpg",
    "src/assets/img2.jpg",
    "src/assets/img3.jpg"
];

let i = 0;
let time = 3000;

function slideShow(){
    document.getElementById('image').src=imagens[i]
    i++;
    if(i == imagens.length) {i = 0;}
    setTimeout('slideShow()', time)
}
slideShow();

// Cadastrandono formulário

// Declarando a variável e recebendo o id do form
let form = document.getElementById('form')
    // Criando o evento que ao clicar ele primeiro previne o formulário Ex. Load.
    form.addEventListener('submit', function(e){
    e.preventDefault();

    // Passando os campos que vão ser manipulados pelo form ao cadastras no input
    let[nome, email]=['nome', 'email'].map(name =>
    // O querySelector vai pegar o que for digitado no input
    form.querySelector(`[name=${name}]`).value);
    // Passando o que foi digitado e mostrando na tela o nome e o email
    document.getElementById('1').innerHTML= nome;
    document.getElementById('2').innerHTML= email;
    console.log(nome)
})
