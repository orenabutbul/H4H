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
              <Form.Label>How Far Are You Willing To Travel?</Form.Label>
              <Form.Select>
                name="foodType"
                value={formData.Distance}
                onChange={handleInputChange}
                required
                <option value="">Select Range</option>
                <option value="1-5 miles">1-5 miles</option>
                <option value="5-10 miles">5-10 miles</option>
                <option value="10-20 miles">10-20 miles</option>
                <option value="20-30 miles">20-30 miles</option>
                <option value="30-40 miles ">30-40 miles</option>
                <option value="40-50 miles">40-50 miles</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Name">
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
              <Form.Check label="Vegetables" />
              <Form.Check label="Fruits" />
              <Form.Check label="Bakery" />
              <Form.Check label="Meat" />
              <Form.Check label="Dairy" />
              <Form.Check label="Prepared" />
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
