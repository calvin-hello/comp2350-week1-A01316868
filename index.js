const express = require('express');

const app = express();
const port = process.env.PORT || 3016;

app.get('/', (req, res) => {
  res.send(`Calvin Mwin-Era! (●'◡'●) 😁`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});