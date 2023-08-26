import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Categorie from './Component/Categorie.jsx';
import Depense from './Component/Depense.jsx';
import User from './Component/User.jsx';
import './index.css';
import AddUser from './Component/AddUser.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/categorie" element={ <Categorie/> } />
        <Route path="/user" element={ <User/> } />
        <Route path="/depense" element={ <Depense/> } />
        <Route path="/add/user" element={ <AddUser/> } />
      </Routes>
    </React.StrictMode>
  </Router>,
);

