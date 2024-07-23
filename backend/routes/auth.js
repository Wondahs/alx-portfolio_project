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
    initiateResetPassword,
    completeResetPassword
} = require('../controllers/authController.js');
const passport = require('passport');
const { check, validationResult } = require('express-validator');
const auth = require('../middlewares/auth.js');

/* Register a new user (POST) */
router.post('/register', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    await register(req, res);
});

/* Login a user (POST) */
router.post('/login', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    await login(req, res);
});

/* OAuth routes for Google, Facebook, LinkedIn */
router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback, googleAuthRedirect);

router.get('/facebook', facebookAuth);
router.get('/facebook/callback', facebookAuthCallback, facebookAuthRedirect);

router.get('/linkedin', linkedinAuth);
router.get('/linkedin/callback', linkedinAuthCallback, linkedinAuthRedirect);

/* Password reset routes */
router.post('/reset-password/initiate', initiateResetPassword);
router.post('/reset-password/complete', completeResetPassword);

/* Logout route (GET) */
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});

router.get('/protected', auth, (req, res) => {
    res.json({ msg: 'This is a protected route', user: req.user });
});

module.exports = router;
