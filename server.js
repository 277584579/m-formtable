const express = require('express');
const app = express();
const port = 3007;

app.get('/', (req, res) => {
  res.send('Hello from m-formtable project!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});