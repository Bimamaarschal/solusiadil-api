const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const blogRoutes = require('./src/routes/blogRoutes');
const undangundangRoutes = require('./src/routes/undangundangRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const panduanRoutes = require('./src/routes/panduanRoutes');
const laiRoutes = require('./src/routes/laiRoutes');
const konsultasiRoutes = require('./src/routes/konsultasiRoutes');
const apphRoutes = require('./src/routes/apphRoutes');
const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);
app.use('/undangundang', undangundangRoutes);
app.use('/admin', adminRoutes);
app.use('/panduan', panduanRoutes);
app.use('/lai', laiRoutes);
app.use('/konsultasi', konsultasiRoutes);
app.use('/apph', apphRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
