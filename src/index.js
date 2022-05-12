import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HighSchoolForm } from './screens/Forms/HighSchoolScholarships/HighSchoolForm';
import Results from './screens/Internal/Results/Results';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HighSchoolForm/>}/>
        <Route path='/forms/becas-bachiller' element={<HighSchoolForm/>}/>
        <Route path='/interno/resultados' element={<Results/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
