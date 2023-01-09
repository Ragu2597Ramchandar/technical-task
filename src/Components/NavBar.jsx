import React from "react";
import imageFootBall from '../assets/img/task-img.png';
import imgAd  from '../assets/img/slide-img1.png';
import sideImg from '../assets/img/sidecard.png';
import $ from 'jquery';

let NavBar = () => {
    $(document).ready(function() {
        var a = $('.slider').bxSlider({
          minSlides: 1,
          maxSlides: 5,
          mode: 'horizontal',
          adaptiveHeight: true,
          slideWidth: 100,
          moveSlides: 5,
        });
      });
    return(
        <React.Fragment>
       <div className="container">
       <div className="row">
       <nav className=" navbar navbar-default bg-dark text-white col-10 nav-one">
        <div className="col-1">
            <li className="">
              <a href="#" className="navbar navbar-brand text-white a-hover">Home</a>
            </li>
          </div>
          <div className="col-1">
          <li className="">
              <a href="#" className="navbar navbar-brand text-white a-hover">Football</a>
            </li>
          </div>
          <div className="col-1">
          <li className="">
              <a href="#" className="navbar navbar-brand text-white a-hover">Cricket</a>
            </li>
          </div>
          <div className="col-1">
          <li className=""> 
              <a href="#" className="navbar navbar-brand text-white a-hover">Live Play</a>
            </li>
          </div>
          <div className="col-2">
          <li className="">
              <a href="#" ><img src="https://www.alpharive.com/assets/Images/logo.png" className="img-logo" alt="" /></a>
            </li>
          </div>
          <div className="col-1">
          <li className="">
              <a href="#" className="navbar navbar-brand text-white a-hover">Chat</a>
            </li>
          </div>
          <div className="col-1 col-promo">
          <li className="">
              <a href="#" className="navbar navbar-brand text-white  a-hover prom-font">Promotaions</a>
            </li>
          </div>
          <div className="col-1">
          <li className="">
              <a href="#" className="navbar navbar-brand text-white  a-hover mx-2">News</a>
            </li>
          </div>
          <div className="col-1">
          <li className="">
              <a href="#" className="navbar navbar-brand text-white a-hover">Statistics</a>
            </li>
          </div>
          <div></div>
        </nav>
       <nav className="navbar col-2 nav-two">
       <div className="">
          <li className="li-login">
              <a href="#" className="navbar navbar-brand text-dark">Login <i class="fa fa-user mx-2"></i></a>
            </li>
          </div>
       </nav>
       </div>
       <div className="row mt-2">
        <img src={imageFootBall} className="img--task" alt="" />
       </div>
       <div className="row">
        <div className="col-8">
            <div className="col-2">
                <img src={imgAd} alt="" />
            </div>
        </div>
        <div className="col-4">
            <div className="card">
                <div className="card-body bg-secondary">
                <img src={sideImg} alt="" className="card-img " />
                </div>
            </div>
        </div>
        </div>
       </div>
       
    </React.Fragment>
    )
};

export default NavBar;