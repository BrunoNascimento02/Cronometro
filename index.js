let sec = 1;
let min = 0;
let hour= 0;
let getRelogio = document.querySelector('#relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const marcar = document.querySelector('.marcador');
const deletar = document.querySelector('.apagar')
let p = document.querySelector('p');
let voltas = 0
let iniciou;


function zeroEsquerda(indice){
    if(indice <= 9){
        return "0"+indice
    }else{return indice}
}

iniciar.addEventListener('click',() => {
    iniciar.style.display = 'none';
    iniciou = setInterval (() => {
        getRelogio.innerHTML = zeroEsquerda(hour)+":"+zeroEsquerda(min) + ":" + zeroEsquerda(sec++);
        marcar.style.display ='inline'
        if ( sec == 59){
            min++;
            sec = 0;
        }
        if (min == 60){
            min = 0;
            hour++
        }
        getRelogio.style.color = 'white'
    },1000)
})

function criaParagrafo(){
    let pai = document.querySelector("header");
    let filha = document.createElement("p")
    pai.appendChild(filha);
    if(filha.innerHTML == "00:00:0-1"){filha.innerHTML = "00:00:00"}
    filha.innerHTML = zeroEsquerda(hour)+":"+zeroEsquerda(min) + ":" + zeroEsquerda(sec-1);
}

pausar.addEventListener('click',()=>{
    clearTimeout(iniciou);
    getRelogio.style.color = 'yellow';
    iniciar.style.display = 'inline';
    marcar.style.display = 'inline'
})

zerar.addEventListener('click', () => {
    clearTimeout(iniciou)
    getRelogio.innerHTML = "00:00:00";
    sec = 1;
    min = 0;
    hour = 0;
    iniciar.style.display = 'inline'
    marcar.style.display = 'none'
    p.style.display ='none';
})
let header = document.querySelector('header');

deletar.addEventListener('click', () =>{
    removeParagrafo()
    if(header.innerHTML == ""){
        deletar.style.display = "none"
    }else{deletar.style.display ="inline"}
})

marcar.addEventListener('click',()=>{
    if(header.innerHTML == "none"){
        deletar.style.display = "none"
    }else{deletar.style.display ="inline"}
    criaParagrafo()
})

function removeParagrafo(){
    let remove1 = document.querySelector('p')
    remove1.remove('p')
}
