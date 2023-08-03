import React, { useState } from 'react';
import axios from 'axios';

const InsertForm = () => {
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('location', location);
      formData.append('service', service);
      formData.append('title', title);
      formData.append('image', image);

      await axios.post('/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Data inserted successfully.');
      setLocation('');
      setService('');
      setTitle('');
      setImage(null);
    } catch (error) {
      console.error('Error inserting data:', error);
      alert('Error inserting data. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={location}
            onChange={handleLocationChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="service">Service:</label>
          <input
            type="text"
            className="form-control"
            id="service"
            value={service}
            onChange={handleServiceChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            className="form-control-file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InsertForm;
