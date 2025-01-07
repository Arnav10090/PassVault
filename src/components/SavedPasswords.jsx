import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const PassVaultLogo = () => (
  <div className="flex items-center justify-center mb-12">
    <span className="text-4xl font-bold text-blue-900 ml-1">&lt;</span>
    <span className="text-5xl font-bold text-gray-800 mr-2">Pass</span>
    <span className="text-5xl font-bold text-blue-500">Vault</span>
    <span className="text-4xl font-bold text-blue-900 ml-1">&frasl;&gt;</span>
  </div>
);

const Manager = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [url, setUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [savedPasswords, setSavedPasswords] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem('savedPasswords');
    if (savedData) {
      setSavedPasswords(JSON.parse(savedData));
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const copyText = (text) => {
    toast('Copied to clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  const savePassword = () => {
    if (url && username && password) {
      const passwordData = {
        url,
        username,
        password,
      };

      if (editingIndex !== null) {
        const updatedPasswords = [...savedPasswords];
        updatedPasswords[editingIndex] = passwordData;
        setSavedPasswords(updatedPasswords);
        setEditingIndex(null);
      } else {
        setSavedPasswords(prevPasswords => {
          const updatedPasswords = [...prevPasswords, passwordData];
          localStorage.setItem('savedPasswords', JSON.stringify(updatedPasswords));
          return updatedPasswords;
        });
      }

      setUrl('');
      setUsername('');
      setPassword('');
      alert('Password saved successfully!');
    } else {
      alert('Please fill in all fields');
    }
  };

  const deletePassword = (index) => {
    toast('Password Deleted', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setSavedPasswords(prevPasswords => {
      const updatedPasswords = [...prevPasswords];
      updatedPasswords.splice(index, 1);
      localStorage.setItem('savedPasswords', JSON.stringify(updatedPasswords));
      return updatedPasswords;
    });
  };

  const editPassword = (index) => {
    setEditingIndex(index);
    const { url, username, password } = savedPasswords[index];
    setUrl(url);
    setUsername(username);
    setPassword(password);
  };

  const formVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  const tableVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      <ToastContainer />

      <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-sky-100 flex justify-center items-center pt-[1px]">
        <div className="flex w-full max-w-5xl mx-auto flex-col pt-[1px]">
          <PassVaultLogo />
          <div className="flex w-full flex-grow">
            <div className="w-1/2 pl-1 flex-grow">
              <motion.form
                initial="hidden"
                animate={isMounted ? 'visible' : 'hidden'}
                variants={formVariants}
                className="bg-blue-900 text-white shadow-lg rounded-lg p-8 w-full h-full"
              >
                <form className="bg-blue-900 text-white shadow-lg rounded-lg p-8 w-full h-full">
                  <div className="mb-4">
                    <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-2">
                      WEBSITE URL
                    </label>
                    <input
                      type="url"
                      id="url"
                      name="url"
                      placeholder="Enter Website URL"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-800 text-white placeholder-white"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                      USERNAME
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-800 text-white placeholder-white"
                    />
                  </div>

                  <div className="mb-4 relative">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                      PASSWORD
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10 bg-blue-800 text-white placeholder-white"
                    />
                    <span
                      className="absolute right-2 top-1/2 bottom-11 transform -translate-y-1/2 cursor-pointer text-gray-300"
                      onClick={togglePasswordVisibility}
                    >
                      <img
                        className="p-1"
                        width={28}
                        src={showPassword ? "icons/eye.png" : "icons/eyecross.png"}
                        alt="eye"
                      />
                    </span>

                  </div>

                  <div className="flex justify-center mt-6">
                    <button
                      type="button"
                      onClick={savePassword}
                      className="relative flex items-center bg-blue-700 text-white px-2 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/sbnjyzil.json"
                        trigger="hover"
                        className="w-8 h-8 mr-3"
                        colors="primary:#ffffff,secondary:#ffffff"
                      ></lord-icon>
                      <span className="text-lg font-bold">SAVE PASSWORD</span>
                    </button>
                  </div>
                </form>
              </motion.form>
            </div>
          </div>
          <br />

          <div className="flex w-full flex-grow">
            <div className="w-1/2 flex-grow">
              <motion.div
                initial="hidden"
                animate={isMounted ? 'visible' : 'hidden'}
                variants={tableVariants}
                className="rounded-lg p-6 overflow-x-auto bg-blue-900 text-white shadow-lg h-full"
              >
                <h3 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-600 text-white">
                  Saved Passwords
                </h3>
                <table className="w-full border-collapse table-auto flex-grow">
                  <thead>
                    <tr className="bg-blue-800">
                      <th className="w-1/4 px-4 py-3 text-left font-medium uppercase tracking-wider text-white">
                        Website URL
                      </th>
                      <th className="w-1/5 px-4 py-3 text-left font-medium uppercase tracking-wider text-white">
                        Username
                      </th>
                      <th className="w-1/5 px-4 py-3 text-left font-medium uppercase tracking-wider text-white">
                        Password
                      </th>
                      <th className="w-1/5 px-4 py-3 text-left font-medium uppercase tracking-wider text-white">
                        Delete/Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {savedPasswords.length > 0 ? (
                      savedPasswords.map((data, index) => (
                        <tr
                          key={index}
                          className={`${index % 2 === 0 ? 'bg-blue-700' : 'bg-blue-600'} hover:bg-blue-500 transition duration-200 text-white`}
                        >
                          <td className="px-4 py-2 border-b border-blue-500 break-words w-1/3">
                            <a href={data.url} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline cursor-pointer">
                              {data.url}
                            </a>
                            <div className='lordiconcopy size-7 cursor-pointer ml-2' onClick={() => { copyText(data.url) }}>
                              <lord-icon
                                style={{ "width": "25px", "height": "25px" }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                              >
                              </lord-icon>
                            </div>
                          </td>
                          <td className="px-4 py-2 border-b border-blue-500 w-1/3">
                            {data.username}
                            <div className='lordiconcopy size-7 cursor-pointer ml-2' onClick={() => { copyText(data.username) }}>
                              <lord-icon
                                style={{ "width": "25px", "height": "25px" }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                              >
                              </lord-icon>
                            </div>
                          </td>
                          <td className="px-4 py-2 border-b border-blue-500 break-all w-1/3">
                            {data.password}
                            <div className='lordiconcopy size-7 cursor-pointer ml-2' onClick={() => { copyText(data.password) }}>
                              <lord-icon
                                style={{ "width": "25px", "height": "25px" }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                              >
                              </lord-icon>
                            </div>
                          </td>
                          <td className="px-4 py-8 border-b border-blue-500 break-all flex items-center">
                            <div className='lordiconcopy size-7 cursor-pointer mr-2' onClick={() => deletePassword(index)}>
                              <lord-icon
                                style={{ "width": "25px", "height": "25px" }}
                                src="https://cdn.lordicon.com/skkahier.json"
                                trigger="hover"
                              >
                              </lord-icon>
                            </div>
                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => editPassword(index)}>
                              <lord-icon
                                style={{ "width": "25px", "height": "25px" }}
                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                trigger="hover"
                              >
                              </lord-icon>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="px-4 py-2 text-center italic text-gray-300">
                          No passwords saved yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;