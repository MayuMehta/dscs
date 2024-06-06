import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.textColor} bg-${props.bgColor}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">{props.title}</Link> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact" tabIndex="-1" aria-disabled="true">Contact</Link>
              </li>
            </ul>
            <form className="d-flex m-2">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button onClick={props.changeMode} className={`btn btn-outline-${props.color}`}>{props.text}</button>
          </div>
        </div>
      </nav>
      
    </div>
  )
}
