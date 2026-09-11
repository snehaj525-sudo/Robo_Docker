const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8080;

// MongoDB connection
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/catalogue';

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✓ Connected to MongoDB');
})
.catch((err) => {
  console.error('✗ MongoDB connection failed:', err.message);
  process.exit(1);
});

// Basic route
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', mongo: MONGO_URL });
});

app.listen(PORT, () => {
  console.log(`✓ Catalogue service running on port ${PORT}`);
});
