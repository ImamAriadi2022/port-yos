import { Col, Row } from 'react-bootstrap'

function AboutSection({ MotionSection, sectionVariant }) {
  const Section = MotionSection

  return (
    <Section
      id="about"
      className="section-block"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Row>
        <Col lg={9}>
          <h2>About Me</h2>
          <p>
            Dengan dedikasi pada frontend development dan UI/UX, saya fokus menciptakan
            pengalaman digital yang intuitif, estetis, serta berdampak pada tujuan bisnis.
            Saya percaya detail kecil, aksesibilitas, dan konsistensi desain adalah fondasi
            produk digital yang dipercaya pengguna.
          </p>
        </Col>
      </Row>
    </Section>
  )
}

export default AboutSection
