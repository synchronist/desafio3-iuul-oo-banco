import { IUsuario } from "../views/iusuario";
import { Conta } from "./conta/conta";
import { Endereco } from "./endereco/endereco"
import { Pessoa } from "./pessoa/pessoa"

export class Cliente extends Pessoa implements IUsuario {

    private readonly vip: Boolean;
    private endereco: Array<Endereco>;
    private contas: Array<Conta>;

    constructor(cpf: String, nome: String, telefone: String, vip: Boolean, endereco: Array<Endereco>, contas: Array<Conta>) {
        super(cpf, nome, telefone);
        this.vip = vip;
        this.endereco = endereco;
        this.contas = contas;
    }

    public listarEnderecos() {
        this.endereco.forEach((endereco) => {
            console.log(endereco);
        })
    }

    public autenticar() {
        return true;
    }
}




