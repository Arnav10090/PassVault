import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SavedPasswords from './components/SavedPasswords';
import About from './components/About';
import SecurityGuide from './components/SecurityGuide';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import 'react-toastify/dist/ReactToastify.css';

// Home redirect component
const HomeRedirect = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return null;
  }

  return isAuthenticated ? <Navigate to="/passwords" replace /> : <Navigate to="/welcome" replace />;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <>
        <ScrollToTop />
        <Login />
      </>
    },
    {
      path: "/signup",
      element: <>
        <ScrollToTop />
        <Signup />
      </>
    },
    {
      path: "/",
      element: <>
        <ScrollToTop />
        <Navbar />
        <Home />
        <Footer />
      </>
    },
    {
      path: "/about",
      element: <>
        <ScrollToTop />
        <Navbar />
        <About />
        <Footer />
      </>
    },
    {
      path: "/security-guide",
      element: <>
        <ScrollToTop />
        <Navbar />
        <SecurityGuide />
        <Footer />
      </>
    },
    {
      path: "/privacy-policy",
      element: <>
        <ScrollToTop />
        <Navbar />
        <PrivacyPolicy />
        <Footer />
      </>
    },
    {
      path: "/terms-of-service",
      element: <>
        <ScrollToTop />
        <Navbar />
        <TermsOfService />
        <Footer />
      </>
    },
    {
      path: "/passwords",
      element: (
        <ProtectedRoute>
          <ScrollToTop />
          <Navbar />
          <SavedPasswords />
          <Footer />
        </ProtectedRoute>
      )
    },
    {
      path: "*",
      element: <Navigate to="/" replace />
    }
  ]);

  return (
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
