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
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}




