import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function SignUpStep3() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Simulate loader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <div className="header-back" onClick={() => navigate(-1)}>
        <ArrowLeft size={16} /> Luminous Sanctuary
      </div>

      <div className="header" style={{ marginBottom: '24px' }}>
        <h1>Create account</h1>
        <p className="subtitle" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          STEP 3 OF 3 — VERIFY YOUR NUMBER
        </p>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: '15px', marginBottom: '8px' }}>
          We sent a code to <span style={{ color: '#a694ff', fontWeight: '500' }}>085 123 4567</span>
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
          Enter it below to verify your account
        </p>
      </div>

      <div className="code-inputs" style={{ justifyContent: 'center' }}>
        <input type="text" className="code-field" defaultValue="5" readOnly />
        <input type="text" className="code-field" defaultValue="8" readOnly />
        <input type="text" className="code-field" defaultValue="2" readOnly />
        {/* The active field has a cursor effect */}
        <div className="code-field active" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '2px', height: '24px', backgroundColor: '#a694ff', animation: 'blink 1s step-end infinite' }}></div>
        </div>
        <input type="text" className="code-field" readOnly />
      </div>

      <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '40px' }}>
        Didn't receive it? <span style={{ color: '#ffffff', fontWeight: '500' }}>Resend in 0:42</span>
      </div>

      {/* Loading state indicator */}
      <div className="loading-box">
        <div className="loader-ring"></div>
        <div style={{ color: '#a694ff', fontSize: '14px', fontWeight: '500' }}>
          Checking for an existing Zenoti<br />profile...
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingBottom: '20px' }}>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Verify & continue
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}} />
    </div>
  );
}
