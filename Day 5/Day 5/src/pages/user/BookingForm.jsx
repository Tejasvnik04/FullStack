import React, { useState } from 'react';
import styled from 'styled-components';
import bg from '../componentbgm.mp4';
import NavBar1 from '../../components/Navbar/NavBar1';

const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  z-index: -1;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

const FormContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: rgba(26, 26, 46, 0.8); /* Adjust opacity if needed */
  padding: 30px;
  border-radius: 10px;
  margin: 20px auto;
  width: 80%;
  max-width: 600px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #bbe1fa;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background-color: #30475e;
  color: #bbe1fa;
`;

const Select = styled.select`
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background-color: #30475e;
  color: #bbe1fa;
`;

const Option = styled.option`
  background-color: #30475e;
  color: #bbe1fa;
`;

const Button = styled.button`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #00adb5;
  color: #eeeeee;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #393e46;
  }
`;

const BookingForm = () => {
  // State variables for form inputs
  const [type, setType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [destination, setDestination] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Display form input values in console
    console.log('Type:', type);
    console.log('From Date:', fromDate);
    console.log('To Date:', toDate);
    console.log('Number of People:', numberOfPeople);
    console.log('Destination:', destination);
  };
  const handlePass = (e) => {
    e.preventDefault();
    const bookings = { type, fromDate, toDate, numberOfPeople, destination };
    onBookingSubmit(bookings); // Call the function passed from the parent component
  };

  return (
    <>
    <NavBar1/>
      <VideoBg autoPlay loop muted className="bg-vid" src={bg} type="video/mp4" />
            <FormContainer>
        <Form onSubmit={handlePass}>
          <Label htmlFor="type">Type:</Label>
          <Select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
            <Option value="">Select</Option>
            <Option value="boat">Boat</Option>
            <Option value="speedboat">Speedboat</Option>
            <Option value="cruise">Cruise</Option>
          </Select>
          <Label htmlFor="fromDate">From Date:</Label>
          <Input type="date" id="fromDate" name="fromDate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          <Label htmlFor="toDate">To Date:</Label>
          <Input type="date" id="toDate" name="toDate" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          <Label htmlFor="numberOfPeople">Number of People:</Label>
          <Input type="number" id="numberOfPeople" name="numberOfPeople" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} />
          <Label htmlFor="destination">Destination:</Label>
          <Input type="text" id="destination" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default BookingForm;
