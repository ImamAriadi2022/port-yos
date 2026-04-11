import { Container } from 'react-bootstrap'

function PortfolioFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="portfolio-footer">
      <Container>
        <p className="mb-0">© {year} Yosinta Ariani. Dirancang dengan sentuhan elegan dan terarah.</p>
      </Container>
    </footer>
  )
}

export default PortfolioFooter
