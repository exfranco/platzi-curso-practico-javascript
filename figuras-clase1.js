// Código del Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los Lados del cuadrado miden " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del Triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("Los Lados del triangulo miden " + ladoTriangulo1 + "cm, " +  ladoTriangulo2 + "cm y " + baseTriangulo + "cm");
console.log("La altura del triangulo es " + alturaTriangulo + "cm");
console.log("El perimetro del Triangulo es " + perimetroTriangulo + "cm");
console.log("El area del Triangulo es " + areaTriangulo + "cm^2");
console.groupEnd();

// Código del Circulo
console.group("Circulos");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El radio del Circulo es " + radioCirculo + "cm");
console.log("El diametro del Circulo es " + diametroCirculo + "cm");
console.log("PI es " + PI);
console.log("El perimetro del Circulo es " + perimetroCirculo + "cm");
console.log("El area del Circulo es " + areaCirculo + "cm^2");
console.groupEnd();



