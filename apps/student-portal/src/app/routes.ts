import { createBrowserRouter } from "react-router";
import StudentLogin from "./screens/student/StudentLogin";
import StudentDashboard from "./screens/student/StudentDashboard";
import ScholarshipList from "./screens/student/ScholarshipList";
import ApplicationForm from "./screens/student/ApplicationForm";
import ReturnOfObligations from "./screens/student/ReturnOfObligations";
import AdminLogin from "./screens/admin/AdminLogin";
import AdminDashboard from "./screens/admin/AdminDashboard";
import ApplicationReview from "./screens/admin/ApplicationReview";
import DocumentVerification from "./screens/admin/DocumentVerification";
import ReportGeneration from "./screens/admin/ReportGeneration";
import ScholarMonitoring from "./screens/admin/ScholarMonitoring";
import ROAdmin from "./screens/admin/ROAdmin";
import AnnouncementsManagement from "./screens/admin/AnnouncementsManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: StudentLogin,
  },
  {
    path: "/student/dashboard",
    Component: StudentDashboard,
  },
  {
    path: "/student/scholarships",
    Component: ScholarshipList,
  },
  {
    path: "/student/apply/:scholarshipId",
    Component: ApplicationForm,
  },
  {
    path: "/student/obligations",
    Component: ReturnOfObligations,
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin/dashboard",
    Component: AdminDashboard,
  },
  {
    path: "/admin/applications",
    Component: ApplicationReview,
  },
  {
    path: "/admin/verification/:applicationId",
    Component: DocumentVerification,
  },
  {
    path: "/admin/reports",
    Component: ReportGeneration,
  },
  {
    path: "/admin/scholars",
    Component: ScholarMonitoring,
  },
  {
    path: "/admin/obligations",
    Component: ROAdmin,
  },
  {
    path: "/admin/announcements",
    Component: AnnouncementsManagement,
  },
]);
