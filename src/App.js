import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './pages/logins/UserLogin';
import CompLogin from './pages/logins/CompLogin';
import CompRegister from './pages/register/CompRegister';
import HomeStudents from './pages/students/HomeStudents';
import JobVacancies from './pages/students/JobVacancies';
import StudentsApplications from './pages/students/StudentsApplications';
import Notifications from './pages/NotificationsPage';


function App() {
  return (
    <div className='font-roboto'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/complogin" element={<CompLogin />} />
          <Route path="/compregister" element={<CompRegister />} />
          <Route path="/homestudents" element={<HomeStudents />} />
          <Route path="/jobvacancies" element={<JobVacancies />} />
          <Route path="/studentapplications" element={<StudentsApplications/>} />
          <Route path="/notifications" element={<Notifications/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
