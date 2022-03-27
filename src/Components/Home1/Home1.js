import { Col, Container, Row } from 'reactstrap'
import './home1.css'

const Home1 = () => {
    return (
        <div className='bg-white' id='home1'>
            <Container className='py-md-5 py-3'>
                <p className='p-bold fs-2 text-center mx-lg-5 px-md-5 fs-md-20'>Наши услуги</p>
                <Row className='mb-4'>
                    <Col lg='12'>
                        <div
                            className='home1 text-center'
                            style={{ backgroundImage: 'url("/images/photo1.png")' }}
                        >
                            <div className='d-flex justify-content-center py-sm-5 first'>
                                <div className='number first'>
                                    <p className='fs-1 p-bold'>1</p>
                                </div>
                                <div className='ms-3 first text-start'>
                                    <p className='text-uppercase p-bold fs-5'>
                                        Комплексное продвижение вашего
                                        <br />
                                        личного бренда
                                    </p>
                                    <Row>
                                        <Col className='col-6'>
                                            <a
                                                href='https://www.instagram.com/instamedia.uz/'
                                                className='p-semi-bold d-flex align-items-start me-5 color-black'
                                            >
                                                <p>Instagram</p>
                                                <img
                                                    src='/images/instagram1.svg'
                                                    alt='rasm'
                                                    className='w-img-50'
                                                />
                                            </a>
                                            <a
                                                href='/'
                                                className='p-semi-bold d-flex align-items-start me-5 color-black'
                                            >
                                                <p>TikTok</p>
                                                <img
                                                    src='/images/tiktok.svg'
                                                    alt='rasm'
                                                    className='w-img-50 tiktok'
                                                />
                                                {/* <i className='fa-brands fa-tiktok w-img-50' /> */}
                                            </a>
                                        </Col>
                                        <Col className='col-6'>
                                            <a
                                                href='https://t.me/mira550'
                                                className='p-semi-bold d-flex align-items-start me-5 color-black'
                                            >
                                                <p>Telegram</p>
                                                <img
                                                    src='/images/telegram1.svg'
                                                    alt='rasm'
                                                    className='w-img-50'
                                                />
                                            </a>
                                            <a
                                                href='/'
                                                className='p-semi-bold d-flex align-items-start me-5 color-black'
                                            >
                                                <p>Youtube</p>
                                                <img
                                                    src='/images/youtube.svg'
                                                    alt='rasm'
                                                    className='w-img-50'
                                                />
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='12'>
                        <div
                            className='home1 text-center'
                            style={{ backgroundImage: 'url("/images/photo1.png")' }}
                        >
                            <div className='d-flex justify-content-center py-sm-5 py-43'>
                                <div className='number'>
                                    <p className='fs-1 p-bold'>2</p>
                                </div>
                                <div className='text-uppercase fs-5 ms-3 text-start'>
                                    <p className='p-bold'>
                                        Продюсирование экспертов и блогеров
                                        <br />
                                        запуск авторских курсов
                                    </p>
                                    <p className='color-gray p-semi-bold'>в Instagram от 10.000$</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home1
