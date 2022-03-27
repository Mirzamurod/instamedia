import { Col, Container, Row, Button } from 'reactstrap'
import './author.css'

const Author = () => {
    return (
        <div
            id='author'
            className='pb-sm-5 pt-5 mt-lg-5 application'
            style={{ backgroundImage: 'url("/images/application.png")' }}
        >
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='position-relative d-flex justify-content-center'>
                            <img src='/images/mirsaid1.png' alt='rasm' className='w-100' />
                            <Button
                                color='primary'
                                className='position-absolute px-lg-5 py-lg-3 px-md-4 py-md-2'
                                style={{
                                    backgroundImage: 'url("/images/button.png")',
                                    backgroundPosition: 'center center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    bottom: '0',
                                    left: '30%',
                                }}
                            >
                                Mirodilov Mirsaid
                            </Button>
                        </div>
                    </Col>
                    <Col lg='6' className='instagram mt-3'>
                        <p className='fs-4 p-semi-bold mt-md-5 px-md-4 p-sm-2 p-1'>
                            Первый продюсерский центр в Узбекистане во главе с @mirodilov.mirsaid ,
                            аналогов которого на рынке нет
                        </p>
                        <p className='fs-4 p-semi-bold px-md-4 p-sm-2 p-1'>
                            прокачаем ваш личный бренд - создадим и запустим ваш авторский курс,
                            марафон, тренинг в онлайн/оффлайн формате, выстроим онлайн школу,
                            структура запуска, прогревы и запустим от 10.000$ ежемесячно
                        </p>
                        <p className='fs-4 p-semi-bold px-md-4 p-sm-2 p-1'>
                            Наша команда берет весь процесс продвижения в свои руки, а также
                            регулярно стремится к сверхувеличению дохода наших партнеров
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Author
