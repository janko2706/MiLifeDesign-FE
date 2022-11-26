import axios from 'axios';
import React, { useState } from 'react';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import icon from '../../assets/icon.png';
import './App.css';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <button type="button">
          <NavLink to="/login">Navigate</NavLink>
        </button>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};
const Login = () => {
  const [result, setResult] = useState<any>();
  const res = () => {
    axios
      .get('http://localhost:3000/users')
      .then((ax) => console.log(ax.data))
      .catch((er) => console.log(er));
  };
  return (
    <>
      <div>Hello World</div>
      <button type="button">
        <NavLink to="/">Zuruck</NavLink>
      </button>
      <button type="button" onClick={() => res()}>
        Click me
      </button>
      <div>{result && result}</div>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
