import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { getDatabase, ref, push, set } from 'firebase/database';
import {database} from "../../Firebase/firebase"; // Import Firebase database instance
import "../../styles/find-car-form.css";

const FindCarForm = () => {
  const [fullName, setFullName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [journeyTime, setJourneyTime] = useState("");
  const [containerType, setContainerType] = useState("ac");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reference to Firebase "Bookings" node
    const bookingsRef = ref(database, "Bookings");

    try {
      // Push form data to Firebase Realtime Database
      const newBookingRef = push(bookingsRef);
      await set(newBookingRef, {
        fullName,
        contactNo,
        bookingDate,
        journeyTime,
        containerType
      });

      console.log("Booking submitted successfully!");

      // Reset form fields
      setFullName("");
      setContactNo("");
      setBookingDate("");
      setJourneyTime("");
      setContainerType("ac");

    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <Input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </FormGroup>

        <FormGroup className="form__group">
          <Input type="text" placeholder="Contact no" value={contactNo} onChange={(e) => setContactNo(e.target.value)} required />
        </FormGroup>

        <FormGroup className="form__group">
          <Input type="date" placeholder="Booking date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} required />
        </FormGroup>

        <FormGroup className="form__group">
          <Input className="journey__time" type="time" value={journeyTime} onChange={(e) => setJourneyTime(e.target.value)} required />
        </FormGroup>

        <FormGroup className="select__group">
          <select value={containerType} onChange={(e) => setContainerType(e.target.value)}>
            <option value="ac">Choose Container</option>
            <option value="non-ac">Normal Container</option>
            <option value="cold-storage">Cold Storage</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <Button type="submit" className="btn find__car-btn">
            Book Service
          </Button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
