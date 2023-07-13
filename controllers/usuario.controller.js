const { response } = require("express");

const usuariosGet = (req, res = response) => {
    res.json({
        message: "get usuarios controller!",
    });
};

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        message: "post usuarios controller!",
        body,
    });
};

const usuariosPut = (req, res = response) => {
    res.json({
        message: "put usuarios controller!",
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        message: "path usuarios controller!",
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        message: "delete usuarios controller!",
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
};
