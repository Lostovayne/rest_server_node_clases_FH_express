const { Schema, model } = require("mongoose");

const RoleSchema = Schema({
    rol: {
        type: String,
        required: [true, "El rol es necesario"],
    },
});

module.exports = model("Role", RoleSchema);
