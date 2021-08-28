import React from 'react'
import Aside from './Aside'

export default function Article() {
  return (
    <>
      <div className="container my-4">
        <div className="d-none d-sm-block" >
          <nav aria-label="Page navigation  " className="d-flex justify-content-between">
            <ul className="pagination border-none">
              <li className="page-item"><a className="page-link active" href="/">All Post(32)</a></li>
              <li className="page-item"><a className="page-link" href="/">Article</a></li>
              <li className="page-item"><a className="page-link" href="/">Event</a></li>
              <li className="page-item"><a className="page-link" href="/">Education</a></li>
              <li className="page-item"><a className="page-link" href="/">Job</a></li>
            </ul>
            <div className="d-flex justify-content-between">

              <div className="dropdown me-5">
                <a className="btn btn-secondary dropdown-toggle text-dark bg-light fw-bold" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Write a Post
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="/">Import</a></li>
                  <li><a className="dropdown-item" href="/">Text</a></li>
                </ul>
              </div>
              <button type="button" className="btn btn-primary h-75 "> <i className="bi bi-people-fill"></i> Join Group</button>
            </div>
          </nav>
        </div>
        <div className="d-flex justify-content-between d-sm-none pt-2 mx-3">
          <h5>Posts(368)</h5>
          <div className="dropdown pb-3">
            <a className="btn btn-secondary dropdown-toggle text-dark bg-light fw-bold" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Filter : All
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="/">New</a></li>
              <li><a className="dropdown-item" href="/">Old</a></li>
            </ul>
          </div>
        </div>
        <hr className="m-0" />

        <div className="d-flex justify-content-between">
          <div className="w70 w100">
            <div className="card my-3" >
              <img src="article1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">✍️ Article</h6>
                <div className="d-flex justify-content-between">
                  <h5 className="card-text">What if famous brands had regular fonts? Meet RegulaBrands !</h5>
                  <button className=" btn btn-light"><i className="bi bi-three-dots"></i></button>
                </div>
                <p>I have worked in UX for the better part of a decade. From now on, I plan to rei...</p>
              </div>
              <div className="card-body d-flex justify-content-between">
                <h5><img src="dp1.png" alt="" /> Sarthak Kamra</h5>
                <span>
                  <h6 className="card-link d-inline me-5"> <i className="bi bi-eye"></i> 1.4k views</h6>
                  <button className=" btn btn-secondary"><i className="bi bi-share-fill text-dark"></i></button>
                </span>
              </div>
            </div>
            <div className="card my-3">
              <img src="article2.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">🔬️ Education</h6>
                <div className="d-flex justify-content-between">
                  <h5 className="card-text">Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                  <button className=" btn btn-light"><i className="bi bi-three-dots"></i></button>
                </div>
                <p>I have worked in UX for the better part of a decade. From now on, I plan to rei...</p>
              </div>
              <div className="card-body d-flex justify-content-between">
                <h5><img src="dp2.png" alt="" /> Sarah West</h5>
                <span>
                  <h6 className="card-link d-inline me-5"> <i className="bi bi-eye"></i> 1.4k views</h6>
                  <button className=" btn btn-secondary"><i className="bi bi-share-fill text-dark"></i></button>
                </span>
              </div>
            </div>
            <div className="card my-3" >
              <img src="article3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">🗓️ Meetup</h6>
                <div className="d-flex justify-content-between">
                  <h5 className="card-text">Finance & Investment Elite Social Mixer @Lujiazui</h5>
                  <button className=" btn btn-light"><i className="bi bi-three-dots"></i></button>
                </div>
                <div className="fw-bold" >
                  <span className="me-5"> <i className="bi bi-calendar2-event"></i> Fri, 12 Oct, 2018</span>
                  <span> <i className="bi bi-geo-alt-fill"></i> Ahmedabad, India</span>
                </div>
                <button type="button" className="btn btn-light btn-outline-secondary mt-3 w-100 text-danger">Visit Website</button>
              </div>
              <div className="card-body d-flex justify-content-between">
                <h5><img src="dp3.png" alt="" /> Ronal Jones</h5>
                <span>
                  <h6 className="card-link d-inline me-5"> <i className="bi bi-eye"></i> 1.4k views</h6>
                  <button className=" btn btn-secondary"><i className="bi bi-share-fill text-dark"></i></button>
                </span>
              </div>
            </div>
            <div className="card my-3" >
              <div className="card-body">
                <h6 className="card-title">💼️ Job</h6>
                <div className="d-flex justify-content-between">
                  <h5 className="card-text">Software Developer</h5>
                  <button className=" btn btn-light"><i className="bi bi-three-dots"></i></button>
                </div>
                <div className="fw-bold">
                  <span className="me-5"> <i className="bi bi-bag"></i> Innovaccer Analytics Private Ltd.</span>
                  <span> <i className="bi bi-geo-alt-fill"></i> Noida, India</span>
                </div>
                <button type="button" className="btn btn-light btn-outline-secondary mt-3 w-100 text-success">Apply on Timesjobs</button>
              </div>
              <div className="card-body d-flex justify-content-between">
                <h5><img src="dp4.png" alt="" /> Joseph Gray</h5>
                <span>
                  <h6 className="card-link d-inline me-5"> <i className="bi bi-eye"></i> 1.4k views</h6>
                  <button className=" btn btn-secondary"><i className="bi bi-share-fill text-dark"></i></button>
                </span>
              </div>
            </div>
          </div>
          <div className="w30 d-none d-sm-block">
            <Aside />
          </div>

        </div>

      </div>
    </>
  )
}
