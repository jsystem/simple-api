//Declare Module
const fs = require('fs');
const http = require('http');
const url = require('url');

//SERVER - Create the server 
const server = http.createServer((req, res) => {

    const pathName = req.url; // Variable que obtendra el modulo req.url 

    if (pathName === '/' || pathName === '/overview') {//(misitio.com/overview)
        res.end('This is a OVERVIEW');//Responde Finalizando con este mensaje
    } else if (pathName === '/product') {//(misitio.com/product)
        res.end('This is a PRODUCT !');

    } else if (pathName === '/api') {//API
        // Read File
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data);//Convert to Js Values
            //res.writeHead(200, { 'Content-type': 'json/application' });   // Dont Working  

            res.writeHead(200, { 'Content-type': 'application/javascript' }); //Informa al browser que es un JSON

            console.log(data); // Va Mostrar el contenido de data.json
            res.end(data);//
        });

    } else {
        res.writeHead(404, {//Handle Error 404 - respond information
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not Found 404!</h1>');
    }

    console.log(req.url);

});

////SERVER - Second Part Listen Incomming Request front the Client

server.listen(8000, 'localhost', () => {
    console.log('Listening to resquests on por 8000 💻');
});