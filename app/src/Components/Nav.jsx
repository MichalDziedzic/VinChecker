import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


 function Nav() {
    return (
        <>   
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p className="navbar-brand" >Vinchecker</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <p className="nav-link" >Home <span className="sr-only">(current)</span></p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" >How it works</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" >Sign in</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" >Contact</p>
                    </li>

                    </ul>
                    </div>
                </nav>
               
        </>
    )
}


export default Nav;



