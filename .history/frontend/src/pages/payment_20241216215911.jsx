// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QR from '../assets/QR.png';
import axios from 'axios';

const Payment = () => {
  const navigate = useNavigate();
  const { doctorId } = useParams();  // Getting Doctor ID from URL params

  const handleCompletePayment = async () => {
    try {
      // Simulate payment completion using Doctor ID
      const response = await axios.post(
        'http://your-backend-url/api/user/complete-payment',
        { doctorId }  // Passing the Doctor ID to the API
      );

      if (response.data.success) {
        // Navigate to the MyAppointments page after payment completion
        navigate('/myappointments');
      } else {
        alert('Payment update failed. Please try again.');
      }
    } catch (error) {
      console.error('Error completing payment:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">
          Scan QR Code to Pay Online for Doctor {doctorId}
        </h1>
        <img src={QR} alt="QR Code" className="w-48 h-48 mx-auto mb-4" />
        <p className="text-sm text-gray-600 mb-4">
          Please scan the QR code using your mobile device to complete the payment.
        </p>
        <p className="text-sm text-gray-700 mb-4">
          <strong>Take a screenshot of the payment,</strong> and when you visit the doctor, show the payment screenshot to the admin.
        </p>
        <p className="text-sm text-gray-700">
          If your payment is completed but you did not visit, please contact support for a refund at{' '}
          <a href="mailto:prescripto@support.com" className="text-blue-500 underline">
            prescripto@support.com
          </a>.
        </p>
        {/* Complete Payment Button */}
        <button
          onClick={handleCompletePayment}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Complete Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
