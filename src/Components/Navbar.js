import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="d-none d-sm-block" >
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-between py-3    ">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
              <img src="atglogo.png" className="img-fluid" alt="" />
            </a>


            <form className="w30 me-3 nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 position-relative fontuser ">
              <input type="search" className="form-control rounded-pill text-dark px-5" placeholder=" Search your favourite group in ATG" aria-label="Search" />
              <i className="bi bi-search"></i>
            </form>


            <div className="col-md-3 text-end nav-item dropdown">
              <h6 className=" dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Create account. <a href="/" className="text-decoration-none">It's free !</a>
              </h6>

            </div>
          </header>
        </div>

      </div>
    </>
  )
}

