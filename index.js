const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // Correct the spelling here

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB'))
.catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}`));

// Add a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

exports.app = app;
