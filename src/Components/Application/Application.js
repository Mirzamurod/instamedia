import { Col, Container, Row, Button } from 'reactstrap'

const Application = () => {
    return (
        <div
            id='application'
            className='py-5 application'
            style={{ backgroundImage: 'url("/images/application.png")' }}
        >
            <Container>
                <Row>
                    <Col xl='6'>
                        <div className='position-relative'>
                            <img src='/images/mirsaid1.png' alt='rasm' className='w-100' />
                            <Button
                                color='primary'
                                className='position-absolute px-md-5 py-md-3'
                                size='lg'
                                style={{
                                    backgroundImage: 'url("/images/button.png")',
                                    backgroundPosition: 'center center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    bottom: '17%',
                                    left: '30%',
                                }}
                            >
                                Mirodilov Mirsaid
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Application
