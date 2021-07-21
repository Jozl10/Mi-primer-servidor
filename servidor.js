const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  //hola mundo
  if (req.url === "/") {
    res.write("Hola mundo!");
    res.end();
    // leer y enviar archivo html Sincrono
  } else if (req.url === "/sincrono") {
    return res.end(fs.readFileSync("HolaSincrono.html"));
    // leer y enviar archivo html Asincrono
  } else if (req.url === "/asincrono") {
    fs.readFile("HolaAsincrono.html", function (error, html) {
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
