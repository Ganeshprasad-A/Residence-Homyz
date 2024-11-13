import React, { useState } from 'react';
import axios from 'axios';
import './AddResidence.css';
import Residencies from '../Residencies/Residencies';
const AddResidence = () => {
  const [newResidence, setNewResidence] = useState({
    name: '',
    price: '',
    detail: '',
    image: ''
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/residences', newResidence); // Sends the new residence data to MongoDB
      alert('Residence added successfully!');
      setNewResidence({ name: '', price: '', detail: '', image: '' }); // Reset form
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main">    
    <form className='form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={newResidence.name}
        onChange={(e) => setNewResidence({ ...newResidence, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newResidence.price}
        onChange={(e) => setNewResidence({ ...newResidence, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="Detail"
        value={newResidence.detail}
        onChange={(e) => setNewResidence({ ...newResidence, detail: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={newResidence.image}
        onChange={(e) => setNewResidence({ ...newResidence, image: e.target.value })}
      />
      <button type="submit">Add Residence</button>

    </form>
    </div>


  );
};

export default AddResidence;
