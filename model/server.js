const express = require("express");
const cors = require("cors");
const router = require("../routes/usuarios.routes");
const { dbConnection } = require("../database/config");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";
        // Conectar a la base de datos
        this.conectarDB();
        // middelware
        this.middelware();
        // Rutas de mi app
        this.routes();
    }

    async conectarDB() {
        try {
            await dbConnection();
        } catch (error) {
            console.log(error);
            throw new Error("Error al conectar a la base de datos");
        }
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
