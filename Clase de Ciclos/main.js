// La idea de este programa es ingresar un valor en pesos y que me lo convierta en otra moneda. Vamos a convertir de pesos a dolares, reales, libras y euros.

let valor = 0;
let operacion = ""
let resultado = 0
let nuevoOperacion = false 

do {
    valor = Number(prompt("Ingrese el valor expresado en pesos"))
    operacion = prompt("A que moneda desea convertirlo. Dolares (USD), Libras (LIB), Reales (R), Euros (EUR)")
    
    switch (operacion.toUpperCase()) {
        case "USD":
            resultado = valor / 246
            resultado = resultado.toFixed(2)
            alert("Te quedarán" + " " + resultado + " " + "dolares")
            document.write(`Has convertido ${valor} de pesos a ${resultado} ${operacion} <br>`)
            break;

            case "LIB":
            resultado = valor / 320
            resultado = resultado.toFixed(2)
            alert("Te quedarán" + " "  + resultado + " " + "libras")
            document.write(`Has convertido ${valor} de pesos a ${resultado} ${operacion} <br>`)
            break;

            case "EUR":
            resultado = valor / 270
            resultado = resultado.toFixed(2)
            alert("Te quedarán" + " " + resultado + " " + "euros")
            document.write(`Has convertido ${valor} de pesos a ${resultado} ${operacion} <br>`)
            break;

            case "R":
                resultado = valor / 52
                resultado = resultado.toFixed(2)
                alert("Te quedarán" + " " + resultado + " " + "reales")
                document.write(`Has convertido ${valor} de pesos a ${resultado} ${operacion} <br>`)
                break;


    
        default:
            alert("No elegiste la opcion correcta")
            valor = 0
            operacion = 0
            break;
    }

    nuevoOperacion = confirm("Quieres realizar otra operacion?")
    console.log(nuevoOperacion)
} while(nuevoOperacion)