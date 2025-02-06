const express = require('express');

const { createPontoAvaliado, getPontoAvaliado, updatePontoAvaliado } = require('../controllers/pontosAvaliadosController');

const router = express.Router();

router.post('/', createPontoAvaliado);
router.get('/', getPontoAvaliado);
router.put('/:id', updatePontoAvaliado);

module.exports = router;
