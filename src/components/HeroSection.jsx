import { Button, Col, Row } from 'react-bootstrap'
import { FiMessageCircle } from 'react-icons/fi'
import profileImage from '../assets/potoProfil.jpeg'

function HeroSection({ MotionSection, sectionVariant }) {
  const Section = MotionSection
  const whatsappLink =
    'https://wa.me/6283175371009?text=Halo%20Kak%20Yosinta%2C%20saya%20tertarik%20untuk%20diskusi%20project.'

  return (
    <Section
      id="hero"
      className="section-block hero-block"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >
      <Row className="align-items-center g-5 ">
        <Col lg={6} className="g-5" style={{ marginRight: '92px' }}>
          <p className="section-kicker">Frontend Developer | UI/UX Enthusiast</p>
          <h1>Halo, saya Yosinta Riani, merancang pengalaman digital dengan empati dan kode.</h1>
          <p className="lead-text">
            Saya membangun antarmuka yang elegan, fungsional, dan meaningful,
            dengan perpaduan visual refinement dan engineering detail.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Button className="btn-soft" href="#portfolio">
              Lihat Proyek
            </Button>
            <Button
              as="a"
              variant="outline-secondary"
              className="btn-outline-soft"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Chat WhatsApp
            </Button>
          </div>
        </Col>
        <Col lg={5} className="hero-visual-col">
          <div className="hero-profile-wrap">
            <div className="hero-media">
              <img
                src={profileImage}
                alt="Foto profil Yosinta Riani"
                className="hero-profile-image"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Section>
  )
}

export default HeroSection
