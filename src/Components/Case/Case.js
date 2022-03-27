import { Carousel } from '3d-react-carousal'
import { Container } from 'reactstrap'
import './case.css'

const Case = () => {
    const slides = [
        <div>
            <a href='https://www.instagram.com/dilrabo_isroilova/'>
                <img src='/images/2.png' alt='1' />
            </a>
        </div>,
        <div>
            <a href='https://www.instagram.com/shahnoza.psixolog/'>
                <img src='/images/3.png' alt='1' />
            </a>
        </div>,
        <div>
            <a href='https://www.instagram.com/isfandiyor/'>
                <img src='/images/4.png' alt='1' />
            </a>
        </div>,
        <div>
            <a href='https://www.instagram.com/raha_shadiev/'>
                <img src='/images/5.png' alt='1' />
            </a>
        </div>,
        <div>
            <a href='https://www.instagram.com/sher.legal/'>
                <img src='/images/6.png' alt='1' />
            </a>
        </div>,
        <div>
            <a href='https://www.instagram.com/risolatumidovnaa/'>
                <img src='/images/7.png' alt='1' />
            </a>
        </div>,
        <div>
            <a href='https://www.instagram.com/djuraevstudio/'>
                <img src='/images/8.png' alt='1' />
            </a>
        </div>,
        <div>
            <a href='https://www.instagram.com/azizovinvest/'>
                <img src='/images/9.png' alt='1' />
            </a>
        </div>,
        <div>
            <a href='https://www.instagram.com/ov_cosmetology/'>
                <img src='/images/10.png' alt='1' />
            </a>
        </div>,
    ]

    return (
        <div id='case' className='review pb-sm-5 pb-4'>
            <Container>
                <p className='text-uppercase text-center blue-color fs-1 p-bold'>кейсы</p>
                <Carousel slides={slides} interval={3000} autoplay />
            </Container>
        </div>
    )
}

export default Case
