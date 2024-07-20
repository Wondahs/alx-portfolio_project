require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const connectDB = require('../config/db.js');
const logger = require('./logger.js');
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

/* Setup Morgan to use Winston for HTTP request logging */
app.use(morgan('combined', { stream: { write: (message) => logger.http(message.trim()) } }));

/* Define a route for the root URL */
app.get('/', (req, res) => {
  res.send('Welcome to JobSync API');
});

/* Routes */
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

/* Error handling middleware */
app.use(errorHandler);

/* Start the server */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
