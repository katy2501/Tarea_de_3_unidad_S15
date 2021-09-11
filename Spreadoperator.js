//arreglos 
const pares =[2,4,6,8,10]
const impares =[1,3,5,7,9]
const numeros1 =pares.concat(impares)
const numeros2 =[...impares,...pares]
//console.log(numeros1,numeros2)
//Objectos
let precio=4
const articulo ={
    descripcion:'Coca cola',
    precio,
    stock:1000
}
const art={...articulo}
art.id=1
//console.log('articulo',articulo)
//console.log('ART',art)
const articulo2 ={
    ...articulo,
    precio:5,
    ['stock']:500
}
//console.log(articulo2)
const masDatos=({precio,stock})=>{
    console.log("Faltante",precio,stock)
}

const mostrarArticulos=({descripcion,...props}) => {
    console.log(descripcion,props)
    masDatos({...props})
}
mostrarArticulos(articulo)