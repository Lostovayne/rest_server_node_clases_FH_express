const { Router } = require("express");
const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
} = require("../controllers/usuario.controller");

const router = Router();

router.get("/", usuariosGet);

router.post("/", usuariosPost);

router.put("/", usuariosPut);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);

module.exports = router;
