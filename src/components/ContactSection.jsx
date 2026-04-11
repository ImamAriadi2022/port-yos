import { useMemo, useState } from 'react'
import { Button, Col, Form, Row, Toast, ToastContainer } from 'react-bootstrap'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function ContactSection({ MotionSection, sectionVariant }) {
  const Section = MotionSection
  const [formValues, setFormValues] = useState(initialForm)
  const [touched, setTouched] = useState({})
  const [showToast, setShowToast] = useState(false)

  const errors = useMemo(() => {
    const nextErrors = {}

    if (!formValues.name.trim()) {
      nextErrors.name = 'Nama wajib diisi.'
    }

    if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
      nextErrors.email = 'Masukkan email yang valid.'
    }

    if (formValues.message.trim().length < 10) {
      nextErrors.message = 'Pesan minimal 10 karakter.'
    }

    return nextErrors
  }, [formValues])

  const hasErrors = Object.keys(errors).length > 0

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((previous) => ({ ...previous, [name]: value }))
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((previous) => ({ ...previous, [name]: true }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTouched({ name: true, email: true, message: true })

    if (hasErrors) {
      return
    }

    setShowToast(true)
    setFormValues(initialForm)
    setTouched({})
  }

  return (
    <Section
      id="contact"
      className="section-block"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Row className="g-4">
        <Col lg={5}>
          <h2>Kontak</h2>
          <p>Mari terhubung dan bangun produk digital yang bermakna bersama.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              <FiGithub /> GitHub
            </a>
          </div>
        </Col>
        <Col lg={7}>
          <Form className="contact-form" noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Nama Anda"
                isInvalid={Boolean(touched.name && errors.name)}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="nama@email.com"
                isInvalid={Boolean(touched.email && errors.email)}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="message">
              <Form.Label>Pesan</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formValues.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Ceritakan kebutuhan proyek Anda"
                isInvalid={Boolean(touched.message && errors.message)}
              />
              <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="btn-soft">
              Kirim Pesan
            </Button>
          </Form>
        </Col>
      </Row>

      <ToastContainer position="bottom-end" className="p-3 toast-layer">
        <Toast bg="light" show={showToast} onClose={() => setShowToast(false)} delay={3500} autohide>
          <Toast.Header closeButton>
            <strong className="me-auto">Pesan terkirim</strong>
          </Toast.Header>
          <Toast.Body>
            Terima kasih, pesan Anda berhasil dikirim.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Section>
  )
}

export default ContactSection
