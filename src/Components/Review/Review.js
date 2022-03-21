import { Carousel } from '3d-react-carousal'
import { Container } from 'reactstrap'

const Review = () => {
    const slides = [
        <video controls poster='/images/video.png' width='auto' className='video'>
            <source src='/videos/videoplayback.mp4' type='video/mp4' />
            Your browser does not support HTML video.
        </video>,
        <video controls poster='/images/video.png' width='auto' className='video'>
            <source src='/videos/videoplayback.mp4' type='video/mp4' />
            Your browser does not support HTML video.
        </video>,
        <video controls poster='/images/video.png' width='auto' className='video'>
            <source src='/videos/videoplayback.mp4' type='video/mp4' />
            Your browser does not support HTML video.
        </video>,
    ]
    return (
        <Container id='review' className='reviewvideo'>
            <p className='blue-color fs-1 p-bold text-center mb-4'>ОТЗЫВЫ</p>
            <Carousel slides={slides} />
        </Container>
    )
}

export default Review
