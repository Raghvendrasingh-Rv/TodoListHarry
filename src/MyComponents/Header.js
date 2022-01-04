import React from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function Header(props) {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/">Todo List</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link" to="/about">ABOUT</Link>
                            </li>
                        </ul>
                        {props.islogin ?<form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
      </form>:""}
                       </div>
                    </div>
</nav>
    )
}

export default Header

// Header.propTypes = {
//                 Login : propTypes.String
// }

// Header.defaultProps = {
//                 Login : "No"
// }