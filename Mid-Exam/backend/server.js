const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const Job = require('./models/Job'); // assuming your model is in models/Job.js

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/jobssss', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 5000;

app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, '0.0.0.0', async () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
  console.log('✅ Connected to MongoDB');

  try {
    const response = await axios.get('https://jsonfakery.com/jobs');
    const jobs = response.data;

    await Job.deleteMany({});
    await Job.insertMany(jobs);
    console.log('✅ Jobs fetched & stored in MongoDB!');
  } catch (err) {
    console.error('❌ Failed to fetch jobs:', err.message);
  }
});
