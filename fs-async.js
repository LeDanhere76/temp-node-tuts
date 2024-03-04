const { log } = require("console");
const { writeFile, readFile } = require("fs");

log('start')

readFile('./content/first.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    log(data);
    log('done first')

    const first = data
   readFile('./content/second.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    log(data);
    const second = data
    writeFile("./content/result-async.txt",
    `\nVoilà le resutat : ${first}, ${second}`,
    {flag: 'a'},
    (err) => {
        if (err) {
            throw err;
        }
        log('done writing')
        readFile("./content/result-async.txt", "utf-8",(err, data) => {
            if (err) throw err;
            log(data);
        })
    }
    )
})
})
// log('done ! with this task')

console.log('starting next task')