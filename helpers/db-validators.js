const Role = require("../model/role");
const Usuario = require("../model/usuario");

const esRoleValido = async (rol = "") => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no existe`);
    }
};

const emailExiste = async (correo = "") => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya existe`);
    }
};

module.exports = {
    esRoleValido,
    emailExiste,
};
