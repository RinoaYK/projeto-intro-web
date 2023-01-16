projetosconst = ["Projeto de HTML", "Projeto de CSS", "Projeto React"];

objeto1 = {
    nome : "Lidia",
    idade : 39,
    verificouEmail : true
}

objeto2 = {
    nome : "Junior",
    idade : 32,
    verificouEmail : true
}

objeto3 = {
    nome : "Raito",
    idade : 15,
    verificouEmail : false
}
const arrayObjetos = []

if (objeto1.verificouEmail){
    console.log(objeto1.nome,"cadastrado com sucesso!")
    arrayObjetos.push(objeto1)
} else  {
    alert (objeto1.nome, "não foi adicionado!")
} 

if (objeto2.verificouEmail){
    console.log(objeto2.nome,"cadastrado com sucesso!")
    arrayObjetos.push(objeto2)
} else  {
    alert (objeto2.nome, "não foi adicionado!")
} 

if (objeto3.verificouEmail){
    console.log(objeto3.nome,"cadastrado com sucesso!")
    arrayObjetos.push(objeto3)
}else  {
    alert (`${objeto3.nome}, não foi adicionado! Verifique seu e-mail!` )
}

console.log(arrayObjetos)

// const media = (idade1 + idade2 + idade3) / 3
// console.log (`Média de idade: 
// ${media.toFixed(2)}
// `)


// const verificaEmails = verificouEmail1 && verificouEmail2 && verificouEmail3;
// console.log(verificaEmails);
// // nesse caso, vai imprimir false, pois verificouEmail1 === false

// console.log (`
// ${nome1.toUpperCase()}
// idade: ${idade1}
// Verificou e-mail? ${verificouEmail1}
// Projetos: ${projetosconst}

// ${nome2.toUpperCase()}
// idade: ${idade2}
// Verificou e-mail? ${verificouEmail2}
// Projetos: ${projetosconst}

// ${nome3.toUpperCase()}
// idade: ${idade3}
// Verificou e-mail? ${verificouEmail3}
// Projetos: ${projetosconst}
// `);