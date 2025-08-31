// eslint-disable-next-line no-unused-vars
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
        <p className="text-lg font-semibold mb-4 text-zinc-800" >
        Take a screenshot of the payment, and when you visit the doctor, show the payment screenshot to the admin
        </p>
        <p lassName="text-lg font-semibold mb-4 text-zinc-800">
        If your payment is completed but you did not visit, please contact support for a refund at prescripto@support.com.
        </p>
      </div>
    </div>
  );
};

export default Payment;
