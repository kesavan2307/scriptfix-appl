import React from 'react';
import UploadNote from '../components/UploadNote';
import ConvertedNote from '../components/ConvertedNote';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: '10px 20px', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '24px' }}>ScriptFix</h1>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url("/your-background.jpg")',
          backgroundSize: 'cover',
          color: 'white',
          textAlign: 'center',
          padding: '100px 20px',
        }}
      >
        <h2 style={{ fontSize: '40px', fontWeight: 'bold' }}>ScriptFix – Convert Handwriting to Digital Notes</h2>
        <p>Fast. Accurate. AI-powered.</p>
        <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'red', color: 'white' }}>
          Try Now
        </button>
      </section>

      {/* Info Section */}
      <section style={{ display: 'flex', justifyContent: 'space-around', background: '#2c3e50', color: 'white', padding: '30px 0' }}>
        <div>
          <h3>3000+ Notes Processed</h3>
          <p>Students and doctors trust ScriptFix</p>
        </div>
        <div>
          <h3>99% Accuracy</h3>
          <p>AI-backed recognition system</p>
        </div>
        <div>
          <h3>24/7 Access</h3>
          <p>Convert notes anytime, anywhere</p>
        </div>
      </section>

      {/* Component Integration */}
      <main style={{ padding: '40px 20px' }}>
        <UploadNote />
        <ConvertedNote />
      </main>
    </div>
  );
}
