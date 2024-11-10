const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Schemas
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

const insightSchema = new mongoose.Schema({
  content: String,
  username: String,
  image: String,
  comments: [String],
  likes: { type: Number, default: 0 }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
const Insight = mongoose.model('Insight', insightSchema);

// Consolidated CORS configuration
app.use(cors({
  origin: ['https://newt-nine.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
  credentials: true,
  optionsSuccessStatus: 204
}));

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

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

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Insights routes
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

// Projects routes
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
      details: error.errors
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

app.get('/api/projects/title/:title', async (req, res) => {
  try {
    const project = await Project.findOne({ 
      title: decodeURIComponent(req.params.title) 
    });
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ message: 'Error fetching project', error: error.message });
  }
});

// Update the existing projects routes
app.get('/api/projects/:id', async (req, res) => {
  try {
    console.log('Fetching project with ID:', req.params.id); // Debug log
    
    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      console.log('Invalid MongoDB ID format');
      return res.status(404).json({ message: 'Invalid project ID format' });
    }

    const project = await Project.findById(req.params.id);
    
    if (!project) {
      console.log('Project not found');
      return res.status(404).json({ message: 'Project not found' });
    }
    
    console.log('Project found:', project); // Debug log
    res.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ 
      message: 'Error fetching project', 
      error: error.message 
    });
  }
});

// Add this near your other routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Frontend URL:', process.env.FRONTEND_URL);
});
