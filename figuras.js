// Código del Cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
};
function areaCuadrado(lado){
    return lado * lado
};

// Cógigo del Triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};
function areaTriangulo(base, altura){
    return (base * altura) / 2;
};

// Código del Circulo
const PI = Math.PI;
function diametroCirculo(radio){
    return radio * 2;
};
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};
function areaCirculo(radio){
    return (radio * radio) * PI;
}




//Aqui Interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert("El Perimetro del Cuadrado es " + perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;    
    const area = areaCuadrado(value);
    alert("El area del Cuadrado es " + area);
}

//Triangulo

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTriangulo1");
    const value1 = lado1.value;
    const valor1 = parseInt(value1)

    const lado2 = document.getElementById("InputTriangulo2");
    const value2 = lado2.value;
    const valor2 = parseInt(value2)

    const base = document.getElementById("InputTriangulo3");
    const value3 = base.value;
    const valor3 = parseInt(value3)
    
    const perimetro = perimetroTriangulo(valor1, valor2, valor3);
    alert("El perimetro del Triangulo es " + perimetro);    
}
function calcularAreaTriangulo(){
    const base = document.getElementById("InputTriangulo3");
    const value3 = base.value;

    const altura = document.getElementById("InputTriangulo4");
    const value4 = altura.value;
    
    const area = areaTriangulo(value3, value4);
    alert("El area del Triangulo es " + area);
}

//circulo

function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const diametro = diametroCirculo(value);
    alert("El diametro del Circulo es " + diametro);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const perimetro = perimetroCirculo(value);
    alert("El perimetro del Circulo es " + perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const area = areaCirculo(value);
    alert("El area del Circulo es " + area);
}




