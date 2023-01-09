"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var credito_1 = require("./credito");
var debito_1 = require("./debito");
var Conta = /** @class */ (function () {
    function Conta(numero) {
        this.extrato = [];
        this.numero = numero;
    }
    Conta.prototype.depositar = function (valor, data) {
        new credito_1.Credito(valor, data);
        this.extrato.push({ valor: valor, data: data });
    };
    Conta.prototype.sacar = function (valor, data) {
        new debito_1.Debito(-valor, data);
        this.extrato.push({ valor: -valor, data: data });
    };
    Conta.prototype.getExtrato = function () {
        return this.extrato;
    };
    return Conta;
}());
exports.Conta = Conta;
