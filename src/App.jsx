import React, {useState} from "react";
import { useEffect } from "react";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";

const App = () => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        document.title = "Tienda APP - Inicio";
    }, []);

    const  handleInput = (event) =>  {
        setSearch(event.target.value);
    };

    return (
        <>
            <Navbar handleInput={handleInput} search={search}/>
      
            <Grid search={search}/>
        </>
    );
};

export default App;