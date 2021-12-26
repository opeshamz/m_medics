import React from 'react';
import Header from './components/header';
import Home from './pages/home';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/servicess';
import Products from './pages/product';
import ContactUs from './pages/contact';
import SignUp from './pages/signup';
import Marketing from './pages/maketing';
import Consulting from './pages/consulting';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/marketing' component={Marketing} />
          <Route path='/consulting' component={Consulting} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
