const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const residenceRoutes = require('./routes/residence.js');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/api/residences', residenceRoutes);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
app.get('/', (req, res) => {
    res.send('API is running...');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
