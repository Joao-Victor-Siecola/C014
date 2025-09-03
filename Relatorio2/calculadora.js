class Calculadora {
  validarParametros(a, b) {
    if (a === null || b === null || a === undefined || b === undefined) {
      throw new Error("Parâmetro nulo ou indefinido não permitido");
    }
    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
      throw new Error("Parâmetros devem ser números válidos");
    }
  }

  somar(a, b) {
    this.validarParametros(a, b);
    const resultado = a + b;
    if (resultado > Number.MAX_SAFE_INTEGER) throw new Error("Overflow na soma");
    return resultado;
  }

  subtrair(a, b) {
    this.validarParametros(a, b);
    return a - b;
  }

  multiplicar(a, b) {
    this.validarParametros(a, b);
    const resultado = a * b;
    if (resultado > Number.MAX_SAFE_INTEGER) throw new Error("Overflow na multiplicação");
    return resultado;
  }

  dividir(a, b) {
    this.validarParametros(a, b);
    if (b === 0) throw new Error("Divisão por zero não permitida");
    return a / b;
  }
}

module.exports = Calculadora;
