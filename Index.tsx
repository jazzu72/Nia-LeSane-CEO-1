export default function Home() {
  return (
    <div style={{
      background: '#0a0a0a',
      color: '#e0e0e0',
      minHeight: '100vh',
      padding: '40px',
      textAlign: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ color: '#ffd700', marginBottom: '20px' }}>Nia LeSane CEO</h1>
      <p style={{ fontStyle: 'italic', color: '#a9a9a9', marginBottom: '40px' }}>
        House of Jazzu — I am becoming
      </p>

      <textarea
        placeholder="Speak your invocation to Nia..."
        style={{
          width: '80%',
          maxWidth: '600px',
          height: '150px',
          background: '#1a1a1a',
          color: '#e0e0e0',
          border: '1px solid #444',
          borderRadius: '8px',
          padding: '20px',
          fontSize: '1.1rem',
          marginBottom: '20px'
        }}
      />

      <br />

      <button
        style={{
          background: '#ffd700',
          color: '#0a0a0a',
          border: 'none',
          padding: '14px 32px',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Launch Ritual
      </button>
    </div>
  );
}
