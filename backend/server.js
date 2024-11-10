const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  postedBy: { type: String, required: true },
  jobTitle: { type: String, required: true },
  projectSummary: { type: String, required: true },
  roleDetails: { type: String, required: true },
  compensation: { type: String, required: true },
  projectTimeline: { type: String, required: true },
  roleTimeline: { type: String, required: true },
  qualifications: { type: String, required: true },
  additionalInfo: String,
  image: { type: String, default: 'https://via.placeholder.com/300x200' },
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);

console.log('FRONTEND_URL:', process.env.FRONTEND_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = ['https://newt-nine.vercel.app', 'http://localhost:3000'];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Add headers middleware as a backup
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://newt-nine.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  
  // Handle OPTIONS method
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  
  next();
});

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url} from ${req.headers.origin}`);
  console.log('Request headers:', req.headers);
  next();
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Successfully connected to MongoDB.');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Add this to check if connection is lost
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

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

app.use(cors({
  origin: true, // For testing, allow all origins
  credentials: true
}));

// Make sure you have body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post('/api/projects', async (req, res) => {
  try {
    console.log('Received project data:', req.body);
    
    const project = new Project(req.body);
    console.log('Created project instance:', project);
    
    const savedProject = await project.save();
    console.log('Saved project:', savedProject);
    
    res.status(201).json(savedProject);
  } catch (error) {
    console.error('Detailed server error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    res.status(500).json({ 
      message: 'Error creating project', 
      error: error.message,
      details: error.errors // This will show mongoose validation errors
    });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Error fetching projects', error: error.message });
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
