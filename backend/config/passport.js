const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const User = require('../models/User.js');

/* Function to handle creating or updating a user based on OAuth profile */
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
        done(error, null);
    }
}

/* Google OAuth Strategy */
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    await handleOAuthLogin(profile, done, 'googleId');
}));

/* Facebook OAuth Strategy */
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback"
}, async (accessToken, refreshToken, profile, done) => {
    const { id, displayName, emails } = profile;
    let user = await User.findOne({ facebookId: id });
    if (!user) {
        user = await User.create({
            facebookId: id,
            name: displayName,
            email: emails[0].value
        });
    }
    done(null, user);
}));

/* LinkedIn OAuth Strategy */
passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: "/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_liteprofile']
}, async (accessToken, refreshToken, profile, done) => {
    const { id, displayName, emails } = profile;
    let user = await User.findOne({ linkedinId: id });
    if (!user) {
        user = await User.create({
            linkedinId: id,
            name: displayName,
            email: emails[0].value
        });
    }
    done(null, user);
}));

/* Serialize and deserialize user instances to and from the session */
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

module.exports = passport;
