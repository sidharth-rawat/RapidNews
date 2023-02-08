import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const ColoerModeContext = createContext({
  toggleMode : () => {},
  mode:"dark"
})
export const ColoerContextProider = ({children})=>{
  const [mode,setMode] = useState("dark");
  const colorMode= useMemo(
    ()=>({
      toggleMode: () =>setMode((preMode)=>(preMode === "light"?"dark":"light")),
      mode,
  }),
  [mode]
  )
  const theme= createTheme({
    palette: {
      mode: mode

    },
  });
  return(
    <ColoerModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
      </ColoerModeContext.Provider>
  ) 
}