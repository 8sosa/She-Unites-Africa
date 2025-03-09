import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const DonationVerification = () => {
  const [status, setStatus] = useState('Verifying donation...');
  const [donationId, setDonationId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Extract the payment reference from the URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const reference = queryParams.get('reference');
    const CLIENT = process.env.CLIENT || 3000;


    if (reference) {
      // Call your backend endpoint to verify the donation using the reference
      axios.get(`http://localhost:${CLIENT}/order/verify-donation?reference=${reference}`, { withCredentials: true })
        .then(response => {
          const { message, donationId } = response.data;
          setStatus(message);
          setDonationId(donationId);
        })
        .catch(error => {
          console.error("Donation verification error:", error);
          setStatus('Donation verification failed. Please contact support.');
        });
    } else {
      setStatus('No payment reference provided.');
    }
  }, [location]);

  return (
    <div className='purpBg p-5 mont'>
      <Container>
        <h1 className='ytTitle'>Donation Verification</h1>
        <p className='ytText'>{status}</p>
        {donationId && <p className='ytText'>Your donation ID: {donationId}</p>}
      </Container>
    </div>
  );
};

export default DonationVerification;
