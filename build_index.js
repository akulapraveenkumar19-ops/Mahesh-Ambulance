const fs = require('fs');
const path = require('path');
const { renderHtmlDocument, icons } = require('./generate_templates');

const rootDir = __dirname;

// ==========================================================================
// 1. INDEX.HTML (HOMEPAGE)
// ==========================================================================
const indexContent = `
  <!-- 5. HERO SECTION -->
  <section class="hero" aria-label="Hero Section">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="top-pulse-dot"></span>
          24/7 AMBULANCE SERVICE
        </div>
        <h1 class="hero-title">
          FAST &amp; RELIABLE <span class="hero-title-highlight">AMBULANCE SERVICE</span> IN HYDERABAD
        </h1>
        <p class="hero-subtitle">
          Mahesh Ambulance Service provides ambulance transportation support across Hyderabad, Telangana. Contact us for emergency assistance, patient transfers and specialized ambulance availability.
        </p>
        <div class="hero-buttons">
          <a href="booking.html" class="btn btn-primary btn-lg">
            🚑 BOOK AN AMBULANCE
          </a>
          <a href="tel:+917075918108" class="btn btn-outline-white btn-lg">
            ☎ CALL NOW: 7075918108
          </a>
        </div>
        <div class="hero-quick-features">
          <div class="hero-feat-item">
            ${icons.check} 24/7 Hyderabad Coverage
          </div>
          <div class="hero-feat-item">
            ${icons.check} ICU &amp; Life Support Units
          </div>
          <div class="hero-feat-item">
            ${icons.check} Direct Phone Dispatch
          </div>
        </div>
      </div>

      <div class="hero-media">
        <div class="hero-image-wrapper">
          <img src="images/ambulance-hero.jpg" alt="Mahesh Ambulance Service Force Traveller Fleet in Hyderabad" class="hero-img" width="600" height="440">
        </div>
        <!-- Modern Floating Emergency Card -->
        <div class="floating-emergency-card">
          <div class="floating-card-icon">🚑</div>
          <div class="floating-card-info">
            <h4>EMERGENCY ASSISTANCE</h4>
            <a href="tel:+917075918108" class="floating-card-number">7075918108</a>
            <span class="floating-card-badge">● Available 24/7 in Hyderabad</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. EMERGENCY CALL STRIP -->
  <section class="emergency-strip" aria-label="Emergency Call Strip">
    <div class="container emergency-strip-inner">
      <div class="strip-text-box">
        <div class="strip-siren-icon">🚨</div>
        <div>
          <h2 class="strip-heading">NEED AN AMBULANCE NOW?</h2>
          <p class="strip-subtext">Call Mahesh Ambulance Service for prompt vehicle dispatch across Hyderabad.</p>
        </div>
      </div>
      <div class="strip-cta">
        <a href="tel:+917075918108" class="strip-number-link">7075918108</a>
        <a href="tel:+917075918108" class="btn btn-white-call">
          CALL NOW ☎
        </a>
      </div>
    </div>
  </section>

  <!-- 7. QUICK SERVICE CARDS -->
  <section class="section" aria-label="Quick Services">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">CORE TRANSPORT SERVICES</span>
        <h2>Immediate Transportation Solutions</h2>
        <p class="section-subtitle">Dedicated ambulance transportation tailored to patient acuity and transfer urgency.</p>
      </div>

      <div class="quick-services-grid">
        <!-- Card 1 -->
        <article class="quick-card">
          <div class="quick-card-icon">🚑</div>
          <h3>Emergency Ambulance</h3>
          <p>Rapid deployment for sudden medical emergencies, accidents, and acute patient situations throughout Hyderabad.</p>
          <a href="emergency.html" class="card-link">Read More ${icons.arrowRight}</a>
        </article>

        <!-- Card 2 -->
        <article class="quick-card">
          <div class="quick-card-icon">🏥</div>
          <h3>ICU Ambulance</h3>
          <p>Equipped with critical monitoring infrastructure for patients requiring intensive oversight during transfer.</p>
          <a href="icu.html" class="card-link">Read More ${icons.arrowRight}</a>
        </article>

        <!-- Card 3 -->
        <article class="quick-card">
          <div class="quick-card-icon">🛏</div>
          <h3>Patient Transfer</h3>
          <p>Safe, comfortable bedside assistance for routine discharges, diagnostic scans, and scheduled clinic appointments.</p>
          <a href="patient-transfer.html" class="card-link">Read More ${icons.arrowRight}</a>
        </article>

        <!-- Card 4 -->
        <article class="quick-card">
          <div class="quick-card-icon">🏥</div>
          <h3>Hospital Transfer</h3>
          <p>Inter-hospital patient shifts between specialty healthcare facilities across Hyderabad and nearby districts.</p>
          <a href="hospital-transfer.html" class="card-link">Read More ${icons.arrowRight}</a>
        </article>
      </div>
    </div>
  </section>

  <!-- 8. ABOUT SECTION -->
  <section class="section" style="background-color: var(--white);" aria-label="About Us">
    <div class="container about-grid">
      <div class="about-images-wrapper">
        <img src="images/patient-transfer.jpg" alt="Ambulance Interior with Stretcher Bed and Attendant Seating" class="about-main-img" width="540" height="420" loading="lazy">
        <div class="about-badge-card">
          <h4>24/7</h4>
          <p>Round-the-clock emergency response in Hyderabad &amp; Telangana</p>
        </div>
      </div>

      <div class="about-content">
        <span class="section-badge">ABOUT OUR SERVICE</span>
        <h2>ABOUT MAHESH AMBULANCE SERVICE</h2>
        <p class="about-lead">
          Mahesh Ambulance Service provides ambulance transportation support for people in Hyderabad and surrounding areas. Customers can contact the service directly to check vehicle availability and arrange transportation based on their needs.
        </p>
        <p style="color: var(--text-muted);">
          Our fleet includes specialized life support vehicles, basic transfer vans, and ICU-equipped ambulances. We focus on transparent communication, prompt telephone coordination, and patient-first transportation safety.
        </p>

        <div class="about-details-list">
          <div class="about-detail-item">
            <span class="detail-check-icon">✓</span> Direct Driver / Dispatch Helpline
          </div>
          <div class="about-detail-item">
            <span class="detail-check-icon">✓</span> Clean &amp; Sanitized Vehicles
          </div>
          <div class="about-detail-item">
            <span class="detail-check-icon">✓</span> Multiple Ambulance Categories
          </div>
          <div class="about-detail-item">
            <span class="detail-check-icon">✓</span> Transparent Booking Procedure
          </div>
        </div>

        <a href="about.html" class="btn btn-secondary">
          Read More &rarr;
        </a>
      </div>
    </div>
  </section>

  <!-- 9. WHY CHOOSE US -->
  <section class="section" aria-label="Why Choose Us">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">OUR COMMITMENT</span>
        <h2>Why Choose Mahesh Ambulance Service</h2>
        <p class="section-subtitle">Dependable features built around timely coordination and accessible patient transport.</p>
      </div>

      <div class="why-grid">
        <div class="why-card">
          <div class="why-icon">⏰</div>
          <h3>24/7 Availability</h3>
          <p>Day and night ambulance availability across Hyderabad for planned or unexpected transit.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">📍</div>
          <h3>Hyderabad Service Area</h3>
          <p>Extensive geographic reach across Secunderabad, Cyberabad, and surrounding Telangana corridors.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">📞</div>
          <h3>Easy Phone Booking</h3>
          <p>Direct line to dispatch at 7075918108 without complicated IVR menus or waiting times.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">🚐</div>
          <h3>Multiple Ambulance Options</h3>
          <p>From compact urban emergency vans to spacious high-roof Force Traveller ICU ambulances.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">🛏</div>
          <h3>Patient Transportation</h3>
          <p>Stretcher-based, wheel-chair assisted, and reclining bed transfers with attendant seating.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">🏥</div>
          <h3>Hospital Transfers</h3>
          <p>Coordinated shifts between private hospitals, government centers, and diagnostic institutes.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">🚨</div>
          <h3>Emergency Support</h3>
          <p>Priority vehicle dispatch assistance for sudden traumas and urgent medical crises.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">📱</div>
          <h3>Mobile-Friendly Booking</h3>
          <p>Quick online request forms and direct one-tap WhatsApp / telephone calling on mobile devices.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 10. AMBULANCE TYPES SECTION (8 CARDS) -->
  <section class="section section-dark" aria-label="Our Ambulance Types">
    <div class="container">
      <div class="section-header">
        <span class="section-badge section-badge-dark">VEHICLE FLEET</span>
        <h2>OUR AMBULANCE TYPES</h2>
        <p class="section-subtitle">Select the appropriate ambulance category suited to the medical condition of the patient.</p>
      </div>

      <div class="types-grid">
        <!-- 1. Emergency Ambulance -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/ambulance-emergency.jpg" alt="Emergency Ambulance Hyderabad" class="type-img" loading="lazy">
            <span class="type-tag">Immediate Dispatch</span>
          </div>
          <div class="type-card-body">
            <h3>1. Emergency Ambulance</h3>
            <p>Rapid medical transportation for acute emergencies, sudden distress, or accident sites in Hyderabad.</p>
            <div class="type-card-actions">
              <a href="emergency.html" class="card-link">Learn More ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call Now</a>
            </div>
          </div>
        </article>

        <!-- 2. ICU Ambulance -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/icu-ambulance.jpg" alt="ICU Ambulance Hyderabad" class="type-img" loading="lazy">
            <span class="type-tag">Critical Care</span>
          </div>
          <div class="type-card-body">
            <h3>2. ICU Ambulance</h3>
            <p>High-care vehicle configured for intensive care transfers, ventilators, and vital sign monitoring.</p>
            <div class="type-card-actions">
              <a href="icu.html" class="card-link">Learn More ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call Now</a>
            </div>
          </div>
        </article>

        <!-- 3. Advanced Life Support -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/advanced-life-support.jpg" alt="Advanced Life Support Ambulance Hyderabad" class="type-img" loading="lazy">
            <span class="type-tag">Life Support</span>
          </div>
          <div class="type-card-body">
            <h3>3. Advanced Life Support</h3>
            <p>Spacious Force Traveller vehicles equipped for patients needing continuous oxygen and attendant care.</p>
            <div class="type-card-actions">
              <a href="advanced-life-support.html" class="card-link">Learn More ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call Now</a>
            </div>
          </div>
        </article>

        <!-- 4. Basic Life Support -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/basic-life-support.jpg" alt="Basic Life Support Ambulance" class="type-img" loading="lazy">
            <span class="type-tag">Standard Support</span>
          </div>
          <div class="type-card-body">
            <h3>4. Basic Life Support</h3>
            <p>Comfortable transportation for stable patients needing basic monitoring and stretcher facilities.</p>
            <div class="type-card-actions">
              <a href="basic-life-support.html" class="card-link">Learn More ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call Now</a>
            </div>
          </div>
        </article>

        <!-- 5. Patient Transfer Ambulance -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/patient-transfer.jpg" alt="Patient Transfer Ambulance" class="type-img" loading="lazy">
            <span class="type-tag">Routine &amp; Discharge</span>
          </div>
          <div class="type-card-body">
            <h3>5. Patient Transfer</h3>
            <p>Bed-to-bed transfers between residence and healthcare center for dialysis, checkups, or convalescence.</p>
            <div class="type-card-actions">
              <a href="patient-transfer.html" class="card-link">Learn More ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call Now</a>
            </div>
          </div>
        </article>

        <!-- 6. Hospital Transfer Ambulance -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/hospital-transfer.jpg" alt="Hospital Transfer Ambulance" class="type-img" loading="lazy">
            <span class="type-tag">Inter-Hospital</span>
          </div>
          <div class="type-card-body">
            <h3>6. Hospital Transfer</h3>
            <p>Planned inter-facility transfers ensuring continuity of medical oversight between hospitals.</p>
            <div class="type-card-actions">
              <a href="hospital-transfer.html" class="card-link">Learn More ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call Now</a>
            </div>
          </div>
        </article>

        <!-- 7. Mortuary Ambulance -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/mortuary.jpg" alt="Mortuary Ambulance and Freezer Box" class="type-img" loading="lazy">
            <span class="type-tag">Dignified Transit</span>
          </div>
          <div class="type-card-body">
            <h3>7. Mortuary Ambulance</h3>
            <p>Dignified, respectful dead body transport and refrigerated freezer box rental services on demand.</p>
            <div class="type-card-actions">
              <a href="mortuary.html" class="card-link">Learn More ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call Now</a>
            </div>
          </div>
        </article>

        <!-- 8. Corporate Ambulance -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/corporate.jpg" alt="Corporate Ambulance Service" class="type-img" loading="lazy">
            <span class="type-tag">On-Site Standby</span>
          </div>
          <div class="type-card-body">
            <h3>8. Corporate Ambulance</h3>
            <p>On-site medical standby vehicles for corporate parks, manufacturing plants, and public events.</p>
            <div class="type-card-actions">
              <a href="corporate.html" class="card-link">Learn More ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call Now</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 40. HOW IT WORKS -->
  <section class="section" aria-label="How It Works">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">SIMPLE 4-STEP PROCESS</span>
        <h2>How It Works</h2>
        <p class="section-subtitle">Arranging an ambulance with Mahesh Ambulance Service is straightforward and immediate.</p>
      </div>

      <div class="steps-grid">
        <div class="step-card">
          <div class="step-number">01</div>
          <h3>CALL</h3>
          <p>Call our 24/7 direct helpline at <strong>7075918108</strong> to speak directly with our team.</p>
        </div>

        <div class="step-card">
          <div class="step-number">02</div>
          <h3>SHARE LOCATION</h3>
          <p>Provide your exact pickup location, landmark, and desired destination hospital or home.</p>
        </div>

        <div class="step-card">
          <div class="step-number">03</div>
          <h3>CONFIRM SERVICE</h3>
          <p>Confirm the required ambulance type (BLS, ALS, ICU, or Transfer) and vehicle availability.</p>
        </div>

        <div class="step-card">
          <div class="step-number">04</div>
          <h3>AMBULANCE SUPPORT</h3>
          <p>Our vehicle arrives to safely proceed with the arranged patient transportation.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 41. TRUST SECTION -->
  <section class="section" style="padding-top: 0;" aria-label="Trust Section">
    <div class="container">
      <div class="trust-banner">
        <div class="trust-content">
          <span class="section-badge section-badge-dark">LOCAL HEALTHCARE PARTNER</span>
          <h2>Your Local Ambulance Service in Hyderabad</h2>
          <p>Mahesh Ambulance Service is committed to supporting families and medical institutions across Greater Hyderabad with reliable road transportation, transparent coordination, and compassionate service.</p>

          <div class="trust-checklist">
            <div class="trust-check-item"><span>✓</span> Hyderabad-focused service</div>
            <div class="trust-check-item"><span>✓</span> Easy direct phone contact</div>
            <div class="trust-check-item"><span>✓</span> Multiple transportation options</div>
            <div class="trust-check-item"><span>✓</span> Availability confirmation</div>
            <div class="trust-check-item"><span>✓</span> Simple booking procedure</div>
            <div class="trust-check-item"><span>✓</span> Outstation transit across Telangana</div>
          </div>

          <a href="tel:+917075918108" class="btn btn-primary btn-lg">
            ☎ Contact 7075918108 Directly
          </a>
        </div>

        <div class="trust-contact-box">
          <h3>Need Service Confirmation?</h3>
          <p>Speak directly with Mahesh Goud or Srisailam Goud for immediate vehicle deployment.</p>
          <a href="tel:+917075918108" class="btn btn-primary" style="width: 100%; margin-bottom: 0.75rem;">
            ☎ CALL: 7075918108
          </a>
          <a href="https://wa.me/917075918108" target="_blank" rel="noopener" class="btn btn-whatsapp" style="width: 100%;">
            ${icons.whatsapp} WhatsApp Message
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICE AREAS PREVIEW -->
  <section class="section" style="background-color: var(--white);" aria-label="Service Areas Preview">
    <div class="container text-center">
      <div class="section-header">
        <span class="section-badge">HYDERABAD COVERAGE</span>
        <h2>Ambulance Service Areas in Hyderabad</h2>
        <p class="section-subtitle">Serving all major residential hubs, IT corridors, and healthcare centers across Greater Hyderabad.</p>
      </div>

      <div class="areas-tags-container">
        <span class="area-tag">${icons.mapPin} Hyderabad Central</span>
        <span class="area-tag">${icons.mapPin} Secunderabad</span>
        <span class="area-tag">${icons.mapPin} HITEC City</span>
        <span class="area-tag">${icons.mapPin} Gachibowli</span>
        <span class="area-tag">${icons.mapPin} Banjara Hills</span>
        <span class="area-tag">${icons.mapPin} Jubilee Hills</span>
        <span class="area-tag">${icons.mapPin} Kukatpally</span>
        <span class="area-tag">${icons.mapPin} Miyapur</span>
        <span class="area-tag">${icons.mapPin} LB Nagar</span>
        <span class="area-tag">${icons.mapPin} Uppal</span>
        <span class="area-tag">${icons.mapPin} Begumpet</span>
        <span class="area-tag">${icons.mapPin} Malkajgiri</span>
        <span class="area-tag">${icons.mapPin} Shamshabad</span>
        <span class="area-tag">${icons.mapPin} Telangana Highways</span>
      </div>

      <div class="notice-box container-narrow" style="margin: 2rem auto;">
        <span class="notice-box-icon">ℹ️</span>
        <p style="margin:0;">Availability may vary by location, ambulance type and time. Please call <strong>7075918108</strong> to confirm current vehicle proximity.</p>
      </div>

      <a href="areas.html" class="btn btn-outline">
        View All Coverage Areas ${icons.arrowRight}
      </a>
    </div>
  </section>

  <!-- GALLERY PREVIEW -->
  <section class="section" aria-label="Fleet Gallery Preview">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">REAL FLEET PHOTOS</span>
        <h2>Our Vehicles &amp; Medical Facilities</h2>
        <p class="section-subtitle">Real photographs of our emergency ambulances and specialized patient compartments.</p>
      </div>

      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="images/ambulance-hero.jpg" alt="Mahesh Ambulance Force Traveller" loading="lazy">
          <div class="gallery-overlay">
            <span class="gallery-category-badge">Ambulance Fleet</span>
            <span class="gallery-caption">Advanced Life Support Ambulance (TS07 UK 2556)</span>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/icu-ambulance.jpg" alt="ICU Critical Care Equipment" loading="lazy">
          <div class="gallery-overlay">
            <span class="gallery-category-badge">Medical Care</span>
            <span class="gallery-caption">Multi-Parameter Monitor &amp; Infusion Units</span>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/hospital-transfer.jpg" alt="Patient Stretcher Interior" loading="lazy">
          <div class="gallery-overlay">
            <span class="gallery-category-badge">Patient Transport</span>
            <span class="gallery-caption">Patient Bed Ramp &amp; Attendant Seats</span>
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 2.5rem;">
        <a href="gallery.html" class="btn btn-secondary">
          View Complete Photo Gallery &rarr;
        </a>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS PREVIEW -->
  <section class="section" style="background-color: var(--white);" aria-label="Customer Feedback Preview">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">CLIENT FEEDBACK</span>
        <h2>What Families Say About Our Service</h2>
        <p class="section-subtitle">Sample and client feedback reflecting our commitment to patient care in Hyderabad.</p>
      </div>

      <div class="testimonials-slider-container">
        <div class="testimonials-track">
          <div class="testimonial-slide">
            <div class="testimonial-card">
              <div class="testimonial-stars">★★★★★</div>
              <p class="testimonial-quote">"During an urgent hospital shift from Kukatpally to Banjara Hills, Mahesh Ambulance Service responded promptly. The vehicle was clean and the stretcher transfer was handled carefully."</p>
              <h4 class="testimonial-author">R. Venkatesh</h4>
              <span class="testimonial-location">Hyderabad</span>
              <span class="testimonial-label">Demonstration Feedback</span>
            </div>
          </div>
          <div class="testimonial-slide">
            <div class="testimonial-card">
              <div class="testimonial-stars">★★★★★</div>
              <p class="testimonial-quote">"We arranged a patient discharge transfer to our home in Secunderabad. Booking over phone was straightforward and the driver coordinated smoothly with hospital security."</p>
              <h4 class="testimonial-author">Sunita K.</h4>
              <span class="testimonial-location">Secunderabad</span>
              <span class="testimonial-label">Demonstration Feedback</span>
            </div>
          </div>
          <div class="testimonial-slide">
            <div class="testimonial-card">
              <div class="testimonial-stars">★★★★★</div>
              <p class="testimonial-quote">"Very respectful and helpful service when we required a mortuary freezer box for home preservation. Arrived on time as promised."</p>
              <h4 class="testimonial-author">M. Srinivas Rao</h4>
              <span class="testimonial-location">Greater Hyderabad</span>
              <span class="testimonial-label">Demonstration Feedback</span>
            </div>
          </div>
        </div>

        <div class="slider-controls">
          <button class="slider-arrow-btn slider-prev" aria-label="Previous Testimonial">‹</button>
          <div class="slider-dots"></div>
          <button class="slider-arrow-btn slider-next" aria-label="Next Testimonial">›</button>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ PREVIEW -->
  <section class="section" aria-label="Frequently Asked Questions Preview">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">COMMON QUESTIONS</span>
        <h2>Frequently Asked Questions</h2>
        <p class="section-subtitle">Quick answers about our 24/7 ambulance services in Hyderabad.</p>
      </div>

      <div class="faq-accordion">
        <div class="faq-item">
          <button class="faq-header" aria-expanded="false">
            <span>1. How can I book an ambulance?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              You can book an ambulance immediately by calling <strong>7075918108</strong>, sending a message on WhatsApp, or submitting the online booking form on our website.
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-header" aria-expanded="false">
            <span>2. Is Mahesh Ambulance Service available 24/7?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              Yes, Mahesh Ambulance Service operates 24 hours a day, 7 days a week, including weekends and public holidays across Hyderabad and Telangana.
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-header" aria-expanded="false">
            <span>3. Do you provide ambulance service in Hyderabad?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              Yes, Hyderabad is our primary service region, covering Secunderabad, Cyberabad, Greater Hyderabad, and highway transit across Telangana.
            </div>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-header" aria-expanded="false">
            <span>4. Do you provide ICU ambulance service?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              Yes, we provide ICU ambulances equipped for critical care patient transfers. Please call 7075918108 to specify the patient's medical requirements and verify current vehicle equipment availability.
            </div>
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <a href="faq.html" class="btn btn-outline">
          View All 10 FAQs ${icons.arrowRight}
        </a>
      </div>
    </div>
  </section>

  <!-- EMERGENCY CTA BANNER -->
  <section class="section" style="background: linear-gradient(135deg, #0B1B2B 0%, #173250 100%); color: var(--white);" aria-label="Final Call to Action">
    <div class="container text-center">
      <div class="container-narrow" style="margin: 0 auto;">
        <span class="section-badge section-badge-dark">24/7 HELPLINE</span>
        <h2 style="color: var(--white); margin-bottom: 1rem;">Do You Require Immediate Ambulance Assistance?</h2>
        <p style="color: #CBD5E1; font-size: 1.125rem; margin-bottom: 2rem;">Our coordination team is standing by to confirm vehicle proximity and dispatch an ambulance to your location in Hyderabad.</p>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1.25rem;">
          <a href="tel:+917075918108" class="btn btn-primary btn-lg">
            ☎ CALL 7075918108 NOW
          </a>
          <a href="https://wa.me/917075918108" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg">
            ${icons.whatsapp} WhatsApp Location
          </a>
          <a href="booking.html" class="btn btn-outline-white btn-lg">
            Book Online Form
          </a>
        </div>
      </div>
    </div>
  </section>
`;

// Write Index.html
fs.writeFileSync(
  path.join(rootDir, 'index.html'),
  renderHtmlDocument({
    title: "Mahesh Ambulance Service | 24/7 Ambulance in Hyderabad | Call 7075918108",
    description: "Mahesh Ambulance Service provides 24/7 ambulance services in Hyderabad, Telangana. ICU ambulances, emergency response, patient transfers, and mortuary support. Call 7075918108.",
    canonical: "index.html",
    activePage: "index.html",
    mainContent: indexContent
  })
);
console.log("Created index.html");
