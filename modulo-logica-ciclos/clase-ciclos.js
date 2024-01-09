const lista = ["eat", "sleep", "code", "sex", "reapeat"];
//* FOR i

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

//* FOR EACH

lista.forEach((item) => {
    console.log(item);
});

//* FOR OF

for (const i of lista) {
    //? Solo funciona cuando hay objetos iterables
    console.log(i);
}

//* FOR IN -> Opera con objetos y sus valores

const persona = {
    nombre: "Cid",
    edad: "22",
    sexo: "Masculino",
    hobbie: "Gym",
};

for (cualidades in persona) {
    console.log(cualidades); //? Imprime la clave
    console.log(persona[cualidades]); //? Imprime el valor
}

//* While
let counter = 0;
while (counter < 10) {
    if (counter == 4) {
        counter++;
        continue;
    } else {
        console.log(counter);
        counter++;
    }
}

//* Do while
let contador = 0;
do {
    console.log(contador);
    contador++;
} while (contador < 10);
