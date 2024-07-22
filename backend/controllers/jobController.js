const multer = require('multer');
const Job = require('../models/Job.js');
const Application = require('../models/Application.js');

/* Create a new job */
exports.createJob = async (req, res) => {
    const { title, company, description, location, salary } = req.body;
    try {
        const newJob = new Job({
            title,
            company,
            description,
            location,
            salary,
            user: req.user.id
        });
        if (req.file) {
            newJob.companyLogo = req.file.path;
        }
        const job = await newJob.save();
        res.json(job);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

/* Get all jobs */
exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({ createdAt: -1 });
        res.json(jobs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

/* Get a job by ID */
exports.getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.json(job);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.status(500).send('Server error');
    }
};

/* Update a job */
exports.updateJob = async (req, res) => {
    const { title, company, description, location, salary } = req.body;
    try {
        let job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ msg: 'Job not found' });
        }
        if (job.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }
        job = await Job.findByIdAndUpdate(
            req.params.id,
            { $set: { title, company, description, location, salary } },
            { new: true }
        );
        res.json(job);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.status(500).send('Server error');
    }
};

/* Delete a job */
exports.deleteJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ msg: 'Job not found' });
        }
        if (job.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }
        await job.remove();
        res.json({ msg: 'Job removed' });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.status(500).send('Server error');
    }
};

/* Apply for a job */
exports.applyJob = async (req, res) => {
    const { resume, coverLetter } = req.body;
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ msg: 'Job not found' });
        }
        const newApplication = new Application({
            user: req.user.id,
            job: req.params.id,
            resume,
            coverLetter
        });
        const application = await newApplication.save();
        res.json(application);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.status(500).send('Server error');
    }
};

/* Get saved jobs for a user */
exports.getSavedJobs = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('savedJobs');
        res.json(user.savedJobs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Failed to retrieve saved jobs');
    }
};

/* Get applied jobs for a user */
exports.getAppliedJobs = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('appliedJobs');
        res.json(user.appliedJobs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Failed to retrieve applied jobs');
    }
};
