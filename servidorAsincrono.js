const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  //leer y enviar archivos asincrono
  if (req.url === "/") {
    fs.readFile("archivoPrueba1.html", function (error, html) {
      if (error) {
        throw error;
      }
      res.end(html);
    });
  } else if (req.url === "/otro") {
    fs.readFile("archivoPrueba2.html", function (error, html) {
      if (error) {
        throw error;
      }
      res.end(html);
    });
  }
});

server.listen(5000, function (error) {
  if (error) {
    console.log("Algo salio mal");
  } else {
    console.log("El servidor esta corriendo en el puerto 5000");
  }
});
