import "./styles.css";

import {useState,useEffect} from "react";
export default function App(){
  const[name,setName]= useState("");

  useEffect(()=>{
    console.log("Name changed to:",name);
  },[name]); //runs whenever name changes

  return (
    <div style ={{padding:"20px"}}>
      <h2> Hello,{name || "stranger"}!</h2>
      <input type="text" placeholder="enter your name"
      value={name} onChange={(e)=> setName(e.target.value)}
      />  
      </div>
  );



}
