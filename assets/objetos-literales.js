console.log('objetos literales')
console.warn('creando un objeto literal')

const personaje={
    nombre: 'Tony Stark',
    codoeName: 'Ironman',
    estaVivo: false,
    edad:40,
    corrds: {
        lat: 34.034,
        lng: -118.7
    },
    trajes: ['Mark I','Mark V','Hulkbuster'],
    direccion:{
        zip:'10880, 90265',
        ubicacion:'Malibu California',
    },
    'ultima-pelicula': 'End Game',
}
console.warn('Accediendo al objeto y sus propiedades')
console.log(personaje)
console.log( `nombre: ${personaje.nombre}`)
console.log( `apodo: ${personaje['codoeName']}`)
console.log( `edad: ${personaje.edad}`)
console.log( `latitud: ${personaje.corrds.lat}`)


let x ='estaVivo'
console.log(`está vivo: ${personaje[x]}`)
console.log(`última pelicula: ${personaje['ultima-pelicula']}`)

console.warn('Borrando una propiedad del objeto') 

delete personaje.edad
console.log({personaje})


console.warn('Creando una nueva propiedad del objeto')
personaje.casado = false
console.log({personaje})

