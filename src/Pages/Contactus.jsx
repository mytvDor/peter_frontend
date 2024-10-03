import React from 'react';
import Layout from '../Components/Layout/Layout';

const Contactus = () => {
  return (
    <Layout>
      <div id="wrapper">
        {/* Page Title Section */}
        <section className="section db p120" style={{ padding: '180px 0', backgroundColor:"#3F497F" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="tagline-message page-title text-center">
                  <h3>Get In Touch</h3>
                  <ul className="breadcrumb">
                    <li><a href="#" style={{ color: "#F7C04A" }}>WisePl</a></li>
                    <li className="active">Get in touch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section gb nopadtop" style={{ padding: '60px 0' }}>
          <div className="container">
            <div className="boxed boxedp4">
              <div className="row contactv2 text-center">
                {/* Contact Info */}
                <div className="col-md-4">
                  <div className="small-box">
                    <i className="flaticon-email wow fadeIn" style={{ color: "#F7C04A" }}/>
                    <h4>Contact us today</h4>
                    <small> +65-8945 6089</small>
                    <small>+65-6272 7061</small>
                    {/* <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p> */}
                  </div>
                </div>

                {/* Office Location */}
                <div className="col-md-4">
                  <div className="small-box">
                    <i className="flaticon-map-with-position-marker wow fadeIn" style={{ color: "#F7C04A" }}/>
                    <h4>Visit Our Office</h4>
                    <small>Block 121, Bukit Merah Lane 1 </small>
                    <small> #01-12, Singapore 150121</small>
                    {/* <p><a href="#">View on Google Map</a></p> */}
                  </div>
                </div>

                {/* Social Links */}
                <div className="col-md-4">
                  <div className="small-box">
                    <i className="flaticon-share wow fadeIn" style={{ color: "#F7C04A" }}/>
                    <h4>Follow Us</h4>
                    <small>Twitter: @yourhandle</small>
                    <small>Facebook: facebook.com/yourhandle</small>
                    {/* <p><a href="#">Email Newsletter</a></p> */}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              {/* <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <div className="section-title text-center">
                    <h3>Contact Form</h3>
                    <p>Maecenas sit amet tristique turpis. Quisque porttitor eros quis leo pulvinar.</p>
                  </div>
                  <form className="big-contact-form" role="form">
                    <input type="text" className="form-control" placeholder="Enter your name.." required />
                    <input type="email" className="form-control" placeholder="Enter email.." required />
                    <input type="text" className="form-control" placeholder="Your phone.." />
                    <input type="text" className="form-control" placeholder="Subject.." />
                    <textarea className="form-control" placeholder="Message goes here.." />
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </section>

       
     
      </div>
    </Layout>
  );
};

export default Contactus;
