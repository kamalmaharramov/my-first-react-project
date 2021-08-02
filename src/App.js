import logo from './logo.svg';
import './App.css';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


function App() {
  return (
    <div className="App">
          <header className="App-header">
                  <div className="container">
                              <div className="App-header-content">
                                          <h1>KAMAL</h1>
                                          <FaBars className="openmenu"/> 
                                          <ul className="App-header-menu">
                                                <li className="App-header-menu-content">About me</li>
                                                <li  className="App-header-menu-content">My Projects</li>
                                                <li  className="App-header-menu-content">Contact me</li>
                                                <FaTimes className="closemenu" />
                                          </ul>
                               </div>
                  </div>
          </header>
    </div>
  );
}

export default App;
