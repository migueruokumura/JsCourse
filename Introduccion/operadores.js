//operadores aritméticos

const resultadoSum = 10 + 10;
const resultadoRes = 10 - 10;
console.log(resultadoRes);

const resMod = 10 % 3; // sobrante de la división

let num = 1;
console.log(num);
num++;
console.log(num);

//operadores de asignación
let num2 = 10;
// num2 = num2 + 5;
num2 += 5; //15
console.log(num2);

num2 -= 3; //12
console.log(num2);

//operadores de compración
const resCompMayorQue = 5 > 1; //true
const resCompMayorIgualQue = 20 >= 20; //true

const resIgualA = 10 == "10"; // true
const resIgualAType = 10 === "10"; // false

//operador ternario
const resTern =
  7 > 1
    ? "El primer valor es mayor que el segundo"
    : "El segundo valor es mayor que el primero";
console.log(resTern);
