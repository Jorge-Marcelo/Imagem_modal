/*
Autor: Jorge Marcelo
Data de Criação: 26/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 


/*Selecionando os elementos HTML atravez do DOM*/
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");
let span = document.getElementById("close");
let miniaturas = document.querySelectorAll(".miniatura");

/*Função que va abrir o modal*/
function abrirModal(imgSrc){
modal.style.display = "block";
modalImg.src = imgSrc;
}

/*Função que vai adicionar 
o evento de clique as miniaturas e 
abrir o modal*/
function miniatura(){
miniaturas.forEach(miniatura =>{
miniatura.addEventListener("click", function(){
abrirModal(miniatura.src);
})
})
}

/*Função que vai abrir o modal*/
function fecharModal(){
span.addEventListener("click", function(){
modal.style.display = "none";
})
}

/*Caso clique fora da imagem o modal será fechado*/
function cliqueFora(event){
window.addEventListener("click", function(event){
if (event.target === modal){
modal.style.display = "none";
}
})
}

/*Chamando as funções
miniatura, fecharModal 
w cliqueFora*/
miniatura();
fecharModal();
cliqueFora();


/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})

