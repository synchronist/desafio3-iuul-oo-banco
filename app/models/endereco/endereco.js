"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
var Endereco = /** @class */ (function () {
    function Endereco(cep, logradouro, numero, complemento, cidade, uf) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }
    return Endereco;
}());
exports.Endereco = Endereco;
