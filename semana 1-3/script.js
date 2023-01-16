// 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.

// Você precisará criar pelo menos:
//   * uma característica String;
//   * uma característica Number;
//   * uma característica Boolean;

// const nome; //string
// const idade; //number 
// const verificouEmail; //boolean 
// const projetos; //array de strings
projetosconst = ["Projeto de HTML", "Projeto de CSS", "Projeto React"];

// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const nome1 = "Lidia";
const idade1 = 39;
const verificouEmail1 = true;

const nome2 = "Junior";
const idade2 = 32;
const verificouEmail2 = true;

const nome3 = "Raito";
const idade3 = 12;
const verificouEmail3 = false;

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
// A média deve ser igual à soma dos itens, dividida pelo total de itens.

const media = (idade1 + idade2 + idade3) / 3
console.log (`Média de idade: 
${media.toFixed(2)}
`)

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
const verificaEmails = verificouEmail1 && verificouEmail2 && verificouEmail3;
console.log(verificaEmails);
// nesse caso, vai imprimir false, pois verificouEmail1 === false

// 5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

// 1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

console.log (`
${nome1.toUpperCase()}
idade: ${idade1}
Verificou e-mail? ${verificouEmail1}
Projetos: ${projetosconst}

${nome2.toUpperCase()}
idade: ${idade2}
Verificou e-mail? ${verificouEmail2}
Projetos: ${projetosconst}

${nome3.toUpperCase()}
idade: ${idade3}
Verificou e-mail? ${verificouEmail3}
Projetos: ${projetosconst}
`);