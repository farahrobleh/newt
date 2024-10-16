const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Enhanced CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Insight Schema
const insightSchema = new mongoose.Schema({
  content: String,
  username: String,
  image: String,
  comments: [String],
  likes: { type: Number, default: 0 }
}, { timestamps: true });

const Insight = mongoose.model('Insight', insightSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/api/insights', async (req, res) => {
  try {
    const insights = await Insight.find().sort({ createdAt: -1 });
    res.json(insights);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching insights', error: error.message });
  }
});

app.post('/api/insights', async (req, res) => {
  try {
    const newInsight = new Insight(req.body);
    const savedInsight = await newInsight.save();
    res.status(201).json(savedInsight);
  } catch (error) {
    res.status(400).json({ message: 'Error creating insight', error: error.message });
  }
});

app.post('/api/insights/:id/comments', async (req, res) => {
  try {
    const insight = await Insight.findById(req.params.id);
    if (!insight) {
      return res.status(404).json({ message: 'Insight not found' });
    }
    insight.comments.push(req.body.comment);
    await insight.save();
    res.status(201).json(req.body.comment);
  } catch (error) {
    res.status(400).json({ message: 'Error adding comment', error: error.message });
  }
});

app.post('/api/insights/:id/like', async (req, res) => {
  try {
    const insight = await Insight.findById(req.params.id);
    if (!insight) {
      return res.status(404).json({ message: 'Insight not found' });
    }
    insight.likes += 1;
    await insight.save();
    res.json({ likes: insight.likes });
  } catch (error) {
    res.status(400).json({ message: 'Error liking insight', error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  console.log(`CORS is set up for origin: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});