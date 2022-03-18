const NUMEROS = [1,2,3,4,5,6,7,8,9,10];
function somarArray(array){
    return array.reduce(somar);
}
function somar(anterior, atual){
    //console.log("anterior = ", anterior);
    //console.log("atual = ", atual);
    return anterior + atual;
}
console.log(somarArray(NUMEROS));

var array2 = [1, 2, 3, 4];

console.log(array2.reduce((current, acc) => current + acc));