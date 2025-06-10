import React from 'react';
import UploadNote from '../components/UploadNote';
import ConvertedNote from '../components/ConvertedNote';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#1e1e2f', color: '#f1f1f1' }}>
      {/* Navbar */}
      <nav style={{ padding: '10px 20px', background: '#2e2e42', color: '#ffd166', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
        <h1 style={{ fontSize: '24px' }}>ScriptFix</h1>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url("/your-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#f1f1f1',
          textAlign: 'center',
          padding: '100px 20px',
        }}
      >
        <h2 style={{ fontSize: '40px', fontWeight: 'bold' }}>ScriptFix – Convert Handwriting to Digital Notes</h2>
        <p>Fast. Accurate. AI-powered.</p>
        <button style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#ff6b6b',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Get Started {/* 🔁 SMALL CHANGE: Text updated from 'Try Now' */}
        </button>
      </section>

      {/* Info Section */}
      <section style={{ display: 'flex', justifyContent: 'space-around', background: '#2e2e42', padding: '30px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#ffd166' }}>3000+ Notes Processed</h3>
          <p>Students and doctors trust ScriptFix</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#ffd166' }}>99% Accuracy</h3>
          <p>AI-backed recognition system</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#ffd166' }}>24/7 Access</h3>
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
