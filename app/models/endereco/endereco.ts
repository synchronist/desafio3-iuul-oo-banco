export class Endereco {

    private cep: String;
    private logradouro: String;
    private numero: String;
    private complemento: String;
    private cidade: String;
    private uf: String;

    constructor(cep: String, logradouro: String, numero: String, complemento: String, cidade: String, uf: String) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }
}