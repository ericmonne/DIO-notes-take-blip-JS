class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(valor > this._saldo){
            return console.log("Saldo insuficiente. Não foi possível completar a operação.");
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'conta corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria{

    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
    }
    sacar(valor){
        if(valor > this._saldo || valor >=500){
            return console.log("Operação negada. Não foi possível completar a operação.");
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}

//const MINHA_CONTA = new ContaCorrente(1, 211, true);
//const CONTA_UNI = new ContaUniversitaria(2,333);
