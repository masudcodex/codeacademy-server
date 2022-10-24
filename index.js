const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.port || 5000 ;


app.use(cors());

app.get('/', (req, res) => {
  res.send('CodeAcademy API running')
})

app.listen(port, () => {
  console.log(`CodeAcademy API is running on port ${port}`)
})