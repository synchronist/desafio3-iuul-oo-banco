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
exports.__esModule = true;
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
            var menorAno = Math.min(depositos.data.getFullYear());
            saldo += (depositos.valor * (_this.rentabilidadeMensal * (depositos.data.getMonth() - mesAtual)));
            console.log(saldo);
        });
        return;
    };
    ContaPoupanca.prototype.calcularSaldo = function () {
        var saldo = (this.getExtrato().map(function (extrato) { return extrato.valor; }));
        var calcSaldo = saldo.reduce(function (a, b) { return a + b; }, 0);
        console.log(calcSaldo);
        return;
    };
    return ContaPoupanca;
}(conta_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
