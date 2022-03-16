import { Container } from 'reactstrap'
import './author.css'

const Author = () => {
    return (
        <Container id='author' className='py-5'>
            <p className='text-uppercase fs-1 blue-color text-center p-bold'>наши услуги</p>
            <div className='timeline my-5'>
                {[
                    'Комплексное продвижение личного бренда в Instagram',
                    'Создание и запуск авторских курсов, марафонов, тренингов экспертов или блогеров в онлайн либо оффлайн форматах',
                    'Выстраивание онлайн-школ, структур запуска, прогревы.',
                    'Наша команда берёт весь процесс продвижения в свои руки, а также регулярно стремится к сверхувеличению дохода наших партнёров.',
                ].map((text, index) => (
                    <div
                        className={`container1 ${
                            index % 2 === 0 ? 'left text-sm-end' : 'right text-sm-start'
                        }`}
                        key={index}
                    >
                        <div className='content blue-color fs-4 p-semi-bold'>{text}</div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Author
