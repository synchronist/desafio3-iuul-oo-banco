import { Conta } from "./conta";

export class Credito {
    private data: Date;
    private valor: number;

    constructor(valor: number, data: Date) {
        this.valor = valor;
        this.data = data;
    }
}