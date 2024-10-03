import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdb-react-ui-kit';
import wisePl from '../../assets/WisePl.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Styles/Style.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true); // Set fixed state when scrolled
    } else {
      setIsFixed(false); // Remove fixed state when at the top
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []);

  return (
    <>
      <header className={`header ${isFixed ? 'fixed' : ''}`}>
        <div className="topbar clearfix">
          <div className="container">
            <div className="row-fluid">
              <div className="col-md-6 col-sm-6 text-left">
                <p>
                  <strong>
                    <i className="fa fa-phone" style={{color:'#F7C04A'}}/>
                  </strong>{' '}
                  +65 8945 6089 &nbsp;&nbsp;
                  <strong>
                    <i className="fa fa-envelope" style={{color:'#F7C04A'}}/>
                  </strong>{' '}
                  <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                </p>
              </div>
              <div className="col-md-6 col-sm-6 hidden-xs text-right">
                <div
                  className="social"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  {/* <a className="facebook" href="#" title="Facebook">
                    <i className="fab fa-facebook" />
                  </a>
                  <a className="instagram" href="#" title="Instagram">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="tiktok" href="#" title="TikTok">
                    <i className="fab fa-tiktok" />
                  </a> */}
                  <Link
                    className="youtube"
                    to="https://youtube.com/@petersplim?si=BOl0c-jtyp27qIEM"
                    title="YouTube"
                  >
                    <i className="fab fa-youtube" />
                  </Link>
                  <Link className="avatar" to="/admin" title="Profile">
                    <i
                      className="fas fa-user-circle"
                      style={{ marginLeft: '20px' }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <nav className="navbar navbar-default yamm">
            <div
              className="navbar-header"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <div className="logo-normal">
                <Link className="navbar-brand" to="/" style={{ display: 'flex' }}>
               <img
                    src={wisePl}
                    alt="WisePl_logo"
                    style={{  borderRadius: '5px', marginBottom:'450px' }}
                  />
                  {/* width: '98%', */}
                </Link>
              </div>
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
                style={{ marginLeft: 'auto' }}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>

            <div id="navbar" className="navbar-collapse collapse">
              <ul
                className="nav navbar-nav navbar-right"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  flex: 1,
                }}
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li className="dropdown yamm-fw yamm-half">
                  <Link
                    to="/programs"
                    className="dropdown-toggle active"
                    data-toggle="dropdown"
                  >
                    Programs 
                    {/* <b className="fa fa-angle-down" /> */}
                  </Link>
                  {/* <ul className="dropdown-menu">
                    <li>
                      <Link to="#">All Programs</Link>
                    </li>
                    <li>
                      <Link to="#">Maths</Link>
                    </li>
                    <li>
                      <Link to="#">Chemistry</Link>
                    </li>
                    <li>
                      <Link to="#">Physics</Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link to="/videos">Videos</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact</Link>
                </li>
                {/* <li>
                  <Link to="/admin">Admin</Link>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
