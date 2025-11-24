function obtenerNumeros() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let num3 = parseFloat(prompt("Ingresa el tercer número:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor ingresa números válidos");
        return;
    }

    let numeros = [num1, num2, num3];
    
    numeros.sort((a, b) => b - a);
    let mayorAMenor = numeros[0] + ", " + numeros[1] + ", " + numeros[2];
    
    numeros.sort((a, b) => a - b);
    let menorAMayor = numeros[0] + ", " + numeros[1] + ", " + numeros[2];

    let sonIguales = num1 === num2 && num2 === num3;

    let html = "<p>Números ingresados: " + num1 + ", " + num2 + ", " + num3 + "</p>";
    html += "<p>Mayor a Menor: " + mayorAMenor + "</p>";
    html += "<p>Menor a Mayor: " + menorAMayor + "</p>";

    if (sonIguales) {
        html += "<p>Los tres números son iguales</p>";
    }

}