import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (

      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hell0</h3>
                  <h1 className="text-uppercase">I am rahi satner</h1>
                  <h5 className="text-uppercase">senior wordpress developer</h5>
                  <div className="d-flex align-items-center">
                    <a className="primary_btn" href="!#"><span>Hire Me</span></a>
                    <a className="primary_btn tr-bg" href="!#"><span>Get CV</span></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div clclassNameass="home_right_img">
                  <img className="" src={process.env.PUBLIC_URL + '/img/banner/home-right.png'} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
