const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User.js');
const Token = require('../models/Token.js');
const sendEmail = require('../utils/sendEmail.js');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        user = new User({ name, email, password });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, async (err, token) => {
            if (err) throw err;
            res.json({ token });

            /* Send welcome email */
            await sendEmail(user.email, 'Welcome to JobSync', 'Thank you for registering!');
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Email' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Password' });
        }
        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });
exports.googleAuthCallback = passport.authenticate('google', { failureRedirect: '/' });
exports.googleAuthRedirect = (req, res) => {
    res.redirect('/dashboard');
};

exports.facebookAuth = passport.authenticate('facebook', { scope: ['email'] });
exports.facebookAuthCallback = passport.authenticate('facebook', { failureRedirect: '/' });
exports.facebookAuthRedirect = (req, res) => {
    res.redirect('/dashboard');
};

exports.linkedinAuth = passport.authenticate('linkedin');
exports.linkedinAuthCallback = passport.authenticate('linkedin', { failureRedirect: '/' });
exports.linkedinAuthRedirect = (req, res) => {
    res.redirect('/dashboard');
};

exports.emailAuth = passport.authenticate('email', { scope: ['email'] });
exports.emailAuthCallback = passport.authenticate('email', { failureRedirect: '/' });
exports.emailAuthRedirect = (req, res) => {
    res.redirect('/dashboard');
};

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        const resetToken = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        user.resetPasswordExpire = Date.now() + 3600000; /* 1 hour */
        await user.save();
        const resetUrl = `${req.protocol}://${req.get('host')}/resetpassword/${resetToken}`;
        const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;
        try {
            await sendEmail(user.email, 'Password reset token', message);
            res.status(200).json({ msg: 'Email sent' });
        } catch (err) {
            console.error(err);
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();
            return res.status(500).json({ msg: 'Email could not be sent' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.initiateResetPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'User with this email does not exist' });
        }
        const token = await new Token({
            userId: user._id,
            token: crypto.randomBytes(32).toString('hex'),
        }).save();
        const resetUrl = `${process.env.CLIENT_URL}/password-reset/${token.token}`;
        const message = `Click on this link to reset your password: ${resetUrl}`;
        await sendEmail(user.email, 'Password Reset', message);
        res.send('Password reset link sent to your email');
    } catch (error) {
        console.error('Failed to initiate password reset', error);
        res.status(500).send('Failed to initiate password reset');
    }
};

exports.completeResetPassword = async (req, res) => {
    const { token, password } = req.body;
    try {
        const resetToken = await Token.findOne({ token });
        if (!resetToken) {
            return res.status(400).json({ msg: 'Invalid or expired password reset token' });
        }
        const user = await User.findById(resetToken.userId);
        if (!user) {
            return res.status(400).json({ msg: 'User not found' });
        }
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        await resetToken.delete();
        res.send('Password reset successful');
    } catch (error) {
        console.error('Failed to complete password reset', error);
        res.status(500).send('Failed to complete password reset');
    }
};
