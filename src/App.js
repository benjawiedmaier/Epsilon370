import logo from './logo.svg';
import './App.css';
import './indexstyle.css'
import Navbar from "./components/Navbar"
import Presentacion from './components/Presentacion';
import Integrantes from './components/Integrantes';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <h1 class="title">Epsylon 370</h1>
      <div className="nav-bg">
        <Navbar />
      </div>
      <Presentacion />
      <Integrantes />
      <Footer />
    </div>
  );
}

export default App;
