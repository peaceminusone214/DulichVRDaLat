// Filename - backend/index.js

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://peaceminusone214:Blssnow1@dalatbooking.sukav1a.mongodb.net/test', {
  dbName: 'test',
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
  } else {
    console.log('Connected to yourDB-name database');
  }
});

// Define User schema and model
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: Number,
    default: 0
  }
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
  next();
});

const User = mongoose.model('users', UserSchema);
User.createIndexes();

// Define Tour schema and model
const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  locations: {
    type: [String], // Array of strings
    required: true
  },
  duration: {
    type: Number, // Duration in days
    required: true
  }
});

const Tour = mongoose.model('tours', TourSchema);

// Middleware
app.use(express.json());
app.use(cors());

// Test endpoint
app.get("/", (req, res) => {
  res.send("App is Working");
  // Check if the backend is working by visiting http://localhost:5000
});

// Registration endpoint
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password});
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password; // Assuming password management if added later
      res.status(201).send(result);
      console.log('User registered:', result);
    }
  } catch (e) {
    if (e.code === 11000) {
      res.status(400).send('Username or Email is already registered.');
      console.error('Username or Email already registered:', req.body);
    } else {
      res.status(500).send('Something went wrong.');
      console.error('Error registering user:', e);
    }
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).send('Invalid username or password');
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid username or password');
    }

    res.status(200).send({ username, role: user.role });
    console.log('User logged in:', username);
  } catch (e) {
    res.status(500).send('Something went wrong.');
    console.error('Error during login:', e);
  }
});

// Tours CRUD endpoints

// Create a new tour
app.post("/tours", async (req, res) => {
  try {
    const { name, locations, duration } = req.body;
    const tour = new Tour({ name, locations, duration });
    const result = await tour.save();
    res.status(201).send(result);
    console.log('Tour created:', result);
  } catch (e) {
    res.status(500).send('Something went wrong.');
    console.error('Error creating tour:', e);
  }
});

// Get all tours
app.get("/tours", async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).send(tours);
    console.log('Tours retrieved:', tours);
  } catch (e) {
    res.status(500).send('Something went wrong.');
    console.error('Error retrieving tours:', e);
  }
});

// Get a specific tour by ID
app.get("/tours/:id", async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).send('Tour not found');
    }
    res.status(200).send(tour);
    console.log('Tour retrieved:', tour);
  } catch (e) {
    res.status(500).send('Something went wrong.');
    console.error('Error retrieving tour:', e);
  }
});

// Update a tour by ID
app.put("/tours/:id", async (req, res) => {
  try {
    const { name, locations, duration } = req.body;
    const tour = await Tour.findByIdAndUpdate(req.params.id, { name, locations, duration }, { new: true });
    if (!tour) {
      return res.status(404).send('Tour not found');
    }
    res.status(200).send(tour);
    console.log('Tour updated:', tour);
  } catch (e) {
    res.status(500).send('Something went wrong.');
    console.error('Error updating tour:', e);
  }
});

// Delete a tour by ID
app.delete("/tours/:id", async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).send('Tour not found');
    }
    res.status(200).send('Tour deleted');
    console.log('Tour deleted:', tour);
  } catch (e) {
    res.status(500).send('Something went wrong.');
    console.error('Error deleting tour:', e);
  }
});

// Start the server
app.listen(5000, () => {
  console.log("App listening at port 5000");
});
