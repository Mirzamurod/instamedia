import { useState } from 'react'
import { Button, Container, Form, FormFeedback, FormGroup, Input } from 'reactstrap'
import './application.css'

const Application = () => {
    const [contact, setContact] = useState({ name: '', phone: '', comment: '' })
    const [checkName, setCheckName] = useState(false)
    const [checkPhone, setCheckPhone] = useState(false)

    const token = '5155255378:AAGVURogmDZG8H5FaF8CgoqwyJvcNImAs7k'
    const chat_id = -1001658217882

    const onSubmit = e => {
        e.preventDefault()

        if (
            contact.name &&
            contact.name.charAt(0) !== ' ' &&
            contact.phone &&
            contact.phone.charAt(0) !== ' ' &&
            contact.comment
                ? contact.comment.charAt(0) !== ' '
                : !contact.comment
        ) {
            let my_text = `
                Имя: ${contact.name} %0A
                Номер телефона: ${contact.phone} %0A
                Комментарий: ${contact.comment} %0A
            `
            const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
            let api = new XMLHttpRequest()
            api.open('GET', url, true)
            api.send()
            setContact({ name: '', phone: '', comment: '' })
        }

        if (!contact.name || contact.name.charAt(0) === ' ') setCheckName(true)
        else setCheckName(false)

        if (!contact.phone || contact.phone.charAt(0) === ' ') setCheckPhone(true)
        else setCheckPhone(false)
    }

    return (
        <div id='application' className='position-relative'>
            <div className='px-4 pb-4'>
                <div className='py-5 contact bg-white'>
                    <Container>
                        <p className='text-uppercase blue-color text-center fs-1 p-bold'>
                            оставить заявку
                        </p>
                        <Form className='d-flex flex-column align-items-center'>
                            <FormGroup className='w-50 my-2'>
                                <Input
                                    placeholder='Имя'
                                    name='name'
                                    className={checkName ? 'red' : ''}
                                    required={true}
                                    invalid={checkName}
                                    value={contact.name}
                                    onChange={e => setContact({ ...contact, name: e.target.value })}
                                />
                                {checkName && <FormFeedback>Name is error</FormFeedback>}
                            </FormGroup>
                            <FormGroup className='w-50 my-2'>
                                <Input
                                    placeholder='Номер телефона'
                                    name='phone'
                                    className={checkPhone ? 'red' : ''}
                                    required={true}
                                    invalid={checkPhone}
                                    value={contact.phone}
                                    onChange={e =>
                                        setContact({ ...contact, phone: e.target.value })
                                    }
                                />
                                {checkPhone && <FormFeedback>Phone is error</FormFeedback>}
                            </FormGroup>
                            <FormGroup className='w-50 my-2'>
                                <Input
                                    placeholder='Комментарий'
                                    type='textarea'
                                    name='textarea'
                                    rows={4}
                                    value={contact.comment}
                                    onChange={e =>
                                        setContact({ ...contact, comment: e.target.value })
                                    }
                                />
                            </FormGroup>
                            <Button
                                className='mt-lg-4'
                                color='primary'
                                style={{ backgroundImage: 'url("/images/button.png")' }}
                                onClick={onSubmit}
                            >
                                оставить заявку
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
            <div
                className='position-absolute index-z end-0 start-0 footer-image'
                style={{ backgroundImage: 'url("/images/footer.png")' }}
            />
        </div>
    )
}

export default Application
