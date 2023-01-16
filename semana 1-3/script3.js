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
    verificouEmail : true}
const arrayObjetos = []

// if (objeto1.verificouEmail){
//     console.log(objeto1.nome,"cadastrado com sucesso!")
//     arrayObjetos.push(objeto1)
// } else  {
//     alert (objeto1.nome, "não foi adicionado!")
// } 

// if (objeto2.verificouEmail){
//     console.log(objeto2.nome,"cadastrado com sucesso!")
//     arrayObjetos.push(objeto2)
// } else  {
//     alert (objeto2.nome, "não foi adicionado!")
// } 

// if (objeto3.verificouEmail){
//     console.log(objeto3.nome,"cadastrado com sucesso!")
//     arrayObjetos.push(objeto3)
// }else  {
//     alert (`${objeto3.nome}, não foi adicionado! Verifique seu e-mail!` )
// }

// console.log(arrayObjetos)

const verficaEmail = (array, objeto) => {
    for (const i in objeto) {
        if (objeto[i] === objeto.verificouEmail && objeto[i] === true) {
            array.push(objeto)
            return "Cadastrado com sucesso!"}
    } return alert (`${objeto.nome}, não foi adicionado! Verifique seu e-mail!` )
}

console.log(verficaEmail(arrayObjetos,objeto1))
console.log(verficaEmail(arrayObjetos,objeto2))
console.log(verficaEmail(arrayObjetos,objeto3))
// console.log(arrayObjetos)

projetosConst = ["Projeto de HTML", "Projeto de CSS", "Projeto React"];

const addProjeto = (array) =>{
    for (const k in array ){
        array[k].projetos = projetosConst
    } return array
}

addProjeto(arrayObjetos)
// console.log(arrayObjetos)

for (const i in arrayObjetos) {
    for (const j in arrayObjetos[i]) {
        if (j === "projetos"){
            const projetosString = arrayObjetos[i][j].toString()
            arrayObjetos[i][j] = projetosString
        }
    }
}
    
// console.log(arrayObjetos)

for(objetos of arrayObjetos){
    for (i in objetos){
        console.log(`${i}: ${objetos[i]}`)
    }
console.log("----------------------");
}

const objetoToString = (objeto) =>{
    const novoObjeto = JSON.stringify(objeto)
    return novoObjeto
}

console.log(objetoToString(arrayObjetos))

const findString = (string) =>{
    string = string.toLowerCase()
    for (const i in arrayObjetos){
        for (const j in arrayObjetos[i]){
            arrayLower = arrayObjetos[i][j].toString().toLowerCase()
            if (arrayLower === string){
                return arrayObjetos[i]
            } 
        } 
    }   return alert `Nenhum item encontrado!`
}

console.log(findString("Lidia"))

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