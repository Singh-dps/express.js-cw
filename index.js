const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'Express.js server is running',
    repo: 'Singh-dps/express.js-cw',
    endpoints: {
      health: 'GET /health',
      hello: 'GET /hello?name=Dev',
      echo: 'POST /echo'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptimeSeconds: Math.round(process.uptime())
  });
});

app.get('/hello', (req, res) => {
  const name = req.query.name || 'world';
  res.json({ message: `Hello, ${name}!` });
});

app.post('/echo', (req, res) => {
  res.status(201).json({
    received: req.body || {},
    at: new Date().toISOString()
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    path: req.path
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

module.exports = app;
