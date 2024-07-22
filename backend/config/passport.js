const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const logger = require('../uploads/logger.js');

/* Helper function for OAuth login */
async function handleOAuthLogin(profile, done, providerIdField) {
    try {
        let user = await User.findOne({ [providerIdField]: profile.id });
        if (!user) {
            user = await User.create({
                [providerIdField]: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value
            });
        }
        done(null, user);
    } catch (error) {
        logger.error(`Error in handleOAuthLogin: ${error.message}`);
        done(error, null);
    }
}

/* Google OAuth Strategy */
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        await handleOAuthLogin(profile, done, 'googleId');
    } catch (error) {
        logger.error(`Error in Google OAuth: ${error.message}`);
        done(error, null);
    }
}));

/* Facebook OAuth Strategy */
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        await handleOAuthLogin(profile, done, 'facebookId');
    } catch (error) {
        logger.error(`Error in Facebook OAuth: ${error.message}`);
        done(error, null);
    }
}));

/* LinkedIn OAuth Strategy */
passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: "/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_liteprofile']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        await handleOAuthLogin(profile, done, 'linkedinId');
    } catch (error) {
        logger.error(`Error in LinkedIn OAuth: ${error.message}`);
        done(error, null);
    }
}));

/* Local Strategy for Email/Password Authentication */
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return done(null, false, { message: 'No user with that email' });
        }

        const isMatch = await user.matchPassword(password);
        if (isMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Password is incorrect' });
        }
    } catch (error) {
        logger.error(`Error in Local Strategy: ${error.message}`);
        done(error, null);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        logger.error(`Error in deserializeUser: ${error.message}`);
        done(error, null);
    }
});

module.exports = passport;
