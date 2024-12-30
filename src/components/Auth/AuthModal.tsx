import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

interface AuthModalProps {
  onLogin: (email: string, password: string) => Promise<void>;
  onSignup: (email: string, password: string, name: string) => Promise<void>;
  error?: string | null;
  loading?: boolean;
  onClose: () => void;
}

export function AuthModal({ onLogin, onSignup, error, loading, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {isLogin ? 'Log In to TipSafe' : 'Create Your Account'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {isLogin ? (
          <LoginForm
            onSubmit={onLogin}
            onSwitchToSignup={() => setIsLogin(false)}
            error={error}
            loading={loading}
          />
        ) : (
          <SignupForm
            onSubmit={onSignup}
            onSwitchToLogin={() => setIsLogin(true)}
            error={error}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
}