const http = require('http');

http.createServer( ( req, res ) => {

    // res.writeHead(200, {  'content-type': 'application/json'  });
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {  'content-type': 'application/csv'  });
    // const persona = {
    //     id: 1,
    //     name: 'jose'
    // };
    // res.write(JSON.stringify(persona));
    // res.write('id; nombre\n');
    // res.write('1; Jose\n');
    // res.write('2; Pedro\n');
    // res.write('3; Juan\n');

    res.write('Hola Mundo');

    res.end();
} )
.listen( 8080 );

console.log('Escuchando el puerto', 8080);