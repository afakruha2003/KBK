import React from 'react';
import { makeStyles, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './theme.mjs';
import HomePage from './pages/HomePage.mjs';
import EventPage from './pages/EventPage.mjs';
import CityPage from './pages/CityPage.mjs';
import Header from './components/Header.mjs'; // Assuming you have a Header component
import Footer from './components/Footer.mjs'; // Assuming you have a Footer component

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Router>
          <Header /> {/* Include the Header component */}
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/event/:eventId" component={EventPage} /> {/* Changed path to include eventId */}
            <Route path="/city/:cityId" component={CityPage} /> {/* Changed path to include cityId */}
          </Switch>
          <Footer /> {/* Include the Footer component */}
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
