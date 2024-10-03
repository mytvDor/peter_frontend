// import React from 'react';
// import WisePlLogo from "../../assets/WisePl.png";

// const Footer = () => {
//   return (
//     <>
//       <div className="copyrights">
//         <div className="container">
//           <div className="clearfix">
//             <div className="pull-left">
//               {/* <div className="">
//                 <a href="#"><img src={WisePlLogo} alt="Logo" style={{ width: "9%", borderRadius: "5px" }} /></a>
//               </div> */}
//             </div>
//             <div className="pull-right">
//               <div className="footer-links">
//                 {/* Additional links can be added here if needed */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer className="section noover" style={{ backgroundColor: "#000" }}>
//         <div className="container">
//           <div className="row" style={{display:"flex" , alignItems:'center' , justifyContent:'center' , flexWrap:"wrap"}}>
//             {/* <div className="col-lg-4 col-md-4">
//               <div className="widget clearfix">
//                 <h3 className="widget-title" style={{ color: "#fff" }}>Subscribe to Our Newsletter</h3>
//                 <div className="newsletter-widget">
//                   <p style={{ color: "#fff" }}>
//                     You can opt out of our newsletters at any time.<br />
//                     See our <a href="#" style={{ color: "#007bff" }}>privacy policy</a>.
//                   </p>
//                 </div>
//               </div>
//             </div> */}

//             <div className="col-lg-3 col-md-3">
//               <div className="widget clearfix">
//                 <h3 className="widget-title" style={{ color: "#fff" }}>Address</h3>
//                 <p style={{ color: "#fff" }}>Block 121, Bukit Merah Lane 1, #01-12, Singapore 150121</p>
//                 <a href="#" className="readmore">Become a Teacher</a>
//               </div>
//             </div>

//             <div className="col-lg-2 col-md-2">
//               <div className="widget clearfix">
//                 <h3 className="widget-title" style={{ color: "#fff" }}>Programs</h3>
//                 <ul className="list-unstyled">
//                   <li><a href="#" style={{ color: "#fff" }}>English</a></li>
//                   <li><a href="#" style={{ color: "#fff" }}>Mathematics</a></li>
//                   <li><a href="#" style={{ color: "#fff" }}>Physics</a></li>
//                   <li><a href="#" style={{ color: "#fff" }}>Chemistry</a></li>
//                 </ul>
//               </div>
//             </div>

//             <div className="col-lg-3 col-md-3">
//               <div className="widget clearfix">
//                 <h3 className="widget-title" style={{ color: "#fff" }}>Contact Us</h3>
//                 <p style={{ color: "#fff" }}>Phone: +65-8945 6089</p>
//                 <p style={{ color: "#fff" }}>Phone: +65-6272 7061</p>
//                 <div className="social-icons">
//                   <div className="social">
//                     <a className="facebook" href="#" data-tooltip="tooltip" data-placement="bottom" title="Facebook">
//                       <i className="fab fa-facebook" style={{ backgroundColor: "none" }} />
//                     </a>
//                     <a className="instagram" href="#" data-tooltip="tooltip" data-placement="bottom" title="Instagram">
//                       <i className="fab fa-instagram" />
//                     </a>
//                     <a className="tiktok" href="#" data-tooltip="tooltip" data-placement="bottom" title="TikTok">
//                       <i className="fab fa-tiktok" />
//                     </a>
//                     <a className="youtube" href="https://youtube.com/@petersplim?si=BOl0c-jtyp27qIEM" data-tooltip="tooltip" data-placement="bottom" title="YouTube">
//                       <i className="fab fa-youtube" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
import React from 'react'

export default function Footer() {
  const footerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '2rem 1rem',
    fontFamily: 'Arial, sans-serif',
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }

  const sectionStyle = {
    flex: '1 1 250px',
    margin: '1rem',
    color:"white"
  }

  const headingStyle = {
    fontSize: '2.2rem',
    marginBottom: '1rem',
    color:"white"
  }

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    margin: '0.5rem 0',
  }

  const socialIconStyle = {
    fontSize: '1.5rem',
    marginRight: '1rem',
    color: '#fff',
  }

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Address</h3>
          <p>Block 121, Bukit Merah Lane 1, #01-12, Singapore 150121</p>
          {/* <a href="#" style={{...linkStyle, color: '#007bff'}}>Become a Teacher</a> */}
        </div>

        <div style={sectionStyle}>
          <h3 style={headingStyle}>Programs</h3>
          <a href="#" style={linkStyle}>English</a>
          <a href="#" style={linkStyle}>Mathematics</a>
          <a href="#" style={linkStyle}>Physics</a>
          <a href="#" style={linkStyle}>Chemistry</a>
        </div>

        <div style={sectionStyle}>
          <h3 style={headingStyle}>Contact Us</h3>
          <p>Whatsapp: +65-8945 6089</p>
          <p>Phone: +65-6272 7061</p>
          <div style={{marginTop: '1rem'}}>
          <a href="https://wa.me/+65-89456089" style={socialIconStyle} aria-label="whatsapp">
              <i className="fab fa-whatsapp" />
            </a>
            <a href="#" style={socialIconStyle} aria-label="Facebook">
              <i className="fab fa-facebook" />
            </a>
            <a href="#" style={socialIconStyle} aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" style={socialIconStyle} aria-label="TikTok">
              <i className="fab fa-tiktok" />
            </a>
            <a href="https://youtube.com/@petersplim?si=BOl0c-jtyp27qIEM" style={socialIconStyle} aria-label="YouTube">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>

      <div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem'}}>
        <p>&copy; {new Date().getFullYear()} PL Education. All rights reserved.</p>
      </div>
    </footer>
  )
}