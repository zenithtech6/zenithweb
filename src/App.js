import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { backend_url } from './lib/config';

function App() {
  const getSales = async () => {
   try {
    const response = await axios.get(`${backend_url}/admin/get_sales`);
    console.log(response.data);
   } catch (error) {
    console.error("Error fetching sales data:", error);
   }
  }
  useEffect(() => {
    console.log("App component mounted");
    getSales();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello<code>tzenith tech</code>: your test pipeline is working
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
