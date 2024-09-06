//Funciones


   const saludar = function (nombre) {
      
      return `Hola, ${nombre}`;
   }

   const saludar2 = (nombre) =>{ // funcion flecha
      
      return `Hola, ${nombre}`;
   }

   const saludar3 = (nombre) => `Hola, ${nombre}`;
   

   const saludar4 = () => `Hola, Mundo`;


   const getUser = () =>
      ( {
         uid:'ABC',
         username: 'DEF'
      })
   

   console.log(getUser());


   console.log(saludar2('Krilin'));

   console.log(saludar3('Krilin2'));


   //Tarea
   // 1. Funcion de flecha
   // 2. Retornar un obketo implicito
   function getUserActivo(nombre) {
         return{
             uid:'ABC',
             username: nombre
         }
   }

   const userActivo = (nombre)=>({ //funcion flecha y objeto implicito
         uid:'ABC',
         username: nombre
   })

console.log(userActivo('Ever'));