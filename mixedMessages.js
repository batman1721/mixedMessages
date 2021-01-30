let first=['Eu sou', 'Tu és', 'Ele é'];
let second=[' toto', ' bonito como um macaco', ' filho de Deus'];

function randomSentence(texto){
    return texto[Math.floor(Math.random()*texto.length)];
};

console.log(randomSentence(first)+randomSentence(second));