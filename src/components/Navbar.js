
import React, { Component } from 'react'

export default class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">YourTube</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Link</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li> */}
                            </ul>
                            <div className='d-flex'>
                                <div className="nav-item btn-group dropstart">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Contact
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="https://github.com/SH4R1Q" target='_blank'>Git-Hub</a></li>
                                        <li><a className="dropdown-item" href="https://www.linkedin.com/in/shariq-khan-28772b1b4/" target='_blank'>LinkedIn</a></li>
                                        <li><a className="dropdown-item" href="https://instagram.com/_shariq.khan?igshid=YmMyMTA2M2Y=" target='_blank'>Instagram</a></li>
                                        <li><a className="dropdown-item" href="mailto:shariqahmadkhan31@gmail.com" target='_blank'>Send Mail</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

