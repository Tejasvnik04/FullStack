import React, { useState } from 'react';
import styled from 'styled-components';
import BookingForm from './BookingForm';

const TableContainer = styled.div`
  margin: 20px auto;
  width: 80%;
  max-width: 800px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #1a1a2e;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #232a34;
  color: #bbe1fa;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #30475e;
  color: #bbe1fa;
`;

const Bookings = ({ book }) => {
    const [bookings, setBookings] = useState([]);

    // Function to handle form submission and add booking to the list
    const handleBookingSubmit = (bookings) => {
      setBookings([...book, bookings]);
    };
  return (
    <><BookingForm onBookingSubmit={handleBookingSubmit} /><TableContainer>
          <Table>
              <thead>
                  <TableRow>
                      <TableHeader>Type</TableHeader>
                      <TableHeader>From Date</TableHeader>
                      <TableHeader>To Date</TableHeader>
                      <TableHeader>Number of People</TableHeader>
                      <TableHeader>Destination</TableHeader>
                  </TableRow>
              </thead>
              <tbody>
                  {bookings.map((booking, index) => (
                      <TableRow key={index}>
                          <TableCell>{booking.type}</TableCell>
                          <TableCell>{booking.fromDate}</TableCell>
                          <TableCell>{booking.toDate}</TableCell>
                          <TableCell>{booking.numberOfPeople}</TableCell>
                          <TableCell>{booking.destination}</TableCell>
                      </TableRow>
                  ))}
              </tbody>
          </Table>
      </TableContainer></>
  );
};

export default Bookings;
