import './App.css';
import Header from "./components/Header.js"
import {ThemeProvider} from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "./theme"
import Songs from "./components/Songs.js"

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <>
              <Header/>
              <Songs/>
            </>
        </ThemeProvider>
    </div>
  );
}

export default App;