import React from "react";
import {Routes, Route} from 'react-router-dom';

import {Header, Home, About, Intro, Songs} from "./components";

import './App.css'

const App = () => {
    return <>
   
    <Routes>
        <Route path='/' element={<Header />}>
            <Route index element={
                <>
                <Intro />
                <Home />
                </>
                
            }></Route>
            <Route path='songs' element={<><Intro /><Songs /></>}></Route>
            <Route path='about' element={<><Intro /><About /></>}></Route>
        </Route> 
        <Route path='*' element={<h1>Not Found</h1>}></Route>
    </Routes>
     </>
};

export default App;

    
