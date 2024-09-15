require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./router/userRoutes');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
}));

app.use(express.json());

app.use('/api', userRoutes);

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MongoDB URI not defined in environment variables');
}

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
};

connectDB();

const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});