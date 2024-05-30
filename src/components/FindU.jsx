import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const FindU = () => {
  return (
    <div className='find-u-dv my-5 py-4'>
        <Container className='py-4'>
            <Row className='py-4'>
                <Col className='text-center'>
                <h2><b>Let Suppliers <span className='find-sub'><b>Find You</b></span></b></h2>
                </Col>
                <Col className='text-center'>
                <Button className="gt-varified-btn py-2 px-4">Get Verified</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FindU