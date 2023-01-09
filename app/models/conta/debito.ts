import { Conta } from "./conta";

export class Debito {
    private data: Date;
    private valor: number;

    constructor(valor: number, data: Date) {
        if (valor > this.valor || this.valor === 0) {
            throw new Error("Saldo insuficiente");
        } else {
            this.valor = valor;
            this.data = data;
        }
    }
}