
let wordAs = ['smell', 'miss', 'see', 'explore', 'admire', 'perceive', 'become', 'forgive', 'obliterate', 'grow'];
let wordBs = ['rose', 'shot', 'world', 'sock', 'hamburger', 'dream', 'potion', 'tumbleweed', 'barnacle', 'forest'];

let wordA;
let wordB;

wordA = wordAs[Math.floor(Math.random()*(wordAs.length))]; 
wordB = wordBs[Math.floor(Math.random()*(wordBs.length))];


const templates = [`Don't forget to stop and ${wordA} the ${wordB}s`, 
        `You ${wordA} 100% of the ${wordB}s you never take.`, 
        `You must be the change you wish to ${wordA} in the ${wordB}`];


let template = templates[Math.floor(Math.random()*templates.length)];

//picks random 1st word to use in template





console.log(template);