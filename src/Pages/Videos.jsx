import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

const Videos = () => {
  const [urls, setUrls] = useState([])

  // const urls = [
  //   "https://www.youtube.com/watch?v=cRahkaKeGus",
  //   "https://www.youtube.com/watch?v=sSXG8KJDiPI",
  //   "https://www.youtube.com/watch?v=E2YtD_FT2fU",
  //   "https://www.youtube.com/watch?v=E2YtD_FT2fU",
  //   "https://www.youtube.com/watch?v=sSXG8KJDiPI",
  //   "https://www.youtube.com/watch?v=cRahkaKeGus",
  // ];
  const fetchUrls = async () => {
    try {
      const response = await fetch('https://peter-backend.onrender.com/api/youtube/allurls')
      const data = await response.json()
      setUrls(data)
    } catch (error) {
      console.error('Error fetching URLs:', error)
    }
  }

  useEffect(() => {
    fetchUrls()
  }, [])

  return (
    <Layout>
      <section
        style={{
          padding: '180px 0',
          background: "#3F497F",
          color: '#fff',
          textAlign: 'center', // Keep section title and description center aligned
        }}
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <h1 style={{ color: "#F7C04A", fontWeight: "bolder" }}>Videos</h1>
              <p style={{ fontWeight: "bold" }}>
                At WISE PL, we provide a comprehensive range of educational programs designed to support and enhance students' academic journey.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="videos-section" style={{ padding: "25px" }}>
        <MDBContainer>
          <MDBRow className="j">
            {urls.map((url, index) => (
              <MDBCol key={index} md="6" className="mb-4 d-flex justify-content-center align-items-center">
                <div style={{ borderRadius: '15px', overflow: 'hidden', maxWidth: '100%' }}>
                  <Plyr
                    source={{
                      type: 'video',
                      sources: [{ src: url.url.split("v=")[1], provider: 'youtube' }]
                      // sources:url.url
                    }}
                    options={{
                      controls: ['play-large', 'play', 'fullscreen', 'progress'], // Show only play buttons
                      autoplay: false, // Autoplay disabled by default
                      muted: false, // Enable sound
                    }}
                  />
                </div>
                {/* Left-align video title and description */}
                <div style={{ textAlign: 'left', marginTop: '10px' }}> 
                  <h4>Video Title: {url.title}</h4>
                  <p>Video Description: {url.description}</p>
                </div>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
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

export default Videos;
