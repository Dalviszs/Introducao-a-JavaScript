const pessoa = {
    nome: 'Carlos',
    idade: 25,
    cidade: 'São Paulo'
  };
  
  for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
  }
  