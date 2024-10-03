import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
// import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
// const programsData = [
//   {
//     title: 'Secondary Level Tuition and Enrichment',
//     details: [
//       'Physics: Engaging lessons on fundamental concepts and problem-solving.',
//       'Chemistry: In-depth sessions on core chemical principles and experiments.'
//     ],
//     price: 'Contact for details',
//   },
//   {
//     title: 'Upper Primary Science Enrichment',
//     details: [
//       'Hands-on Demonstrations: Interactive science experiments.',
//       'Science Enrichment Programs: Stimulating activities that enhance interest in science...'
//     ],
//     price: 'Contact for details',
//   }
// ];



const Programs = () => {

  const [programsData, setprogramsData] = useState([])

useEffect(() => {
  fetchPrograms()
}, [])

const fetchPrograms = async () => {
  try {
    const response = await fetch('https://peter-backend.onrender.com/api/programs/allprograms')
    const data = await response.json()
    setprogramsData(data)
  } catch (error) {
    console.error('Error fetching programs:', error)
  }
}
  return (
    <Layout>
      <div id="wrapper">
        {/* Page Title Section */}
        <section
          style={{
            padding: '150px 0',
            background: "#3F497F",
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <h1 style={{color:"#F7C04A", fontWeight:"bolder"}}>Programs Offered</h1>
                <p style={{fontWeight:"bold"}}>At WISE PL, we provide a comprehensive range of educational programs designed to support and enhance students' academic journey.</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* Programs Section */}
        <section style={{ padding: '60px 0', backgroundColor: '#f7f7f7' }}>
          <MDBContainer>
            {/* <MDBRow>
              {programsData.map((program, index) => (
                <MDBCol md="4" key={index}>
                  <MDBCard className="m-3">
                    <MDBCardBody>
                      <MDBCardTitle className="text_blue" style={{ fontSize: '19px' }}>{program.title}</MDBCardTitle>
                      <MDBCardText>
                        <ul>
                          {program.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
            </MDBRow> */}

            {/* Why Choose Us Section */}
            {/* Why Choose Us Section */}
{/* <MDBRow className="mt-5">
  <MDBCol md="12">
    <h2 className='text-center'>Why Choose Us?</h2>
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
    <p className="mt-4">
      At WISE PL, our mission is to provide exceptional educational support that empowers students to achieve their full potential. Join us and experience a learning environment dedicated to academic excellence.
    </p>
  </MDBCol>
</MDBRow> */}

          </MDBContainer>
        </section>
        

        {/* <section style={{ padding: '20px 0', backgroundColor: '#f7f7f7' }}>
          <MDBContainer>
            <MDBRow>
                <MDBCol md="4">
                  <MDBCard className="m-3">
                    <MDBCardBody>
                      <MDBCardTitle className="text_blue" style={{ fontSize: '19px' }}>Physics</MDBCardTitle>
                      <MDBCardText>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis dicta qui, blanditiis voluptatum architecto consequuntur? Soluta iusto at porro.</li>
                        </ul>
                      </MDBCardText>
                      <p style={{ color: 'black', fontWeight: 'bolder' }}>Price: $35</p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="m-3">
                    <MDBCardBody>
                      <MDBCardTitle className="text_blue" style={{ fontSize: '19px' }}>Chemistry</MDBCardTitle>
                      <MDBCardText>
                        <ul>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet harum deleniti inventore doloremque. Magnam veniam laboriosam alias impedit blanditiis exercitationem.</li>
                        </ul>
                      </MDBCardText>
                      <p style={{ color: 'black', fontWeight: 'bolder' }}>Price: $58</p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="m-3">
                    <MDBCardBody>
                      <MDBCardTitle className="text_blue" style={{ fontSize: '19px' }}>Mathematics</MDBCardTitle>
                      <MDBCardText>
                        <ul>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, tenetur. Architecto veniam optio itaque, quis dolor illum quam voluptate non.</li>
                        </ul>
                      </MDBCardText>
                      <p style={{ color: 'black', fontWeight: 'bolder' }}>Price: $65</p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="m-3">
                    <MDBCardBody>
                      <MDBCardTitle className="text_blue" style={{ fontSize: '19px' }}>English</MDBCardTitle>
                      <MDBCardText>
                        <ul>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, tenetur. Architecto veniam optio itaque, quis dolor illum quam voluptate non.</li>
                        </ul>
                      </MDBCardText>
                      <p style={{ color: 'black', fontWeight: 'bolder' }}>Price: $65</p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="m-3">
                    <MDBCardBody>
                      <MDBCardTitle className="text_blue" style={{ fontSize: '19px' }}>Other courses...</MDBCardTitle>
                      <MDBCardText>
                        <ul>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, tenetur. Architecto veniam optio itaque, quis dolor illum quam voluptate non.</li>
                        </ul>
                      </MDBCardText>
                      <p style={{ color: 'black', fontWeight: 'bolder' }}>Price: $65</p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
            </MDBRow>

            <MDBRow className="mt-5 text-center">
              <MDBCol md="12">
                <h5>For more details or to enroll in our programs, please contact us at:</h5>
                <p style={{ fontWeight: 'bold', color: '#3F497F' }}>CALL NOW: +65-8945 6089 or +65-6272 7061</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section> */}

<section style={{ padding: '20px 0', backgroundColor: '#f7f7f7' }}>
      <MDBContainer>
        <MDBRow>
          {programsData.map((program, index) => (
            <MDBCol key={index} md="4">
              <MDBCard className="m-3">
                <MDBCardBody>
                  <MDBCardTitle className="text_blue" style={{ fontSize: '19px' }}>
                    {program.title}
                  </MDBCardTitle>
                  <MDBCardText>
                    <ul>
                      <li>{program.description}</li>
                    </ul>
                  </MDBCardText>
                  <p style={{ color: 'black', fontWeight: 'bolder' }}>
                    Price: ${program.price}
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>

        {/* Contact Section */}
        <MDBRow className="mt-5 text-center">
          <MDBCol md="12">
            <h5>For more details or to enroll in our programs, please contact us at:</h5>
            <p style={{ fontWeight: 'bold', color: '#3F497F' }}>CALL NOW: +65-8945 6089 or +65-6272 7061</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
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
};

export default Programs;
