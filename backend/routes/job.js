const express = require('express');
const router = express.Router();
const { createJob, getJobs, getJobById, updateJob, deleteJob, applyJob } = require('../controllers/jobController.js');
const auth = require('../middlewares/auth.js');
const upload = require('../middlewares/upload.js');

router.post('/', auth, upload.single('companyLogo'), createJob);
router.get('/', getJobs);
router.get('/:id', getJobById);
router.put('/:id', auth, updateJob);
router.delete('/:id', auth, deleteJob);
router.post('/apply/:id', auth, applyJob);

module.exports = router;
