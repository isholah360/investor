import React from "react";
import "./hero.css";

function Hero() {
  return (
    <>
      <div>
        <div className="hero-complete">
          <div className="hero-content">
            <div className="hero-title">
              Join a new generation of smart saver, investor and learner
            </div>

            <div className="hero-sub">
              Whether you want to invest on your own, or have us do the work, we
              have account choices for you. And we've got tools and resources to
              help along the way. Just answer a few questions and we'll build a
              diversified portfolio.
            </div>

            <button>Get Started</button>

            <div className="the-subscribers">
              <div className="main-inner">
                <div className="subs">800K+</div>
                <div className="subs-cont">Trusted Clients</div>
              </div>
              <div className="main-inner">
                <div className="subs">$60B+</div>
                <div className="subs-cont">In total assets</div>
              </div>
              <div className="main-inner">
                <div className="subs">
                  <div className="main-sub">4.8</div>
                  <div className="sub-img"><img src="assets/star.png" alt="" /></div>
                </div>
                <div className="subs-cont">Apple App Store</div>
              </div>
              <div className="main-inner">
                <div className="subs">
                  <div className="main-sub">4.9</div>
                  <div className="sub-img"><img src="assets/star.png" alt="" /></div>
                </div>
                <div className="subs-cont">Google Play Store</div>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <img src="assets/hero.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
