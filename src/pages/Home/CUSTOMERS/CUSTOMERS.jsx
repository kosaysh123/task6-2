
import '../CUSTOMERS/CUSTOMERS.css'
import img from "./img/see-1.webp"
const CUSTOMERS = () => {
  return (
    <div className="CUSTOMERS pt-5 pb-5">
    <div className="main-heder text-center">
      <h3 className="fw-b see-h3">SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h3>
      <p className="text-secondary">DESIGNED TO PERFECTION</p>
    </div>
    <div className="container">
      <div
        className="row gap-4 d-flex align-items-center justify-content-between"
      >
        <div className="col-lg-3 col-md-12">
          <img src={img} alt="" width="600px" className="imges" />
        </div>

        <div className="col-lg-6 col-md-12">
          <div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item mb-3 bg-transparent text-light">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed bg-transparent text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    NEW GRADIENT COLOR FINISHES
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse p-3"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Rierem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    official.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3 bg-transparent text-light">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed bg-transparent text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    FOUR-SIDED CURVED CERAMIC BODY
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse p-3"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    official.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3 bg-transparent text-light">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed bg-transparent text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    4000MAH HIGH-CAPACITY BATTERY
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse p-3"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    official.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3 bg-transparent text-light">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed bg-transparent text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    FULLY HIDDEN CAMERA LENS
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse p-3"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    official.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CUSTOMERS