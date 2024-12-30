import React from 'react';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { user } = useAuth();

  return user ? <Dashboard /> : <LandingPage />;
}