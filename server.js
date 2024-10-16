const app = require('./app'); // Import the Express app
const PORT = process.env.PORT || 6000; // Set the port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
