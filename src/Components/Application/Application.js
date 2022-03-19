import { Col, Container, Row, Button } from 'reactstrap'
import './application.css'

const Application = () => {
    return (
        <div
            id='application'
            className='pb-sm-5 pt-5 mt-lg-5 application'
            style={{ backgroundImage: 'url("/images/application.png")' }}
        >
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='position-relative d-flex justify-content-center'>
                            <img
                                src='/images/mirsaid1.png'
                                alt='rasm'
                                className='w-100'
                            />
                            <Button
                                color='primary'
                                className='position-absolute px-lg-5 py-lg-3 px-md-4 py-md-2'
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
                    <Col lg='6' className='instagram mt-3'>
                        <p className='fs-3 p-bold'>mirodilov.mirsaid</p>
                        <div className='d-flex align-items-center mb-4'>
                            <img
                                src='/images/instagram.jpg'
                                alt='rasm'
                                className='border rounded-pill w-25'
                            />
                            {[
                                { num: 64, text: 'публикаций' },
                                { num: 8775, text: 'подписчиков' },
                                { num: 81, text: 'подписок' },
                            ].map((item, index) => (
                                <div key={index} className='mx-xl-3 mx-lg-1 mx-md-3 mx-sm-1 mx-1 w-25'>
                                    <p className='fs-3 p-bold mb-0 text-center'>{item.num}</p>
                                    <p className='text-truncate fs-4 text-capitalize p-semi-bold'>
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className='fs-3 p-bold mb-0'>МИРСАИД | ПРОДЮСЕР №1 в УЗБ🇺🇿</p>
                        <p className='fs-4 mb-0 p-semi-bold'>Личный блог</p>
                        <p className='fs-4 p-semi-bold'>
                            💻От СММ-проектов до полноценного
                            <br />
                            бизнеса в сфере продюсирования
                        </p>
                        <p className='fs-4 p-semi-bold'>
                            💰Сделал с клиентами 200 000$+
                            <br />
                            за год на запусках инфопродуктов
                        </p>
                        <p className='fs-4 p-semi-bold'>🚘2 машины в 18 лет</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Application
