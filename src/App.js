import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Summary from './components/summary';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/step1" element={<Step1/>} />
        <Route path="/step2" element={<Step2/>} />
        <Route path="/step3" element={<Step3/>} />
        <Route path="/summary" element={<Summary/>} />
        <Route path="/" element={<Step1/>} />
      </Routes>
    </div>
  );
}

export default App;
