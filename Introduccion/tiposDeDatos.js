//Cadena de Texto
let nombre = "Miguel"; //comillas sencillas '', comillas dobles "".
let parrafo = "este es un 'parrafo'";
//let parrafo = "este es un \'parrafo\''"

//Número
const num = 4;
const num2 = -8;

//booleano
const userConnected = true;
const userDisconnected = false;

const mayorQue = 1 > 5;
console.log(mayorQue);

//arrays
const arreglo = [1, "jean", true, { propiedad: "valor" }, [1, 2, 3]]; //guarda valores
console.log(arreglo);

//objetos
const persona = {
  edad: 26,
  nombre: "Miguel",
  electrocutado: true,
  carro: {
    marca: "bmw",
    color: "azul",
  },
}; //guarda propiedades y sus valores
console.log(persona.electrocutado);

//function
function escribirHola() {
  console.log("hola zapatin con cola");
}
escribirHola();

//null
let variableNull = null;

//undefined
let variableSinDefinir;
