class ContaBancaria {
    titular: string;
    private saldo: number;

    constructor(titular: string, saldoInicial: number = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser positivo.");
            return;
        }
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$${this.saldo.toFixed(2)}`);
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            console.log("O valor do saque deve ser positivo.");
            return;
        }

        if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$${this.saldo.toFixed(2)}`);
        }
    }

    getSaldo(): number {
        return this.saldo;
    }
}

const minhaConta = new ContaBancaria("João da Silva", 1000);
console.log(`Conta criada para ${minhaConta.titular} com saldo de R$${minhaConta.getSaldo().toFixed(2)}`);

minhaConta.depositar(500);

minhaConta.sacar(2000);

minhaConta.sacar(350);

console.log(`O saldo final da conta de ${minhaConta.titular} é R$${minhaConta.getSaldo().toFixed(2)}`);

const outraConta = new ContaBancaria("Maria Souza");
console.log(`Conta criada para ${outraConta.titular} com saldo de R$${outraConta.getSaldo().toFixed(2)}`);
outraConta.depositar(200);