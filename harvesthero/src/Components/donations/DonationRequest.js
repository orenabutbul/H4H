import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const DonationRequest = () => {
  const [formData, setFormData] = useState({
    address: '',
    contactInfo: '',
    foodType: '',
    Distance: '',
    name: '',
    expiration: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log(formData);
  };

  function validateNumber(Number) {
    const pattern = /^\d{10}$/;
    return pattern.test(Number);
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="mb-4">Donate Food</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactInfo" > 
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                placeholder = "1234567890"
                onChange={handleInputChange}
                isInvalid={!(validateNumber(formData.contactInfo))}
                required
              />
              <Form.Control.Feedback type="invalid">
              Please enter a valid 10 digit phone number with only integers.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Distance">
<<<<<<< HEAD
              <Form.Label>How Far Are You Willing To Travel?</Form.Label>
              <Form.Select
                name="Distance"
                value={formData.Distance}
=======
              <Form.Label>How Far Are You Willing To Travel</Form.Label>
              <Form.Control
                type="text"
                name="distance"
                value={formData.distance}
>>>>>>> 43bd631d834fa963362c71184786ab30a5428450
                onChange={handleInputChange}
                required
              />
            </Form.Group>

<<<<<<< HEAD
            <Form.Group className="mb-3" controlId="name">
=======
            <Form.Group className="mb-3" controlId="Name">
>>>>>>> 43bd631d834fa963362c71184786ab30a5428450
              <Form.Label>Person For Pickup Name</Form.Label>
              <Form.Control
                type="text"
                name="designatedPersonName"
                value={formData.distance}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="foodType">
              <Form.Label>Food Type</Form.Label>
              <Form.Select
                name="foodType"
                value={formData.foodType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Food Type</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Dairy">Dairy</option>
                <option value="Prepared">Prepared</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="expiration">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                type="date"
                name="expiration"
                value={formData.expiration}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleFileChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default DonationRequest;
