const { Router } = require('express');
const router = Router();
const { getAll} = require('../controllers/colaboradores');

router.get('/all', getAll);

module.exports  = router;