import { Button, Col, Row } from 'react-bootstrap'
import { FiMail } from 'react-icons/fi'
import profileImage from '../assets/profile-placeholder.svg'

function HeroSection({ MotionSection, sectionVariant }) {
  const Section = MotionSection

  return (
    <Section
      id="hero"
      className="section-block hero-block"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >
      <Row className="align-items-center g-4">
        <Col lg={7}>
          <p className="section-kicker">Frontend Developer | UI/UX Enthusiast</p>
          <h1>Hi, I&apos;m [Name], creating digital experiences with heart and code.</h1>
          <p className="lead-text">
            Saya membangun antarmuka yang elegan, fungsional, dan meaningful,
            dengan perpaduan visual refinement dan engineering detail.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Button className="btn-soft" href="#portfolio">
              Explore Projects
            </Button>
            <Button variant="outline-secondary" className="btn-outline-soft" href="#contact">
              Let&apos;s Collaborate
            </Button>
          </div>
        </Col>
        <Col lg={5}>
          <div className="hero-profile-wrap">
            <img
              src={profileImage}
              alt="Professional profile placeholder"
              className="hero-profile-image"
            />
            <div className="hero-card mt-3">
              <FiMail className="hero-icon" />
              <p className="mb-2">Available for freelance and full-time opportunities.</p>
              <a href="mailto:hello@example.com" className="inline-link">
                hello@example.com
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Section>
  )
}

export default HeroSection
