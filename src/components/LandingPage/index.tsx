import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { Testimonials } from './Testimonials';
import { Footer } from '../Footer';
import { AuthModal } from '../Auth/AuthModal';
import { useAuth } from '../../hooks/useAuth';

export function LandingPage() {
  const [showAuth, setShowAuth] = React.useState(false);
  const { login, signup, error, loading } = useAuth();

  const handleGetStarted = () => {
    setShowAuth(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onGetStarted={handleGetStarted} />
      <Hero onGetStarted={handleGetStarted} />
      <Features />
      <Testimonials />
      <Footer />
      
      {showAuth && (
        <AuthModal
          onLogin={login}
          onSignup={signup}
          error={error}
          loading={loading}
          onClose={() => setShowAuth(false)}
        />
      )}
    </div>
  );
}