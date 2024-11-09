// Arrow function para calcular a área de um retângulo
const calcularAreaRetangulo = (largura, altura) => {
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
  // Arrow function em uma linha
const calcularAreaRetanguloSimples = (largura, altura) => largura * altura;

console.log(calcularAreaRetanguloSimples(5, 10));  // Saída: 50
