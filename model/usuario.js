const { Schema, model } = require("mongoose");

const UsuarioShema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: [true, "El correo es necesario"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "La password es necesaria"],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: ["ADMIN_ROLE", "USER_ROLE"],
    },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
});

//Eliminar el password y la version para devolverlo sin esos datos
UsuarioShema.methods.toJSON = function () {
    const { __v, password, ...user } = this.toObject();
    return user;
};

module.exports = model("Usuario", UsuarioShema);
