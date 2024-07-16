const express = require('express');
const router = express.Router();
const { getUser, followCompany, uploadCompanyLink } = require('../controllers/userController.js');
const auth = require('../middlewares/auth.js');

router.get('/', auth, getUser);
router.post('/follow/:id', auth, followCompany);
router.post('/company-link', auth, uploadCompanyLink);

module.exports = router;
