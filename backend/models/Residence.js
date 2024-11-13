// backend/models/Residence.js
const mongoose = require('mongoose');

const residenceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    detail: { type: String, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model('Residence', residenceSchema);
