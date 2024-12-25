import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AdminDashboard from '../components/Admin/AdminDashboard';
import TeacherDashboard from '../components/Teacher/TeacherDashboard';
import LearnerDashboard from '../components/Learner/LearnerDashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/teacher" element={<TeacherDashboard />} />
      <Route path="/learner" element={<LearnerDashboard />} />
    </Routes>
  );
}

export default AppRoutes;
