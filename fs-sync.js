const { log } = require("console");
const { readFileSync, writeFileSync } = require("fs");
log('start') 
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')


 log(first)
 log(second)

//  Ecris dans un fichier et même s'il n'existe pas il le crée quand même
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first} et ${second} yes`,
    // ou ça
    // "\nWaoouh",
    {flag: 'a'}
)

log('done with this task')
log('starting next one')

const result = readFileSync('./content/result-sync.txt', 'utf-8')

log(result);