import deliver from "./img/free-deliver-icon.webp"
import offers from "./img/offers-icon.webp"
import support from "./img/support-icon.webp"
import '../Under/Under.css'


function Under() {
  return (
    <div class="foot p-2">
    <div class="row me-0 ">
      <div class="col-lg-4 col-md-6 col-sm-12 box d-flex align-items-center justify-content-center p-0 ">
        <img src={deliver} alt="free delive" width="50px"/>
        <div class="text ms-3">
          <h4 >FREE SHIPPING</h4>
          <p>For orders over $50</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 box d-flex align-items-center justify-content-center p-0">
        <img src={offers} alt=""  width="50px"/>
        <div class="text ms-3">
          <h4 >OFFICIAL DISCOUNTS</h4>
          <p>Save Big on next product</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 box d-flex align-items-center justify-content-center p-0">
        <img src={support} alt=""  width="50px"/>
        <div class="text ms-3">
          <h4>24/7 HELPLINE</h4>
          <p>Care till the end</p>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default Under