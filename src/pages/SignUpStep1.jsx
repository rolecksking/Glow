import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Lock, ShieldCheck, Sparkles } from 'lucide-react';

export default function SignUpStep1() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="header-back" onClick={() => navigate(-1)}>
        <ArrowLeft size={16} /> BACK
        <span className="logo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 15 6 15 12C15 14.5 13 16 12 16" stroke="#A694FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2C12 2 9 6 9 12C9 14.5 11 16 12 16" stroke="#A694FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 12C17.5 12 19 14 19 15C19 16 15 16 15 16" stroke="#A694FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 12C6.5 12 5 14 5 15C5 16 9 16 9 16" stroke="#A694FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V22" stroke="#A694FF" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 16C12 16 15 18 15 21C15 22 12 22 12 22" stroke="#A694FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16C12 16 9 18 9 21C9 22 12 22 12 22" stroke="#A694FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Glow
        </span>
      </div>

      <div className="header">
        <div className="title-sm">STEP 01 / 03</div>
        <h1>
          Create your<br />
          <span className="purple">Sanctuary.</span>
        </h1>
        <p className="subtitle">
          Begin your journey to mindfulness. Let's start with the basics of your profile.
        </p>
      </div>

      <div className="card-section">
        <div className="form-group">
          <label className="form-label">First Name</label>
          <input type="text" className="input-field" defaultValue="Evelyn" />
        </div>

        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input type="text" className="input-field" defaultValue="Woods" />
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input type="email" className="input-field" defaultValue="evelyn.woods@example.com" />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <div className="input-wrapper">
            <input type="tel" className="input-field" defaultValue="+1 (555) 000-0000" />
            <div className="input-icon-right" style={{ opacity: 0.5 }}>📱</div>
          </div>
        </div>

        <p className="legal-text" style={{ textTransform: 'none', letterSpacing: '0', fontSize: '11px' }}>
          By continuing, you agree to our <a href="#" style={{ textTransform: 'none' }}>Privacy Policy</a> and <a href="#" style={{ textTransform: 'none' }}>Terms of Service</a>.
        </p>

        <button className="btn btn-primary" onClick={() => navigate('/signup/2')}>
          Continue <ChevronRight size={18} />
        </button>
      </div>

      <div className="status-card">
        <div className="status-icon"><Lock size={18} /></div>
        <div className="status-content">
          <h3>Data Privacy</h3>
          <p>Your data is encrypted and never shared with third parties.</p>
        </div>
      </div>

      <div className="status-card secondary">
        <div className="status-icon"><ShieldCheck size={18} /></div>
        <div className="status-content">
          <h3>Secure Access</h3>
          <p>Verified account protocols keep your sanctuary safe.</p>
        </div>
      </div>

      <div className="status-card tertiary">
        <div className="status-icon"><Sparkles size={18} color="#ff6384"/></div>
        <div className="status-content">
          <h3>Smart Flow</h3>
          <p>Personalized onboarding based on your initial input.</p>
        </div>
      </div>
    </div>
  );
}
