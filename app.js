let amigo = [];
// let numero = parseFloat(nombreAmigo);

// funcion para agregar los datos al array con una clausula para que no permita otro valor que no sea de tipo string

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    limpiar();
    if (nombreAmigo == "" || !isNaN(nombreAmigo)){
        alert('Por favor agregar un nombre');
        return;
    }else{
        if (amigo.includes(nombreAmigo)) {
            alert('Ya fue colocado ese nombre')
            return;
        } else{
            amigo.push(nombreAmigo);
            console.log(amigo);
            agregarListado();
        }
    }
}



// funcion para limpiar

function limpiar(){
    document.getElementById('amigo').value = '';
}


// funcion para crear las listas y agregar los datos del array a la lista
function agregarListado() {
    let listadoHTML = document.getElementById('listaAmigos');
    listadoHTML.innerHTML = ""
    for (let i = 0; i < amigo.length; i++){
        let li = document.createElement('li');
        li.textContent = amigo[i];
        listadoHTML.appendChild(li);
        // console.log(amigo)
    }
}
function cambiarTexto(){
    let boton = document.querySelector('.button-draw');
    let imagen = document.querySelector('#icono');
    let cambio = document.querySelector('#textBoton');

    if (cambio.innerText === "Sortear amigo") {
        cambio.innerText = "Reiniciar";
        imagen.src = "assets/play_circle_outline.png";
    } else {
        cambio.innerText = "Sortear amigo";
        imagen.src = "assets/play_circle_outline.png";
    }

}
 
function sortearAmigo() {
    let amigoSorteado = amigo[Math.floor(Math.random()*amigo.length)];
    console.log(amigoSorteado);
    cambiarTexto();

    if (amigo =="") {
        alert('no se encuentra ningun nombre disponible')
        return;
    } else {
    
         let listadoHTML = document.getElementById('listaAmigos');
         listadoHTML.innerHTML = "";

         let listaHTML = document.getElementById('resultado');
         listaHTML.innerHTML = "";

         let li = document.createElement('li');
         li.textContent = amigoSorteado;
         listaHTML.appendChild(li);
        
    }
   


}
