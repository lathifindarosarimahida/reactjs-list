import React from 'react';
import Utama from './component/Utama';
import './App.css'
import { Link } from "react-router-dom";

class App extends React.Component {
  render(){
    return(
      <div>
        <div>

          <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img src="image/adwyt.png" width="250" height="50" /> 
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" 
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
              aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link">Beranda</Link>
                    </li>

                    <li class="nav-item active">
                        <Link to="/Gallery" class="nav-link">Gallery</Link>
                    </li>

                    {/* <li class="nav-item active">
                        <Link to="/Hari" class="nav-link">Hari</Link>
                    </li> */}

                    <li class="nav-item active">
                        <Link to="/Agenda" class="nav-link">Agenda</Link>
                    </li>

                    <li class="nav-item active">
                        <Link to="/Keranjang" class="nav-link">Keranjang</Link>
                    </li>

                </ul>
    
            </div>
            </div>
          </nav>
          <Utama />
          </div>
      
      </div>
    )
  }
}

export default App;