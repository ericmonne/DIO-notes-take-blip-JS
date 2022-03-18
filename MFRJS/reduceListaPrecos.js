const LISTA_PRECOS = [{
    name: 'sabao em po',
    preco: 20,
},
{
    name: 'detergente',
    preco: 3,
},
{
    name: 'papel-toalha',
    preco: 10,
}];

const SALDO_DISPONIVEL = 100;

function calcularSaldoFinal(array, saldoFinal){
    return array.reduce(subtrair, saldoFinal);
}

function subtrair(anterior, atual){
    return anterior - atual.preco;
}

console.log(calcularSaldoFinal(LISTA_PRECOS, SALDO_DISPONIVEL));
console.log(calcularSaldoFinal(LISTA_PRECOS, 50));