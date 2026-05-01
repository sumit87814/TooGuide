import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
    return <h1 id="title"> This is the first component </h1>;
};

//react functional component
// using function inside a function is called composition of function
const Hello = () => {
  return(  
    <div>
      {"injecting java script inside html"}
   
      <Heading />
    <h1> 2ns function with 1st function inside it </h1>
    </div>
    );
};


console.log(<Heading/>); //object

const root= ReactDOM.createRoot(document.getElementById("title"));
root.render(<Hello/>);