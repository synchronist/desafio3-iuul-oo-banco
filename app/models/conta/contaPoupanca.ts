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
            var mesAnterior = depositos.data.getMonth();
            var difMes = 0;
            saldo += (depositos.valor * (this.rentabilidadeMensal * (depositos.data.getMonth() - mesAtual)));
            if (mesAnterior != null) { difMes = mesAtual - mesAtual }
            console.log("Sua conta poupança tinha o saldo de : R$" + saldo, " Na data de: " + depositos.data, "Rendendo juros de " + this.rentabilidadeMensal, "% por mês");
            var mesAnterior = depositos.data.getMonth();
        });
        return;
    }

    public calcularSaldo() {
        const saldo = (this.getExtrato().map((extrato) => extrato.valor));
        const calcSaldo = saldo.reduce((a, b) => a + b, 0);
        console.log("O saldo da sua conta poupança é de : R$ "+ calcSaldo);
        return;
    }
}
