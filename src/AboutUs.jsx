import { useState, useEffect } from 'react'
import './AboutUs.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaHandsHelping, FaBoxOpen, FaWarehouse, FaUsers, FaHeartbeat } from 'react-icons/fa'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="app">
      <div className="background-pattern"></div>

      <main className={`main-container ${isVisible ? 'fade-in' : ''}`}>
        <section className="about-section">
          <div className="content-wrapper">
            <h2 className="section-title">About Us</h2>
            <header className="header">
              <div className="logo-section">
                <div className="logo-icon"><FaHeartbeat /></div>
                <h1 className="organization-name">St. Jude India ChildCare Centres</h1>
                <p className="organization-subtitle">SJICC</p>
              </div>
            </header>

            <div className="mission-card" data-aos="fade-up">
              <div className="mission-icon">💙</div>
              <div className="mission-content">
                <h3>Our Mission</h3>
                <p>
                  St. Jude India ChildCare Centres (SJICC) is dedicated to providing free accommodation
                  and comprehensive support to children undergoing treatment for chronic diseases. We believe
                  that every child deserves access to quality healthcare in a nurturing environment,
                  regardless of their family's financial circumstances.
                </p>
              </div>
            </div>

            <div className="purpose-card" data-aos="fade-up">
              <div className="purpose-icon">🌟</div>
              <div className="purpose-content">
                <h3>Website Purpose</h3>
                <p>
                  This digital platform serves as our comprehensive ration distribution tracking system,
                  designed to ensure transparency and efficiency in managing food resources across all
                  our child care centers. Through this system, we maintain accurate records and optimize
                  our support for the families we serve.
                </p>
              </div>
            </div>

            <div className="features-card" data-aos="fade-up">
              <h3 className="features-title">System Features</h3>
              <ul className="features-list">
                <li className="feature-item">
                  <span className="feature-icon"><FaBoxOpen /></span>
                  <span className="feature-text">Ration received from vendors</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon"><FaWarehouse /></span>
                  <span className="feature-text">Ration stored in the center</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon"><FaHandsHelping /></span>
                  <span className="feature-text">Ration distributed to families</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon"><FaUsers /></span>
                  <span className="feature-text">Ration usage by families</span>
                </li>
              </ul>
            </div>

            <div className="quote-section" data-aos="fade-up">
              <blockquote className="inspiring-quote">
                "Every child deserves hope, health, and a safe place to heal."
              </blockquote>
              <div className="quote-attribution">
                <span className="quote-dash">—</span>
                <span className="quote-source">St. Jude India ChildCare Centres</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer" data-aos="fade-up">
          <div className="footer-content">
            <p className="footer-text">
              Together, we're building a brighter future for children in need.
            </p>
            <div className="contact-info">
              <span className="contact-item">📧 info@sjicc.org</span>
              <span className="contact-item">📞 +91 (0) 123-456-7890</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App