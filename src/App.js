
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ServiceDetail from './pages/ServiceDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import FindDoctor from './pages/FindDoctor';
import MakeAppointment from './pages/MakeAppointment';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <TopHeader />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/find-doctor">
          <FindDoctor />
        </Route>
        <Route path="/make-appointment">
          <MakeAppointment />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
