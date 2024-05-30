import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footerLogo from "../assest/footer-log0.svg"
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='mt-5 py-4 footer-section'>
        <Container>
            <Row className='ftr-row py-3 my-2'>
                <Col className='ftr-col' md={8} sm={8}>
                    <Row >
                        <Col className='text-center ftr-brand-dv' md={6}>
                        <ul>
                        <li>
                        <img src={footerLogo} className='img-fluid' />
                        </li>
                        <li>
                        <p className='ftr-con'>© R Singhania</p>

                        </li>
                    </ul>
                        </Col>
                        <Col md={2} sm={6} xs={6}>
                        <ul>
                            <li className='text-light h6'><b>Company</b></li>
                            <li>About</li>
                            <li>FAQ</li>

                        </ul>
                        </Col>
                        <Col md={2} sm={6} xs={6}>
                        <ul>
                            <li className='text-light h6'><strong>Terms</strong></li>
                            <li>Data privacy</li>
                            <li>Terms</li>
                            <li>Accessibility</li>
                        </ul>
                        </Col>
                        <Col md={2} sm={6} xs={6}>
                        <ul>
                            <li className='text-light h6'><b>Related</b></li>
                            <li>Find Buyer</li>
                            <li>Feedback</li>

                        </ul>
                        </Col>
                    </Row>
                </Col>
                <Col className='d-flex justify-content-end ftr-brand-dv-media' md={4} sm={4}>
                <ul className='media-link-ul'>
                    <li className='media-link'><FaLinkedinIn /></li>
                    <li className='media-link'><FaTwitter /></li>
                    <li className='media-link'><FaFacebookF /></li>
                    <li className='media-link'><FaInstagram /></li>
                </ul>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer