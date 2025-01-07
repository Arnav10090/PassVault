import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const childVariants = { // Define childVariants here
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }} 
      className="container mx-auto p-12 bg-blue-100 rounded-lg shadow-md"
    >
      <motion.div 
        variants={childVariants}
        className="p-4 bg-primary text-white rounded-t-lg"
      >
        <h1 className="text-2xl font-bold mb-1">About PassVault - Your own Password Manager</h1>
      </motion.div>
      <motion.div 
        variants={paragraphVariants}
        className="p-6"
      >
        <p className="text-lg text-blue-600">
          <b>In today's digital world, remembering and managing multiple passwords can be a daunting task. That's where PassVault comes in.</b>
        </p>
      </motion.div>
      <motion.div 
        variants={paragraphVariants}
        className="p-6"
      >
        <h2 className="text-xl font-semibold text-blue-600"><b>Our Mission</b></h2>
        <p className="text-lg mb-1 text-blue-600">
          We believe that password management should be effortless and secure. PassVault is designed to simplify your digital life by:
        </p>
        <ul className="list-disc ml-4">
          <li className='text-blue-600'>Securely store all your passwords in one convenient location.</li>
          <li className='text-blue-600'>Quickly and easily retrieve any password with a single click.</li>
          <li className='text-blue-600'>Generate strong, unique passwords for each of your accounts.</li>
          <li className='text-blue-600'>Employ robust encryption to protect your sensitive information.</li>
          <li className='text-blue-600'>Store your data securely on your device, giving you complete control.</li>
        </ul>
      </motion.div>
      <motion.div 
        variants={paragraphVariants}
        className="p-6"
      >
        <h2 className="text-xl font-semibold mb-2 text-blue-600"><b>Why Choose PassVault?</b></h2>
        <ul className="list-disc ml-2">
          <li className='text-blue-600'><b>Simplicity</b>: Our user-friendly interface makes password management a breeze.</li>
          <li className='text-blue-600'><b>Security</b>: Your data is protected with the latest encryption technologies.</li>
          <li className='text-blue-600'><b>Privacy</b>: We respect your privacy and do not store any of your data on our servers.</li>
          <li className='text-blue-600'><b>Convenience</b>: Access your passwords anytime, anywhere, from any device.</li>
          <li className='text-blue-600'><b>Free to Use</b>: PassVault is available for free, with no hidden costs.</li>
        </ul>
      </motion.div>
      <motion.div 
        variants={paragraphVariants}
        className="p-6"
      >
        <h2 className="text-xl font-semibold mb-2 text-blue-600"><b>Get Started Today</b></h2>
        <p className="text-lg text-blue-600">
          Experience the peace of mind that comes with a secure and organized password management system. Try PassVault by clicking on the TRY NOW button.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;