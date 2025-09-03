const Calculadora = require("./calculadora");
let calc;

beforeEach(() => {
  calc = new Calculadora();
});

// Casos de sucesso
test("Soma de 2 + 3 = 5", () => {
  expect(calc.somar(2, 3)).toBe(5);
});

test("Subtração de 5 - 2 = 3", () => {
  expect(calc.subtrair(5, 2)).toBe(3);
});

test("Multiplicação de 4 * 3 = 12", () => {
  expect(calc.multiplicar(4, 3)).toBe(12);
});

test("Divisão de 10 / 2 = 5", () => {
  expect(calc.dividir(10, 2)).toBe(5);
});

test("Soma com zero", () => {
  expect(calc.somar(5, 0)).toBe(5);
});

test("Subtração resultando em zero", () => {
  expect(calc.subtrair(5, 5)).toBe(0);
});

test("Multiplicação por zero", () => {
  expect(calc.multiplicar(9, 0)).toBe(0);
});

test("Divisão resultando em número decimal", () => {
  expect(calc.dividir(7, 2)).toBeCloseTo(3.5);
});

test("Multiplicação com números negativos", () => {
  expect(calc.multiplicar(-2, 3)).toBe(-6);
});

test("Subtração com números negativos", () => {
  expect(calc.subtrair(-5, -3)).toBe(-2);
});

// Casos de erro
test("Divisão por zero deve lançar erro", () => {
  expect(() => calc.dividir(5, 0)).toThrow("Divisão por zero não permitida");
});

test("Soma com parâmetro nulo deve lançar erro", () => {
  expect(() => calc.somar(null, 5)).toThrow();
});

test("Subtração com parâmetro nulo deve lançar erro", () => {
  expect(() => calc.subtrair(5, null)).toThrow();
});

test("Multiplicação com parâmetro nulo deve lançar erro", () => {
  expect(() => calc.multiplicar(null, 3)).toThrow();
});

test("Divisão com parâmetro nulo deve lançar erro", () => {
  expect(() => calc.dividir(8, null)).toThrow();
});

test("Soma causando overflow deve lançar erro", () => {
  expect(() => calc.somar(Number.MAX_SAFE_INTEGER, 1)).toThrow("Overflow na soma");
});

test("Multiplicação causando overflow deve lançar erro", () => {
  expect(() => calc.multiplicar(Number.MAX_SAFE_INTEGER, 2)).toThrow("Overflow na multiplicação");
});

test("Subtração com strings deve falhar", () => {
  expect(() => calc.subtrair("a", "b")).toThrow("Parâmetros devem ser números válidos");
});

test("Multiplicação com string deve falhar", () => {
  expect(() => calc.multiplicar(2, "x")).toThrow("Parâmetros devem ser números válidos");
});

test("Divisão com string deve falhar", () => {
  expect(() => calc.dividir("10", "2")).toThrow("Parâmetros devem ser números válidos");
});
