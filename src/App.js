import React from 'react'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import OpeningScreen from './screens/OpeningScreen';
import Test from './screens/Test';

import './custom.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Test/>} />
        <Route path='/data-table' element={<OpeningScreen/>} />
      </Routes>
    </BrowserRouter>
  )
}
