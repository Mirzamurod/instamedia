import { Col, Container, Row, Button } from 'reactstrap'
import './header.css'

const Header = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("/images/header.png")',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}
            className='header-padding'
            id='home'
        >
            <Container>
                <Row className='align-items-center'>
                    <Col lg='6' md='12' className='mb-sm-5 mb-5'>
                        <div className='d-flex align-items-center position-relative'>
                            <img src='/images/logo.png' alt='rasm' className='w-lg-100' />
                            <div className='text-uppercase position-absolute header-text'>
                                <h3 className='fw-bold fs-lg-40 mb-0 instamedia'>insta media</h3>
                                <p className='p-semi-bold fs-lg-16 mt-0 fs-3 text-end'>
                                    ближе к мечте
                                </p>
                            </div>
                        </div>
                        <Button
                            color='primary'
                            className='text-uppercase bg-transparent border-0 ms-5 mt-5 p-lg-3 p-medium'
                            style={{
                                backgroundImage: 'url("/images/button2.png")',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                            }}
                        >
                            оставить заявку
                        </Button>
                    </Col>
                    <Col lg='6' md='12'>
                        <div
                            className='circle text-center'
                            style={{ backgroundImage: 'url("/images/circle.png")' }}
                        >
                            <img src='/images/mirsaid.png' alt='rasm' className='w-image' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
