import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import HeaderEnterTaskField from './HeaderEnterTaskField'

function Header() {
  return (
    <Container className='bg-body-tertiary'>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <HeaderEnterTaskField />
        </Container>
      </Navbar>
    </Container>
  )
}

export default Header
