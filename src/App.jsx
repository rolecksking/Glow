import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import SignIn from './pages/SignIn';
import SignUpStep1 from './pages/SignUpStep1';
import SignUpStep2 from './pages/SignUpStep2';
import SignUpStep3 from './pages/SignUpStep3';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup/1" element={<SignUpStep1 />} />
        <Route path="/signup/2" element={<SignUpStep2 />} />
        <Route path="/signup/3" element={<SignUpStep3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
