import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import MasterLayout from "./components/Layout/masterLayout";
import { Router } from "react-router";
import history from './utilize/history'


function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
            <CssBaseline />
            <MasterLayout />
      </ThemeProvider>
    </Router>
  );
}
export default App;
