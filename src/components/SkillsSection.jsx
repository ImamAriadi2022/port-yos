import { Col, Row } from 'react-bootstrap'

function SkillsSection({ MotionSection, sectionVariant, skills }) {
  const Section = MotionSection

  return (
    <Section
      id="skills"
      className="section-block"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2>Keahlian</h2>
      <Row className="g-3 mt-1">
        {skills.map((skill) => {
          const Icon = skill.icon
          return (
            <Col key={skill.name} xs={6} md={4} lg={2}>
              <div className="skill-chip">
                <span><Icon /></span>
                {skill.name}
              </div>
            </Col>
          )
        })}
      </Row>
    </Section>
  )
}

export default SkillsSection
