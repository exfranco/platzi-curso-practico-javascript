function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("LadoA");
    const value1 = lado1.value;
    const valor1 = parseInt(value1)

    const lado2 = document.getElementById("LadoB");
    const value2 = lado2.value;
    const valor2 = parseInt(value2)

    const lado3 = document.getElementById("LadoC");
    const value3 = lado3.value;
    const valor3 = parseInt(value3)   

    if(valor1 == valor2 && valor1 != valor3){        
        const perimetro = perimetroTriangulo(valor1, valor2, valor3);
        console.log("El perimetro del Triangulo es " + perimetro + "cms");
    }    
    else if(valor1 == valor3 && valor1 != valor2){
        const perimetro = perimetroTriangulo(valor1, valor2, valor3);
        console.log("El perimetro del Triangulo es " + perimetro + "cms");
    }    
    else if(valor2 == valor3 && valor2 != valor1){
        const perimetro = perimetroTriangulo(valor1, valor2, valor3);
        console.log("El perimetro del Triangulo es " + perimetro + "cms");
    }    
    else{
        alert("NO es un triangulo isosceles, Dos de los lados deben ser iguales")
    }    
}

function calcularAlturaTriangulo(){    

    const lado1 = document.getElementById("LadoA");
    const value1 = lado1.value;
    const valor1 = parseInt(value1)

    const lado2 = document.getElementById("LadoB");
    const value2 = lado2.value;
    const valor2 = parseInt(value2)

    const lado3 = document.getElementById("LadoC");
    const value3 = lado3.value;
    const valor3 = parseInt(value3)   

    if(valor1 == valor2 && valor1 != valor3){        
        var ope1 = (valor1 * valor1) - ((valor3 * valor3) / 4);
        var alturaTriangulo = Math.sqrt(ope1)
        console.log("La altura del triangulo es " + alturaTriangulo + "cms");
    }    
    else if(valor1 == valor3 && valor1 != valor2){
        var ope2 = (valor1 * valor1) - ((valor2 * valor2) / 4);
        var alturaTriangulo = Math.sqrt(ope2)
        console.log("La altura del triangulo es " + alturaTriangulo + "cms");
    }    
    else if(valor2 == valor3 && valor2 != valor1){
        var ope3 = (valor2 * valor2) - ((valor1 * valor1) / 4);
        var alturaTriangulo = Math.sqrt(ope3)
        console.log("La altura del triangulo es " + alturaTriangulo + "cms");
    }    
    else{
        alert("NO es un triangulo isosceles, Dos de los lados deben ser iguales")
    }    
}





