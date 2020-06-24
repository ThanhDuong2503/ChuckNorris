import React from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { createMuiTheme , ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function App() {

    const classes = useStyles();

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
          <div className={classes.root}>
              <Grid container spacing={0} direction={"column"} >
                <Paper style={{height: "100vh"}}>
                    <div className="App">
                     <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}></Switch>

                          <Grid item xs={12}>
                                <Header></Header>
                          </Grid>
                          <Grid item xs={12}>
                                 <Main></Main>
                          </Grid>
                          <Grid item xs={12}>
                                 <Footer></Footer>
                          </Grid>
                     </div>
                 </Paper>
              </Grid>
          </div>
      </ThemeProvider>
  );
}

export default App;
