import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Categorie from './Component/Categorie.jsx';
import Depense from './Component/Depense.jsx';
import User from './Component/User.jsx';
import './index.css';
import AddUser from './Component/AddUser.jsx';
import AddCategorie from './Component/AddCategorie.jsx';
import AddDepense from './Component/AddDepense.jsx';
import EditUser from './Component/EditUser.jsx';
import EditCategorie from './Component/EditCategorie.jsx';
import EditDepense from './Component/EditDepense.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/categorie" element={ <Categorie/> } />
        <Route path="/user" element={ <User/> } />
        <Route path="/depense" element={ <Depense/> } />
        <Route path="/add/user" element={ <AddUser/> } />
        <Route path="/add/categorie" element={ <AddCategorie/>  }></Route>
        <Route path="/add/depense" element={ <AddDepense/> }></Route>
        <Route path="/edit/user" element={ <EditUser/> }></Route>
        <Route path="/edit/categorie" element={ <EditCategorie/> }></Route>
        <Route path="/edit/depense" element={ <EditDepense/> }></Route>
      </Routes>
    </React.StrictMode>
  </Router>,
);

