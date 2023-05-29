const express = require('express');
const app = express();
const port = 3007;

app.use(express.static('dist'));  //静态托管

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});