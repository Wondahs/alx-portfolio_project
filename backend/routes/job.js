/**
 * @fileoverview This file contains the routes for handling job-related requests.
 * @module routes/job
 */

const express = require('express');
const axios = require('axios');
const router = express.Router();
const Job = require('../models/Job.js');
const { createJob, getJobs, getJobById, updateJob, deleteJob, applyJob } = require('../controllers/jobController.js');
const auth = require('../middlewares/auth.js');
const upload = require('../middlewares/upload.js');

/**
 * GET /jobs - Pagination endpoint for existing jobs.
 * @route GET /jobs
 * @param {number} [page=1] - The page number for pagination.
 * @param {number} [limit=10] - The number of jobs to retrieve per page.
 * @returns {object} - The paginated list of jobs, total count, number of pages, current page, and limit.
 * @throws {Error} - If there is an error retrieving the jobs.
 */
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const jobs = await Job.find().skip(skip).limit(limit);
    const total = await Job.countDocuments();
    const pages = Math.ceil(total / limit);

    res.json({ data: jobs, total, pages, page, limit });
  } catch (error) {
    console.error('Failed to retrieve jobs', error);
    res.status(500).send('Failed to retrieve jobs');
  }
});

/**
 * GET /jobs/external - Fetch jobs from external APIs.
 * @route GET /jobs/external
 * @param {string} [description] - The job description to search for.
 * @param {string} [location] - The job location to search for.
 * @returns {object[]} - The combined list of jobs from GitHub Jobs API and Stack Overflow Jobs API.
 * @throws {Error} - If there is an error fetching jobs from the external APIs.
 */
router.get('/external', async (req, res) => {
  const { description, location } = req.query;

  if (!description && !location) {
    return res.status(400).json({ msg: 'Description or location query parameter is required' });
  }

  try {
    const githubJobs = await axios.get('https://jobs.github.com/positions.json', {
      params: { description, location }
    }).then(response => response.data);

    const stackOverflowJobs = await axios.get('https://api.stackexchange.com/2.2/jobs', {
      params: {
        order: 'desc',
        sort: 'activity',
        site: 'stackoverflow',
        q: description,
        l: location
      }
    }).then(response => response.data.items);

    const combinedJobs = [...githubJobs, ...stackOverflowJobs];
    res.json(combinedJobs);
  } catch (error) {
    console.error('Error fetching jobs from external APIs', error);
    res.status(500).send('Failed to fetch jobs from external APIs');
  }
});

/**
 * POST /jobs - Create a new job.
 * @route POST /jobs
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {void}
 */
router.post('/', auth, upload.single('companyLogo'), createJob);

/**
 * GET /jobs/:id - Get a job by ID.
 * @route GET /jobs/:id
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {void}
 */
router.get('/:id', getJobById);

/**
 * PUT /jobs/:id - Update a job by ID.
 * @route PUT /jobs/:id
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {void}
 */
router.put('/:id', auth, updateJob);

/**
 * DELETE /jobs/:id - Delete a job by ID.
 * @route DELETE /jobs/:id
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {void}
 */
router.delete('/:id', auth, deleteJob);

/**
 * POST /jobs/apply/:id - Apply for a job by ID.
 * @route POST /jobs/apply/:id
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {void}
 */
router.post('/apply/:id', auth, applyJob);

module.exports = router;
