import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("@pages/Home"));
const About = lazy(() => import("@pages/About"));
const Login = lazy(() => import("@pages/Login"));
const SignUp = lazy(() => import("@pages/SignUp"));
const StudentDashboard = lazy(() => import("@pages/StudentDashboard"));
const FacultyDashboard = lazy(() => import("@pages/FacultyDashboard"));
const Dashboard = lazy(
  () => import("@components/FacultyDashboard/Dashboard/Dashboard")
);
const QuestionBanks = lazy(
  () => import("@components/FacultyDashboard/QuestionBanks/QuestionBanks")
);
const Exams = lazy(() => import("@components/FacultyDashboard/Exams/Exams"));
const Reports = lazy(
  () => import("@components/FacultyDashboard/Reports/Reports")
);
const NotFound = lazy(() => import("@pages/NotFound"));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/student/*" element={<StudentDashboard />} />
        <Route path="/faculty" element={<FacultyDashboard />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="question-banks" element={<QuestionBanks />} />
          <Route path="exams" element={<Exams />} />
          <Route path="reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
