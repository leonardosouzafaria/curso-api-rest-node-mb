const http = require("http");

//Porta
const port = 8080; //127.0.0.1 || 0.0.0.0.0

//Ip
const ip = 'localhost'; // 127

//Criando o servidor;
const server = http.createServer((request, response) => {
    
    const respostas = [];
    //urls de requisicao
    respostas["/"] = "<h1>Pagina principal</h1>";
    respostas["/fotos"] = "<h1>Foto</h1>";
    respostas['/contato'] = "<h1>Contato</h1>";

    response.end(respostas[request.url]);

    console.log("URL", request.url);
    
    //urls de requisicao
 /*    if (request.url === "/fotos") {
        response.end("<h1>Fotos</h1>");
    } else if (request.url === "/") {
        response.end("<h1>Pagina principal</h1>");
    } else {
        response.end("<h1>Servidor On</h1>");
    } */
});

//Subindo o servidor
server.listen(port, ip, () => {
    console.log(`O servidor está rodando em: http:\\${ip}:${port}`);
    console.log("Para fechar o servidor ctrl + c");
});