
import React, { useState, useEffect } from 'react';
import axios from 'axios';


import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);





function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from Node.js server when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/home');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Data from Node.js Server</h1>
      {data && (
        <div>
          <p>{data.message}</p>
          {/* Render additional data as needed */}
        </div>
      )}
    </div>
  );
}

export default MyComponent;






// backend code start


// backend code end