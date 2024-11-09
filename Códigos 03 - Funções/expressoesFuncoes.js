// Expressão de função para calcular a área de um retângulo
const calcularAreaRetangulo = function(largura, altura) {
    // Calcula a área multiplicando largura pela altura
    const area = largura * altura;
    // Retorna o resultado
    return area;
  };
  
  // Exemplo de uso da função
  const larguraRetangulo = 5;  // Define a largura do retângulo
  const alturaRetangulo = 10;  // Define a altura do retângulo
  
  // Chama a função e armazena o resultado na variável 'areaTotal'
  const areaTotal = calcularAreaRetangulo(larguraRetangulo, alturaRetangulo);
  
  // Exibe o resultado no console
  console.log("A área do retângulo é: " + areaTotal);
  