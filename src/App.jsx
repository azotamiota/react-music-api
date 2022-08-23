import React from "react";
import Intro from "./components/Intro";
import Bands from "./components/Bands";
import SearchBar from "./components/SearchBar";

const App = () => {
    return <>
        <h1>Music API</h1>
        <Intro />
        <Bands />
    </>
};

export default App;
