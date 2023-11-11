import "../INNOVATIVE/INNOVATIVE.css"
import inMain from  "../INNOVATIVE/img/in-main.webp"
import in1 from  "../INNOVATIVE/img/in1.png"
import in2 from  "../INNOVATIVE/img/in2.webp"
import in3 from  "../INNOVATIVE/img/in3.webp"
import in4 from  "../INNOVATIVE/img/in4.webp"
import in5 from  "../INNOVATIVE/img/in5.webp"
import in6 from  "../INNOVATIVE/img/in6.png"

function INNOVATIVE() {
  return (
    <div class="INNOVATIVE pt-5 pb-5">
      <div class="main-heder text-center mb-4">
        <h3 class="fw-b">INNOVATIVE QUALITIES & FEATURES</h3>
        <p class="text-secondary">SHOW YOURS TO THE WORLD</p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div
              class="carde d-flex align-items-center justify-content-center gap-1 mb-5 mt-5"
            >
              <div class="text">
                <h6>INTELLIGENT PROCESSOR</h6>
                <p class="fs-6">
                  Tellus in hac habitasse platea dictumst vestibulum rhoncus srd
                  mana erti qeueri
                </p>
              </div>
              <img src={in1} alt="" />
            </div>
            <div
              class="carde d-flex align-items-center justify-content-center gap-1 mb-5"
            >
              <div class="text">
                <h6>HD SURROUND AUDIO</h6>
                <p class="fs-6">
                  Sagittis eu volutpat odio ante ut diam quam metus
                  dictfacilisis mauris sit am.
                </p>
              </div>
              <img src={in2} alt="" />
            </div>
            <div
              class="carde d-flex align-items-center justify-content-center gap-1 mb-5"
            >
              <div class="text">
                <h6>STYLISH BEVEL EDGES</h6>
                <p class="fs-6">
                  Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incidid
                </p>
              </div>
              <img src={in3}alt="" />
            </div>
          </div>
          <div class="col-lg-4 col-md-12 imge-m order-md-0">
            <img
              src={inMain}
              alt=""
              width="380px"
              height="550px"
            />
          </div>
          <div class="col-lg-4 col-md-12">
            <div
              class="carde d-flex align-items-center justify-content-center gap-1 mb-5 mt-5"
            >
              <img src={in4} alt="" class="me-3" />
              <div class="text">
                <h6>4.0 WIFI SPECS</h6>
                <p class="fs-6">
                  Commodo nulla facilisi nullam vehicula ipsum a arcu sagitis
                  ipsum sed iacus.
                </p>
              </div>
            </div>
            <div
              class="carde d-flex align-items-center justify-content-center gap-1 mb-5"
            >
              <img src={in5} alt="" class="me-3" />
              <div class="text">
                <h6>MULIT TASKING & THREADING</h6>
                <p class="fs-6">
                  Amet consectetur adipiscing velit laoreet nega id elit
                  pellentesque habitant morbi .
                </p>
              </div>
            </div>
            <div
              class="carde d-flex align-items-center justify-content-center gap-1 mb-5"
            >
              <img src={in6} alt="" class="me-3" />
              <div class="text">
                <h6>CLOUD STORAGE</h6>
                <p class="fs-6">
                  Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididun
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default INNOVATIVE