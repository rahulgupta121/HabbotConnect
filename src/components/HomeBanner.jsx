import React from 'react'
import { Container, Col, Row, InputGroup, Form, Button } from 'react-bootstrap'
import { BsFillBriefcaseFill  } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
export default function HomeBanner() {
  return (
    <section className='home-banner py-5'>
        <Container className='my-5 py-4'>
                <h1 className='banner-head'>Are You a Supplier?</h1>
                <h1 className='banner-head-sub'>Explore Matching Opportunities.</h1>
            <Row className=''>
                <Col md={12} className='justify-content-center d-flex'>
                <Row className=" w-75 ">
                <Col md={12} lg={5} sm={12} className='text-center justify-content-center d-flex my-lg-4'>
                <InputGroup className="mb-3  ">
                    <InputGroup.Text id="basic-addon1"><BsFillBriefcaseFill  style={{color: "#E7760D"}}/></InputGroup.Text>
                    <Form.Control
                    placeholder="Search your required service here"
                    aria-label="Search your required service here"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                </Col>
                <Col md={12} lg={5} sm={12} className='text-center justify-content-center d-flex my-lg-4'>
                <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1"><FaLocationDot style={{color: "#E7760D"}}/></InputGroup.Text>
                    <Form.Control
                    placeholder="Search your desired location here"
                    aria-label="Search your desired location here"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                </Col>
                <Col md={12} lg={2} sm={12} className='my-4 search-btn-dv'>
                    <Button className='search-btn'>Search</Button>
                </Col>
                </Row>
                </Col>
            </Row>
            <p className='text-light text-center'><span className='text-bold'><b>Are you a buyer?</b>  </span> <span className='sub-p-dec'>Click here if you are looking to post a requirements</span></p>
        </Container>
    </section>
  )
}
