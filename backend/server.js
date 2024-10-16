const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

console.log('FRONTEND_URL:', process.env.FRONTEND_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Disable CORS (temporary)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Add this middleware to set headers for all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url} from ${req.headers.origin}`);
  console.log('Request headers:', req.headers);
  next();
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Insight Schema
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
    console.error('Error fetching insights:', error);
    res.status(500).json({ message: 'Error fetching insights', error: error.message });
  }
});

app.post('/api/insights', async (req, res) => {
  try {
    const newInsight = new Insight(req.body);
    const savedInsight = await newInsight.save();
    res.status(201).json(savedInsight);
  } catch (error) {
    console.error('Error creating insight:', error);
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
    res.status(201).json(insight);
  } catch (error) {
    console.error('Error adding comment:', error);
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
    console.error('Error liking insight:', error);
    res.status(400).json({ message: 'Error liking insight', error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  console.log('CORS is disabled for debugging');
});
