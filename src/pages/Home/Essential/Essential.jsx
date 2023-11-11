import ic1 from "./img/ic1.webp"
import ic2 from "./img/ic2.avif"
import ic3 from "./img/ic3.webp"
import '../Essential/Essential.css'
function Essential() {
  return (
    <> 
   
      <div class="main-heder text-center mt-5">
        <h3 class="fw-b">WHAT MAKES THE ESSENTIAL DIFFERENT?</h3>
        <p class="text-secondary">EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
      </div>
<div class="container">
        <div class="row mt-5 mb-5">
          <div class="col-lg-4 col-md-6 col-sm-12 box text-center">
            <img src={ic1} alt="" width="100px" />
            <h4 class="h6 mt-3">PERFECT CUT</h4>
            <h3 class="h5">DUAL CAMERA</h3>
            <p>Tristique senectus et netus et malesuada ant reiet fames.</p>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 box text-center">
            <img src={ic2} alt="" width="100px" />
            <h4 class="h6 mt-3">PRETTY</h4>
            <h3 class="h5">INTELLIGENT PROCESSING</h3>
            <p>
              Consequat ac habit amet asse felis donec et odio pellentesque
              diam.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 box text-center">
            <img src={ic3} alt="" width="100px" />
            <h4 class="h6 mt-3">MOST POPULAR</h4>
            <h3 class="h5">8GB DDR5 RAM</h3>
            <p>
              Dictum varius duis at consectetur lorem donec massa sap faucibus.
            </p>
          </div>
        </div>
      </div></>
  )
}
export default Essential
