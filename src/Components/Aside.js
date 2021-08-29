import React from 'react'

export default function Aside() {
  return (
    <div className="d-flex flex-column mt-5 ms-5">
      <div >
        <i className="bi bi-geo-alt-fill"></i>
        <input type="text" className="border-0 outline-none" placeholder="Noida,India" />
        <span className=" "><i className="bi bi-pencil-fill"></i></span>
        <hr />
      </div>
      <div><img src="ibtn.png" alt="" /> &nbsp; Your location will help us serve better and extend a personalised experience.</div>

      <div className="my-5">
        <h6 className="mb-4"> <img src=" thumb.png" alt="" /> RECOMMENDED GROUPS</h6>
        <div className="d-flex justify-content-between ">
          <div className="mb-4 "><img src="dp5.png" className="me-2 me-md-3" alt="" />  Leisure</div>
          <button className="btn btn-info border-0 fs12 rounded-pill py-0 ">Follow</button>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="mb-4 "><img src="dp6.png" className="me-2 me-md-3" alt="" />  Activism</div>
          <button className="btn btn-info border-0 fs12 rounded-pill py-0">Follow</button>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="mb-4 "><img src="dp7.png" className="me-2 me-md-3" alt="" />  MBA</div>
          <button className="btn btn-info border-0 fs12 rounded-pill py-0">Follow</button>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="mb-4 "><img src="dp8.png" className="me-2 me-md-3" alt="" />  Philosophy</div>
          <button className="btn btn-info border-0 fs12 rounded-pill py-0">Follow</button>
        </div>
        <div className="d-flex justify-content-between ">
          <div></div>
          <div><a href="/" className="text-decoration-none fs12 ">See More...</a></div>
        </div>

      </div>
    </div >
  )
}
