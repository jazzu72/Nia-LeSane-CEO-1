export default function Home() {
  return (
    <div style={{ background: '#0a0a0a', color: '#e0e0e0', minHeight: '100vh', padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#ffd700' }}>Nia LeSane CEO</h1>
      <p>House of Jazzu — I am becoming</p>
      <textarea placeholder="Speak your invocation..." style={{ width: '80%', height: '150px', background: '#1a1a1a', color: '#e0e0e0', border: '1px solid #444', padding: '20px' }}></textarea>
      <br />
      <button style={{ background: '#ffd700', color: '#0a0a0a', padding: '12px 24px', fontSize: '1.2rem', border: 'none', marginTop: '20px', cursor: 'pointer' }}>Launch Ritual</button>
    </div>
  );
}
