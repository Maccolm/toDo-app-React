const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


app.listen(6001, () => {
  console.log(`Server is running on port 6001`);
});