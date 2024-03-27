import React, { useState } from 'react';

import NavBar from '../../components/Navbar';

const Admindash = () => {

  const [cruiseId, setCruiseId] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cruise ID:', cruiseId);
    console.log('Destination:', destination);
    console.log('Description:', description);
    console.log('Price:', price);

    const newData = { cruiseId, destination, description, price, image };
    setSubmittedData([...submittedData, newData]);

    setCruiseId('');
    setDestination('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  return (
    <>
      <NavBar/>
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Cruise</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Cruise ID:</label>
          <input
            type="text"
            value={cruiseId}
            onChange={(e) => setCruiseId(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Destination:</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
            required
            />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
            required
            />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
            required
            />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
            required
          />
        </div>
        <button type="submit" style={{ backgroundColor: '#007791', color: '#fff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', border: 'none' }}>Submit</button>
      </form>
      
      {/* Display submitted data in a table */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Submitted Data</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Cruise ID</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Destination</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Description</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Price</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Image URL</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{data.cruiseId}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{data.destination}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{data.description}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{data.price}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{data.image}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
            </>
  );
};

export default Admindash;
