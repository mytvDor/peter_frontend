import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import HomePageVideo from '../assets/preview.mp4';
import about_us from '../assets/about_us.jpeg';
import who_we_are from '../assets/who_we_are.jpg';
import phy from '../assets/physics-lesson-presentation-feature-image.webp';
import chem from '../assets/Chemistry.png';
import math from '../assets/maths.jpg';
import eng from '../assets/eng.jpg';
import temp1 from '../assets/temp1.jpeg';
import temp2 from '../assets/temp2.jpeg';
import { Link } from 'react-router-dom';
import { MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalHeader, MDBModalFooter } from 'mdb-react-ui-kit';

const Home = () => {

  

  return (
    <Layout>
      <section id="home" className="video-section js-height-full">
        {/* Video background */}
        <video autoPlay muted loop className="video-background">
          <source src={HomePageVideo} type="video/mp4" />
        </video>

        {/* Overlay for the video */}
        <div className="overlay"></div>

        <div className="home-text-wrapper relative container">
          <div className="home-message">
            <p><span style={{ color: "#F7C04A" }}>Wise</span> <span style={{ color: "rgb(63, 73, 127)" }}>PL</span> <span style={{ color: "#F7C04A" }}></span></p>
            <small>
              Unlock your full potential with personalized learning designed for your success. At WisePl, we empower minds through innovative education, shaping brighter futures one student at a time. Discover the path to excellence with us!
            </small>
            <div className="btn-wrapper">
              <div className="text-center">
                <Link to="/programs" className="btn wow slideInLeft" style={{ backgroundColor: "#3F497F", border: "none"}}>Our Programs</Link> &nbsp;&nbsp;&nbsp;
                {/* <a href="#" className="btn wow slideInRight" style={{ backgroundColor: "#F7C04A", border: "none" }}>Buy Now</a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="slider-bottom">
          <span>Explore <i className="fa fa-angle-down" /></span>
        </div>
      </section>


      <section className="section db" style={{ backgroundColor: "white" }}>
        <div className="container">
          <h1 style={{ textAlign: "center", marginBottom: "85px", color: "#3F497F" }}>Unrivalled Track Record of Success Since 1994</h1>
          <div className="row">
            {/* First Column */}
            <div className="col-lg-4 col-md-4">
              <div className="stat-count">
                <h4 className="stat-timer" style={{ textAlign: "center", color: "#F7C04A" }}>50 K+</h4>
                <h3 style={{ color: "#000",textAlign: "center", }} >  Books Sold World wide</h3>
              </div>
            </div>
            {/* Second Column */}
            <div className="col-lg-4 col-md-4">
              <div className="stat-count">
                <h4 className="stat-timer" style={{ textAlign: "center", color: "#F7C04A" }}>20 K+</h4>
                <h3 style={{ color: "#000", textAlign: "center", }} >Happy Students</h3>
              </div>
            </div>
            {/* Third Column */}
            {/* <div className="col-lg-4 col-md-4">
              <div className="stat-count">
                <h4 className="stat-timer" style={{ textAlign: "center", color: "#F7C04A" }}>6 yrs</h4>
                <h3 style={{ color: "#000", textAlign: "center", }} > students who stayed (from Secondary 1 to JC2),
                (Primary 1 to 6)</h3>
              </div>
            </div> */}
            {/* Fourth Column */}
            <div className="col-lg-4 col-md-4">
              <div className="stat-count">
                <h4 className="stat-timer" style={{ textAlign: "center", color: "#F7C04A" }}>174 +</h4>
                <h3 style={{ color: "#000", textAlign: "center", }}> Schools</h3>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="card-container">
  <div className="section-title text-center">
    <h3 style={{ color: "#3F497F" }}>Explore Our Programmes</h3>
    <p style={{textAlign:"left", fontWeight:"800",color:"black"}}>
    We offer tuition and enrichment programs in Physics, Chemistry, Mathematics (A&E), and English for secondary school students. 

For upper primary students, we provide hands-on demonstrations and science enrichment programs to foster a deeper understanding and love for learning. 

Join us to enhance your academic performance and explore the exciting world of science and language!
    </p>
    <Link to="/programs" className="btn btn_border border_radius" style={{ marginTop: "25px", backgroundColor: "#3F497F", border: "none" }}>Learn more...</Link>
  </div>

  <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
  <div className="row">
 

  
  </div>
</div>
</div>
<div className="m" style={{display:"flex" , alignItems:'center' , justifyContent:'center' , flexWrap:"wrap" , marginBottom:"70px" }}>
  <div className="col-6 col-md-3 mb-4">
    <img
      src={temp1}
      alt="temp1"
      className=""
      style={{ cursor: "pointer", width: '100%', height: 'auto' }}
    />
  </div>
  <div className="col-6 col-md-3 mb-4">
    <img
      src={temp2}
      alt="temp2"
      className=""
      style={{ cursor: "pointer", width: '100%', height: 'auto' }}
    />
  </div>
</div>

      {/* About Us Section */}
      <section className="about-us" style={{ padding: '40px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <img src={about_us} alt="About Us" style={{ width: '100%', borderRadius: '5px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }} />
            </div>
            <div className="col-md-6">
              <h2 className="slideInLeft wow" style={{ color: "#3F497F" }}>About Us</h2>
              <p style={{textAlign:"left", fontWeight:"400" , color:"black"}}>
                We are committed to providing quality education through innovative programs that cater to the needs of today's learners. Our aim is to empower students with the knowledge and skills they need to succeed.
                {/* We are committed to providing quality education through innovative programs that cater to the needs of today's learners. Our aim is to empower students with the knowledge and skills they need to succeed.
                We are committed to providing */}
              </p>
              <Link to="/aboutus" className="btn wow slideInLeft" style={{ backgroundColor: "#3F497F", border: "none", marginTop:'20px' }}>Learn More</Link> &nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are" style={{ padding: '40px 0', backgroundColor: "#F8F5E4" }}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h2 className="slideInLeft wow" style={{ color: "#3F497F" }}>Why Choose Us</h2>
              <p style={{textAlign:"left", fontWeight:"400", color:"black"}}>
              WISE PL is probably most well-equipped with Science teaching aids, apparatus and gadgets to enhance learning. Its fees are reasonable and very affordable.
              </p>
              <Link to="/aboutus" className="btn wow slideInLeft" style={{ backgroundColor: "#3F497F", border: "none", marginBottom:'25px', marginTop:'20px' }}>Learn More</Link> &nbsp;&nbsp;&nbsp;
            </div>
            <div className="col-md-6">
              <img src={who_we_are} alt="Who We Are" style={{ width: '100%', borderRadius: '5px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section db p120" style={{ backgroundColor: "#3F497F" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tagline-message text-center">
                <h3>Unlock every student's true potential with following courses</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section gb nopadtop" >
        <div className="container" >
          <div className="row" style={{display:"flex" , alignItems:'center' , justifyContent:'center' , flexWrap:"wrap"}}>
            <div className="col-md-3">
              <div className="box m30" style={{ backgroundColor: "#FFDC7F" }}>
                {/* <i className="flaticon-computer-tool-for-education" /> */}
                <h4>Physics</h4>
                <p style={{ color: "#000" }}>The study of matter, energy, and the fundamental forces of nature, and how they interact with each other in the physical universe.</p>
                {/* <a href="#" className="readmore">Read more</a> */}
              </div>
            </div>
            <div className="col-md-3">
              <div className="box m30" style={{ backgroundColor: "#FFDC7F" }}>
                {/* <i className="flaticon-monitor-tablet-and-smartohone" /> */}
                <h4>Chemistry</h4>
                <p style={{ color: "#000" }}>The science of substances, their properties, composition, structure, and the reactions they undergo to form new substances.</p>
                {/* <a href="#" className="readmore">Read more</a> */}
              </div>
            </div>
            <div className="col-md-3">
              <div className="box m30" style={{ backgroundColor: "#FFDC7F" }}>
                {/* <i className="flaticon-download-business-statistics-symbol-of-a-graphic" /> */}
                <h4>Matahmatics(A&E)</h4>
                <p style={{ color: "#000" }}> The abstract study of numbers,  and relationships, using symbols and logical reasoning to solve problems.</p>
                {/* <a href="#" className="readmore">Read more</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <h1 style={{ textAlign: "center" }}>Follow us on Instagram: @yourinstagam_handle</h1> */}




      


      {/* Newsletter Section */}
      {/* <section className="newsletter-section" style={{ backgroundColor: "#F7C04A", padding: "40px 0" }}>
        <div className="container text-center">
          <h3 style={{ color: "#3F497F" }}>Subscribe to our Newsletter</h3>
          <p style={{ color: "#000" }}>Stay updated with the latest news, courses, and special offers.</p>
          <form onSubmit={''} className="newsletter-form" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #3F497F' }}
            />
            <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px', backgroundColor: '#3F497F', color: '#fff', border: 'none', borderRadius: '5px' }}>
              Subscribe
            </button>
          </form>
        </div>
      </section> */}

    </Layout>
  );
};

export default Home;
