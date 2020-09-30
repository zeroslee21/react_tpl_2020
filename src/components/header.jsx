import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (

      <header>
        <div className="container">
          <div className="heading-wrapper">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="info">
                  <i className="icon ion-ios-location-outline"></i>
                  <div className="right-area">
                    <h5>3008 Sarah Drive</h5>
                    <h5>Franklin,LA 70538</h5>
                  </div>{/*<!-- right-area -->*/}
                </div>{/*<!-- info -->*/}
              </div>{/*<!-- col-sm-4 -->*/}

              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="info">
                  <i className="icon ion-ios-telephone-outline"></i>
                  <div className="right-area">
                    <h5>337-4139538</h5>
                    <h6>MIN - FRI,8AM - 7PM</h6>
                  </div>{/*<!-- right-area -->*/}
                </div>{/*<!-- info -->*/}
              </div>{/*<!-- col-sm-4 -->*/}

              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="info">
                  <i className="icon ion-ios-chatboxes-outline"></i>
                  <div className="right-area">
                    <h5>contact@colorlib.com</h5>
                    <h6>REPLY IN 24 HOURS</h6>
                  </div>{/*<!-- right-area -->*/}
                </div>{/*<-- info -->*/}
              </div>{/*<!-- col-sm-4 -->*/}
            </div>{/*<!-- row -->*/}
          </div>{/*<!-- heading-wrapper -->*/}

          <a className="downlad-btn" href="https://drive.google.com/file/d/1rVSewzIq6l75BehIOa5TlK5z2KGTZhrw/view?usp=sharing">View Resume</a>
        </div>{/* container */}
      </header>
    );
  }
}
