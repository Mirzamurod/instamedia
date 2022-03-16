import { Container } from 'reactstrap'

const Footer = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("/images/footer.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                paddingTop: '5rem',
            }}
        >
            <Container className='py-5 mt-auto'>
                <p className='text-white fs-2 text-center p-bold'>
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
        </div>
    )
}

export default Footer
