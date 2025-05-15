const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cafeRoutes = require('./routes/cafeRoutes');
const mockData = require('./data/mockData');
const CafeItem = require('./models/CafeItem');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/cafe', cafeRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');

    const count = await CafeItem.countDocuments();
    if (count === 0) {
      await CafeItem.insertMany(mockData);
      console.log('Inserted mock data');
    }

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
