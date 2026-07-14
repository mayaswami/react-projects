import { useEffect, useState } from "react";

function FetchApi() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
        setError("Oops, Something went wrong!");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, maxWidth: "500px", margin: "20px auto" }}>
      {users.map((user) => (
        <li
          key={user.id}
          style={{
            marginBottom: "12px",
            padding: "12px 16px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          }}
        >
          <strong style={{ display: "block", marginBottom: "6px" }}>{user.name}</strong>
          <div>Email: {user.email}</div>
          <div>City: {user.address?.city || "N/A"}</div>
          <div>Phone: {user.phone}</div>
        </li>
      ))}
    </ul>
  );
}

export default FetchApi;
