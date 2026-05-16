const express = require('express');
const path = require('path');
const app = express();

// Serve static files from current directory
app.use(express.static(__dirname));

// Serve index.html as default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'air_signature.html'));
});

// Serve the HTML file for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'air_signature.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`AirSign server running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});
