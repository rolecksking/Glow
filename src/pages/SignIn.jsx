import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="app-container">
      <div 
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: '8px',
          marginTop: '24px',
          marginBottom: '32px'
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C12 21 16 15 16 10C16 6 12 3 12 3C12 3 8 6 8 10C8 15 12 21 12 21Z" stroke="#A694FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 21C17 21 21 17 21 12C21 10 20 8 20 8C20 8 18 9 16 10" stroke="#A694FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 21C7 21 3 17 3 12C3 10 4 8 4 8C4 8 6 9 8 10" stroke="#A694FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontSize: '24px', fontWeight: '700', letterSpacing: '-0.5px' }}>Glow</span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Sign In</h1>
        <p className="subtitle">Enter your email to continue</p>
      </div>

      <div className="card-section">
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input 
            type="email" 
            className="input-field" 
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group" style={{ marginBottom: '32px' }}>
          <label className="form-label">
            Password
            <a href="#">Forgot password?</a>
          </label>
          <div className="input-wrapper">
            <input 
              type={showPassword ? "text" : "password"} 
              className="input-field" 
              placeholder="••••••••"
            />
            <button 
              className="input-icon-right"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button className="btn btn-primary" onClick={() => navigate('/signin')}>
          Sign In <ArrowRight size={18} />
        </button>

        <div className="divider">
          <span>OR JOIN WITH</span>
        </div>

        <div className="social-grid">
          <button className="btn btn-social" style={{ flex: 1 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          
          <button className="btn btn-social" style={{ flex: 1 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11c0-2 1.3-3.2 2-3.8-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.1-2.9.9-3.6.9-.8 0-1.9-.9-3.2-.8-1.6.1-3 1-3.8 2.3-1.7 2.9-.4 7.2 1.2 9.6.8 1.1 1.7 2.4 2.9 2.4 1.2.1 1.6-.6 3-.6s1.8.6 3 .6c1.3.1 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7 0-.1-2.5-1-2.5-3.8zM14.5 5.2c.7-.7 1.1-1.8 1-2.8-1.1.1-2.2.6-2.9 1.4-.6.7-1 1.8-.9 2.8 1 0 2.1-.6 2.8-1.4z"/>
            </svg>
            Apple
          </button>
        </div>
      </div>

      <div className="bottom-link">
        no account? <Link to="/signup/1" style={{ color: '#a694ff' }}>Create account</Link>
      </div>

      <p className="legal-text" style={{ marginTop: '32px' }}>
        <a href="#" style={{ marginRight: '16px' }}>PRIVACY POLICY</a> 
        <a href="#">TERMS OF SERVICE</a>
      </p>
    </div>
  );
}
