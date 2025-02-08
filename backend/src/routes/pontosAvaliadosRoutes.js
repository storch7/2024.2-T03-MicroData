const express = require('express');

const { createPontoAvaliado, getPontosAvaliados, updatePontoAvaliado, getPontoAvaliadoById} = require('../controllers/pontosAvaliadosController');


const router = express.Router();

router.post('/', createPontoAvaliado);
router.get('/', getPontosAvaliados);
router.put('/:id', updatePontoAvaliado);
router.get('/:id', getPontoAvaliadoById);


module.exports = router;
