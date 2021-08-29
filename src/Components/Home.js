import React from 'react'

export default function Home() {
  return (
    <>
      <div id="carouselExampleSlidesOnly  " className="carousel m-0" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-between d-sm-none pt-2 mx-3">
              <i className="bi bi-arrow-left text-light fs-4 "></i>
              <button type="button" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModala">Join Group</button>
            </div>
            <img className="d-block w-100  home" src="laptop1.jpg" alt="First slide" style={{ height: "70vh" }} />
            <div className="carousel-caption  d-md-block text-start">
              <h1>Computer Engineering</h1>
              <p>142,765 Computer Engineers follow this</p>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}