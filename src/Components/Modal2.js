import React from 'react'

//  MODAL FOR SMALL SCREEN MOBILE 


export default function Modal() {
  return (
    <>
      {/* For New User Joining Modals */}
      <div className="modal fade" id="exampleModala" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div className="modal-dialog modal-dialog-centered">

          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Create Account</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-between">
              <div className=" px-3">
                <form action="">
                  <div className="input-group mt-5 padding">
                    <input type="text" className="form-control" placeholder="First Name" aria-label="Username" />
                    <input type="text" className="form-control" placeholder="Last Name" aria-label="Server" />

                    <input type="email" className="form-control w-100" id="exampleFormControlInput1" placeholder="Email" />
                    <div className="input-group"><input type="email" className="form-control border-end-0 " id="exampleFormControlInput2" placeholder="Password" />
                      <span className="input-group-text bg-light " id="basic-addon3"><i className="bi bi-eye"></i></span></div>
                    <input type="email" className="form-control w-100" id="exampleFormControlInput4" placeholder="Confirm Password" />
                  </div>
                </form>
                <div className="d-flex justify-content-between mt-5">
                  <button type="button" className="btn btn-primary rounded-pill  w-50">Create Account</button>
                  <div className=""><a href="/" className=" text-dark">or, Sign In</a></div>
                </div>
                <button type="button" className="btn btn-light btn-outline-secondary text-dark w-100 mt-5"> <img src="fb.png" className="pe-2" alt="" />     Sign up with Facebook</button>
                <button type="button" className="btn btn-light btn-outline-secondary text-dark w-100 mt-3"> <img src="gg.png" className="pe-2" alt="" />     Sign up with Google</button>
              </div>

            </div>
            <div className="modal-footer">By signing up, you agree to our Terms & conditions, Privacy policy</div>
          </div>
        </div>
      </div>

      {/* For Existing User Modals */}

      {/* 
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModala" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div className="modal-dialog modal-dialog-centered">

          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Welcome Back ! </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-between">
              <div className=" px-3">
                <form action="">
                  <div className="input-group mt-5 padding">
                    <input type="email" className="form-control w-100" id="exampleFormControlInput5" placeholder="Email" />
                    <div className="input-group"><input type="email" className="form-control border-end-0 " id="exampleFormControlInput6" placeholder="Password" />
                      <span className="input-group-text bg-light " id="basic-addon7"><i className="bi bi-eye"></i></span></div>

                  </div>
                </form>
                <div className="d-flex justify-content-between mt-5">
                  <button type="button" className="btn btn-primary rounded-pill  w-50"> Sign In</button>
                  <div className=""><a href="/" className=" text-dark">or,Create Account </a></div>
                </div>
                <button type="button" className="btn btn-light btn-outline-secondary text-dark w-100 mt-5"> <img src="fb.png" className="pe-2" alt="" />     Sign up with Facebook</button>
                <button type="button" className="btn btn-light btn-outline-secondary text-dark w-100 mt-3"> <img src="gg.png" className="pe-2" alt="" />     Sign up with Google</button>
                <div className="text-center mt-4">Forget Password ?</div>
              </div>

            </div>
            <div className="modal-footer my-5 border-0"></div>
          </div>
        </div>
      </div> */}
    </>
  )
}
