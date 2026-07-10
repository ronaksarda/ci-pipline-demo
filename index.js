const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello CI/CD!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
}
