const express = require('express');
const path=require('path');
const app = express();
const PORT=3000;

app.get('/', (req, res) => {
  res.sendFile(Path2D.join(__dirname,'sample.html'));
});

app.listen(PORT, () => {
  console.log('Server listening on port 3000');
});
