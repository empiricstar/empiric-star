import React, { createContext, useContext, useState } from 'react';
import { AuthState, LoginCredentials } from '../types/auth';

interface AuthContextType {
  auth: AuthState;
  login: (credentials: LoginCredentials) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    username: null,
  });

  const login = (credentials: LoginCredentials): boolean => {
    if (
      credentials.username === 'empiricstar' &&
      credentials.password === 'starempiric123'
    ) {
      setAuth({
        isAuthenticated: true,
        username: credentials.username,
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      username: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}