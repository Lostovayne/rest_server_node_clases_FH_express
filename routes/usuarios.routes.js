const { Router } = require("express");
const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
} = require("../controllers/usuario.controller");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { esRoleValido, emailExiste } = require("../helpers/db-validators");

const router = Router();

router.get("/", usuariosGet);

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check(
            "password",
            "El password es obligatorio y debe de contener más de 6 caracteres"
        ).isLength({ min: 6 }),
        check("correo", "El correo no es valido").isEmail(),
        check("correo").custom(emailExiste),
        check("rol").custom(esRoleValido),
        validarCampos,
    ],
    usuariosPost
);

router.put("/", usuariosPut);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);

module.exports = router;
