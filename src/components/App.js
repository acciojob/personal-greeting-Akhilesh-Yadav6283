
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState("");
  function showGreeting(e){
       setInput(e.target.value);
  }
  return (
    <div className="container">
        {/* Do not remove the main div */}
        <h3>Enter your name:</h3>
        <input type="text"  onChange={showGreeting}></input>
        <div>
        {
            input && <b>Hello {input}! </b> 
        }
        </div>
       
    </div>
  )
}

export default App
