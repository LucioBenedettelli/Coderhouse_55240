let valor = 0;
let operacion = "";
let nuevoOperacion = false;

function pedirMoneda() {
  do {
    valor = Number(prompt("Ingrese el valor expresado en pesos"));
    operacion = prompt("A qué moneda desea convertirlo. Dolares (USD), Libras (LIB), Reales (R), Euros (EUR)");
    divisas(246, 320, 270, 52);
    nuevoOperacion = confirm("¿Quieres realizar otra operación?");
  } while (nuevoOperacion);
}

function divisas(dolar, libras, euro, reales) {
  let resultado = 0;
  let mensaje = "";

  switch (operacion.toUpperCase()) {
    case "USD":
      resultado = (valor / dolar).toFixed(2);
      mensaje = `Has convertido ${valor} pesos a ${resultado} ${operacion}`;
      break;

    case "LIB":
      resultado = (valor / libras).toFixed(2);
      mensaje = `Has convertido ${valor} pesos a ${resultado} ${operacion}`;
      break;

    case "EUR":
      resultado = (valor / euro).toFixed(2);
      mensaje = `Has convertido ${valor} pesos a ${resultado} ${operacion}`;
      break;

    case "R":
      resultado = (valor / reales).toFixed(2);
      mensaje = `Has convertido ${valor} pesos a ${resultado} ${operacion}`;
      break;

    default:
      mensaje = "No elegiste la opción correcta";
      break;
  }

  document.write(`${mensaje}<br>`);
}

pedirMoneda();
