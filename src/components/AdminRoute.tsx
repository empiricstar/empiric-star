import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AdminLogin } from './AdminLogin';
import { AdminDashboard } from './AdminDashboard';

export function AdminRoute() {
  const { auth } = useAuth();

  return auth.isAuthenticated ? <AdminDashboard /> : <AdminLogin />;
}