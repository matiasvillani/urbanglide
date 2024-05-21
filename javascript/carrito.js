const carrito = document.querySelector("#carrito")
const listacarrito = document.querySelector ("#listacarrito tbody")
const vaciarcarritobtn = document.querySelector ("#vaciarcarrito")
const listahombres = document.querySelector ("#Col")

cargareventlisteners();
function cargareventlisteners(){

    listahombres.addeventlistener("click",agregar_producto)
}

function agregar_producto()
{
    console.log("presionando en una zapatilla")
}