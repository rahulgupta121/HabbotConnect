import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo1 from "../assest/Group 33.svg"
import logo2 from "../assest/Group.svg"
import logo3 from "../assest/search.svg"
import logo4 from "../assest/edit (1) 1.svg"
import logo5 from "../assest/Group (1).svg"
import logo6 from "../assest/Group (3).svg"
const HowItWork = () => {
  return (
    <section className='my-5'>
        <Container>
            <h2 className='text-center py-2'><strong>How it works?</strong></h2>
            <p className='text-center py-1 pb-3'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with <br />potential buyers, and build successful business relationships, sharing valuable feedback.</p>
            <Row>
                <Col lg={4} md={4} sm={12} className='bx1 p-0'>
                <div className="px-5 py-3 hw-it-wk-inner">
                    <img src={logo1} alt='' className='img-fluid' />
                    <h6>Select Your Role and <b />Sign Up</h6>
                </div>
                </Col>
                <Col lg={4} md={4} sm={12} className='bx2 p-0'>
                    <div className="px-5 py-3 hw-it-wk-inner">
                    <img src={logo2} alt='' className='img-fluid' />
                    <h6>Buyers Post Your <b />Requirements</h6>
                </div>
                </Col>
                <Col lg={4} md={4} sm={12} className='bx1 p-0'>
                    <div className="px-5 py-3 hw-it-wk-inner">
                    <img src={logo3} alt='' className='img-fluid' />
                    <h6> Review, Select, and <br />Contact the Best Suppliers</h6>
                </div>
                </Col>
                <Col lg={4} md={4} sm={12} className='bx2 p-0'>
                    <div className="px-5 py-3 hw-it-wk-inner">
                    <img src={logo4} alt='' className='img-fluid' />
                    <h6> Suppliers Complete your <br />profile and get notified for <br />opportunities</h6>
                </div>
                </Col>
                <Col lg={4} md={4} sm={12} className='bx1 p-0'>
                    <div className="px-5 py-3 hw-it-wk-inner">
                    <img src={logo5} alt='' className='img-fluid' />
                    <h6>Contact to Buyers and Share <br />your Quote for the service</h6>
                </div>
                </Col>
                <Col lg={4} md={4} sm={12} className='bx2 p-0'>
                    <div className="px-5 py-3 hw-it-wk-inner">
                    <img src={logo6} alt='' className='img-fluid' />
                    <h6>Both the Parties can Connect <br />and Make Business Leave a <br />Feedback</h6>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HowItWork