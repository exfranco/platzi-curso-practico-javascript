const lista1 = [
    100,
    200,
    300,
    400,
    200,
    200,
    300,
    100,
    100,
    100,
    100,
    100,
]

function agregarValores(){
    const input = document.getElementById("InputArray");
    const valueTxt = input.value;
    const value = Number(valueTxt);

    lista1.push(value);    
    
    alert(lista1);
}





function calculaPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;

        }
    );

    const promedioLista = sumaLista / lista.length;
    const promedioFinal = parseInt(promedioLista)

    //return promedioLista;
    alert("esta es el promedio " + promedioFinal);
}




function calculaMedia(lista){
    const mitadLista1 = parseInt(lista.length / 2);

    function esPar(numerito){
        if (numerito % 2 === 0){
            return true;
        }else{
            return false;
        }
    }

    let mediana;

    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista1 - 1];
        const elemento2 = lista[mitadLista1];

        const promedioElemento1y2 = calculaPromedio([elemento1, elemento2]);

        mediana = promedioElemento1y2;
    } else{
        mediana = lista[mitadLista1];
    }

    alert("esta es la media " + mediana);
}






function calculaModa(lista){
    const lista1Count = {};

    lista.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else{
                lista1Count[elemento] = 1;
            }        
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1];

    alert("esta es la moda " + moda);    
}


