const express = require("express");
const cors = require("cors");
const router = require("../routes/usuarios.routes");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";
        // middelware
        this.middelware();
        // Rutas de mi app
        this.routes();
    }

    middelware() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.usuariosPath, router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`);
        });
    }
}

module.exports = Server;
