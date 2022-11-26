import axios from 'axios';
import React, { useState } from 'react';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import icon from '../../assets/logos/icon.png';

const Hello = () => {
  return (
    <div>
      hello
      <img alt="icons" src={icon} />
    </div>
  );
};
const Login = () => {
  const [result, setResult] = useState([]);
  const res = () => {
    axios
      .get('http://localhost:3000/users')
      .then((ax) => setResult(ax.data))
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
      <div>
        {result &&
          result.map((item: any, idx: number) => {
            return <h1 key={item.id}>{item.name}</h1>;
          })}
      </div>
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
