import { useEffect, useCallback } from "react";
import "@/pages/Home.css";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, null, "#" + id);
  }
};

const NavLink = ({ to, children, className }) => (
  <a
    href={"#" + to}
    className={className || ""}
    onClick={(e) => {
      e.preventDefault();
      scrollToSection(to);
    }}
  >
    {children}
  </a>
);

export default function Home() {
  return (
    <div className="site-wrapper">
      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a
            href="#top"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("top");
            }}
          >
            {/* TODO: Upload your logo image and replace this src */}
            <div className="nav-logo-text">
              <span className="brand">On-Site Computer Service</span>
              <span className="tagline">Concord, NC · </span>
            </div>
          </a>
          <ul className="nav-links">
            <li><NavLink to="top" className="home-btn">Home</NavLink></li>
            <li><NavLink to="trust">Why Us</NavLink></li>
            <li><NavLink to="services-section">Services</NavLink></li>
            <li><NavLink to="about-section">About</NavLink></li>
            <li><NavLink to="reviews-section">Reviews</NavLink></li>
            <li><NavLink to="contact-section">Contact</NavLink></li>
          </ul>
          <a href="tel:9802360810" className="nav-phone">☎ 980-236-0810</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="stars">★★★★★</span>
              <span className="badge-text">170+ Five-Star Google Reviews</span>
            </div>
            <h1>Expert Computer<br />Repair in <span>Concord, NC</span></h1>
            <p className="hero-sub">Fast diagnostics. No guesswork. Most repairs completed within 24–48 hours. Many customers come to us after being told their computer couldn't be fixed.</p>
            <div className="hero-btns">
              <a href="tel:9802360810" className="btn-primary">☎ 980-236-0810</a>
              <a href="https://www.google.com/maps/dir//53+Cabarrus+Ave+W,+Concord,+NC+28025" target="_blank" rel="noopener noreferrer" className="btn-secondary">📍 Get Directions</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="big-number"><span>170</span>+</div>
            <div className="card-label">Five-Star Google Reviews</div>
            <div className="stars-big">★★★★★</div>
            <div className="rating">4.9 / 5.0</div>
            <div className="divider"></div>
            <div className="years">25+ Years</div>
            <div className="years-label">Of Expert Experience</div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section id="trust" className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <span className="t-icon">🏆</span>
            <span className="t-text">170+ Five-Star Reviews</span>
          </div>
          <div className="trust-item">
            <span className="t-icon">⚡</span>
            <span className="t-text">24–48 Hour Turnaround</span>
          </div>
          <div className="trust-item">
            <span className="t-icon">🏠</span>
            <span className="t-text">On-Site &amp; In-Store Service</span>
          </div>
          <div className="trust-item">
            <span className="t-icon">🛠️</span>
            <span className="t-text">25+ Years Experience</span>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="why">
        <div className="section-inner">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Why Trust Us</h2>
          <p className="section-sub">We don't just fix computers — we find the real problem and fix it right the first time.</p>
          <div className="why-grid">
            <div className="why-card"><div className="why-icon">🔬</div><h3>Expert Diagnosis</h3><p>We find the real problem and fix it right the first time. No guesswork, no unnecessary charges.</p></div>
            <div className="why-card"><div className="why-icon">💻</div><h3>All Types of Computers</h3><p>Desktops, laptops, custom gaming PCs, workstations, and Apple products — we service them all.</p></div>
            <div className="why-card"><div className="why-icon">⚙️</div><h3>Hardware &amp; Software</h3><p>From hardware upgrades and SSD installs to virus removal and OS optimization — covered.</p></div>
            <div className="why-card"><div className="why-icon">🏘️</div><h3>Home or Business</h3><p>We come to you or you visit our Concord store — flexible options that fit your schedule.</p></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services-section" className="services">
        <div className="section-inner">
          <span className="section-tag">What We Fix</span>
          <h2 className="section-title">On-Site or In-Store Repairs Available</h2>
          <p className="section-sub">Whether you want us to come to you or prefer to drop your computer off, we make the process fast, easy, and stress-free.</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🖥️</div>
              <h3>Computer &amp; Gaming PC Repair</h3>
              <p>We repair and troubleshoot both store-bought and custom-built gaming PCs. From crashes and overheating to performance issues and upgrades — we fix it right.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Virus &amp; Malware Removal</h3>
              <p>Remove viruses, malware, spyware and other threats to keep your system safe, secure and running smoothly.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💾</div>
              <h3>Data Recovery &amp; Backup</h3>
              <p>Recover lost or deleted data and set up secure backups to protect what matters most. We recover what others can't.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Hardware Installation &amp; Upgrades</h3>
              <p>Upgrade RAM, storage, graphics cards and more. We install and configure the right hardware for your needs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Laptop Repair</h3>
              <p>Screen replacement, battery issues, keyboard problems, charging ports and more. We fix all major laptop brands.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📶</div>
              <h3>Network Setup &amp; Support</h3>
              <p>Wi-Fi setup, router configuration, printer setup and network troubleshooting for a fast, reliable connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about-section" className="about">
        <div className="section-inner">
          <div className="about-inner">
            <div>
              <span className="section-tag">About Us</span>
              <h2 className="section-title">25+ Years of Hands-On Experience</h2>
              <p className="section-sub">With over 25 years of hands-on experience, I diagnose and repair computers the right way — no guesswork. From simple issues to systems other shops said were unfixable, I take the time to find the real problem and fix it right.</p>
              <p style={{color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.7, marginBottom: '36px'}}>We offer both on-site service and in-store repairs at our Concord location, giving you the flexibility to choose what works best for you. Whether you want us to come to you or prefer to drop your computer off, we make the process fast, easy, and stress-free.</p>
              <div className="about-stats">
                <div className="stat-box"><div className="num">170+</div><div className="lbl">5-Star Reviews</div></div>
                <div className="stat-box"><div className="num">4.9★</div><div className="lbl">Google Rating</div></div>
                <div className="stat-box"><div className="num">25+</div><div className="lbl">Years Experience</div></div>
                <div className="stat-box"><div className="num">24hr</div><div className="lbl">Avg Turnaround</div></div>
              </div>
            </div>
            <div className="about-logo-wrap">
              {/* TODO: Upload your logo image and update this src */}
              <div style={{textAlign: 'center', padding: '40px', color: 'var(--navy)', fontFamily: "'Oswald', sans-serif"}}>
                <div style={{fontSize: '36px', fontWeight: 700, marginBottom: '10px'}}>On-Site</div>
                <div style={{fontSize: '24px', fontWeight: 600}}>Computer Service</div>
                <div style={{fontSize: '14px', marginTop: '10px', color: 'var(--text-mid)'}}>Upload your logo image to display here</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews-section" className="reviews">
        <div className="section-inner">
          <span className="section-tag">Customer Reviews</span>
          <h2 className="section-title">What Our Customers Are Saying</h2>
          <p className="section-sub">See why customers across Concord trust On-Site Computer Service for honest, reliable computer repair.</p>
          <div className="reviews-widget-wrap">
            <div className="elfsight-app-59326f3f-41fd-4afb-959a-18438e9cd406" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* CONTACT & MAP */}
      <section id="contact-section" className="contact">
        <div className="section-inner">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-sub">Have a question or need computer help? We're here for you.</p>
          <div className="contact-grid">
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <div className="form-group"><label>Your Name</label><input type="text" placeholder="John Smith" /></div>
              <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="(704) 555-0000" /></div>
              <div className="form-group"><label>Email Address</label><input type="email" placeholder="you@email.com" /></div>
              <div className="form-group">
                <label>Service Needed</label>
                <select defaultValue="">
                  <option value="">Select a service...</option>
                  <option>Computer &amp; Gaming PC Repair</option>
                  <option>Virus &amp; Malware Removal</option>
                  <option>Data Recovery &amp; Backup</option>
                  <option>Hardware Installation &amp; Upgrades</option>
                  <option>Laptop Repair</option>
                  <option>Network Setup &amp; Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group"><label>Message</label><textarea placeholder="Describe your computer issue..."></textarea></div>
              <button className="form-submit">Send Message →</button>
            </div>
            <div className="contact-right">
              <h3>Find Us</h3>
              <div className="map-wrap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.1!2d-80.5796!3d35.4087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541e2bdf534cb1%3A0x29ab7dbb6f9b2621!2s53%20Cabarrus%20Ave%20W%2C%20Concord%2C%20NC%2028025!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
              <div className="info-item">
                <div className="info-icon"><span style={{color: '#000'}}>☎</span></div>
                <div>
                  <div className="info-label">Call or Text</div>
                  <div className="info-value"><a href="tel:9802360810">980-236-0810</a></div>
                  <div className="info-sub">We answer calls and texts</div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div>
                  <div className="info-label">Email</div>
                  <div className="info-value"><a href="mailto:greg@onsitecomputerstore.com">greg@onsitecomputerstore.com</a></div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <div className="info-label">Our Location</div>
                  <div className="info-value"><a href="https://www.google.com/maps/dir//53+Cabarrus+Ave+W,+Concord,+NC+28025" target="_blank" rel="noopener noreferrer">53 Cabarrus Ave West, Concord NC 28025</a></div>
                  <div className="info-sub">Serving Concord &amp; surrounding areas</div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">🕐</div>
                <div>
                  <div className="info-label">Business Hours</div>
                  <div className="info-value">Mon – Fri: 10:00 AM – 6:00 PM</div>
                  <div className="info-sub">Saturday: By Appointment · Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer-final">
        <div className="site-footer-final-inner">
          <div className="site-footer-final-copy">
            © 2024 On-Site Computer Service. All rights reserved.
          </div>
          <div className="site-footer-final-links">
            <NavLink to="top">Home</NavLink>
            <NavLink to="why">Why Us</NavLink>
            <NavLink to="services-section">Services</NavLink>
            <NavLink to="about-section">About</NavLink>
            <NavLink to="reviews-section">Reviews</NavLink>
            <NavLink to="contact-section">Contact</NavLink>
          </div>
          <a className="site-footer-final-call" href="tel:9802360810">☎ 980-236-0810</a>
        </div>
      </footer>
    </div>
  );
}