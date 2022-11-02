let scanf = require("scanf");

const menu = () => {
  console.log(
    `
  Menú:
  1. Suma
  2. Resta
  3. Multiplicación
  4. División
  5. Cerrar programa
  `
  );
};
const enter = () => {
  console.log("[ENTER]");
  option = scanf("%S");
  console.clear();
};

let operation;

do {
  menu();
  console.log("Ingrese una operación:");
  operation = scanf("%d");

  switch (operation) {
    case 1:
      console.clear();
      console.log("Digite el primer número");
      let sum1 = scanf("%d");
      console.log("Digite el segundo número");
      let sum2 = scanf("%d");
      if (isNaN(sum1) || isNaN(sum2)) console.log("Deben ser números");
      else {
        suma = sum1 + sum2;
        console.log(`Resultado: ${suma}`);
      }

      enter();
      break;
    case 2:
      console.clear();
      console.log("Digite el primer número");
      let res1 = scanf("%d");
      console.log("Digite el segundo número");
      let res2 = scanf("%d");

      if (isNaN(res1) || isNaN(res2)) console.log("Deben ser números");
      else {
        resta = res1 - res2;
        console.log(`Resultado: ${resta}`);
      }
      enter();
      break;
    case 3:
      console.clear();
      console.log("Digite el primer número");
      let pro1 = scanf("%d");
      console.log("Digite el segundo número");
      let pro2 = scanf("%d");

      if (isNaN(pro1) || isNaN(pro2)) console.log("Deben ser números");
      else {
        producto = pro1 * pro2;
        console.log(`Resultado: ${producto}`);
      }
      enter();
      break;
    case 4:
      console.clear();
      console.log("Digite el primer número");
      let div1 = scanf("%d");
      console.log("Digite el segundo número");
      let div2 = scanf("%d");

      if (isNaN(div1) || isNaN(div2)) console.log("Deben ser números");
      else {
        division = div1 / div2;
        console.log(`Resultado: ${division}`);
      }
      enter();
      break;

    default:
      console.log("Finalizando...");
      break;
  }
} while (operation !== 5);
