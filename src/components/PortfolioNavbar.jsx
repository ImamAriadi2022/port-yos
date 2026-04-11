import { Button, Container, Nav, Navbar } from 'react-bootstrap'

function PortfolioNavbar({ theme, onToggleTheme }) {
  const isDusty = theme === 'dusty'

  return (
    <Navbar expand="lg" className="portfolio-nav" sticky="top">
      <Container>
        <Navbar.Brand href="#hero" className="brand-name">
          Aurel Studio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-nav" />
        <Navbar.Collapse id="portfolio-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-4">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button className="theme-toggle-btn" onClick={onToggleTheme}>
              Theme: {isDusty ? 'Dusty Pink' : 'Earthy'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PortfolioNavbar
