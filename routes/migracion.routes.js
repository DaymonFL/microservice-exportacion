/**
 * API
 * Ruta: '/api/admin'
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { Migracion } = require('../controller/migracion.controller');
const { validadorCreateItem } = require('../validators/validador');
const router = Router();

router.get('/iniciar-migracion',
    [
    ], Migracion 
);

module.exports = router;