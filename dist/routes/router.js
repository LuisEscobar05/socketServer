"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Get Good'
    });
});
router.post('/mensajes', (req, res) => {
    var cuerpo = req.body.cuerpo;
    const de = req.body.de;
    cuerpo = cuerpo + ", si modifica";
    res.json({
        ok: true,
        cuerpo,
        de
    });
    // cuerpo:cuerpo
});
router.delete('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    var id = req.params.id;
    id = id + " , el id de Delete";
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
    // cuerpo:cuerpo
});
exports.default = router;
