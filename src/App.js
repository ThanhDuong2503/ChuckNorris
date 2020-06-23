import React from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { createMuiTheme , ThemeProvider} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';


function App() {

    const [darkMode, setDarkMode] = React.useState(true);
    const theme = createMuiTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                light: '#478B97',
                main: '#025964',
                dark: '#d3ecee',
            },
            secondary: {
                light: '#F38765',
                main: '#33ab9f',
                dark: '#79EFA1',
            }
        }});

  return (
      <ThemeProvider theme={theme}>
          <Paper style={{height: "100vh"}}>
            <div className="App">
                <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}></Switch>
                 <Header></Header>
                  <Main></Main>
                  <Footer></Footer>
             </div>
          </Paper>
      </ThemeProvider>
  );
}

export default App;
