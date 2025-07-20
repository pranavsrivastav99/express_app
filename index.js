const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to my Express app!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Contact route with JSON response
app.get('/contact', (req, res) => {
  res.json({ email: 'example@example.com', phone: '123-456-7890' });
});

// 404 route for unknown paths
app.use((req, res) => {
  res.status(404).send('Page not found!');
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
