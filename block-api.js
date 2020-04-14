const fs = require('fs');
const http = require('http');

// Top Level Syncronous - Block Execution Why? solo se ejecutara una vez
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'); // Read File data.json
const dataObj = JSON.parse(data);   //Convert to Js Values


const server = http.createServer((req, res) => {
    const pathName = req.url; // Variable que obtendra el modulo req.url 

    if (pathName === '/') {//(misitio.com/)

        res.end('BIENVENIDO ');//Responde Finalizando con este mensaje


    } else if (pathName == '/api') {

        res.writeHead(200, { 'Content-type': 'application/javascript' }); //Informa al browser que es un JSON
        console.log(data); // Va Mostrar el contenido de data.json
        res.end(data);//


    } else {
        res.writeHead(404, {//Handle Error 404 - respond information
            'Content-type': 'text/html',   //2 ** 
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not Found 404!</h1>');
    }

    console.log(req.url);

});

server.listen(8000, 'localhost', () => {
    console.log('Listening to resquests on por 8000 💻');
});