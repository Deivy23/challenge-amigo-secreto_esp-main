let amigo = [];
let numero = parseFloat(nombreAmigo);


function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);
    if (nombreAmigo == "" || isNaN(numero)){
        alert('Por favor agregar un nombre');
        return agregarAmigo;
    }else{
       amigo.push(nombreAmigo);
       console.log(amigo);
    }
    limpiar();
}
console.log(amigo);

function limpiar(){
    document.getElementById('amigo').value = '';
}