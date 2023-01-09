"use strict";
exports.__esModule = true;
exports.Debito = void 0;
var Debito = /** @class */ (function () {
    function Debito(valor, data) {
        if (valor > this.valor || this.valor === 0) {
            throw new Error("Saldo insuficiente");
        }
        else {
            this.valor = valor;
            this.data = data;
        }
    }
    return Debito;
}());
exports.Debito = Debito;
