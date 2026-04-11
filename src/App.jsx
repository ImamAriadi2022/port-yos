import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import PortfolioFooter from './components/PortfolioFooter'
import PortfolioNavbar from './components/PortfolioNavbar'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import { projects, skills } from './data/portfolioData'

const sectionVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const MotionSection = motion.section
const THEME_STORAGE_KEY = 'portfolio-theme'
const ALLOWED_THEMES = ['earthy', 'dusty']

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    return ALLOWED_THEMES.includes(savedTheme) ? savedTheme : 'earthy'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const handleToggleTheme = () => {
    setTheme((previous) => (previous === 'earthy' ? 'dusty' : 'earthy'))
  }

  return (
    <div className="portfolio-shell">
      <PortfolioNavbar theme={theme} onToggleTheme={handleToggleTheme} />

      <Container className="py-5">
        <HeroSection MotionSection={MotionSection} sectionVariant={sectionVariant} />
        <AboutSection MotionSection={MotionSection} sectionVariant={sectionVariant} />
        <SkillsSection MotionSection={MotionSection} sectionVariant={sectionVariant} skills={skills} />
        <ProjectsSection
          MotionSection={MotionSection}
          sectionVariant={sectionVariant}
          projects={projects}
        />
        <ContactSection MotionSection={MotionSection} sectionVariant={sectionVariant} />
      </Container>

      <PortfolioFooter />
    </div>
  )
}

export default App
