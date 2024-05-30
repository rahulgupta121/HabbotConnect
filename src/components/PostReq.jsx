import React from 'react'
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap';
import postImg from "../assest/postreq.png"
import markerLogo from "../assest/checked (2) 1.svg"
import youtubeLg from '../assest/Youtube-logo1.svg'
import { IoMdCheckmarkCircle } from "react-icons/io";
const PostReq = () => {
  return (
    <>
    <Container className='post-bg py-5'>
        <Row className='p-4'>
            <Col md={6} sm={12}>
            <div className="post-dv">
                <img src={postImg} alt='' className='img-fluid' />
                <div className="yt-log-dv">
                    <img src={youtubeLg} alt='' className='img-fluid' />
                </div>
            </div>
            </Col>
            <Col md={6} sm={12} className='tab-main-btn'>
            <Tabs defaultActiveKey="Buyer" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="Buyer" title="Buyer">
        <div className='tab-con'>
          <ul className='tab-con-ul'>
            <li><img src={markerLogo} alt="" className='mark-logo'/>Post your requirements.</li>
            <li><img src={markerLogo} alt="" className='mark-logo'/>Sit back for multiple suppliers to contact you.</li>
            <li><img src={markerLogo} alt="" className='mark-logo'/>Choose among the suppliers based on the ratings and reviews.</li>
          </ul>
        </div>
      </Tab>
      <Tab eventKey="Supplier" title="Supplier">
      <div className='tab-con'>
          <ul className='tab-con-ul'>
            <li><img src={markerLogo} alt="" className='mark-logo'/>Post your requirements.</li>
            <li><img src={markerLogo} alt="" className='mark-logo'/>Sit back for multiple suppliers to contact you.</li>
            <li><img src={markerLogo} alt="" className='mark-logo'/>Choose among the suppliers based on the ratings and reviews.</li>
          </ul>
        </div>
      </Tab>
      
    </Tabs>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default PostReq;