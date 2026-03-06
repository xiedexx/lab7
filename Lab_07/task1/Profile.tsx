export default function Profile() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Profile</h1>
      <p>Welcome to your profile page. This component is lazy loaded.</p>
      <div style={{ marginTop: "1rem" }}>
        <p>View and manage your profile information here.</p>
        <p>This page was loaded on demand using React.lazy()</p>
      </div>
    </div>
  );
}
