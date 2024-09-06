

const persona = 
{
   nombre: 'Tony',
   apellido: 'Caceres',
   edad: 27,
   direccion:{
      cuidad: 'New York',
      zip: 4556545,
      lat: 14547787,
      lgn: 454545454
   }
};

//console.table({persona});     
const persona2 = { ...persona}; //clon
persona2.nombre = 'Peter';


console.log({persona});     


 function getSaludo(nombre){
    return 'Hola ' + nombre;
 }

