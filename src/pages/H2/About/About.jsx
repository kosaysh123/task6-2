import React from 'react'
import imges from "./about.webp"
function About() {
  return (
    <div class="about-us pt-5 pb-5 position-relative">
    <div class="container d-flex justify-content-between">
      <div class="box">
        <h2 class="text-info mb-3">About Us</h2>
        <p class="w-75">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aperiam
          earum possimus, est qui illum deserunt eius aspernatur deleniti quas
          dolorem, dignissimos,
        </p>
        <div class="line d-flex align-items-center mt-3 mb-2">
          <i class="fa-solid fa-check text-info me-3"></i>
          <p class="mt-1">Separated They live On</p>
        </div>
        <div class="line d-flex align-items-center mb-2">
          <i class="fa-solid fa-check text-info me-3"></i>
          <p class="mt-1">Bookmarks Grove right at the Cost</p>
        </div>
        <div class="line d-flex align-items-center mb-5">
          <i class="fa-solid fa-check text-info me-3"></i>
          <p class="mt-1">Larg Langution Lite Pro This</p>
        </div>
        <div class="all-line d-flex gap-4">
          <div class="lom">
            <h2 class="text-primary font-weight-bold">209+</h2>
            <p>No. Students</p>
          </div>
          <div class="lom">
            <h2 class="text-primary font-weight-bold">0</h2>
            <p>No. Teachers</p>
          </div>
          <div class="lom">
            <h2 class="text-primary font-weight-bold">66+</h2>
            <p>No. Awardes</p>
          </div>
        </div>
        <div class="foot d-flex gap-4 mt-2">
          <div class="min-buttom">ADMISSION</div>
          <button type="button" class="btn btn-outline-primary rounded-pill">
            Learn More
          </button>
        </div>
      </div>
      <div class="box">
        <img src={imges} alt="" width="600px" />
      </div>
    </div>
  </div>
  )
}

export default About