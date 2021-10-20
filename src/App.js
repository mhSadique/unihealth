
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
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
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Router>
      <TopHeader />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path="/find-doctor">
          <FindDoctor />
        </Route>
        <Route exact path="/make-appointment">
          <MakeAppointment />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
          <Route exact path="/service/:id">
              <ServiceDetail />
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
