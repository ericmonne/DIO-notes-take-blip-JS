const MELANCIA = {
    value: 2,
}

const MELAO = {
    value: 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg)
}

const NUMEROS = [1,2,3,4,5];

console.log('this -> melancia', mapComThis(NUMEROS, MELANCIA));

console.log('this -> melao', mapComThis(NUMEROS, MELAO));
 