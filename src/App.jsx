import React from "react";
import {Intro, Songs} from "./components";

import './App.css'

const App = () => {
    return <>
        <h1>Music API</h1>
        <Intro />
        <Songs />
    </>
};

export default App;
