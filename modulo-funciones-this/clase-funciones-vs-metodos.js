//* Capacidades que tienen las funciones al igual que otros objetos

// // 1. Pasar funciones como argumentos -> //! CALLBACK
// function a() {} //! <- esta es la función callback
// function b(a) {} //! <- aqui esta el callback
// b;

// // 2. Retornar Funciones
// function a() {
//   function b() {}
//   return b;
// }

// 3. Asignar funciones a variables -> expresión de función
const a = function () {
  //! Aqui ya no se le pone nombre
};

// // Tener propiedades y metodos:
// function abc() {}
// const obj = {};
// abc.call(obj);

// // Anidar funciones  | Nested functions
// function a() {
//   function b() {
//     function c() {}
//     c();
//   }
//   b();
// }
// a();

//* es posible almacenar funciones en objetos
const rocket = {
  mainName: "falcon 9",
  launchMessage: function launchMessage() {
    console.log("Al infinito y más allá!");
  }, //! <- Esto es un metodo de un objeto
};
rocket.launchMessage();
