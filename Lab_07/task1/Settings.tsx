export default function Settings() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Settings</h1>
      <p>Welcome to the settings page. This component is lazy loaded.</p>
      <div style={{ marginTop: "1rem" }}>
        <p>Configure your application preferences here.</p>
        <p>This page was loaded on demand using React.lazy()</p>
      </div>
    </div>
  );
}
