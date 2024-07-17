require('dotenv').config();
const express = require('express');
const connectDB = require('../config/db.js');
const passport = require('passport');
const session = require('express-session');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const errorHandler = require('../middlewares/errorHandler.js');
const authRoutes = require('../routes/auth.js');
const jobRoutes = require('../routes/job.js');

/* Initialize database connection */
connectDB();

/* Passport configuration */
require('../config/passport');

const app = express();

/* Middleware */
app.use(express.json());
app.use(helmet());
app.use(cors());

/* Session configuration */
app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true, httpOnly: true }
}));

/* Initialize Passport and session middleware */
app.use(passport.initialize());
app.use(passport.session());

/* Apply rate limiting */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, /* 15 minutes */
  max: 100 /* limit each IP to 100 requests per windowMs */
});
app.use(limiter);

/* Error handling middleware */
app.use(errorHandler);

/* Routes */
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

/* Start the server */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));