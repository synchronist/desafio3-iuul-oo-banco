import { IUsuario } from "../../views/iusuario";
import { Cargo } from "../cargo/cargo";
import { Pessoa } from "../pessoa/pessoa";

export class Funcionario extends Pessoa implements IUsuario {
    private salario: number;
    private cargos: Array<Cargo>;

    constructor(cpf: String, nome: String, telefone: String, salario: number, cargos: Array<Cargo>) {
        super(cpf, nome, telefone);
        this.salario = salario;
        this.cargos = cargos;
    }

    autenticar(): boolean {
        return true;
    }
}