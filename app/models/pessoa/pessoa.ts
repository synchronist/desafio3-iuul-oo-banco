import { Cliente } from "../cliente";
import { Funcionario } from "../funcionario/funcionario"

export abstract class Pessoa {
    private cpf: String;
    private nome: String;
    private telefone: String;

    constructor(cpf: String, nome: String, telefone: String) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
    }
}
