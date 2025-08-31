import React from 'react';
import QR from '../assets/QR.png';

const Payment = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-lg font-semibold mb-4 text-zinc-800">Scan QR Code to Pay Online</h1>
        <img src={QR} alt="QR Code" className="w-48 h-48 mx-auto" />
        <p className="text-sm text-gray-500 mt-4">
          Please scan the QR code using your mobile device to complete the payment.
        </p>
      </div>
    </div>
  );
};

export default Payment;
