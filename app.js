
// arreglo para contener los datos pasados por el usuario
let amigo = [];

// varible utilizada como contador para el evento 'click'
let clicc = 0;

// funcion para agregar los datos al array con una clausula para que no permita otro valor que no sea de tipo string
function agregarAmigo(){  

    let nombreAmigo = document.getElementById('amigo').value;
    limpiar('amigo');
    const regex = /^[a-zA-Z]+$/;

    if (nombreAmigo == "" ) {
        alert('Por favor agregar un nombre');
        return;
    }
    if (!isNaN(nombreAmigo) || !regex.test(nombreAmigo)){
        alert('Por favor agregar un nombre real');
        return;
    }

    else{
        if (amigo.includes(nombreAmigo)) {
            alert('Ya fue colocado ese nombre')
            return;
        } else{
            amigo.push(nombreAmigo);
            // console.log(amigo);
            agregarListado();
        }
    }
}



// funcion para limpiar

function limpiar(pasalo){
    document.getElementById(pasalo).value = "";
}


// funcion para crear las listas y agregar los datos del array a la lista
function agregarListado() {
    let listadoHTML = document.getElementById('listaAmigos');
    listadoHTML.innerHTML = "";

    for (let i = 0; i < amigo.length; i++){

        let li = document.createElement('li');
        li.textContent = amigo[i];
        listadoHTML.appendChild(li);
    }
}

// funcion para cambiar el texto del boton despues del evento click
function cambiarTexto(){
    let imagen = document.querySelector('#icono');
    let cambio = document.querySelector('#textBoton');

    if (cambio.innerText === "Sortear amigo") {
        cambio.innerText = "Reiniciar";
        imagen.src = "assets/refresh.svg";
    } else {
        cambio.innerText = "Sortear amigo";
        imagen.src = "assets/refresh.svg"; 
    }

}

// Funcion para odtener un nombre de la lista sorteada
 
function sortearAmigo() {

    let amigoSorteado = amigo[Math.floor(Math.random()*amigo.length)];
    console.log(amigoSorteado);

    if (amigo.length === 0) {
        alert('No se encuentra ningun nombre disponible');
        return;
    } 
    else {
    
        // Evento 'click' que se ejecuta una sentencia en el 1er click y reinicia la pagina el 2do click
        document.querySelector('.button-draw').addEventListener('click', ()=> {
        clicc++;
        
            console.log("Número de clics:", clicc);

            if (clicc === 1) {

                cambiarTexto();

                document.querySelector('.button-add').setAttribute('disabled', 'true');

                let listadoHTML = document.getElementById('listaAmigos');
                listadoHTML.innerHTML = "";

                let listaHTML = document.getElementById('resultado');
                listaHTML.innerHTML = "";

                let li = document.createElement('li');
                li.textContent = amigoSorteado;
                listaHTML.appendChild(li);
        
                
            } else if (clicc === 2) {
                location.reload();
            }
        
        });

        document.querySelector('.button-draw').click();

    }

}
