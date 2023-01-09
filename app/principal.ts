import { Cargo } from "./models/cargo/cargo";
import { Cliente } from "./models/cliente";
import { Conta } from "./models/conta/conta";
import { ContaCorrente } from "./models/conta/contaCorrente";
import { ContaPoupanca } from "./models/conta/contaPoupanca";
import { Endereco } from "./models/endereco/endereco";
import { Funcionario } from "./models/funcionario/funcionario";

const funcionario1 = new Funcionario("44714794825", "Fillipy", "978268263", 2500, [new Cargo("CEO"), new Cargo("CTO")]);
const funcionario2 = new Funcionario("12345678911", "Carlos", "979797882", 9000, [new Cargo("Atendente"), new Cargo("Gerente")]);

const endereco1 = new Endereco("120431", "asldfosl", "123", "casa", "cubatao", "Sp");
const endereco2 = new Endereco("120431", "r405i045", "123", "casa", "cubatao", "Sp");
const endereco3 = new Endereco("120431", "adsfgggg", "123", "casa", "cubatao", "Sp");
const contaCorrente1 = new ContaCorrente("242424", 10000);
const contaCorrente2 = new ContaCorrente("242424", 10000);

const cliente1 = new Cliente("149494948", "Lipe", "049503945", true, [endereco1, endereco2, endereco3], [contaCorrente1]);

const cliente2 = new Cliente("034903299", "Juliano", "1397899982", true, [endereco1], [contaCorrente1]);

cliente1.listarEnderecos();

contaCorrente1.depositar(100, new Date("2019-01-16"));
contaCorrente1.depositar(100, new Date("2019-01-16"));
contaCorrente1.depositar(100, new Date("2019-01-16"));
contaCorrente1.sacar(50, new Date("2019-01-16"));
contaCorrente1.calcularSaldo();

const cliente3 = new Cliente("493849237", "Poliana", "13984938427", true, [endereco2, endereco3], [contaCorrente2]);

contaCorrente2.depositar(1000, new Date("2019-01-16"));

const contaPoupanca1 = new ContaPoupanca("383838", 0.01);

const cliente4 = new Cliente("49878744", "Homer", "1398443424", true, [endereco1, endereco3], [contaPoupanca1]);

contaPoupanca1.depositar(1000, new Date("2019-01-16"));

contaCorrente2.transferir(contaPoupanca1, 500, new Date("2019-02-30"));

contaPoupanca1.calcularSaldo();

const contaPoupanca2 = new ContaPoupanca("777", 0.01);

const cliente5 = new Cliente("49878744", "Homer", "1398443424", true, [endereco1, endereco3], [contaPoupanca2]);


contaPoupanca2.depositar(200, new Date("2022-01-01"));
contaPoupanca2.depositar(200, new Date("2022-02-01"));
contaPoupanca2.depositar(200, new Date("2022-03-01"));
contaPoupanca2.depositar(200, new Date("2022-04-01"));
contaPoupanca2.depositar(200, new Date("2022-05-01"));
contaPoupanca2.depositar(200, new Date("2022-06-01"));
contaPoupanca2.depositar(200, new Date("2022-07-01"));
contaPoupanca2.depositar(200, new Date("2022-08-01"));
contaPoupanca2.depositar(200, new Date("2022-09-01"));
contaPoupanca2.depositar(200, new Date("2022-10-01"));
contaPoupanca2.depositar(200, new Date("2022-11-01"));
contaPoupanca2.depositar(200, new Date("2022-12-31"));
contaPoupanca2.sacar(100, new Date("2022-03-05"));
contaPoupanca2.sacar(200, new Date("2022-07-08"));

contaPoupanca2.calcularSaldo();

contaPoupanca2.calcularRendimento();





