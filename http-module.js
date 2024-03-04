const { log } = console;
const { createServer } = require('http')

/* req : la requete entrante ou la demande et res: la reponse à cette demande
La demande vient du navigateur web, de la page web
*/
const server = createServer((req, res) => {
    // log(res) très long objet
    // ERRRRRRRRROOOOOOOOOOOORRRRRRRRRRRRRRRRRRRRRRRRR
    // if (req.url === '/') {
    //     res.end('Bienvenue sur notre page Home !')
    // }
    // if (req.url ==='/about') {
    //     res.end('voici notre bref historique');
    // }
    // res.end(`
    // <h1>Oups!!</h1>
    // <p>Page Introuvable</p>
    // <a href="/">Back home</a>
    // `)
    
    if (req.url === '/') {
        res.end('Bienvenue notre page Home')
    } else if (req.url === '/about') {
        res.end('voici notre bref historique');
    } else {
        res.end(`
     <h1>Oups!!</h1>
     <p>Page Introuvable</p>
     <a href="/">Back home</a>
     `)
    }
})
server.listen(5000)