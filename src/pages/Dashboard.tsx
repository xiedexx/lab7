export default function Dashboard() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard page. This component is lazy loaded.</p>
      <div style={{ marginTop: "1rem" }}>
        <p>This page was loaded on demand using React.lazy()</p>
        <p>
          It is part of a separate code chunk and is only downloaded when this
          route is accessed.
        </p>
      </div>
    </div>
  );
}
