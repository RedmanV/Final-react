import React from 'react'
import '/src/stylesheets/Header.css';

function Header() {
  return (
    <div className="row d-flex encabezado">
      <div className="col-12 d-flex justify-content-evenly">
        <a href="" className="logo-header">
          <img src="src/assets/Logo_titilar.png" alt="" className="logo" />
        </a>
        <div className="menu d-flex">
          <b>
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link " aria-current="page" href="#">Titilar</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Nuestra marca</a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#">Juego</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </b>
        </div>
      </div>
    </div>
  )
}

export default Header