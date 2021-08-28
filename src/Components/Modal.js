import React from 'react'


//  MODAL FOR BIG SCREEN 


export default function Modal() {
  return (
    <>

      {/* For New User Joining Modals */}


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div className="modal-dialog modal-dialog-centered modal-lg">

          <div className="modal-content">
            <div className="modal-header p-0">
              <div className="alert alert-success text-success container-fluid m-0" role="alert">
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼

                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>
            <div className="modal-body d-flex justify-content-between">
              <div className=" px-3">
                <h4>Create Account</h4>
                <form action="">
                  <div className="input-group mt-5">
                    <input type="text" className="form-control" placeholder="First Name" aria-label="Username" />
                    <input type="text" className="form-control" placeholder="Last Name" aria-label="Server" />

                    <input type="email" className="form-control w-100" id="exampleFormControlInput1" placeholder="Email" />
                    <div className="input-group"><input type="email" className="form-control border-end-0 " id="exampleFormControlInput1" placeholder="Password" />
                      <span className="input-group-text bg-light " id="basic-addon2"><i className="bi bi-eye"></i></span></div>
                    <input type="email" className="form-control w-100" id="exampleFormControlInput1" placeholder="Confirm Password" />
                  </div>
                </form>
                <button type="button" className="btn btn-primary rounded-pill mt-3 w-100">Create Account</button>
                <button type="button" className="btn btn-light btn-outline-secondary text-dark w-100 mt-5"> <img src="fb.png" className="pe-2" alt="" />     Sign up with Facebook</button>
                <button type="button" className="btn btn-light btn-outline-secondary text-dark w-100 mt-3"> <img src="gg.png" className="pe-2" alt="" />     Sign up with Google</button>
              </div>
              <div>
                <p>Already have an account? <a href="/" className="text-decoration-none">Sign In</a></p>
                <img src="vector.jpg" className="vector" alt="" />
                <p className=" fs12">By signing up, you agree to our Terms & conditions, Privacy policy</p>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>

      {/* For Existing User Modals */}


      {/* 
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div className="modal-dialog modal-dialog-centered modal-lg">

          <div className="modal-content">
            <div className="modal-header p-0">
              <div className="alert alert-success text-success container-fluid m-0" role="alert">
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼

                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>
            <div className="modal-body d-flex justify-content-between">
              <div className=" px-3">
                <h2>Sign In</h2>
                <form action="">
                  <div className="input-group mt-5">
                    <input type="email" className="form-control w-100" id="exampleFormControlInput1" placeholder="Email" />
                    <div className="input-group"><input type="email" className="form-control border-end-0 " id="exampleFormControlInput1" placeholder="Password" />
                      <span className="input-group-text bg-light " id="basic-addon2"><i className="bi bi-eye"></i></span></div>
                  </div>
                </form>
                <button type="button" className="btn btn-primary rounded-pill mt-3 w-100">Sign In</button>
                <button type="button" className="btn btn-light btn-outline-secondary text-dark w-100 mt-5"> <img src="fb.png" className="pe-2" alt="" />     Sign up with Facebook</button>
                <button type="button" className="btn btn-light btn-outline-secondary text-dark w-100 mt-3"> <img src="gg.png" className="pe-2" alt="" />     Sign up with Google</button>
                <div className="text-center mt-4">Forget Password ?</div>
              </div>
              <div>
                <p className="fs14">Don't have an account yet ? <a href="/" className="text-decoration-none">Create new for free!</a></p>
                <img src="vector.jpg" width="340px" alt="" />
                <p className=" fs12">By signing up, you agree to our Terms & conditions, Privacy policy</p>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div> */}
    </>
  )
}
