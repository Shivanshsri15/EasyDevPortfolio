import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { LuFlame } from "react-icons/lu";
import pf from "../images/pf.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaSquareUpwork } from "react-icons/fa6";
import { LuMouse } from "react-icons/lu";
import "../cssFiles/InfoScreen.css";

const InfoScreen = () => {
  const [mobileMode, setMobileMode] = useState(window.innerWidth <= 800);
  const [text] = useTypewriter({
    words: ["Shivansh Srivastava"],
    loop: {},
  });

  useEffect(() => {
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
    <div className="bg-black text-light font-text2 pb-3">
      <Container fluid>
        <Row>
          {mobileMode ? (
            <>
              <Col xs={12} className="font-text1">
                <div className="text-start py-5 ps-5 d-flex pb-3">
                  <Image src={pf} roundedCircle className="infoImg" />

                  <div className="ms-4 mt-3">
                    <h2>
                      I'm {text}
                      <Cursor />
                    </h2>
                    <p
                      className="font-text pr-2"
                      style={{ fontSize: "0.7rem" }}
                    >
                      I thrive in dynamic environments and am adept at
                      collaborating with diverse teams to drive success.
                      Committed to personal growth and driven by a desire to
                      make a positive impact, I am always eager to take on new
                      challenges and explore innovative solutions.
                    </p>
                  </div>
                </div>
                <div className="text-start ms-4 ps-3 d-flex justify-content-evenly w-50 flex-column">
                  <div>
                    <p className="m-0">+91-8178230966</p>
                    <p>Freelancingemail157@gmail.com</p>
                  </div>
                  <div>
                    <a className="mr-4" href="https://github.com/Shivanshsri15">
                      <FaGithub className="fs-1 textHover mr-4" />
                    </a>
                    <a
                      className="mr-4"
                      href="www.linkedin.com/in/shivansh-srivastava-875145300"
                    >
                      <FaLinkedin className="fs-1 textHover" />
                    </a>
                    <a className="mr-4" href="https://x.com/shivanshsri157">
                      <FaTwitter className="fs-1 textHover" />
                    </a>
                    <a
                      className="mr-4"
                      href="https://www.fiverr.com/shivanshsri157?public_mode=true"
                    >
                      <SiFiverr className="fs-1 textHover" />
                    </a>
                    <a
                      className="mr-4"
                      href="https://www.upwork.com/freelancers/~01fc7fae958ad3b78d"
                    >
                      <FaSquareUpwork className="fs-1 textHover" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs={12} className="ps-5 ">
                <div className="d-flex flex-column justify-content-start text-start font-text1 mt-5 ">
                  <h3 className="font-text1">
                    Skills <LuMouse className="fs-3 pb-1" />
                  </h3>
                  <p>
                    1: Programming Languages: JavaScript (ES6+), HTML5, CSS3
                  </p>
                  <p>2: Front-End Technologies: React.js, Bootstrap</p>
                  <p>3: Back-End Technologies: Node.js, Express.js</p>
                  <p>4: Databases: MongoDB</p>
                  <p>5: Responsive Web Design</p>
                  <p>6: Debugging and Troubleshooting</p>
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col md={6} xs={12} sm={12} className="font-text1">
                <div className="text-start py-5 ps-5 d-flex pb-3">
                  <Image src={pf} roundedCircle className="infoImg" />
                  <div className="ms-4 mt-3">
                    <h2>
                      I'm {text}
                      <Cursor />
                    </h2>
                    <p className="font-text">
                      I thrive in dynamic environments and am adept at
                      collaborating with diverse teams to drive success.
                      Committed to personal growth and driven by a desire to
                      make a positive impact, I am always eager to take on new
                      challenges and explore innovative solutions.
                    </p>
                  </div>
                </div>
                <div className="text-start ms-4 ps-3 d-flex justify-content-evenly w-50 flex-column">
                  <div>
                    <p className="m-0">+91-8178230966</p>
                    <p>Freelancingemail157@gmail.com</p>
                  </div>
                  <div>
                    <a className="mr-4" href="https://github.com/Shivanshsri15">
                      <FaGithub className="fs-1 textHover mr-4" />
                    </a>
                    <a
                      className="mr-4"
                      href="www.linkedin.com/in/shivansh-srivastava-875145300"
                    >
                      <FaLinkedin className="fs-1 textHover" />
                    </a>
                    <a className="mr-4" href="https://x.com/shivanshsri157">
                      <FaTwitter className="fs-1 textHover" />
                    </a>
                    <a
                      className="mr-4"
                      href="https://www.fiverr.com/shivanshsri157?public_mode=true"
                    >
                      <SiFiverr className="fs-1 textHover" />
                    </a>
                    <a
                      className="mr-4"
                      href="https://www.upwork.com/freelancers/~01fc7fae958ad3b78d"
                    >
                      <FaSquareUpwork className="fs-1 textHover" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={6} xs={12} sm={12} className="ps-5">
                <div className="d-flex flex-column justify-content-start text-start font-text1 mt-5 ms-5 ps-5">
                  <h3 className="font-text1">
                    Skills <LuMouse className="fs-3 pb-1" />
                  </h3>
                  <p>
                    1: Programming Languages: JavaScript (ES6+), HTML5, CSS3
                  </p>
                  <p>2: Front-End Technologies: React.js, Bootstrap</p>
                  <p>3: Back-End Technologies: Node.js, Express.js</p>
                  <p>4: Databases: MongoDB</p>
                  <p>5: Responsive Web Design</p>
                  <p>6: Debugging and Troubleshooting</p>
                </div>
              </Col>
            </>
          )}
        </Row>
        <hr />
        <Row className="mt-3">
          <Col>
            <LuFlame className="fs-1" />
            <p className="font-text2 fs-2 mt-3">
              "Elevate Your Productivity, Streamline Your Success"
            </p>
            <p className="fs-5">EasyDev@2024</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoScreen;
