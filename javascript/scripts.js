let nombreusuario = prompt("ingrese su nombre de usuario")
let apellidoingresado = prompt("ingrese su apellido")

if ((nombreusuario == "") && (apellidoingresado)) {
    alert ("no ingresaste nombre de usuario") 
}
else {

    alert("nombre de usuario " + nombreusuario  +  apellidoingresado );
}


let entrada=prompt ("confirmar")

while (entrada != "confirmar") {
    alert ("confirme para entrar al sitio"+entrada)
    entrada=prompt ("confirme antes de salir")}
    
let index=0


function DondeEncontrarnos(lugar,localizacion){
    this.lugar = lugar;
    this.localizacion = localizacion;

}

const ubicacion =  new DondeEncontrarnos ("pampa")
const ciudad =  new DondeEncontrarnos ("san justo")

console.log (ubicacion); 'ubicacion'
console.log (ciudad); 'lugar'

