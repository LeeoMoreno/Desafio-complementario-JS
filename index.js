let edad = prompt("Bienvenido a nuestro Casino Online, por favor ingrese su edad")

while (edad !="ESC") {
    if (parseInt(edad) <17) {
        alert("No puedes entrar a este sitio.");
    } else if (parseInt(edad) < 18) {
        alert("Puedes entrar con un adulto, pero no puedes realizar apuestas.");
    } else {
        alert("Bienvenido al Casino Online, mucha suerte en las apuestas!")
    }

    edad = prompt("Bienvenido a nuestro Casino Online, por favor ingrese su edad.")
}