import React from 'react';
import Layout from '../Components/Layout/Layout';
import AboutUsMain from '../assets/about_us_main.png';
import AboutUsContentImage from '../assets/about_us_main.png';
import peter from '../assets/peeter.jpeg';
import wisepl34 from '../assets/wisepl34.jpeg';
import emot from '../assets/Mommy and Me Classes.png';
import emot1 from '../assets/Training.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';


import ex1 from '../assets/exp1 (1).jpeg';
import ex2 from '../assets/exp2 (2).jpeg';
import ex3 from '../assets/exp3 (3).jpeg';
import ex4 from '../assets/exp4 (4).jpeg';
import ex5 from '../assets/exp5 (5).jpeg';
import ex6 from '../assets/exp6 (6).jpeg';
import ex7 from '../assets/exp7 (7).jpeg';

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // For desktop, showing 2 images
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For mobile, showing 1 image
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imageStyle = {
    padding: "10px", // Gap between images
    width: "100%", // Ensures image fills the container
    height: "300px", // Sets a fixed height for all images
    objectFit: "cover", // Maintains aspect ratio and covers the container
    borderRadius: "18px", // Optional: to round the image corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: for a slight shadow effect
    marginBottom:"20px"

  };
  
  return (
    <Layout>
      <div id="wrapper">

        {/* Page Title Section */}
        <section
          className="section db p120"
          style={{
            padding: '180px 0',
            // backgroundImage: `url(${AboutUsMain})`,
            backgroundColor: '#3F497F',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="tagline-message page-title text-center">
                  <h3 style={{ color: "#fff" }}>About Us</h3>
                  <ul className="breadcrumb">
                    <li>
                      <a href="#" style={{ color: "#F7C04A" }}>WisePL</a>
                    </li>
                    <li className="active" style={{ color: "#fff" }}>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Main Content Section */}
        <section className="section gb nopadtop" style={{ padding: '60px 0' }}>
          <div className="container">
            <div className="row">

              {/* Introduction Section */}
              <div className="col-md-6" style={{ marginTop: "60px" }}>
                <h2 className="section-title" style={{ color: "#3F497F", marginBottom: '20px' }}>Welcome to WISE PL</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                WISE PL is proudly operated by PL Education Centre, established in 1994 by Mr. Peter SP Lim. We offer a range of educational programs designed to enhance learning and equip students with the tools they need to succeed.Our center is located at Block 121, Bukit Merah Lane 1, #01-12, Singapore 150121, conveniently situated opposite Queensway Shopping Centre and IKEA (Alexandra).
                </p>
                {/* <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  We offer a range of educational programs designed to enhance learning and equip students with the tools
                  they need to succeed.
                </p> */}
              </div>

              {/* Image Section */}
              <div className="col-md-6" >
                <img src={wisepl34} alt="About Us Content" className="img-fluid rounded" style={{ marginTop: "60px", boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: "100%" }} />
              </div>
            </div>
          </div>
        </section>


        {/* <section className="section db p120 gradietns" style={{ padding: '', backgroundColor: "#3F497F", marginTop: "100px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="tagline-message page-title text-center">
                  <h1 style={{ color: "#fff" }}>Our Teaching Philosophy</h1>
                </div>
              </div>
            </div>
          </div>
        </section> */}


        {/* <section className="section gb nopadtop" style={{ padding: '60px 0' }}>
  <div className="container">
    <div className="boxed boxedp4">
      <div className="row">
        <div className="col-md-9 col-md-offset-2">
          <div className="section-title d-flex align-items-center">
            <div className="col-md-4">
              <img src={emot1} alt="" style={{ width: '100%', marginTop: '50px', marginBottom: '-80px' }} />
            </div>

            <div className="col-md-8">
              <h3>Our Teaching Philosophy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis 
                repudiandae maxime perferendis sequi quaerat consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Accusamus numquam reprehenderit ullam eveniet. Vero, facere. adipisicing elit. Quam iste incidunt, vero 
                sint dicta consectetur cupiditate tempora beatae sequi fugit illo sed, aspernatur fugiat asperiores velit odio 
                quae officiis veritatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}


        <section className="section gb nopadtop" style={{ padding: '60px 0' }}>
          <div className="container">
            <div className="row">
              {/* Introduction Section */}
              <div className="col-md-6" style={{ marginTop: 'px' }}>
                <img
                  src={peter}
                  alt="About Us Content"
                  className="img-fluid rounded"
                  style={{ marginTop: '90px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '100%', height: '450px' }}
                />
              </div>

              {/* Image Section */}
              <div className="col-md-6">
                <h2 className="section-title" style={{ color: '#3F497F', marginBottom: '20px', marginTop: '90px' }}>
                  About Mr. Peter SP Lim
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Mr. Peter SP Lim is a highly respected educator with over four decades of experience in teaching Physics and Chemistry. His career has positively impacted thousands of students, many of whom have gone on to become leading professionals both in Singapore and internationally.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  <strong>Guiding Excellence:</strong> Mr. Lim has successfully mentored students who have gained entry into top schools such as NUS High School, ACS(I), Raffles Girls' School, and Raffles Junior College.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  <strong>Nurturing Prodigies:</strong> Among his many accomplishments, Mr. Lim tutored a 9-year-old prodigy who achieved three A’s in Physics, Chemistry, and Mathematics at the O-levels, all within the 90+ percentile. This exceptional student also graduated in Music by the age of 14.
                </p>
              </div>

              {/* Additional Content Below Image */}
              <div className="col-md-12" style={{ marginTop: '30px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  <strong>Expertise and Contributions:</strong> As a former O-level Physics examiner, Mr. Lim has contributed to education through his authorship of Physics and Chemistry guidebooks, which have been widely used since 1988.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  <strong>Innovative Educator:</strong> Known for his creativity, Mr. Lim developed unique teaching aids and gadgets, many of which are used in Singaporean schools. His innovative methods have also been shared through workshops and training sessions for science teachers and subject teaching assistants (STAs).
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  <strong>Academic Background:</strong> Mr. Lim holds a double major in Physics and Chemistry, along with a Postgraduate Diploma in Education (PGDE), solidifying his strong academic foundation and dedication to education.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Mr. Peter SP Lim continues to inspire the next generation of students, fostering a deep understanding of science and a passion for learning.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Offerings Section */}
        <section className="section gb" style={{ paddingBottom: 'px', backgroundColor: '#f9f9f9' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="section-title text-center" style={{color:"rgb(63, 73, 127)"}}>Why Choose Us ?</h1>
              </div>
              <MDBCol md="12">
    {/* <h2 className='text-center'>Why Choose Us?</h2> */}
    <MDBRow className="mt-4" style={{ justifyContent: 'center' }}>
      <MDBCol md="3" className="text-center">
        <i className="fas fa-tools fa-3x" style={{ borderRadius: '50%', padding: '20px', background: '#3F497F', color: '#fff' }} title="Well-Equipped Facilities"></i>
        <p style={{ fontWeight: 'bold' }}>Well-Equipped Facilities</p>
      </MDBCol>
      <MDBCol md="3" className="text-center">
        <i className="fas fa-dollar-sign fa-3x" style={{ borderRadius: '50%', padding: '20px', background: '#3F497F', color: '#fff' }} title="Affordable Fees"></i>
        <p style={{ fontWeight: 'bold' }}>Affordable Fees</p>
      </MDBCol>
      <MDBCol md="3" className="text-center">
        <i className="fas fa-book-open fa-3x" style={{ borderRadius: '50%', padding: '20px', background: '#3F497F', color: '#fff' }} title="Quality Education"></i>
        <p style={{ fontWeight: 'bold' }}>Quality Education</p>
      </MDBCol>
      <MDBCol md="3" className="text-center">
        <i className="fas fa-comments fa-3x" style={{ borderRadius: '50%', padding: '20px', background: '#3F497F', color: '#fff' }} title="Supportive Community"></i>
        <p style={{ fontWeight: 'bold' }}>Supportive Community</p>
      </MDBCol>
    </MDBRow>
    {/* <p className="mt-4">
      At WISE PL, our mission is to provide exceptional educational support that empowers students to achieve their full potential. Join us and experience a learning environment dedicated to academic excellence.
    </p> */}
  </MDBCol>
              <div className="col-md-6" style={{ marginTop: "60px" }}>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  At WISE PL, we offer a wide range of tuition and enrichment programs, including:
                </p>
                <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin:"20px" }}>
                <li>Primary Level Tuition: Science, Mathematics and English </li>              
   <li>Secondary Level Tuition: Physics, Chemistry, Mathematics (A&E), and English.</li>
                  <li>Upper Primary Science Enrichment: Hands-on demonstrations and interactive programs.</li>
               
                </ul>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Our programs are supported by state-of-the-art teaching aids and equipment to provide students
                  with the best learning experience.
                </p>
              </div>

              {/* Image for Offerings Section */}
              <div className="col-md-6">
                <img src={AboutUsContentImage} alt="Our Offerings" className="img-fluid rounded" style={{ marginTop: "60px", boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: "100%" }} />
              </div>
            </div>
          </div>
        </section>
        <MDBRow className="mt-5">
  {/* <MDBCol md="12">
    <MDBRow className="mt-4" style={{ justifyContent: 'center' }}>
      <MDBCol md="3" className="text-center">
        <i className="fas fa-tools fa-3x" style={{ borderRadius: '50%', padding: '20px', background: '#3F497F', color: '#fff' }} title="Well-Equipped Facilities"></i>
        <p style={{ fontWeight: 'bold' }}>Well-Equipped Facilities</p>
      </MDBCol>
      <MDBCol md="3" className="text-center">
        <i className="fas fa-dollar-sign fa-3x" style={{ borderRadius: '50%', padding: '20px', background: '#3F497F', color: '#fff' }} title="Affordable Fees"></i>
        <p style={{ fontWeight: 'bold' }}>Affordable Fees</p>
      </MDBCol>
      <MDBCol md="3" className="text-center">
        <i className="fas fa-book-open fa-3x" style={{ borderRadius: '50%', padding: '20px', background: '#3F497F', color: '#fff' }} title="Quality Education"></i>
        <p style={{ fontWeight: 'bold' }}>Quality Education</p>
      </MDBCol>
      <MDBCol md="3" className="text-center">
        <i className="fas fa-comments fa-3x" style={{ borderRadius: '50%', padding: '20px', background: '#3F497F', color: '#fff' }} title="Supportive Community"></i>
        <p style={{ fontWeight: 'bold' }}>Supportive Community</p>
      </MDBCol>
    </MDBRow>
    
  </MDBCol> */}
</MDBRow>

      </div>

      <div className="container">
      <h1 className="text-center" style={{color:"rgb(63, 73, 127)"}}>Experiments</h1>
      <Slider {...settings}>
        <div className="carousel-item">
          <img src={ex2} alt="Experiment 1" style={imageStyle} />
        </div>
        <div className="carousel-item">
          <img src={ex1} alt="Experiment 4" style={imageStyle} />
        </div>
        <div className="carousel-item">
          <img src={ex4} alt="Experiment 3" style={imageStyle} />
        </div>
        {/* <div className="carousel-item">
          <img src={ex3} alt="Experiment 3" style={imageStyle} />
        </div>
        <div className="carousel-item">
          <img src={ex4} alt="Experiment 4" style={imageStyle} />
        </div>
        <div className="carousel-item">
          <img src={ex5} alt="Experiment 5" style={imageStyle} />
        </div>
        <div className="carousel-item">
          <img src={ex6} alt="Experiment 6" style={imageStyle} />
        </div>
        <div className="carousel-item">
          <img src={ex7} alt="Experiment 7" style={imageStyle} />
        </div> */}
      </Slider>
    </div>


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
}
export default AboutUs;
