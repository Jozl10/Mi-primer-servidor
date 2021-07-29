const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write("Hola mundo!");
    res.end();
  }
});

server.listen(5000, function (error) {
  if (error) {
    console.log("Algo salio mal");
  } else {
    console.log("El servidor esta corriendo en el puerto 5000");
  }
});
