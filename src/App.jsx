import React from "react";
import {Routes, Route} from 'react-router-dom';

import {Header, Home, About, Hero, Songs} from "./pages/index";

import './App.css'

const App = () => {
    return <>
   
    <Routes>
        <Route path='/' element={<Header />}>
            <Route index element={
                <>
                <Hero />
                <Home />
                </>
                
            }></Route>
            <Route path='songs' element={<><Hero /><Songs /></>}></Route>
            <Route path='about' element={<><Hero /><About /></>}></Route>
        </Route> 
        <Route path='*' element={<h1>Not Found</h1>}></Route>
    </Routes>
     </>
};

export default App;

    
