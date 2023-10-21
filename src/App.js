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
              <Route path="/homestudents" element={<HomeStudents />} />
              <Route path="/jobvacancies" element={<JobVacancies />} />
              <Route path="/studentapplications" element={<StudentsApplications />} />
              <Route path="/notifications" element={<Notifications />} />
            </Route>
            {/* <Route
              path="/homestudents"
              element={
                <PrivateRoute
                  redirectTo="/"
                >
                  <HomeStudents />
                </PrivateRoute>
              }
            />
            <Route
              path="/jobvacancies"
              element={
                <PrivateRoute
                  redirectTo="/"
                >
                  <JobVacancies />
                </PrivateRoute>
              }
            /> */}
          </Routes>
        </BrowserRouter>
      </GlobalContext>
    </div>

  );
}

export default App;
