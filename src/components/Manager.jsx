import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Manager = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
    >
      <div
        className="flex items-center"
        style={{
          transform: isMounted ? 'translateY(40px)' : 'translateY(0)',
          opacity: isMounted ? 1 : 0,
          transition: 'all 0.5s ease-in-out' // Reduced duration for faster animation
        }}
      >
        <span className="text-7xl font-bold text-blue-900 ml-1">&lt;</span>
        <span className="text-8xl font-bold text-gray-800 mr-2">Pass</span>
        <span className="text-8xl font-bold text-blue-500">Vault</span>
        <span className="text-7xl font-bold text-blue-900 ml-1">&frasl;&gt;</span>
      </div>
      <div className="mt-10 text-center"
        style={{
          transform: isMounted ? 'translateY(0)' : 'translateY(40px)',
          opacity: isMounted ? 1 : 0,
          transition: 'all 0.8s ease-in-out' // Reduced duration for faster animation
        }}
      >
        <h1 className="text-4xl font-bold mb-1">Welcome to PassVault</h1>
        <p className="text-2xl mb-1 text-blue-600">
          <b>Your own Password Manager</b>
        </p>
        <p className="text-lg mb-1 text-blue-600">
          <b>Store your passwords securely and access them anytime, anywhere.</b>
        </p>
        <br />
        <Link
          className="btn btn-outline-primary text-3xl"
          to="/trynow"
          role="button"
          style={{
            transform: isMounted ? 'translateY(0)' : 'translateY(40px)',
            opacity: isMounted ? 1 : 0,
            transition: 'all 0.7s ease-in-out' // Reduced duration for faster animation
          }}
        >
          TRY NOW!
        </Link>
      </div>
    </div>
  );
};

export default Manager;