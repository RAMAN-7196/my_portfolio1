import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
} 