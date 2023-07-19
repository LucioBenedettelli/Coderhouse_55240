// Obtener el formulario y el botón de enviar
var form = document.querySelector('form');

var submitButton = form.querySelector('button[type="submit"]');
//Esto buscará el evento con tag <button> que tenga el type submit

// Agregar el evento submit al formulario
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Evitar que el formulario se envíe

  // Obtener los valores de los campos
  var nombreApellido = form.querySelector('#nombreApellido').value;
  var telefono = form.querySelector('#telefono').value;
  var email = form.querySelector('#email').value;
  var direccion = form.querySelector('#direccion').value;
  var consulta = form.querySelector('#consulta').value;

  // Crear un objeto con los valores ingresados
  var datosUsuario = {
    nombreApellido: nombreApellido,
    telefono: telefono,
    email: email,
    direccion: direccion,
    consulta: consulta
  };

  // Aquí puedes hacer lo que desees con el objeto datosUsuario
  // Por ejemplo, puedes almacenarlo en un array
  var registros = [];
  registros.push(datosUsuario);

  // Mostrar los datos registrados en la consola (solo para verificar)
  console.log(registros);

  // Puedes realizar otras acciones aquí, como enviar los datos al servidor, etc.
  alert("Has enviado los datos. Pronto te contactaremos")
  // Restablecer el formulario
  form.reset();
});
