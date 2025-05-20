import React from 'react';
import { Link } from 'react-router';

const PasswordResetEmailSent = () => {

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Check Your Email</h2>
        <p className="text-gray-600 mb-6">
          We've sent you a link to reset your password. Please check your inbox and follow the instructions.
        </p>
        <Link
          to='/'
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PasswordResetEmailSent;
