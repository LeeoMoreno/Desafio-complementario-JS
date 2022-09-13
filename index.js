let edad = parseInt(
  prompt("Bienvenido a nuestro Casino Online, por favor ingrese su edad"),
);

function getEdad(edad) {
  //Funcion para obtener Edad
  if (edad < 17) {
    alert("No puedes entrar a este sitio.");
  } else if (edad < 18) {
    alert("Puedes entrar con un adulto, pero no puedes realizar apuestas.");
  } else if (edad >= 18) {
    //Si tiene mas de 18 pasa
    alert("Bienvenido al Casino Online, mucha suerte en las apuestas!");
  } else {
    //VALIDAMOS que ponga algo si o si
    alert("Por favor escribe tu edad");
    edad = parseInt(
      prompt("Bienvenido a nuestro Casino Online, por favor ingrese su edad"),
    ); //Volvemos a pedir la edad
    getEdad(edad); //Volvemos a llamar a la funcion getEdad con la nueva edad y vuelve a repetir el ciclo
  }
}

getEdad(edad); //Llamamos a la funcion

/*
    Lo que use aca fue RECURSIVIDAD, no se ve en este curso, es una manera de volver a llamar una funcion dentro de otra, sirve para estos casos de validacion y muchisimas mas cosas, pero no te preocupes ;)
*/
