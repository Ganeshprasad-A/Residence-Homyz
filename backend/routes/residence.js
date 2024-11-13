// backend/routes/residences.js
const express = require('express');
const router = express.Router();
const Residence = require('../models/Residence');
router.get('/', async (req, res) => {
    try {
        const residences = await Residence.find();
        res.json(residences);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.post('/', async (req, res) => {
    try {
      const newResidence = new Residence(req.body); 
      const savedResidence = await newResidence.save(); 
      res.status(201).json(savedResidence); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  module.exports = router;
