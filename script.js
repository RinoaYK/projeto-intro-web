//Áries
const ariesImage = document.getElementById("aries");
const ariesDisapear = document.getElementById("ariesDisapear");

ariesImage.addEventListener("click", function () {
  ariesDisapear.classList.remove("hideAries");
  ariesImage.classList.add("hideAries");
});

ariesDisapear.addEventListener("click", function () {
  ariesDisapear.classList.add("hideAries");
  ariesImage.classList.remove("hideAries");
});

//Touro
const taurusImage = document.getElementById("taurus");
const taurusDisapear = document.getElementById("taurusDisapear");

taurusImage.addEventListener("click", function () {
  taurusDisapear.classList.remove("hideTaurus");
  taurusImage.classList.add("hideTaurus");
});

taurusDisapear.addEventListener("click", function () {
  taurusDisapear.classList.add("hideTaurus");
  taurusImage.classList.remove("hideTaurus");
});

//Gêmeos
const geminiImage = document.getElementById("gemini");
const geminiDisapear = document.getElementById("geminiDisapear");

geminiImage.addEventListener("click", function () {
  geminiDisapear.classList.remove("hideGemini");
  geminiImage.classList.add("hideGemini");
});

geminiDisapear.addEventListener("click", function () {
  geminiDisapear.classList.add("hideGemini");
  geminiImage.classList.remove("hideGemini");
});

//Câncer
const cancerImage = document.getElementById("cancer");
const cancerDisapear = document.getElementById("cancerDisapear");

cancerImage.addEventListener("click", function () {
  cancerDisapear.classList.remove("hideCancer");
  cancerImage.classList.add("hideCancer");
});

cancerDisapear.addEventListener("click", function () {
  cancerDisapear.classList.add("hideCancer");
  cancerImage.classList.remove("hideCancer");
});

//Leão
const leoImage = document.getElementById("leo");
const leoDisapear = document.getElementById("leoDisapear");

leoImage.addEventListener("click", function () {
  leoDisapear.classList.remove("hideLeo");
  leoImage.classList.add("hideLeo");
});

leoDisapear.addEventListener("click", function () {
  leoDisapear.classList.add("hideLeo");
  leoImage.classList.remove("hideLeo");
});

//Virgem
const virgoImage = document.getElementById("virgo");
const virgoDisapear = document.getElementById("virgoDisapear");

virgoImage.addEventListener("click", function () {
  virgoDisapear.classList.remove("hideVirgo");
  virgoImage.classList.add("hideVirgo");
});

virgoDisapear.addEventListener("click", function () {
  virgoDisapear.classList.add("hideVirgo");
  virgoImage.classList.remove("hideVirgo");
});

//Libra
const libraImage = document.getElementById("libra");
const libraDisapear = document.getElementById("libraDisapear");

libraImage.addEventListener("click", function () {
  libraDisapear.classList.remove("hideLibra");
  libraImage.classList.add("hideLibra");
});

libraDisapear.addEventListener("click", function () {
  libraDisapear.classList.add("hideLibra");
  libraImage.classList.remove("hideLibra");
});

//Escorpião
const scorpioImage = document.getElementById("scorpio");
const scorpioDisapear = document.getElementById("scorpioDisapear");

scorpioImage.addEventListener("click", function () {
  scorpioDisapear.classList.remove("hideScorpio");
  scorpioImage.classList.add("hideScorpio");
});

scorpioDisapear.addEventListener("click", function () {
  scorpioDisapear.classList.add("hideScorpio");
  scorpioImage.classList.remove("hideScorpio");
});

// Sagitário
const sagittariusImage = document.getElementById("sagittarius");
const sagittariusDisapear = document.getElementById("sagittariusDisapear");

sagittariusImage.addEventListener("click", function () {
  sagittariusDisapear.classList.remove("hideSagittarius");
  sagittariusImage.classList.add("hideSagittarius");
});

sagittariusDisapear.addEventListener("click", function () {
  sagittariusDisapear.classList.add("hideSagittarius");
  sagittariusImage.classList.remove("hideSagittarius");
});

// Capricórnio
const capricornImage = document.getElementById("capricorn");
const capricornDisapear = document.getElementById("capricornDisapear");

capricornImage.addEventListener("click", function () {
  capricornDisapear.classList.remove("hideCapricorn");
  capricornImage.classList.add("hideCapricorn");
});

capricornDisapear.addEventListener("click", function () {
  capricornDisapear.classList.add("hideCapricorn");
  capricornImage.classList.remove("hideCapricorn");
});

// Aquário
const aquariusImage = document.getElementById("aquarius");
const aquariusDisapear = document.getElementById("aquariusDisapear");

aquariusImage.addEventListener("click", function () {
  aquariusDisapear.classList.remove("hideAquarius");
  aquariusImage.classList.add("hideAquarius");
});

aquariusDisapear.addEventListener("click", function () {
  aquariusDisapear.classList.add("hideAquarius");
  aquariusImage.classList.remove("hideAquarius");
});

// Peixes
const piscesImage = document.getElementById("pisces");
const piscesDisapear = document.getElementById("piscesDisapear");

piscesImage.addEventListener("click", function () {
  piscesDisapear.classList.remove("hidePisces");
  piscesImage.classList.add("hidePisces");
});

piscesDisapear.addEventListener("click", function () {
  piscesDisapear.classList.add("hidePisces");
  piscesImage.classList.remove("hidePisces");
});

//Pesquisa
const aries = document.getElementById("aries");
const taurus = document.getElementById("taurus");
const gemini = document.getElementById("gemini");
const cancer = document.getElementById("cancer");
const leo = document.getElementById("leo");
const virgo = document.getElementById("virgo");
const libra = document.getElementById("libra");
const scorpio = document.getElementById("scorpio");
const sagittarius = document.getElementById("sagittarius");
const capricorn = document.getElementById("capricorn");
const aquarius = document.getElementById("aquarius");
const pisces = document.getElementById("pisces");

const signos = [
  [
    "aries, áries, fogo, marte, cardinal, ação, assertividade, atitude, coragem, decisão, entusiasmo, agitação, independência, iniciativa, liderança, impaciência, competição, individualismo, pressa",
  ],
  [
    "taurus, touro, terra, fixa, vênus, perseverança, determinação, estabilidade, paciência, produtividade, resistência, segurança, sensualidade, trabalho, materialidade, durabilidade, apego, teimosia, concretude",
  ],
  [
    "gemini, gêmeos, ar, mutável, mercúrio, adaptação, comunicação, flexibilidade, leveza, movimento, troca, informação, curiosidade, inconstância, negociação, instabilidade, dispersão, racionalidade, linguagem",
  ],
  [
    "cancer, câncer, água, cardinal, lua, afetividade, nutrição, acolhimento, raízes, família, imaginação, intuição, memória, passado, proteção, casa, sensibilidade, cuidado, oscilação",
  ],
  [
    "leo, leão, fogo, fixa, sol, comando, criatividade, autoconfiança, alegria, autoridade, individualidade, controle, energia, nobreza, generosidade, brilho, vaidade, orgulho, amor-próprio",
  ],
  [
    "virgo, virgem, terra, mutável, mercúrio, organização, crítica, pragmatismo, perfeccionismo, praticidade, rotina, simplicidade, variação, purificação, análise, observação, comprovação, intolerância, eficiência",
  ],
  [
    "libra, ar, cardinal, vênus, diplomacia, estética, imparcialidade, justiça, persuasão, harmonia, ponderação, reflexão, intermediação, indecisão, gentileza, dependência, tolerância, cooperação",
  ],
  [
    "scorpio, escorpião, água, fixa, plutão, transformação, profundidade, psiquismo, cura, dominação, poder, desejo, sexualidade, erotismo, renascimento, regeneração, intensidade, mistério, investigação",
  ],
  [
    "sagittarius, sagitário, fogo, mutável, júpter, determinação, foco, expansão, conhecimento, progresso, insatisfação, dogmatismo, abundância, meta, diversão, obstinação, impaciência, alegria, otimismo",
  ],
  [
    "capricorn, capricórnio, terra, cardinal, saturno, determinação, disciplina, organização, planejamento, ambição, praticidade, objetividade, dureza, frieza, rigidez, estruturação, realismo, estabilidade, prudência",
  ],
  [
    "aquarius, aquário, ar, fixa, urano, renovação, revolução, rebeldia, inventividade, cooperação, solidariedade, novidades, inovação, excentricidade, frieza, imprevisibilidade, originalidade, sociabilidade",
  ],
  [
    "pisces, peixes, água, mutável, netuno, sensibilidade, intuição, receptividade, sonhos, fantasia, poesia, caos, desorganização, inspiração, silêncio, profundidade, contemplação, imaginação, absorção",
  ],
];
// console.log(signos);

//função q transforma minha array signos em uma array com strings:
function arrayToString(array) {
  let wordsArray = [];
  for (let i = 0; i < array.length; i++) {
    let tempArray = array[i][0].split(/[",\s]+/);
    wordsArray.push(tempArray);
  }
  return wordsArray;
}
const signosArrayStrings = arrayToString(signos);

// console.log(signosArrayStrings[0]);
signosArrayStrings[0].push(aries);
signosArrayStrings[1].push(taurus);
signosArrayStrings[2].push(gemini);
signosArrayStrings[3].push(cancer);
signosArrayStrings[4].push(leo);
signosArrayStrings[5].push(virgo);
signosArrayStrings[6].push(libra);
signosArrayStrings[7].push(scorpio);
signosArrayStrings[8].push(sagittarius);
signosArrayStrings[9].push(capricorn);
signosArrayStrings[10].push(aquarius);
signosArrayStrings[11].push(pisces);

// console.log(signosArrayStrings[0]);

//função para buscar uma string dentro da array de strings:
// const findString = (string) =>{
//     string = string.toLowerCase();
//     for (const i in signosArrayStrings){
//       for (const j in signosArrayStrings[i]){
//           if (signosArrayStrings[i][j] === string){
//                 return signosArrayStrings[i];
//             }
//           }
//     }   return alert `Nenhum item encontrado!`
// }

// console.log(findString("leão"));

//função modificada para buscar na minha array signos o valor digitado no campo id="busca-input", retorna a array q contém o valor:
// const input = document.getElementById("busca-input");
// const button = document.getElementById("lupa");

// button.addEventListener("click", function() {
//     const findString = (string) => {
//         string = string.toLowerCase();
//         for (const i in signosArrayStrings) {
//             for (const j in signosArrayStrings[i]) {
//                 if (signosArrayStrings[i][j] === string) {
//                     console.log(signosArrayStrings[i]);
//                     return signosArrayStrings[i];
//                 }
//             }
//         }
//         return alert("Nenhum item encontrado!");
//     }
//     findString(input.value);
//     input.value = "";
// });

//função modificada para que se encontrar o valor,  permaneça no hmtl somente os itens que contém esse valor.
const input = document.getElementById("busca-input");
const inputToConsole = input;
const button = document.getElementById("lupa");

const itens = document.querySelector("main");
const imprimirItens = [...itens.querySelectorAll(".titulo")];

//Valores das arrays utilizados no Console
console.log(`Relatório dos Itens:`);
console.log(imprimirItens);

//função de reset para o botão busca.
const resetButtons = () => {
  const main = document.querySelector("main");
  const titulosReset = [...main.querySelectorAll(".hide")];
  // console.log(titulosReset);

  for (let classe in titulosReset) {
    titulosReset[classe].classList.remove("hide");
  }
};

//função para resetar os ícones que ficaram escondidos na busca.
const resetButtonsConteudo = () => {
  const main = document.querySelector("main");
  const titulosReset = [...main.querySelectorAll(".hide")];
  // console.log(titulosReset);

  for (let classe in titulosReset) {
    titulosReset[classe].classList.remove("hide");
  }
};

// função para verificar hide no resultado da busca, para não aparecer os itens que estavam abertos.
const verificaHide = () => {
  if (aries.classList.contains("hide")) {
    ariesDisapear.classList.add("hideAries");
    ariesImage.classList.remove("hideAries");
  }
  if (taurus.classList.contains("hide")) {
    taurusDisapear.classList.add("hideTaurus");
    taurusImage.classList.remove("hideTaurus");
  }

  if (gemini.classList.contains("hide")) {
    geminiDisapear.classList.add("hideGemini");
    geminiImage.classList.remove("hideGemini");
  }

  if (cancer.classList.contains("hide")) {
    cancerDisapear.classList.add("hideCancer");
    cancerImage.classList.remove("hideCancer");
  }
  if (leo.classList.contains("hide")) {
    leoDisapear.classList.add("hideLeo");
    leoImage.classList.remove("hideLeo");
  }

  if (virgo.classList.contains("hide")) {
    virgoDisapear.classList.add("hideVirgo");
    virgoImage.classList.remove("hideVirgo");
  }

  if (libra.classList.contains("hide")) {
    libraDisapear.classList.add("hideLibra");
    libraImage.classList.remove("hideLibra");
  }

  if (scorpio.classList.contains("hide")) {
    scorpioDisapear.classList.add("hideScorpio");
    scorpioImage.classList.remove("hideScorpio");
  }

  if (sagittarius.classList.contains("hide")) {
    sagittariusDisapear.classList.add("hideSagittarius");
    sagittariusImage.classList.remove("hideSagittarius");
  }

  if (capricorn.classList.contains("hide")) {
    capricornDisapear.classList.add("hideCapricorn");
    capricornImage.classList.remove("hideCapricorn");
  }

  if (aquarius.classList.contains("hide")) {
    aquariusDisapear.classList.add("hideAquarius");
    aquariusImage.classList.remove("hideAquarius");
  }

  if (pisces.classList.contains("hide")) {
    piscesDisapear.classList.add("hidePisces");
    piscesImage.classList.remove("hidePisces");
  }
};

//função para buscar se clicar em "lupa".
button.addEventListener("click", function (event) {
  buscar(event);
  verificaHide();
});

//função para buscar se apertar "enter".
input.addEventListener("keypress", function (event) {
  // console.log(event)
  if (event.code === "Enter") {
    buscar(event);
    verificaHide();
  }  
  if (event.code === "NumpadEnter") {
    buscar(event);
    verificaHide();
  }    
});

//função para buscar os itens.
function buscar(event) {
  event.preventDefault();
  resetButtons(event);

  const findString = (string) => {
    let foundArray = [];
    const stringConsole = string;
    string = string.toLowerCase();
    for (const i in signosArrayStrings) {
      for (const j in signosArrayStrings[i]) {
        if (signosArrayStrings[i][j] === string) {
          foundArray.push(signosArrayStrings[i]);
        }
      }
    }
    if (input.value === "") {
      console.log("Você pesquisou por um campo em branco.");
      return alert(`Campo em branco! Pesquisa inválida!`);
    }
    if (foundArray.length === 0) {
      console.log(
        `Você pesquisou por "${stringConsole}". Encontrou? ${
          foundArray.length !== 0
        }`
      );
      return alert("Nenhum item encontrado!");
    } else {
      console.log(`Você pesquisou por "${stringConsole}". Encontrou? ${
        foundArray.length !== 0
      }.
      Foi encontrado ${foundArray.length}:`);
      console.log(foundArray);
      const main = document.querySelector("main");
      // const titulos = main.querySelectorAll(".titulo");
      const titulos = [...main.querySelectorAll(".titulo")];
      const arrayTitulos = [];

      for (const i in titulos) {
        for (const j in foundArray) {
          for (const k in foundArray[j]) {
            // console.log(foundArray[j][k]);
            if (foundArray[j][k] === titulos[i]) {
              arrayTitulos.push(titulos[i]);
            }
          }
        }
      }
      // console.log(arrayTitulos);
      const resultado = titulos.filter(
        (titulo) => !arrayTitulos.includes(titulo)
      );
      // console.log(resultado);

      for (const id in resultado) {
        resultado[id].classList.add("hide");
        // console.log(resultado);
      }
    }
  };

  findString(input.value);
  input.value = "";
}

//acesso ícone Labenu
const labenu = document.getElementById("linkLabenu");
const pLabenu = document.getElementById("pLabenu");

labenu.addEventListener("mouseover", function () {
  pLabenu.classList.remove("pLabenuHide");
});
labenu.addEventListener("mouseout", function () {
  pLabenu.classList.add("pLabenuHide");
});

////////////////////////////////////////////////////////////////
//função para adicionar a  array na lista do HTML:
function addArrayToLi(array, signo) {
  for (let i = 0; i < array.length; i++) {
    const listItem = document.createElement("li");
    const keys = Object.keys(array[i]);
    listItem.textContent = `${keys[0]}: ${array[i][keys[0]]}`;
    signo.appendChild(listItem);
  }
}
////////////////////////////////
const listaAries = document.getElementById("listaAries");
const conteudoListaAries = [
  { Modalidade: "Cardinal" },
  { "Planeta Regente": "Marte (6794.4 km)" },
  {
    "Palavras-Chave":
      "ação, assertividade, atitude, coragem, decisão, entusiasmo, agitação, independência, iniciativa, liderança, impaciência, competição, individualismo, pressa",
  },
];
console.log("Áries:", conteudoListaAries);
addArrayToLi(conteudoListaAries, listaAries);
///
const listaTaurus = document.getElementById("listaTaurus");
const conteudolistaTaurus = [
  { Modalidade: "Fixa" },
  { "Planeta Regente": "Vênus (12103.6 km)" },
  {
    "Palavras-Chave":
      "perseverança, determinação, estabilidade, paciência, produtividade, resistência, segurança, sensualidade, trabalho, materialidade, durabilidade, apego, teimosia, concretude",
  },
];
console.log("Touro:", conteudolistaTaurus);
addArrayToLi(conteudolistaTaurus, listaTaurus);
///

const listaGemini = document.getElementById("listaGemini");
const conteudoListaGemini = [
  { Modalidade: "Mutável" },
  { "Planeta Regente": "Mercúrio (4879.4 km)" },
  {
    "Palavras-Chave":
      "adaptação, comunicação, flexibilidade, leveza, movimento, troca, informação, curiosidade, inconstância, negociação, instabilidade, dispersão, racionalidade, linguagem",
  },
];
console.log("Gêmeos:", conteudoListaGemini);
addArrayToLi(conteudoListaGemini, listaGemini);
///
const listaCancer = document.getElementById("listaCancer");
const conteudoListaCancer = [
  { Modalidade: "Cardinal" },
  { "Planeta Regente": "Lua (3476 km)" },
  {
    "Palavras Chave":
      "afetividade, nutrição, acolhimento, raízes, família, imaginação, intuição, memória, passado, proteção, casa, sensibilidade, cuidado, oscilação",
  },
];
console.log("Câncer:", conteudoListaCancer);
addArrayToLi(conteudoListaCancer, listaCancer);
///
const listaLeo = document.getElementById("listaLeo");
const conteudoListaLeo = [
  { Modalidade: "Fixa" },
  { "Planeta Regente": "Sol (1390000 km)" },
  {
    "Palavras Chave":
      "comando, criatividade, autoconfiança, alegria, autoridade, individualidade, controle, energia, nobreza, generosidade, brilho, vaidade, orgulho, amor-próprio",
  },
];
console.log("Leão:", conteudoListaLeo);
addArrayToLi(conteudoListaLeo, listaLeo);
///
const listaVirgo = document.getElementById("listaVirgo");
const conteudoListaVirgo = [
  { Modalidade: "Mutável" },
  { "Planeta Regente": "Mercúrio (4879.4 km)" },
  {
    "Palavras Chave":
      "organização, crítica, pragmatismo, perfeccionismo, praticidade, rotina, simplicidade, variação, purificação, análise, observação, comprovação, intolerância, eficiência",
  },
];
console.log("Virgem:", conteudoListaVirgo);
addArrayToLi(conteudoListaVirgo, listaVirgo);
///
const listaLibra = document.getElementById("listaLibra");
const conteudoListaLibra = [
  { Modalidade: "Cardinal" },
  { "Planeta Regente": "Vênus (12103.6 km)" },
  {
    "Palavras Chave":
      "diplomacia, estética, imparcialidade, justiça, persuasão, harmonia, ponderação, reflexão, intermediação, indecisão, gentileza, dependência, tolerância, cooperação",
  },
];
console.log("Libra:", conteudoListaLibra);
addArrayToLi(conteudoListaLibra, listaLibra);
///
const listaScorpio = document.getElementById("listaScorpio");
const conteudoListaScorpio = [
  { Modalidade: "Fixa" },
  { "Planeta Regente": "Plutão (2320 km)" },
  {
    "Palavras Chave":
      "transformação, profundidade, psiquismo, cura, dominação, poder, desejo, sexualidade, erotismo, renascimento, regeneração, intensidade, mistério, investigação",
  },
];
console.log("Escorpião:", conteudoListaScorpio);
addArrayToLi(conteudoListaScorpio, listaScorpio);
///
const listaSagittarius = document.getElementById("listaSagittarius");
const conteudoListaSagittarius = [
  { Modalidade: "Mutável" },
  { "Planeta Regente": "Júpiter (142984 km)" },
  {
    "Palavras Chave":
      "determinação, foco, expansão, conhecimento, progresso, insatisfação, dogmatismo, abundância, meta, diversão, obstinação, impaciência, alegria, otimismo",
  },
];
console.log("Sagitário:", conteudoListaSagittarius);
addArrayToLi(conteudoListaSagittarius, listaSagittarius);
///
const listaCapricorn = document.getElementById("listaCapricorn");
const conteudoListaCapricorn = [
  { Modalidade: "Cardinal" },
  { "Planeta Regente": "Saturno (120536 km)" },
  {
    "Palavras Chave":
      "determinação, disciplina, organização, planejamento, ambição, praticidade, objetividade, dureza, frieza, rigidez, estruturação, realismo, estabilidade, prudência",
  },
];
console.log("Capricórnio:", conteudoListaCapricorn);
addArrayToLi(conteudoListaCapricorn, listaCapricorn);
///
const listaAquarius = document.getElementById("listaAquarius");
const conteudoListaAquarius = [
  { Modalidade: "Fixa" },
  { "Planeta Regente": "Urano (51118 km)" },
  {
    "Palavras Chave":
      "renovação, revolução, rebeldia, inventividade, cooperação, solidariedade, novidades, inovação, excentricidade, frieza, imprevisibilidade, originalidade, sociabilidade",
  },
];
console.log("Aquário:", conteudoListaAquarius);
addArrayToLi(conteudoListaAquarius, listaAquarius);
///
const listaPisces = document.getElementById("listaPisces");
const conteudoListaPisces = [
  { Modalidade: "Mutável" },
  { "Planeta Regente": "Netuno (49538 km)" },
  {
    "Palavras Chave":
      "sensibilidade, intuição, receptividade, sonhos, fantasia, poesia, caos, desorganização, inspiração, silêncio, profundidade, contemplação, imaginação, absorção",
  },
];
console.log("Peixes:", conteudoListaPisces);
addArrayToLi(conteudoListaPisces, listaPisces);
////////////////////////////////////////////////////////////////

const planetas = [
  { Marte: 6794.4 },
  { Vênus: 12103.6 },
  { Mercúrio: 4879.4 },
  { Lua: 3476 },
  { Sol: 1390000 },
  { Mercúrio: 4879.4 },
  { Vênus: 12103.6 },
  { Plutão: 2320 },
  { Júpiter: 142984 },
  { Saturno: 120536 },
  { Urano: 51118 },
  { Netuno: 49538 },
];

const mediaPlanetas = () => {
  console.log(planetas);
  let soma = 0;
  for (let i = 0; i < planetas.length; i++) {
    for (let km in planetas[i]) {
      soma += planetas[i][km];
    }
  }
  let media = soma / planetas.length;
  console.log(
    "A média da soma dos diâmetros equatoriais dos planetas do zodíaco é:",
    media.toFixed(3),
    "km"
  );
};

mediaPlanetas();
