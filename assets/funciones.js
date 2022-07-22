console.log('funciones')

console.warn('Escribiendo una funcion tradicional')

function saludar (){
    console.log('Hola Mora')
}

saludar()
saludar()
saludar()
saludar()
saludar()

console.warn('Escribiendo una funcion tradicional en un const')

const saludar1 = function(){
console.log('Hola Mora desde otra función')
}
saludar1()

console.warn('funcion tipo flecha')

const saludar2= ()=>{
console.log ('Saludando de la función tipo flecha')
}
saludar2()

console.warn('Escribbiendo una función de flecha con parámetro')

const saludar3 = (nombre) =>{
    console.log(`Hola ${nombre}`)
}
saludar3('sebastian mora')

console.warn('Escribbiendo una función de flecha con retorno')

const saludar4 = (nombre) => {
    return `Hola ${nombre}`
}
let saludando =saludar4('antonio')

console.log(saludando)

console.warn('Escribbiendo una función de flecha con retorno abreviada')

const saludar5 =(nombre) => `Hola ${nombre}`
let saludando2 = saludar5 ('Yolanda')
console.log(saludando2)

console.warn('Funcion con math.random')

/* // function rand(){
//     return Math.random()
// }6
// console.log(rand()) */



const rand =() => Math.random()

console.log(rand())


