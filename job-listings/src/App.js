import React from "react";

const jobs = [
  {
    title: "Software Engineer",
    department: "Engineering",
    location: "Bangalore",
    refer: false,
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Delhi",
    refer: true,
  },
  {
    title: "Data Analyst",
    department: "Data",
    location: "Mumbai",
    refer: true,
  },
  {
    title: "Sales Executive",
    department: "Sales",
    location: "Bangalore",
    refer: false,
  },
];

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700 }}>Job Listings</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "2rem",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "1rem", fontWeight: 700 }}>
              Title
            </th>
            <th style={{ textAlign: "left", padding: "1rem", fontWeight: 700 }}>
              Department
            </th>
            <th style={{ textAlign: "left", padding: "1rem", fontWeight: 700 }}>
              Location
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, idx) => (
            <tr key={idx} style={{ borderTop: "1px solid #eee" }}>
              <td style={{ padding: "1rem" }}>{job.title}</td>
              <td style={{ padding: "1rem" }}>{job.department}</td>
              <td style={{ padding: "1rem" }}>
                {job.location}{" "}
                {job.refer && (
                  <a
                    href="#"
                    style={{
                      color: "#2563eb",
                      textDecoration: "none",
                      marginLeft: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    Refer
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
