import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from  './pages'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <Home/>
      <Footer/>
    </Router>
  );
}

export default App;
