const lista1 = [
    1,
    2,
    3,
    4,
    4,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    2,
    2,
    1,
]

function agregarValores(){
    const input = document.getElementById("InputArray");
    const valueTxt = input.value;
    const value = Number(valueTxt);

    lista1.push(value);    
    
    alert(lista1);
}

const lista1Count = {};

function calculaPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;

        }
    );

    const promedioLista = sumaLista / lista.length;

    //return promedioLista;
    alert("esta es el promedio " + promedioLista);
}


function calculaModa(){
    lista1.map(
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

    alert(moda);
}


