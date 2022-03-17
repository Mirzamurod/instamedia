import { Carousel } from '3d-react-carousal'
import { Container } from 'reactstrap'
import './review.css'

const Review = () => {
    const slides = [
        <div>
            <a href='/' target='_blank'>
                <img src='https://picsum.photos/800/300/?random' alt='1' />
            </a>
        </div>,
        <img src='https://picsum.photos/800/301/?random' alt='2' />,
        <img src='https://picsum.photos/800/302/?random' alt='3' />,
        <img src='https://picsum.photos/800/303/?random' alt='4' />,
        <img src='https://picsum.photos/800/304/?random' alt='5' />,
    ]

    return (
        <div id='review' className='review'>
            <Container>
                <p className='text-uppercase text-center blue-color fs-1 p-bold'>кейсы</p>
                <Carousel slides={slides} interval={3000} autoplay />
            </Container>
        </div>
    )
}

export default Review