import { Container } from 'reactstrap'
import './footer.css'

const Footer = () => {
    return (
        <Container className='py-5 mt-auto' id='footer'>
            <p className='text-white fs-2 text-center p-bold fs-md-25'>
                Свяжитесь с нами и мы ответим на <br /> все Ваши вопросы
            </p>
            <div className='d-flex justify-content-center'>
                {[
                    { icon: 'instagram', link: 'https://www.instagram.com/instamedia.uz/' },
                    { icon: 'telegram', link: '/' },
                    { icon: 'facebook', link: '/' },
                    { icon: 'email', link: '/' },
                ].map((icon, index) => (
                    <a href={icon.link} className='mx-2' key={index}>
                        <img src={`/images/${icon.icon}.svg`} alt='svg' width={50} />
                    </a>
                ))}
            </div>
        </Container>
    )
}

export default Footer
