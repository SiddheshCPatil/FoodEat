import React from 'react'

export default function Login() {
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">Navbar w/ text</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/login">Login</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
