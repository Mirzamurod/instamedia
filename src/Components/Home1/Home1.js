import { Col, Container, Row } from 'reactstrap'
import './home1.css'

const Home1 = () => {
    return (
        <div className='bg-white text-uppercase' id='home1'>
            <Container className='py-5'>
                <p className='p-bold fs-3 text-center mx-lg-5 px-md-5 fs-md-20'>
                    Первый продюсерский центр в Узбекистане, аналогов которого на рынке нет!
                </p>
                <Row>
                    <Col lg='6' className='text-white pe-lg-5 pb-lg-0 pb-3'>
                        <div
                            className='bg-left p-4 h-100 d-flex flex-column'
                            style={{ backgroundImage: 'url("/images/bg-left.png")' }}
                        >
                            <p className='fs-4 line position-relative p-semi-bold'>
                                Наши услуги включают в себя:
                            </p>
                            <div className='my-auto'>
                                {[
                                    'Комплексное продвижение вашего личного бренда.',
                                    'Запуск курсов, марафонов и т.д',
                                    'Раскрытие личности и экспертности',
                                    'Прогревы и автоворонки',
                                    'Упаковка профиля и многое другое',
                                ].map((text, index) => (
                                    <p
                                        key={index}
                                        className='case p-semi-bold'
                                        style={{ backgroundImage: 'url("/images/hexagon.png")' }}
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col lg='6' className='text-white ps-lg-5 pt-lg-0 pt-3'>
                        <div
                            className='bg-right p-4 h-100'
                            style={{ backgroundImage: 'url("/images/bg-right.png")' }}
                        >
                            <p className='fs-4 line position-relative p-semi-bold'>
                                На данный момент мы сотрудничаем с экспертами в разных сферах:
                            </p>
                            {[
                                'Лайфстайл блогеры',
                                'Психологи',
                                'Юристы',
                                'Трейдеры',
                                'Косметологи',
                                'Фотографы',
                                'Предпринимателями и т.д.',
                            ].map((text, index) => (
                                <p
                                    key={index}
                                    className='case p-semi-bold'
                                    style={{ backgroundImage: 'url("/images/hexagon.png")' }}
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home1
