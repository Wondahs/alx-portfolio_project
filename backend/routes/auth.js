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
const passport = require('passport');

/* Register a new user (POST) */
router.post('/register', register);

/* Login a user (POST) */
router.post('/login', login, passport.authenticate('local', {
    successRedirect: '/Dashboard',
    failureRedirect: '/login',
    failureFlash: true
}));

/* OAuth routes for Google, Facebook, LinkedIn */
router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback, googleAuthRedirect);

router.get('/facebook', facebookAuth);
router.get('/facebook/callback', facebookAuthCallback, facebookAuthRedirect);

router.get('/linkedin', linkedinAuth);
router.get('/linkedin/callback', linkedinAuthCallback, linkedinAuthRedirect);

/* Email-based authentication */
router.post('/email/register', register);
router.post('/email/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
}));

/* Password reset routes */
router.post('/reset-password/initiate', initiateResetPassword);
router.post('/reset-password/complete', completeResetPassword);

/* Redirect to dashboard after successful login */
router.get('/email', emailAuth);
router.get('/email/callback', emailAuthCallback, emailAuthRedirect);

module.exports = router;
