const express = require('express');
const bookRoutes = require('./src/routes/bookRoutes');
const app = express();

app.use(express.json());

app.use('/books', bookRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
