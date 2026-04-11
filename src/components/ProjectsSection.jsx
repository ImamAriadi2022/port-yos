import { motion } from 'framer-motion'
import { Card, Col, Row } from 'react-bootstrap'
import { FiExternalLink } from 'react-icons/fi'

function ProjectsSection({ MotionSection, sectionVariant, projects }) {
  const Section = MotionSection
  const MotionDiv = motion.div

  return (
    <Section
      id="portfolio"
      className="section-block"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>Selected Projects</h2>
      <Row className="g-4 mt-1">
        {projects.map((project) => (
          <Col key={project.title} md={6}>
            <MotionDiv whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.25 }}>
              <Card className="project-card h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title>{project.title}</Card.Title>
                    <FiExternalLink />
                  </div>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="d-flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </MotionDiv>
          </Col>
        ))}
      </Row>
    </Section>
  )
}

export default ProjectsSection
