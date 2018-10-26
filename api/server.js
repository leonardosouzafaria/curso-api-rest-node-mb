const express = require( "express" );
const port = 8080;
//const host = "localhost";

const server = express();

//Simulação do banco
const collabs = [
    {
        nick: "leosouzaf",
        quantidade: 100
    },
    
    {
        nick: "ana",
        quantidade:50
    },

    {
        nick: "tati",
        quantidade: 10
    }
]

//endpoints
server.get( '/collabs', ( req, res ) => {
    res.send(collabs);
} );

server.use( ( req, res ) => {
    res.send( { msg: "Essa rota não tem funcionálidade" } );
} )

server.listen( port, () => {
    console.log(`servidor está de na url: http://localhost:${port}`);
    console.log("Para derrubar o servidor  aperte CTRL + C");
});