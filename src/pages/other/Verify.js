import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import cogoToast from 'cogo-toast';

const EmailVerification = () => {
  const [digits, setDigits] = useState(new Array(6).fill(''));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.match(/^[0-9]$/) || value === '') {
      const newDigits = [...digits];
      newDigits[index] = value;
      setDigits(newDigits);

      // Focus on the next input field
      if (value !== '' && index < 5) {
        document.getElementById(`digit-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = () => {
    const code = digits.join('');
    if (code.length !== 6) {
      cogoToast.error('Please enter a 6-digit code', { position: 'top-right' });
    } else {
      // Trigger the verification process with the entered code
      cogoToast.success(`Code ${code} verified!`, { position: 'top-right' });
      // Call your API or verification logic here
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form>
        <h3 className="text-center">Verify Your Email</h3>
        <p className="text-center">Enter the 6-digit code sent to your email</p>
        <Row className="mb-3">
          {digits.map((digit, index) => (
            <Col key={index} xs="2">
              <Form.Control
                type="text"
                id={`digit-${index}`}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                maxLength="1"
                className="text-center"
                style={{ fontSize: '24px', height: '50px' }}
              />
            </Col>
          ))}
        </Row>
        <div className="d-grid">
          <Button variant="primary" onClick={handleVerify}>
            Verify
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EmailVerification;
