import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { IoIosArrowRoundForward   } from "react-icons/io";
import arrowlogo from "../assest/arrow-right.svg"
const ReadyToLearn = () => {
  return (
    <>
      <Container className="my-5 py-3">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h2>
              <b>Ready to dive into HABOT?</b>
            </h2>
            <p>
              Signing up with HABOT opens the door to a world of new
              opportunities and potential for business growth. Gain access to a
              vibrant community of like-minded individuals, unlock valuable
              resources, and take the first step towards realizing your
              entrepreneurial dreams.
            </p>
            <Button className="ready-lrn-btn py-2"><span className="p-3"><b>Sign up Today !</b></span><span className="p-3"><img src={arrowlogo} className="img-fluid"/></span></Button>
          </Col>
          <Col lg={6} md={6} sm={12}>
          <Row>
            <Col md={6} sm={6} xs={12} className="city-btn-dv">
                <Button className="city-btn py-3 my-3">Abu Dhabi</Button>
            </Col>
            <Col md={6} sm={6} xs={12} className="city-btn-dv">
                <Button className="city-btn py-3 my-3">
                Dubai
                </Button>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={6} xs={12} className="city-btn-dv"><Button className="city-btn py-3 my-3">Sharjah & Ajman</Button></Col>
            <Col md={6} sm={6} xs={12} className="city-btn-dv"><Button className="city-btn py-3 my-3">Fujairah</Button></Col>
          </Row>
          <Row>
            <Col md={6} sm={6} xs={12} className="city-btn-dv"><Button className="city-btn py-3 my-3">Ras Al Khaimah</Button></Col>
            <Col md={6} sm={6} xs={12} className="city-btn-dv"><Button className="city-btn py-3 my-3">Umm Al Quwain</Button></Col>
          </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReadyToLearn;
