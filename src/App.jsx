import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Auth, Orders, Tables, Manu } from "./pages";
import Headers from "./components/shared/Header";

const App = () => {
  return (
    <Router>
      <Headers />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tables" element={<Tables />} />
        <Route path='/menu' element={<Manu />} />
        <Route path='*' element={<div> Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App