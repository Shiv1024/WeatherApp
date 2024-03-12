import React, { useState } from "react";
import Header from "./Header";
import Searcharea from "./Searcharea";
import Display from "./display";
function App(){
    const [location,setlocation]=useState();
    function handlesubmit(newlocation){
        setlocation(newlocation)
    }
    return(
        <div>
            <Header/>
            <Searcharea 
            onsubmit={handlesubmit}
            />
            <Display
            city={location}
            />
        </div>
    );
}
export default App;