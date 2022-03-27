import { Col, Container, Row } from 'reactstrap'
import './home2.css'

const Home2 = () => {
    return (
        <Container id='home2' className='py-5 color-home2 text-uppercase'>
            <p className='text-uppercase fs-1 text-center p-bold pb-sm-0 pb-3'>
                Сотрудничаем с экспертами в разных сферах:
            </p>
            <Row>
                {[
                    { text1: 'Психологи' },
                    { text1: 'Косметологи' },
                    { text1: 'Юристы' },
                    { text1: 'диджитал', text2: 'специалисты' },
                    { text1: 'фотографы' },
                    { text1: 'лайфстайл', text2: 'блогеры' },
                    { text1: 'Трейдеры' },
                    { text1: 'Предприниматели' },
                ].map((text, index) => (
                    <Col lg='6' md='12' key={index} className='h-100 my-sm-3 my-1'>
                        <div
                            className={`p-semi-bold fs-5 home2 text-center position-relative ${
                                Object.keys(text).length < 2 ? 'pt-30' : 'pt-45'
                            }`}
                            style={{ backgroundImage: 'url("/images/photo.png")' }}
                        >
                            <p className={Object.keys(text).length < 2 ? 'mt-12' : 'double'}>
                                {text?.text1}
                                <br />
                                {text?.text2}
                            </p>
                        </div>
                    </Col>
                ))}
                <Col className='offset-lg-3' lg='6' md='12'>
                    <div
                        className='p-semi-bold fs-5 home2 text-center pt-30'
                        style={{ backgroundImage: 'url("/images/photo.png")' }}
                    >
                        <p className='mt-12'>и другие</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home2
