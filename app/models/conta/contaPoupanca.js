"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
var conta_1 = require("./conta");
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(numero, rentabilidadeMensal) {
        var _this = _super.call(this, numero) || this;
        _this.rentabilidadeMensal = rentabilidadeMensal;
        return _this;
    }
    ContaPoupanca.prototype.calcularRendimento = function () {
        var _this = this;
        var mesAtual = new Date().getMonth();
        var depositos = (this.getExtrato());
        var saldo = 0;
        depositos.forEach(function (depositos) {
            var mesAnterior = depositos.data.getMonth();
            var difMes = 0;
            saldo += (depositos.valor * (_this.rentabilidadeMensal * (depositos.data.getMonth() - mesAtual)));
            if (mesAnterior != null) {
                difMes = mesAtual - mesAtual;
            }
            console.log("Sua conta poupança tinha o saldo de : R$" + saldo, " Na data de: " + depositos.data, "Rendendo juros de " + _this.rentabilidadeMensal, "% por mês");
            var mesAnterior = depositos.data.getMonth();
        });
        return;
    };
    ContaPoupanca.prototype.calcularSaldo = function () {
        var saldo = (this.getExtrato().map(function (extrato) { return extrato.valor; }));
        var calcSaldo = saldo.reduce(function (a, b) { return a + b; }, 0);
        console.log("O saldo da sua conta poupança é de : R$ " + calcSaldo);
        return;
    };
    return ContaPoupanca;
}(conta_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
