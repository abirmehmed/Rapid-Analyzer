import express from 'express';
import gplay from 'google-play-scraper';
import cors from 'cors';

const app = express();
const hostname = '127.0.0.1';
const port = 5173;

// Enable CORS middleware
app.use(cors());

// Endpoint to fetch app details
app.get('/app-details', async (req, res) => {
  try {
    const { appId } = req.query;
    const appDetails = await gplay.app({ appId });
    res.json(appDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
