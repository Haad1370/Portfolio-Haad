const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/jobportal';

// Connect to MongoDB
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Job Schema & Model
const jobSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    description: String,
});

const Job = mongoose.model('Job', jobSchema);

// Fetch jobs from API and store in MongoDB
const fetchAndStoreJobs = async () => {
    try {
        const { data } = await axios.get('https://jsonfakery.com/jobs');
        await Job.deleteMany({});
        await Job.insertMany(data);
        console.log('✅ Jobs fetched & stored in MongoDB!');
    } catch (error) {
        console.error('❌ Error fetching jobs:', error.message);
    }
};

// Run job fetching every time server starts
fetchAndStoreJobs();

// API Route to get jobs
app.get('/api/jobs', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
