import { Credito } from "./credito";
import { Debito } from "./debito";

type ExtratoType = {
    valor: number;
    data: Date;
}
export abstract class Conta {
    private numero: String;
    private extrato: Array<ExtratoType> = [];

    constructor(numero: String) {
        this.numero = numero;
    }

    public depositar(valor: number, data: Date) {
        new Credito(valor, data);
        this.extrato.push({ valor, data });
    }

    public sacar(valor: number, data: Date) {
        new Debito(-valor, data);
        this.extrato.push({ valor: -valor, data });
    }

    public getExtrato(): Array<ExtratoType> {
        return this.extrato;
    }
}


