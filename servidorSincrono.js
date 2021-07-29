const http = require("http");
const fs = require("fs");

//lectura de archivos sincrona
const archivo1 = fs.readFileSync("archivoPrueba1.html");
const archivo2 = fs.readFileSync("archivoPrueba2.html");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    return res.end(archivo1);
  } else if (req.url === "/otro") {
    return res.end(archivo2);
  }
});

server.listen(5000, function (error) {
  if (error) {
    console.log("Algo salio mal");
  } else {
    console.log("El servidor esta corriendo en el puerto 5000");
  }
});
