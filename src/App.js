import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/logins/UserLogin";
import CompLogin from "./pages/logins/CompLogin";
import CompRegister from "./pages/register/CompRegister";
import HomeStudents from "./pages/students/HomeStudents";
import JobVacancies from "./pages/students/JobVacancies";
import StudentsApplications from "./pages/students/StudentsApplications";
import Notifications from "./pages/NotificationsPage";
import { PrivateRoute } from "./components/PrivateRoute";
import GlobalContext from "./components/global/GlobalContext";
import HomeAdmins from "./pages/admins/HomeAdmins";
import SkillsPage from "./pages/admins/SkillsPage";
import CompaniesPages from "./pages/admins/CompaniesPages";
import StatsPage from "./pages/admins/StatsPage";
import HomePage from "./pages/companies/HomePage";
import VacanciePage from "./pages/companies/VacanciePage";
import PostulantPage from "./pages/companies/PostulantPage";
import AdminConfigPage from "./pages/admins/AdminConfigPage";
import CofigCompPage from "./pages/companies/CofigCompPage";
import NoAuthPage from "./pages/NoAuthPage";

function App() {
  return (
    <div className="font-roboto">
      <GlobalContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route path="/complogin" element={<CompLogin />} />
            <Route path="/compregister" element={<CompRegister />} />
            <Route path="/unauthorized" element={<NoAuthPage />} />

            {/* Estudiantes routes */}
            <Route element={<PrivateRoute routeRol={"Común"} />}>
              <Route path="/homestudents" element={<HomeStudents />} />
              <Route path="/jobvacancies" element={<JobVacancies />} />
              <Route path="/studentapplications" element={<StudentsApplications />} />
            </Route>

            {/* Admin routes */}
            <Route element={<PrivateRoute routeRol={"Admin"} />}>
              <Route path="/homeadmins" element={<HomeAdmins />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/companiesadmin" element={<CompaniesPages />} />
              <Route path="/statspage" element={<StatsPage />} />
              <Route path="/configadmin" element={<AdminConfigPage />} />
            </Route>

            {/* Empresas routes */}
            <Route element={<PrivateRoute routeRol={"Empresa"} />}>
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/vacanciescomp" element={<VacanciePage />} />
              <Route path="/postulantcomp" element={<PostulantPage />} />
              <Route path="/configcomp" element={<CofigCompPage />} />
            </Route>

            <Route element={<PrivateRoute routeRol={["Empresa", "Común", "Admin"]} />}>
              <Route path="/notifications" element={<Notifications />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </GlobalContext>
    </div>
  );
}

export default App;
