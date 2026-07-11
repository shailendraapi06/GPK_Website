import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layouts/AdminLayout";
import { MainLayout } from "../layouts/MainLayout";
import { AdminDashboardPage } from "../pages/admin/AdminDashboardPage";
import {
  AboutPage,
  AcademicsPage,
  AdmissionsPage,
  ContactPage,
  DepartmentsPage,
  FacultyPage,
  GalleryPage,
  HomePage,
  PlacementPage,
  StudentCornerPage
} from "../pages/public";
import { NotFoundPage } from "../pages/system/NotFoundPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/student-corner" element={<StudentCornerPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/placement" element={<PlacementPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
