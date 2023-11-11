import "../POSSIBILITIES/POSSIBILITIES.css"
import img from "../POSSIBILITIES/img/POSSIBILITIES.webp"
import pp1 from "../POSSIBILITIES/img/pp1.webp"
import pp2 from "../POSSIBILITIES/img/pp2.webp"
import pp3 from "../POSSIBILITIES/img/pp3.webp"
import pp4 from "../POSSIBILITIES/img/pp4.png"

function POSSIBILITIES() {
  return (
    <div className="POSSIBILITIES pt-5">
    <div className="main-heder text-center">
      <h3 className="fw-b">POSSIBILITIES. PERFORMANCE. POWER.</h3>
      <p className="text-secondary">FASTER PROCESSING WITH LESS POWER</p>
    </div>
    <div className="container" id="idd">
      <div className="imeg position-relative">
        <div className="POSS"></div>
        <img
          src={img}
          alt=""
          width="900px"
          className="mx-auto d-block main-img w-100 img-fluid"
        />
        <a href="#idd" className="a1 position-absolute" ></a>
        <a href="#idd" className="a2 position-absolute" ></a>
        <a href="#idd" className="a3 position-absolute" ></a>
        <a href="#idd" className="a4 position-absolute" ></a>
        <div className="box box1 position-absolute text-center w-25">
          <img src={pp1} alt="" className="mb-3" />
          <h6>SCORPION PROCESSOR</h6>
          <p>Tristique senectus et netus et malesuada fames ac turpis.</p>
        </div>
        <div className="box box2 position-absolute text-center w-25">
          <img src={pp2} alt="" className="mb-3" />
          <h6>DUAL SIM CARDS</h6>
          <p>Donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
        </div>
        <div className="box box3 position-absolute text-center w-25">
          <img src={pp3} alt="" className="mb-3" />
          <h6>48 MP CAMERA</h6>
          <p>
            Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.
          </p>
        </div>
        <div className="box box4 position-absolute text-center w-25">
          <img src={pp4} alt="" className="mb-3" />
          <h6>48 HRS BACKUP</h6>
          <p>Natoque penatibus et magnis dis parturient montes nascetur.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
// onClick={clicka1()}
// onClick={clicka2()}
// onClick={clicka3()}
// onClick={clicka4()}
export default POSSIBILITIES