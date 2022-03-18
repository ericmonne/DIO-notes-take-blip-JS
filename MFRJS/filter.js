//MINHA RESOLUÇÃO
const NUMEROS = [1,2,3,4,5,6,7,8,9,10];
function retornaPares(array){
    return array.filter(numero => numero %2 === 0);
}
console.log(retornaPares(NUMEROS));

//RESOLUÇÃO DA AULA 

function filtraPares(array){
    return array.filter(callback);
}

function callback(item){
    return item %2 ===0;
}

const MEU_ARRAY = [1, 23, 55, 67, 30, 2, 4];
console.log(filtraPares(MEU_ARRAY));