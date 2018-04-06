const express = require('express');
const app = express();
const errorCallback = console.error.bind(console);

app.use(express.static('client/build'));

const PORT = process.env.PORT || 5000;
// Start the server!
app.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});
