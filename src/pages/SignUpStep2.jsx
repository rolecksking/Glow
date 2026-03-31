import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, Shield } from 'lucide-react';

export default function SignUpStep2() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);
  const [gender, setGender] = useState('Female');

  return (
    <div className="app-container">
      <div className="header-back" onClick={() => navigate(-1)}>
        <ArrowLeft size={16} /> Luminous Sanctuary
      </div>

      <div className="header">
        <h1>Create account</h1>
        <p className="subtitle" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Step 2 of 3 — a bit more about you
        </p>
      </div>

      <div style={{ paddingBottom: '32px' }}>
        <label className="form-label" style={{ marginBottom: '12px' }}>DATE OF BIRTH</label>
        <div className="dob-row">
          <input type="text" className="input-field" placeholder="DD" style={{ flex: 1, textAlign: 'center' }} />
          <input type="text" className="input-field" placeholder="MM" style={{ flex: 1, textAlign: 'center' }} />
          <input type="text" className="input-field" placeholder="YYYY" style={{ flex: 2, textAlign: 'center' }} />
        </div>

        <div className="gender-toggle" style={{ marginBottom: '32px' }}>
          {['Female', 'Male', 'Other'].map(g => (
            <button
              key={g}
              className={`gender-btn ${gender === g ? 'active' : ''}`}
              onClick={() => setGender(g)}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="form-group" style={{ marginBottom: '24px' }}>
          <label className="form-label" style={{ marginBottom: '12px' }}>CREATE A PASSWORD</label>
          <div className="input-wrapper">
            <input 
              type={showPassword ? "text" : "password"} 
              className="input-field" 
              defaultValue="password123"
            />
            <button 
              className="input-icon-right"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: '40px' }}>
          <label className="form-label" style={{ marginBottom: '12px' }}>REPEAT PASSWORD</label>
          <div className="input-wrapper">
            <input 
              type={showRepeat ? "text" : "password"} 
              className="input-field" 
              defaultValue="password123"
            />
            <button 
              className="input-icon-right"
              onClick={() => setShowRepeat(!showRepeat)}
            >
              {showRepeat ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button className="btn btn-primary" onClick={() => navigate('/signup/3')}>
          Continue
        </button>
      </div>

      <div className="status-card">
        <div className="status-icon" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#a694ff' }}>
          <Shield size={18} />
        </div>
        <div className="status-content">
          <h3>Secure Sanctuary</h3>
          <p>Your data is encrypted with the highest standards of digital privacy.</p>
        </div>
      </div>
    </div>
  );
}
