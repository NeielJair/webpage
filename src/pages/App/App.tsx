import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const { redirect } = sessionStorage;
    delete sessionStorage.redirect;
    // eslint-disable-next-line no-restricted-globals
    if (redirect && redirect !== location.pathname) {
      navigate(`/${redirect}`);
    }
  }, [navigate]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Link to="/maxi">
          <p>MAXI</p>
        </Link>
      </header>
    </div>
  );
}
