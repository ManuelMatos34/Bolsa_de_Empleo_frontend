import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './pages/logins/UserLogin';
import CompLogin from './pages/logins/CompLogin';
import CompRegister from './pages/register/CompRegister';
import HomeStudents from './pages/home/HomeStudents';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/complogin" element={<CompLogin />} />
          <Route path="/compregister" element={<CompRegister />} />
          <Route path="/homestudent" element={<HomeStudents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
