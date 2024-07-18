const express = require('express');
const router = express.Router();
const Job = require('../models/Job.js');
const { createJob, getJobs, getJobById, updateJob, deleteJob, applyJob } = require('../controllers/jobController.js');
const auth = require('../middlewares/auth.js');
const upload = require('../middlewares/upload.js');

/* GET /jobs?page=1&limit=10 - Retrieves job listings with pagination */
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

router.post('/', auth, upload.single('companyLogo'), createJob);
router.get('/:id', getJobById);
router.put('/:id', auth, updateJob);
router.delete('/:id', auth, deleteJob);
router.post('/apply/:id', auth, applyJob);

module.exports = router;