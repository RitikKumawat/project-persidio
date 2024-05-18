const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addProperty, deleteProperty, getProperties, getPropertiesBySeller } = require('../controllers/propertyController');
const isSeller = require('../middleware/isSeller');


router.post('/', auth, isSeller ,addProperty);


router.delete('/:id', auth, isSeller ,deleteProperty);


router.get('/', getProperties);

router.get("/my-properties",auth,isSeller,getPropertiesBySeller);

module.exports = router;