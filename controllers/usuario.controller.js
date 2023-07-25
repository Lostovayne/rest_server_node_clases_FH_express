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

// Actualizacion de datos del usuario

const usuariosPut = async (req, res = response) => {
    const { id } = req.params;
    const { password, google, correo, ...resto } = req.body;

    //validar contra la base de datos

    if (password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }
    //Ahora se hace de esta forma
    const usuario = await Usuario.findOneAndUpdate({ _id: id }, resto, { new: true });

    console.log(usuario);
    res.json({
        message: "put usuarios controller!",
        usuario,
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
