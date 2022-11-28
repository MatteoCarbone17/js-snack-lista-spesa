
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.//


let listElements = [
    'Element1',
    'Element2',
    'Element3',
    'Element4',
    'Element5',
    'Element6',
    'Element7',
    'Element8',
    'Element9',
    'Element10',
    'Element11',
    'Element12',
    'Element13',

];


const liElement = document.getElementById(output);


let i = 0;
while ( i < listElements.length ) {
    
    document.getElementById("output").innerHTML = listElements[i]
    i++;
    console.log(listElements[i])
}