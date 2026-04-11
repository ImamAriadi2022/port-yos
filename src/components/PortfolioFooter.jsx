import { Container } from 'react-bootstrap'

function PortfolioFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="portfolio-footer">
      <Container>
        <p className="mb-0">© {year} [Name] Portfolio. Designed with elegance and intention.</p>
      </Container>
    </footer>
  )
}

export default PortfolioFooter
