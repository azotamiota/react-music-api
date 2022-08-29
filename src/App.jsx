import React from "react";
import {Routes, Route} from 'react-router-dom';

import {Navbar, Home, About, Hero, SearchResultCards, Favourites} from "./pages/index";

import './App.css'

const App = () => {
    return <>
   
    <Routes>
        <Route path='/' element={<Navbar />}>
            <Route index element={<><Hero /><Home /></>}></Route>
            <Route path='songs' element={<><Hero /><SearchResultCards /></>}></Route>
            <Route path='about' element={<><Hero /><About /></>}></Route>
            <Route path='favourites' element={<><Hero /><Favourites /></>}></Route>
        </Route> 
        <Route path='*' element={<h1>Not Found</h1>}></Route>
    </Routes>
     </>
};

export default App;

    
