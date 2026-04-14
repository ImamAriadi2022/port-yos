import { Container, Nav, Navbar } from 'react-bootstrap'

function PortfolioNavbar() {
  return (
    <Navbar expand="lg" className="portfolio-nav" sticky="top">
      <Container>
        <Navbar.Brand href="#hero" className="brand-name">
          Yosinta Ariani
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-nav" />
        <Navbar.Collapse id="portfolio-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-4">
            <Nav.Link href="#about">Tentang</Nav.Link>
            <Nav.Link href="#skills">Keahlian</Nav.Link>
            <Nav.Link href="#portfolio">Portofolio</Nav.Link>
            <Nav.Link href="#contact">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PortfolioNavbar
