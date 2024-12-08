function calcular(operacao) {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const resultadoEl = document.getElementById('resultado');
  
    if (isNaN(operando1) || isNaN(operando2)) {
      alert('Por favor, insira valores válidos nos dois campos.');
      return;
    }
  
    let resultado;
    switch (operacao) {
      case 'soma':
        resultado = operando1 + operando2;
        break;
      case 'subtracao':
        resultado = operando1 - operando2;
        break;
      case 'multiplicacao':
        resultado = operando1 * operando2;
        break;
      case 'divisao':
        if (operando2 === 0) {
          alert('Divisão por zero não é permitida.');
          return;
        }
        resultado = operando1 / operando2;
        break;
      default:
        resultado = 'Erro';
    }
  
    resultadoEl.textContent = resultado;
  }
  