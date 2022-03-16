import { useState } from 'react'
import { Button, Container, Form, FormFeedback, FormGroup, Input } from 'reactstrap'
import './contact.css'

const Contact = () => {
    const [contact, setContact] = useState({ name: '', phone: '', comment: '' })
    const [checkName, setCheckName] = useState(false)
    const [checkPhone, setCheckPhone] = useState(false)
    const [checkComment, setCheckComment] = useState(false)

    const token = '5155255378:AAGVURogmDZG8H5FaF8CgoqwyJvcNImAs7k'
    const chat_id = -683368518

    const onSubmit = e => {
        e.preventDefault()

        if (
            contact.name.length > 0 &&
            contact.name.charAt(0) !== ' ' &&
            contact.phone.length > 0 &&
            contact.phone.charAt(0) !== ' ' &&
            contact.comment.length > 0 &&
            contact.comment.charAt(0) !== ' '
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

        if (!contact.comment || contact.comment.charAt(0) === ' ') setCheckComment(true)
        else setCheckComment(false)
    }

    return (
        <div id='contact' className='px-4 pb-4'>
            <div className='py-5 contact'>
                <Container>
                    <p className='text-uppercase blue-color text-center fs-1 p-bold'>
                        оставить заявку
                    </p>
                    <Form className='d-flex flex-column align-items-center'>
                        <FormGroup className='w-50 my-2'>
                            <Input
                                placeholder='Имя'
                                bsSize='lg'
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
                                bsSize='lg'
                                type='number'
                                name='phone'
                                className={checkPhone ? 'red' : ''}
                                required={true}
                                invalid={checkPhone}
                                value={contact.phone}
                                onChange={e => setContact({ ...contact, phone: e.target.value })}
                            />
                            {checkPhone && <FormFeedback>Phone is error</FormFeedback>}
                        </FormGroup>
                        <FormGroup className='w-50 my-2'>
                            <Input
                                placeholder='Комментарий'
                                bsSize='lg'
                                className={checkComment ? 'red' : ''}
                                type='textarea'
                                name='textarea'
                                rows={4}
                                required={true}
                                invalid={checkComment}
                                value={contact.comment}
                                onChange={e => setContact({ ...contact, comment: e.target.value })}
                            />
                            {checkComment && <FormFeedback>Comment is error</FormFeedback>}
                        </FormGroup>
                        <Button
                            size='lg'
                            className='mt-4'
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
    )
}

export default Contact
