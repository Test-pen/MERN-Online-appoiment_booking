// eslint-disable-next-line no-unused-vars
import React from 'react';
import QR from '../assets/QR.png';

const Payment = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">
          Scan QR Code to Pay Online
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
      </div>
    </div>
  );
};

export default Payment;
