const numeros = [20,40,20,80,100]
let alumnos = [
    {nombre:"Laura",n1:20,n2:50},
    {nombre:"Pablo",n1:50,n2:50},
    {nombre:"Jose",n1:40,n2:50},
    {nombre:"Danna",n1:40,n2:40},
    {nombre:"Noely",n1:30,n2:40},
    {nombre:"Chila",n1:50,n2:40},
]
console.clear()
//console.log("Alumnos → ",alumnos[1].nombre)
//for (pos=0;pos<alumnos.length;pos++)
    //console.log("Alumnos → ",alumnos[pos].nombre)
//lumnos.forEach(alumno => {
   // console.log(alumno)
//});
const fun = alumno =>{
    prom=alumno.n1+alumno.n2
    console.log(alumno.nombre,prom)
}
//alumnos.forEach(fun);

const items = alumnos.map (item => {
     prom=(item.n1+item.n2)/2
     return [item.nombre,prom]
 });
//console.log(items)
const items = alumnos.filter (item => item.nombre!="Jose");
//console.log(items) 
alumnos= [...items] 
//console.log(alumnos)   