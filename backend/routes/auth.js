const express = require('express');
const router = express.Router();
const {
    register,
    login,
    googleAuth,
    googleAuthCallback,
    googleAuthRedirect,
    facebookAuth,
    facebookAuthCallback,
    facebookAuthRedirect,
    linkedinAuth,
    linkedinAuthCallback,
    linkedinAuthRedirect,
    emailAuth,
    emailAuthCallback,
    emailAuthRedirect,
    initiateResetPassword,
    completeResetPassword
} = require('../controllers/authController.js');

router.post('/register', register);
router.post('/login', login);
router.post('/reset-password/initiate', initiateResetPassword);
router.post('/reset-password/complete', completeResetPassword);
router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback, googleAuthRedirect);
router.get('/facebook', facebookAuth);
router.get('/facebook/callback', facebookAuthCallback, facebookAuthRedirect);
router.get('/linkedin', linkedinAuth);
router.get('/linkedin/callback', linkedinAuthCallback, linkedinAuthRedirect);
router.get('/email', emailAuth);
router.get('/email/callback', emailAuthCallback, emailAuthRedirect);

module.exports = router;
