import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Uncontrolled from './components/uncontrolled';
import Controlled from './components/controlled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <BrowserRouter>
            <ul>
                <li><Link to ="/controlled">Controlled Form</Link></li>
                <li><Link to="/uncontrolled">Uncontrolled Form</Link></li>
            </ul>
            <Routes>
                <Route path="/controlled" element={<Controlled/>} />
                <Route path="/uncontrolled" element={<Uncontrolled/>} />
            </Routes>
        </BrowserRouter>
    </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();