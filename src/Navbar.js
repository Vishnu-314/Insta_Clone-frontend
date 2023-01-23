import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar sticky-top bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/view">InstaClone</Link>


                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/view">ViewPost</Link>
                        </li></ul>


                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-success" type="submit"><Link className="nav-link" to="/post">Post</Link></button>
                    </form>
                </div>


            </nav>
        </div>
    )
}

export default Navbar
