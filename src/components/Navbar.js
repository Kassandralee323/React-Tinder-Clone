import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          <img src="https://tinder.com/static/android-chrome-192x192.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
            tinder
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Learn
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >
                  Safety
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Swipe Night
                </a>
              </li>
            </ul>
            <div>
                <button class="btn btn-outline-success">
                ENGLISH
                </button>
                <button class="btn btn-outline-success ms-4">
                Log in
                </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
