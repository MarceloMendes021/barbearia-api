function validateCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");

  if (cpf.length !== 11) return false;

  if (cpf.split("").every((char) => char === cpf[0])) return false;

  for (let j = 9; j < 11; j++) {
    let soma = 0;
    let Multiplicador = j + 1;

    for (let i = 0; i < j; i++) {
      soma += parseInt(cpf[i]) * (Multiplicador - i);
    }

    let resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;

    if (resto !== parseInt(cpf[j])) return false;
  }
  return true;
}
module.exports = { validateCPF };
