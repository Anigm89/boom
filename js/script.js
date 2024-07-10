let numero = document.getElementById('userInput');
const time = document.getElementById('countdown');
const resultado = document.getElementById('result');
const reiniciar = document.getElementById('restart');

let aleatorio =  Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let tiempoTotal = 5;

function Actualizareloj() {
time.innerHTML = `&#9203; Cuenta atrás: ${tiempoTotal} segundos`;
    if(tiempoTotal == 0){
        
        time.innerHTML= `<span>Cuenta atrás: ${tiempoTotal} segundos</span>`
        
        //comparar resultados
        let elegido = numero.value;      
        if(elegido == aleatorio){
            const result =`<div class="ganas"> &#127870;
            Enhorabuena, has salvado el mundo! &#127942;  </div><br>
            Tu numero es ${elegido} y es igual que ${aleatorio} `
            resultado.innerHTML = result;
        }
        else{
            result = `<div class="pierdes"> &#128163;
            Oh NOO! La bomba ha explotado!! &#128128;
            </div><br>
            Tu numero es ${elegido} y ha salido ${aleatorio} `;
            resultado.innerHTML = result;
        }
        
    }else{
        tiempoTotal-=1;
        setTimeout("Actualizareloj()",1000);
    }
}

   
    Actualizareloj();


//reiniciar
reiniciar.addEventListener('click', () =>{
    location.reload();
})


