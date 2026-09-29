const prompt = require("prompt-sync")();

function ordenarNumeroMenorMayor(num1,num2,num3) {
  let menorMayor = [];

  // console.log(num1,num2,num3)
  if (num1 < num2 && num1 < num3) {
    //num1 menor que todos
    menorMayor.push(num1);
    if (num2 < num3) {
      menorMayor.push(num2);
      menorMayor.push(num3);
    }else{
      menorMayor.push(num3);
      menorMayor.push(num2);

    }

  } else if (num2 < num3 && num2 < num1) {
    menorMayor.push(num2);
    if (num1 < num3) {
      menorMayor.push(num1);
      menorMayor.push(num3);
    } else {
      menorMayor.push(num3);
      menorMayor.push(num1);
    }
  } else if (num3 < num2 && num3 < num1) {
    menorMayor.push(num3);
    if (num1 < num2) {
      menorMayor.push(num1);
      menorMayor.push(num2);
    } else {
      menorMayor.push(num2);
      menorMayor.push(num1);
    }
  }

  return menorMayor;
}

function ordenarNumeroMayorMenor(num1,num2,num3) {
  let mayorMenor = [];

  // console.log(num1,num2,num3)

  if (num1 > num2 && num1 > num3) {
    //num1 menor que todos
    mayorMenor.push(num1);
    if (num2 > num3) {
      mayorMenor.push(num2);
      mayorMenor.push(num3);
    }else{
      mayorMenor.push(num3);
      mayorMenor.push(num2);

    }
  } else if (num2 > num3 && num2 > num1) {
    mayorMenor.push(num2);
    if (num1 > num3) {
      mayorMenor.push(num1);
      mayorMenor.push(num3);
    } else {
      mayorMenor.push(num3);
      mayorMenor.push(num1);
    }
  } else if (num3 > num2 && num3 > num1) {
    mayorMenor.push(num3);
    if (num1 > num2) {
      mayorMenor.push(num1);
      mayorMenor.push(num2);
    } else {
      mayorMenor.push(num2);
      mayorMenor.push(num1);
    }
  }
  return mayorMenor;
}

let num1, num2, num3;

num1 = Number(prompt("Ingrese el primer número: "));
num2 = Number(prompt("Ingrese el segundo número: "));
num3 = Number(prompt("Ingrese el tercer número: "));
console.log(`Núermos ingresados: [${num1},${num2},${num3}]`)

console.log("Números Menor a Mayor : ",ordenarNumeroMenorMayor(num1,num2,num3));
console.log("Números de Mayor a Menor: ",ordenarNumeroMayorMenor(num1,num2,num3));