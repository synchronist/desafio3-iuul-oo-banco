import { Conta } from "./conta";

export class ContaCorrente extends Conta{

    private limite: number;

    constructor(numero: String, limite: number) {
        super(numero);
        this.limite = limite;
    }

    public transferir(contaDestino: Conta, valor: number, data: Date) {
        this.sacar(valor, data);
        contaDestino.depositar(valor, data);
    }

    public calcularSaldo() {
        const saldo = (this.getExtrato().map((extrato) => extrato.valor));
        const calcSaldo = saldo.reduce((a, b) => a + b, 0);
        console.log(calcSaldo);
        return;
    }   
}
