const { response } = require("express");
const Usuario = require("../model/usuario");
const bcryptjs = require("bcryptjs");

const usuariosGet = (req, res = response) => {
    res.json({
        message: "get usuarios controller!",
    });
};

const usuariosPost = async (req, res) => {
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    // Gaurdar en la bd
    await usuario.save();
    res.json({
        usuario,
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
