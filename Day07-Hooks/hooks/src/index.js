import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById('root'));
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
        </ThemeProvider>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
          <App/>
        </DevSupport>
      </BrowserRouter>
    </React.StrictMode>
);

