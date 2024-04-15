import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine.jsx'
import Searched from './Searched.jsx';
import Recipe from './Recipe.jsx';
import { AnimatePresence } from 'framer-motion';

function Pages() {
  
  return (
    <AnimatePresence>
     
    <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/Cuisine/:type" element={<Cuisine/>}/>
        <Route path="/Searched/:search" element={<Searched/>}/>
        <Route path="/Recipe/:id" element={<Recipe/>}/>





    </Routes>
    </AnimatePresence>
   
  );
}

export default Pages
