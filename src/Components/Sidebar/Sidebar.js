import { useState } from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse } from 'reactstrap'
import './sidebar.css'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const menus = [
        { name: 'ГЛАВНАЯ', id: '#home' },
        { name: 'кейсы', id: '#case' },
        { name: 'АВТОР', id: '#author' },
        { name: 'ОТЗЫВЫ', id: '#review' },
        { name: 'ЗАЯВКА', id: '#application' },
        { name: 'КОНТАКТЫ', id: '#contact' },
    ]

    return (
        <Navbar
            light
            expand='md'
            style={{
                backgroundImage: "url('/images/sidebar.png')",
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
            }}
            id='navbar'
        >
            <NavbarBrand href='/' className='d-md-none d-sm-unset text-white'>
                Instamedia
            </NavbarBrand>
            <NavbarToggler onClick={() => setOpen(!open)} />
            <Collapse isOpen={open} navbar className='justify-content-center'>
                <Nav className='text-uppercase' navbar>
                    {menus.map((menu, index) => (
                        <NavItem key={index}>
                            <NavLink href={menu.id} className={'text-white fw-bold fs-5 mx-md-3'}>
                                {menu.name}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sidebar
