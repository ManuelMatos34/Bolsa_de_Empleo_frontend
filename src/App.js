import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './pages/logins/UserLogin';
import CompLogin from './pages/logins/CompLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/complogin" element={<CompLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
