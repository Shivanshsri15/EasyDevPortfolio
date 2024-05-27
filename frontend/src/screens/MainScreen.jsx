import React, { useEffect, useState } from "react";
import { Col, Container, Navbar, Row, Button, Image } from "react-bootstrap";
import homePageImage from "../images/homePageImage.jpg";
import eVid from "../images/ecommerce.mp4";
import tVid from "../images/twitterClone.mp4";
import wVid from "../images/wellCure.mp4";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import InfoScreen from "./InfoScreen";
import Aos from "aos";
import "aos/dist/aos.css";
import "../cssFiles/MainScreen.css";
import { FaKeyboard } from "react-icons/fa6";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import Meta from "../components/Meta";

// import "../components/3dSphere";

const MainScreen = () => {
  const [mobileMode, setMobileMode] = useState(window.innerWidth <= 800);

  useEffect(() => {
    Aos.init();

    const handleResize = () => {
      setMobileMode(window.innerWidth <= 1100);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Meta title={"EasyDev"} />
      <div className="bgc ">
        <Container fluid className="">
          <Container>
            <Navbar expand="lg" className="text-center">
              <Navbar.Brand
                href="#"
                className=" fs-3"
                style={{ fontWeight: "500" }}
              >
                <FaKeyboard className="fs-2 pb-1 mx-2" />
                Easy Dev
              </Navbar.Brand>
            </Navbar>
          </Container>
          <Row>
            <Container className="m-0">
              <Col md={12} className="d-flex justify-content-center mx-0">
                <div className="mt-5">
                  <div className="d-flex justify-content-center">
                    {mobileMode ? (
                      <p
                        className=" font-text w-75"
                        style={{ fontSize: "2rem" }}
                      >
                        Empowering Your Business for Success: Innovate, Thrive,
                        Succeed
                      </p>
                    ) : (
                      <p
                        className=" font-text w-75"
                        style={{ fontSize: "3rem" }}
                      >
                        Empowering Your Business for Success: Innovate, Thrive,
                        Succeed
                      </p>
                    )}
                  </div>
                  {mobileMode ? (
                    <p className="font-text1 mt-2 headText px-4">
                      Connecting Vision to Reality: Where Ideas Flourish and
                      Success Thrives
                    </p>
                  ) : (
                    <p className="font-text1 mt-2 headText">
                      Connecting Vision to Reality: Where Ideas Flourish and
                      Success Thrives
                    </p>
                  )}

                  <Button
                    variant="dark"
                    className="text-white mt-2"
                    style={{ fontWeight: "500" }}
                    href="#info"
                  >
                    About Me
                  </Button>
                </div>
              </Col>
            </Container>
          </Row>
          <Row className="d-flex justify-content-center">
            <Container className="mb-5">
              <Image
                src={homePageImage}
                className=" px-5 mt-5 mb-5 "
                style={{
                  height: "30rem",
                  width: "80%",
                  borderRadius: "10rem",
                }}
              />
              {/* <canvas className="webgl"></canvas> */}
            </Container>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center mx-0">
            <div className="mt-4">
              <div className="d-flex justify-content-center">
                <p className=" font-text w-75" style={{ fontSize: "2rem" }}>
                  <strong>Empower your journey with Us</strong>
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <p
                  className="font-text1  mt-2 w-75"
                  style={{ fontSize: "1.3rem" }}
                >
                  Create your digital footprint with ourcutting-edge website. -
                  Encouraging users to establish their online presence through
                  the services offered on the website.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <BsFillBookmarkStarFill className="fs-3" />
        </Row>
        <Row className="mb-5 my-3">
          <Col
            md={6}
            xs={12}
            className="d-flex justify-content-start mt-3 px-4"
          >
            <Container>
              <div
                className="d-flex flex-column justify-content-start text-start font-text resText"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h4 className="fs-3">Ecommerce platform</h4>
                <p className="text-start fs-4">Description:</p>
                <p className="font-text1 ">
                  A MERN stack eCommerce website project is an ambitious
                  endeavor that leverages cutting-edge technology to deliver a
                  seamless online shopping experience. Built using MongoDB for
                  database management, Express.js for server-side scripting,
                  React.js for dynamic user interfaces, and Node.js for
                  server-side runtime environment, this platform offers
                  robustness, scalability, and flexibility.
                </p>
                <p className="">Features:</p>
                <div className="font-text">
                  <p>following features:-</p>
                  <p>1. Token authentication in cookie format.</p>
                  <p>
                    2. Cart functionality, Search, Reviews, Product Carousel.
                  </p>
                  <p>3. Payment gateway using Paypal.</p>
                  <p>4. Responsive design.</p>
                  <p>5. pagination.</p>
                  <p>6. Seperate user and admin routes .</p>
                  <p>7. Login and register functionality.</p>
                </div>
              </div>
            </Container>
          </Col>
          <Col
            md={6}
            xs={12}
            sm={12}
            className="mt-3 d-flex flex-column justify-content-start text-start"
          >
            <Container fluid className="px-4">
              <Container data-aos="flip-up" data-aos-duration="1000">
                <video
                  controls
                  className="shadow-lg mt-5 responsiveVid responsiveVid1"
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  <source src={eVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="mt-5">
                  <a
                    href="https://github.com/Shivanshsri15/EcommercePlatformV1"
                    className="listC"
                  >
                    <FaGithub className="fs-1 textHover"></FaGithub>
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7196201821600706560/"
                    className="listC"
                  >
                    <FaLinkedin className="fs-1 textHover"></FaLinkedin>
                  </a>
                </div>
              </Container>
            </Container>
          </Col>
        </Row>
        <hr />
        {/* /////////////////////////////////////// */}
        <Row className="mb-5">
          <Col
            md={6}
            xs={12}
            sm={12}
            className="mt-3  d-flex flex-column justify-content-start text-start"
          >
            <Container fluid className="px-4">
              <Container data-aos="flip-down" data-aos-duration="1000">
                <video controls className="shadow-lg mt-5 responsiveVid">
                  <source src={tVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="mt-5">
                  <a
                    href="https://github.com/Shivanshsri15/TwitterCloneV1"
                    className="listC"
                  >
                    <FaGithub className="fs-1 textHover"></FaGithub>
                  </a>
                </div>
                <div className="mt-2 ">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7196197864463626240/"
                    className="listC"
                  >
                    <FaLinkedin className="fs-1 textHover"></FaLinkedin>
                  </a>
                </div>
              </Container>
            </Container>
          </Col>
          <Col
            md={6}
            xs={12}
            className="d-flex justify-content-start mt-3 ps-5 "
          >
            <Container fluid>
              <div
                className="d-flex flex-column justify-content-start text-start font-text px-4"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h4 className="fs-3">Twitter Clone (Social media platform)</h4>
                <p className="text-start ">Description:</p>
                <p className="font-text1">
                  My MERN stack Twitter clone project aims to replicate the core
                  functionalities of the popular social media platform within a
                  self-contained web application. Leveraging MongoDB for data
                  storage, Express.js for backend routing, React for dynamic
                  user interfaces, and Node.js for server-side JavaScript
                  execution, our platform offers users the ability to create
                  accounts, compose tweets, follow other users, like and retweet
                  posts, and engage in real-time conversations through comments
                  and replies. With a sleek and intuitive user interface, and
                  seamless navigation, our Twitter clone provides an immersive
                  and familiar experience for users to connect, share thoughts,
                  and stay updated on the latest trends and discussions in a
                  microblogging format. Whether users are browsing their
                  timeline, exploring trending topics, or interacting with their
                  followers, our MERN stack Twitter clone delivers a robust and
                  engaging social media experience that mirrors the
                  functionalities of the original platform.
                </p>
              </div>
            </Container>
          </Col>
        </Row>
        <hr />
        <Row className="mb-5">
          <Col
            md={6}
            xs={12}
            className="d-flex justify-content-start mt-3 ps-4 "
          >
            <Container fluid>
              <div
                className="d-flex flex-column justify-content-start text-start font-text px-4"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h4 className="fs-1">WellCure </h4>
                <p className="text-start fs-4">Description:</p>
                <p className="font-text1 ">
                  Let me introduce you to Wellcure a platform for both doctors
                  and patients, with the help of this platform any individual
                  can get medical assistance in just few mins from certified
                  medical experts. It connects different experienced doctors
                  with the people who are seeking medical assistance. The design
                  and idea is very simple so everyone can access it without any
                  prior knowledge of web, The idea is very simple but the
                  innovation would be phenomenal. The patient just have to login
                  on the platform and can submit his/her medical conditions and
                  the WellCure would do the rest.
                </p>
                <p className="fs-5">Technology Used:</p>
                <div className="font-text">
                  <p>
                    The complete platform is build on MERN stack. In the
                    frontend we have used several libraries and dependencies of
                    react and node. Such as- Redux/toolkit, React-Bootstrap,
                    React-Router-Dom, jsonWebToken, Aos and many more. The
                    complete backend is build on nodeJs in addition with MongoDB
                    as no sql dataBase.
                  </p>
                </div>
                <p className="fs-5">Key Features:</p>
                <div className="font-text">
                  <p>● User authentication and token in cookie format.</p>
                  <p>
                    ● Various middlewares protecting backend routes and error.
                  </p>
                  <p>
                    {" "}
                    ● Using react library in which the user recieves an email
                    from the WellCure team the second he/she submits the
                    required data regarding the situation.
                  </p>
                </div>
              </div>
            </Container>
          </Col>
          <Col
            md={6}
            xs={12}
            sm={12}
            className="mt-5  d-flex flex-column justify-content-start text-start ps-3"
          >
            <Container fluid className="px-4">
              <Container data-aos="flip-up" data-aos-duration="1000">
                <video controls className="shadow-lg mt-5 responsiveVid">
                  <source src={wVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="mt-5">
                  <a
                    href="https://github.com/Shivanshsri15/WellCureV1"
                    className="listC"
                  >
                    <FaGithub className="fs-1 textHover"></FaGithub>
                  </a>
                </div>
                <div className="mt-2 ">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7196203302789750784/"
                    className="listC"
                  >
                    <FaLinkedin className="fs-1 textHover"></FaLinkedin>
                  </a>
                </div>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
      <div id="info">
        <InfoScreen />
      </div>
    </>
  );
};

export default MainScreen;
