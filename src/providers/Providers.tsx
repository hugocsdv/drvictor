"use client";

import { ThemeProvider } from "styled-components";
import { useState } from "react";

import darkTheme from "@/styles/darkTheme";
import lightTheme from "@/styles/lightTheme";
import { ThemeContext } from "@/context/ThemeContext";



export default function Providers({
  children
}:{
  children:React.ReactNode
}){

  const [dark,setDark] = useState(false);


  function toggleTheme(){
    setDark((prev)=>!prev);
  }


  return(
    <ThemeContext.Provider
      value={{
        dark,
        toggleTheme,
      }}
    >

      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>

    </ThemeContext.Provider>
  );
}