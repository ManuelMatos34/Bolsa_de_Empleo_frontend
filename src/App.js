import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './pages/logins/UserLogin';
import CompLogin from './pages/logins/CompLogin';
import CompRegister from './pages/register/CompRegister';
import HomeStudents from './pages/students/HomeStudents';
import JobVacancies from './pages/students/JobVacancies';
import StudentsApplications from './pages/students/StudentsApplications';
import Notifications from './pages/NotificationsPage';
import { PrivateRoute } from "./components/PrivateRoute";
import GlobalContext from "./components/global/GlobalContext";
import HomeAdmins from './pages/admins/HomeAdmins';
import SkillsPage from './pages/admins/SkillsPage';
import CompaniesPages from './pages/admins/CompaniesPages'
import StatsPage from './pages/admins/StatsPage';
import HomePage from './pages/companies/HomePage';
import VacanciePage from './pages/companies/VacanciePage';

function App() {
  return (

    <div className='font-roboto'>
      <GlobalContext>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<UserLogin />} />
            <Route path="/complogin" element={<CompLogin />} />
            <Route path="/compregister" element={<CompRegister />} />

            <Route element={<PrivateRoute />}>
              {/* Estudiantes routes */}
              <Route path="/homestudents" element={<HomeStudents />} />
              <Route path="/jobvacancies" element={<JobVacancies />} />
              <Route path="/studentapplications" element={<StudentsApplications />} />
              <Route path="/notifications" element={<Notifications />} />
                
              {/* Admin routes */}
              <Route path="/homeadmins" element={<HomeAdmins />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/companiesadmin" element={<CompaniesPages />} />
              <Route path="/statspage" element={<StatsPage />} />

              {/* Empresas routes */}
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/vacanciescomp" element={<VacanciePage />} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      </GlobalContext>
    </div>

  );
}

export default App;
