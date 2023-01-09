import { Conta } from "./conta";

export class ContaPoupanca extends Conta {
    private readonly rentabilidadeMensal: number;

    constructor(numero: String, rentabilidadeMensal: number) {
        super(numero);
        this.rentabilidadeMensal = rentabilidadeMensal;
    }

    public calcularRendimento() {
        const mesAtual = new Date().getMonth();
        const depositos = (this.getExtrato());
        var saldo = 0;
        depositos.forEach((depositos) => {
            const menorAno = Math.min(depositos.data.getFullYear());

            saldo += (depositos.valor * (this.rentabilidadeMensal * (depositos.data.getMonth() - mesAtual)));
            console.log(saldo);
        });
        return;
    }

    public calcularSaldo() {
        const saldo = (this.getExtrato().map((extrato) => extrato.valor));
        const calcSaldo = saldo.reduce((a, b) => a + b, 0);
        console.log(calcSaldo);
        return;
    }
}
