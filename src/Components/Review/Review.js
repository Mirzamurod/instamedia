import { Carousel } from '3d-react-carousal'
import { Container } from 'reactstrap'

const Review = () => {
    const slides = [
        <video controls width='auto' className='video'>
            <source src='/videos/video1.MOV' type='video/mp4' />
            Your browser does not support HTML video.
        </video>,
        <video controls width='auto' className='video'>
            <source src='/videos/video2.MOV' type='video/mp4' />
            Your browser does not support HTML video.
        </video>,
    ]
    return (
        <Container id='review' className='reviewvideo mt-md-5'>
            <p className='blue-color fs-1 p-bold text-center mb-4'>ОТЗЫВЫ</p>
            <Carousel slides={slides} />
        </Container>
    )
}

export default Review
