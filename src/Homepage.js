import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
    return (

        <div>

            <nav className="navbar bg-body-tertiary">
                <form className="container-fluid justify-content-start">
                    <button className="btn btn-outline-success me-2" type="button"><Link to="post">"Click for New Post"</Link></button>
                    <button className="btn btn-sm btn-outline-secondary" type="button"><Link to="view">"Click Here to View Post"</Link></button>
                </form>
            </nav>

        </div>

    )
}

export default Homepage
