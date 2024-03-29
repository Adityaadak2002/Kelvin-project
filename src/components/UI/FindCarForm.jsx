import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Full Name" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Contact no" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Booking date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Colde container</option>
            <option value="non-ac">Normal container</option>
            <option value="non-ac">Colde storeg</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Book Service</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
