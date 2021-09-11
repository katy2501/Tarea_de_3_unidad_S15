const datos ={
    image:'https://cdn.pixabay.com/photo/2018/04/28/22/03/tree-3358468_960_720.jpg' ,
    correo:'vangulor@unemi.edu.ec'
}
//console.log(datos)
const mostrarDatos = (avatar) => 
    `
        <img src=${avatar.image} alt=${avatar.correo}/>
    `
//let img = mostrarDatos(datos)
console.log(x)
const $root = document.getElementById("root")
$root.innerHTML="<h2>Destructuring</h2>"
$root.innerHTML += mostrarDatos(datos)
