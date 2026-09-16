const fs = require('fs');
const path = require('path');
const { renderHtmlDocument, icons } = require('./generate_templates');

const rootDir = __dirname;

function pageHero(title, subtitle, currentPageName) {
  return `
  <section class="page-hero" aria-label="Page Header">
    <div class="container page-hero-content">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="index.html">Home</a> &gt;
        <span class="current">${currentPageName}</span>
      </nav>
      <h1 class="page-hero-title">${title}</h1>
      <p class="page-hero-desc">${subtitle}</p>
    </div>
  </section>
  `;
}

// --------------------------------------------------------------------------
// 2. ABOUT.HTML
// --------------------------------------------------------------------------
const aboutContent = `
  ${pageHero(
    "About Mahesh Ambulance Service",
    "Committed to providing dependable, 24/7 medical transportation across Hyderabad and Telangana.",
    "About Us"
  )}

  <section class="section">
    <div class="container about-grid">
      <div class="about-images-wrapper">
        <img src="images/ambulance-hero.jpg" alt="Mahesh Ambulance Service Fleet" class="about-main-img" width="540" height="420">
        <div class="about-badge-card">
          <h4>HYDERABAD</h4>
          <p>Local ambulance dispatch and inter-district patient transportation</p>
        </div>
      </div>
      <div class="about-content">
        <span class="section-badge">OUR IDENTITY</span>
        <h2>Dedicated Ambulance Support in Hyderabad</h2>
        <p class="about-lead">
          Mahesh Ambulance Service provides ambulance transportation support for people in Hyderabad and surrounding areas. Customers can contact the service directly to check vehicle availability and arrange transportation based on their needs.
        </p>
        <p>
          Founded and managed with a dedicated focus on patient safety, our operations are overseen by Mahesh Goud and Srisailam Goud. We understand that during medical emergencies or hospital transfers, families need prompt communication, transparent vehicle details, and careful handling.
        </p>
        <p>
          Our vehicle fleet ranges from nimble urban emergency response vans to high-roof Force Traveller Advanced Life Support ambulances equipped for critical care and inter-hospital journeys.
        </p>
        <div class="about-details-list">
          <div class="about-detail-item"><span class="detail-check-icon">✓</span> 24/7 Telephone Accessibility</div>
          <div class="about-detail-item"><span class="detail-check-icon">✓</span> Local Hyderabad Road Familiarity</div>
          <div class="about-detail-item"><span class="detail-check-icon">✓</span> Patient Stretcher Care</div>
          <div class="about-detail-item"><span class="detail-check-icon">✓</span> Compassionate Service</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mission & Values -->
  <section class="section" style="background-color: var(--white);">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">OUR PRINCIPLES</span>
        <h2>Operating Values</h2>
        <p class="section-subtitle">How we approach every ambulance request with dignity, safety, and care.</p>
      </div>

      <div class="why-grid">
        <div class="why-card">
          <div class="why-icon">🤝</div>
          <h3>Direct Communication</h3>
          <p>You speak directly to our dispatch personnel at 7075918108. No automated call queues or delays.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">🛡️</div>
          <h3>Patient Safety First</h3>
          <p>Vehicles are maintained, sanitized, and configured with patient ramps and attendant seats.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">⏱️</div>
          <h3>24/7 Readiness</h3>
          <p>Prepared for scheduled transfers, emergency hospital admissions, and late-night discharge shifts.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">🕊️</div>
          <h3>Respect &amp; Dignity</h3>
          <p>Providing compassionate mortuary transport and patient transfers with courteous staff.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="emergency-strip">
    <div class="container emergency-strip-inner">
      <div class="strip-text-box">
        <div class="strip-siren-icon">☎</div>
        <div>
          <h2 class="strip-heading">Contact Mahesh Ambulance Service</h2>
          <p class="strip-subtext">Call 7075918108 to check vehicle availability in your area.</p>
        </div>
      </div>
      <div class="strip-cta">
        <a href="tel:+917075918108" class="btn btn-white-call">CALL 7075918108</a>
        <a href="booking.html" class="btn btn-secondary">Book Online</a>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'about.html'),
  renderHtmlDocument({
    title: "About Us | Mahesh Ambulance Service Hyderabad | 7075918108",
    description: "Learn about Mahesh Ambulance Service in Hyderabad, Telangana. Providing 24/7 ambulance transportation, patient transfers, and emergency support. Call 7075918108.",
    canonical: "about.html",
    activePage: "about.html",
    mainContent: aboutContent
  })
);
console.log("Created about.html");

// --------------------------------------------------------------------------
// 3. SERVICES.HTML
// --------------------------------------------------------------------------
const servicesContent = `
  ${pageHero(
    "Ambulance Services in Hyderabad",
    "Complete range of 24/7 medical transportation, life support, patient transfers, and hearse services.",
    "Services"
  )}

  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">SERVICE CATALOG</span>
        <h2>Comprehensive Ambulance Solutions</h2>
        <p class="section-subtitle">Please call 7075918108 to confirm availability and vehicle suitability based on patient medical requirements.</p>
      </div>

      <div class="types-grid">
        <!-- 1 -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/ambulance-emergency.jpg" alt="Emergency Ambulance Service" class="type-img">
            <span class="type-tag">Emergency</span>
          </div>
          <div class="type-card-body">
            <h3>Emergency Ambulance</h3>
            <p>Immediate medical transportation for acute emergencies, sudden trauma, or hospital admissions in Hyderabad.</p>
            <div class="type-card-actions">
              <a href="emergency.html" class="card-link">Full Details ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call 7075918108</a>
            </div>
          </div>
        </article>

        <!-- 2 -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/icu-ambulance.jpg" alt="ICU Ambulance Service" class="type-img">
            <span class="type-tag">Critical Care</span>
          </div>
          <div class="type-card-body">
            <h3>ICU Ambulance</h3>
            <p>High-care vehicle configured for critical patient transfers requiring continuous monitoring and medical oversight.</p>
            <div class="type-card-actions">
              <a href="icu.html" class="card-link">Full Details ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call 7075918108</a>
            </div>
          </div>
        </article>

        <!-- 3 -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/advanced-life-support.jpg" alt="Advanced Life Support Ambulance" class="type-img">
            <span class="type-tag">Advanced Care</span>
          </div>
          <div class="type-card-body">
            <h3>Advanced Life Support</h3>
            <p>Force Traveller ambulances equipped for patients requiring comprehensive support and medical attendant assistance.</p>
            <div class="type-card-actions">
              <a href="advanced-life-support.html" class="card-link">Full Details ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call 7075918108</a>
            </div>
          </div>
        </article>

        <!-- 4 -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/basic-life-support.jpg" alt="Basic Life Support Ambulance" class="type-img">
            <span class="type-tag">Standard Support</span>
          </div>
          <div class="type-card-body">
            <h3>Basic Life Support</h3>
            <p>Non-critical patient transit, post-surgery discharges, and routine hospital transfers with stretcher facilities.</p>
            <div class="type-card-actions">
              <a href="basic-life-support.html" class="card-link">Full Details ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call 7075918108</a>
            </div>
          </div>
        </article>

        <!-- 5 -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/patient-transfer.jpg" alt="Patient Transfer Ambulance" class="type-img">
            <span class="type-tag">Bed-to-Bed</span>
          </div>
          <div class="type-card-body">
            <h3>Patient Transfer</h3>
            <p>Home-to-hospital, hospital-to-hospital, and hospital-to-home patient shifts with stretcher bed and attendant seating.</p>
            <div class="type-card-actions">
              <a href="patient-transfer.html" class="card-link">Full Details ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call 7075918108</a>
            </div>
          </div>
        </article>

        <!-- 6 -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/hospital-transfer.jpg" alt="Hospital Transfer Ambulance" class="type-img">
            <span class="type-tag">Inter-Hospital</span>
          </div>
          <div class="type-card-body">
            <h3>Hospital Transfer</h3>
            <p>Planned inter-hospital transit across Hyderabad, connecting specialty care hospitals and diagnostic facilities.</p>
            <div class="type-card-actions">
              <a href="hospital-transfer.html" class="card-link">Full Details ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call 7075918108</a>
            </div>
          </div>
        </article>

        <!-- 7 -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/mortuary.jpg" alt="Mortuary Ambulance" class="type-img">
            <span class="type-tag">Respectful Transport</span>
          </div>
          <div class="type-card-body">
            <h3>Mortuary Ambulance</h3>
            <p>Dignified dead body transportation across Hyderabad and Telangana, along with dead body freezer box rental service.</p>
            <div class="type-card-actions">
              <a href="mortuary.html" class="card-link">Full Details ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call 7075918108</a>
            </div>
          </div>
        </article>

        <!-- 8 -->
        <article class="type-card">
          <div class="type-img-wrapper">
            <img src="images/corporate.jpg" alt="Corporate Ambulance" class="type-img">
            <span class="type-tag">Corporate Standby</span>
          </div>
          <div class="type-card-body">
            <h3>Corporate Ambulance</h3>
            <p>On-site ambulance standby services for corporate offices, IT campuses, factories, sports tournaments, and events.</p>
            <div class="type-card-actions">
              <a href="corporate.html" class="card-link">Full Details ${icons.arrowRight}</a>
              <a href="tel:+917075918108" class="btn-card-call">Call 7075918108</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'services.html'),
  renderHtmlDocument({
    title: "Ambulance Services in Hyderabad | Mahesh Ambulance Service | 7075918108",
    description: "Explore all ambulance services in Hyderabad: Emergency, ICU, Advanced Life Support, Basic Life Support, Patient Transfer, Hospital Transfer, Mortuary & Corporate. Call 7075918108.",
    canonical: "services.html",
    activePage: "services.html",
    mainContent: servicesContent
  })
);
console.log("Created services.html");

// --------------------------------------------------------------------------
// 4. EMERGENCY.HTML
// --------------------------------------------------------------------------
const emergencyContent = `
  ${pageHero(
    "Emergency Ambulance Service in Hyderabad",
    "Rapid emergency medical transportation support across Hyderabad and surrounding districts.",
    "Emergency Ambulance"
  )}

  <section class="section">
    <div class="container container-narrow">
      <!-- Critical Notice as mandated by Section 11 -->
      <div class="notice-box notice-box-danger">
        <span class="notice-box-icon">⚠️</span>
        <div>
          <strong style="display:block;margin-bottom:0.25rem;">IMPORTANT EMERGENCY NOTICE</strong>
          <p style="margin:0;">If someone is in immediate danger, contact your local emergency services as appropriate. For ambulance assistance, call <strong>7075918108</strong>.</p>
        </div>
      </div>

      <div style="text-align: center; margin: 2rem 0;">
        <a href="tel:+917075918108" class="btn btn-primary btn-lg" style="font-size:1.25rem; padding:1.25rem 2.5rem;">
          ☎ CALL EMERGENCY HELPLINE: 7075918108
        </a>
      </div>

      <div class="form-card" style="margin-top: 2.5rem;">
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Emergency Transportation Information</h2>
        <p>Mahesh Ambulance Service assists patients and families with urgent transportation to healthcare facilities across Hyderabad. When an emergency arises, rapid communication and precise location sharing are critical.</p>

        <h3 style="font-size: 1.2rem; margin: 1.5rem 0 0.75rem;">1. Pickup Location Instructions</h3>
        <ul style="list-style: disc; padding-left: 1.25rem; color: var(--text-body); margin-bottom: 1.5rem;">
          <li>Provide your complete address with a well-known nearby landmark (e.g., school, temple, metro pillar, main road).</li>
          <li>Share your live WhatsApp GPS location to <strong>+91 7075918108</strong> if possible to guide the ambulance directly.</li>
          <li>Ensure building gates are unlocked and security personnel are alerted so the ambulance can enter without delay.</li>
        </ul>

        <h3 style="font-size: 1.2rem; margin: 1.5rem 0 0.75rem;">2. Destination Information</h3>
        <p>Specify the target hospital or medical facility. If you have already alerted the hospital's emergency room or trauma team, inform our dispatch coordinator so they can route appropriately.</p>

        <h3 style="font-size: 1.2rem; margin: 1.5rem 0 0.75rem;">3. Patient Condition Information</h3>
        <p>Please briefly describe the patient's condition to help us assign the best-suited vehicle:</p>
        <ul style="list-style: disc; padding-left: 1.25rem; color: var(--text-body); margin-bottom: 1.5rem;">
          <li>Is the patient conscious and breathing comfortably?</li>
          <li>Is oxygen support or stretcher mobility required?</li>
          <li>Are medical personnel or attendants accompanying the patient?</li>
        </ul>

        <h3 style="font-size: 1.2rem; margin: 1.5rem 0 0.75rem;">4. Hyderabad Service Area</h3>
        <p>We serve all major zones in Hyderabad including Banjara Hills, Jubilee Hills, Secunderabad, Kukatpally, Madhapur, Gachibowli, LB Nagar, Charminar, and highway corridors throughout Telangana.</p>

        <div style="background-color: var(--light-bg); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin-top: 1.5rem;">
          <p style="font-weight: 707; color: var(--dark-navy); margin-bottom: 0.5rem;">For immediate emergency ambulance assistance:</p>
          <a href="tel:+917075918108" style="font-family: var(--font-heading); font-size: 1.75rem; font-weight: 900; color: var(--primary-red); display: block;">7075918108</a>
          <span style="font-size: 0.8125rem; color: var(--text-muted);">Available 24 Hours a Day / 7 Days a Week</span>
        </div>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'emergency.html'),
  renderHtmlDocument({
    title: "Emergency Ambulance Service Hyderabad | Mahesh Ambulance | 7075918108",
    description: "Emergency ambulance service in Hyderabad, Telangana. 24/7 urgent medical transportation, pickup location guidance, and immediate telephone dispatch. Call 7075918108.",
    canonical: "emergency.html",
    activePage: "emergency.html",
    mainContent: emergencyContent
  })
);
console.log("Created emergency.html");

// --------------------------------------------------------------------------
// 5. ICU.HTML
// --------------------------------------------------------------------------
const icuContent = `
  ${pageHero(
    "ICU Ambulance Service in Hyderabad",
    "Specialized intensive care patient transportation equipped for critical medical oversight.",
    "ICU Ambulance"
  )}

  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div>
          <span class="section-badge">CRITICAL CARE TRANSIT</span>
          <h2>ICU Ambulance Transportation in Hyderabad</h2>
          <p class="about-lead">
            When patients in critical condition require relocation between healthcare centers, Mahesh Ambulance Service provides ICU ambulance vehicles configured for intensive monitoring and supportive care.
          </p>
          <p>
            ICU ambulances are designed to accommodate patients requiring respiratory assistance, continuous cardiac monitoring, or post-surgical supervision during road transit across Hyderabad or outstation routes in Telangana.
          </p>

          <div class="notice-box">
            <span class="notice-box-icon">ℹ️</span>
            <p style="margin:0;">Specific medical equipment and staffing depends on patient clinical requirements. Please call <strong>7075918108</strong> to confirm vehicle equipment availability before booking.</p>
          </div>

          <h3 style="font-size: 1.25rem; margin-top: 1.5rem; margin-bottom: 0.75rem;">Key Transfer Features</h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
            <li style="display:flex; gap:0.5rem; align-items:center;">${icons.check} High-roof Force Traveller vehicle offering spacious clinical room</li>
            <li style="display:flex; gap:0.5rem; align-items:center;">${icons.check} Multi-parameter patient monitor mounting readiness</li>
            <li style="display:flex; gap:0.5rem; align-items:center;">${icons.check} Smooth stretcher loading ramp for seamless patient transfer</li>
            <li style="display:flex; gap:0.5rem; align-items:center;">${icons.check} Attendant and medical personnel seating alongside the patient</li>
          </ul>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="tel:+917075918108" class="btn btn-primary btn-lg">
              ☎ CALL NOW: 7075918108
            </a>
            <a href="booking.html" class="btn btn-outline btn-lg">
              Book ICU Ambulance
            </a>
          </div>
        </div>

        <div>
          <img src="images/icu-ambulance.jpg" alt="ICU Ambulance Critical Care Interior" style="border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); width: 100%; height: 420px; object-fit: cover;">
        </div>
      </div>
    </div>
  </section>

  <!-- Medical Support Requirements Section -->
  <section class="section" style="background-color: var(--white);">
    <div class="container container-narrow">
      <div class="section-header">
        <span class="section-badge">TRANSFER PROTOCOL</span>
        <h2>Medical Support &amp; Booking Guidelines</h2>
        <p class="section-subtitle">Steps to ensure a safe and properly supported ICU transfer.</p>
      </div>

      <div class="form-card">
        <h3 style="margin-bottom: 1rem;">1. Hospital Coordination</h3>
        <p>Ensure the treating physician and the receiving hospital ICU have cleared the patient for road transport. Confirm bed availability at the destination hospital prior to departure.</p>

        <h3 style="margin-bottom: 1rem; margin-top: 1.5rem;">2. Medical Staff Accompaniment</h3>
        <p>Depending on the patient's severity, coordinate with the hospital for nursing or medical escort personnel if required. Our vehicles provide comfortable seating alongside the main stretcher.</p>

        <h3 style="margin-bottom: 1rem; margin-top: 1.5rem;">3. Booking Procedure</h3>
        <p>Call our 24/7 coordination line at <strong>7075918108</strong>. Provide the discharge summary details, patient vital status, and oxygen or electrical power requirements.</p>

        <div style="text-align: center; margin-top: 2rem;">
          <a href="tel:+917075918108" class="btn btn-primary">
            ☎ Contact Dispatch: 7075918108
          </a>
        </div>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'icu.html'),
  renderHtmlDocument({
    title: "ICU Ambulance Service Hyderabad | Mahesh Ambulance | 7075918108",
    description: "ICU ambulance service in Hyderabad, Telangana. Critical care patient transportation, high-roof vehicles, stretcher ramps, and 24/7 direct booking. Call 7075918108.",
    canonical: "icu.html",
    activePage: "icu.html",
    mainContent: icuContent
  })
);
console.log("Created icu.html");

// --------------------------------------------------------------------------
// 6. ADVANCED-LIFE-SUPPORT.HTML
// --------------------------------------------------------------------------
const alsContent = `
  ${pageHero(
    "Advanced Life Support Ambulance",
    "Comprehensive patient transportation for patients requiring supportive care during transit.",
    "Advanced Life Support"
  )}

  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div>
          <span class="section-badge">ADVANCED MONITORING</span>
          <h2>Advanced Life Support Ambulance in Hyderabad</h2>
          <p class="about-lead">
            Our Advanced Life Support (ALS) ambulances are designated for patients experiencing moderate to severe medical distress who require careful monitoring, oxygen flow, and attendant oversight on the road.
          </p>
          <p>
            Built on spacious Force Traveller platforms (such as our liveried vehicle TS07 UK 2556), these ambulances provide superior interior headroom, climate control, and vibration damping to ensure a secure journey.
          </p>

          <h3 style="font-size: 1.25rem; margin-top: 1.5rem; margin-bottom: 0.75rem;">Suitable Transportation Situations</h3>
          <ul style="list-style: disc; padding-left: 1.25rem; color: var(--text-body); margin-bottom: 1.5rem;">
            <li>Severe cardiac or respiratory observation cases</li>
            <li>Post-operative transfers between medical facilities</li>
            <li>Patients requiring continuous oxygen inhalation during transit</li>
            <li>Long-distance interstate transfers across Telangana and Andhra Pradesh</li>
          </ul>

          <div class="notice-box">
            <span class="notice-box-icon">ℹ️</span>
            <p style="margin:0;">Equipment configuration may vary. Avoid making unverified assumptions regarding specific clinical gear. Please call <strong>7075918108</strong> to discuss exact patient requirements.</p>
          </div>

          <a href="tel:+917075918108" class="btn btn-primary btn-lg">
            ☎ CALL NOW: 7075918108
          </a>
        </div>

        <div>
          <img src="images/advanced-life-support.jpg" alt="Advanced Life Support Ambulance Mahesh Ambulance Service" style="border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); width: 100%; height: 420px; object-fit: cover;">
        </div>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'advanced-life-support.html'),
  renderHtmlDocument({
    title: "Advanced Life Support Ambulance Hyderabad | Mahesh Ambulance | 7075918108",
    description: "Advanced Life Support (ALS) ambulance services in Hyderabad, Telangana. Long-distance and inter-hospital patient transport. Call 7075918108.",
    canonical: "advanced-life-support.html",
    activePage: "advanced-life-support.html",
    mainContent: alsContent
  })
);
console.log("Created advanced-life-support.html");

// --------------------------------------------------------------------------
// 7. BASIC-LIFE-SUPPORT.HTML
// --------------------------------------------------------------------------
const blsContent = `
  ${pageHero(
    "Basic Life Support Ambulance",
    "Reliable, comfortable transportation for stable patients, post-surgery discharges, and routine clinic appointments.",
    "Basic Life Support"
  )}

  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div>
          <span class="section-badge">NON-CRITICAL TRANSIT</span>
          <h2>Basic Life Support Ambulance in Hyderabad</h2>
          <p class="about-lead">
            Basic Life Support (BLS) ambulances provide essential, dignified transportation for patients who are hemodynamically stable but unable to travel safely in a standard passenger vehicle.
          </p>
          <p>
            Whether returning home following an orthopedic procedure, traveling for dialysis therapy, or moving to a rehabilitation center, our BLS ambulances ensure comfortable stretcher positioning and family accompaniment.
          </p>

          <h3 style="font-size: 1.25rem; margin-top: 1.5rem; margin-bottom: 0.75rem;">Typical BLS Scenarios</h3>
          <ul style="list-style: disc; padding-left: 1.25rem; color: var(--text-body); margin-bottom: 1.5rem;">
            <li>Routine hospital discharge back to residence</li>
            <li>Scheduled diagnostic appointments (MRI, CT scans, oncology consultations)</li>
            <li>Dialysis patient transit on scheduled weekdays</li>
            <li>Orthopedic injury, fracture, and non-ambulatory transport</li>
          </ul>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="tel:+917075918108" class="btn btn-primary btn-lg">☎ CALL: 7075918108</a>
            <a href="booking.html" class="btn btn-outline btn-lg">Book BLS Ambulance</a>
          </div>
        </div>

        <div>
          <img src="images/basic-life-support.jpg" alt="Basic Life Support Ambulance Interior" style="border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); width: 100%; height: 420px; object-fit: cover;">
        </div>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'basic-life-support.html'),
  renderHtmlDocument({
    title: "Basic Life Support Ambulance Hyderabad | Mahesh Ambulance | 7075918108",
    description: "Basic Life Support (BLS) ambulance services in Hyderabad. Safe patient transit, post-discharge travel, dialysis and clinic visits. Call 7075918108.",
    canonical: "basic-life-support.html",
    activePage: "basic-life-support.html",
    mainContent: blsContent
  })
);
console.log("Created basic-life-support.html");

// --------------------------------------------------------------------------
// 8. PATIENT-TRANSFER.HTML
// --------------------------------------------------------------------------
const patientTransferContent = `
  ${pageHero(
    "Patient Transfer Ambulance",
    "Safe bed-to-bed transfers: Home to Hospital, Hospital to Hospital, and Hospital to Home.",
    "Patient Transfer"
  )}

  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">TRANSFER SOLUTIONS</span>
        <h2>Flexible Transfer Routes</h2>
        <p class="section-subtitle">Comfortable, respectful transportation designed around patient dignity and ease of transfer.</p>
      </div>

      <div class="quick-services-grid" style="grid-template-columns: repeat(3, 1fr); margin-bottom: 3.5rem;">
        <div class="quick-card">
          <div class="quick-card-icon">🏠 ➔ 🏥</div>
          <h3>Home &rarr; Hospital</h3>
          <p>For planned admissions, emergency room evaluations, scheduled surgeries, and medical reviews.</p>
        </div>
        <div class="quick-card">
          <div class="quick-card-icon">🏥 ➔ 🏥</div>
          <h3>Hospital &rarr; Hospital</h3>
          <p>Inter-facility transfers for specialized diagnostics, secondary opinions, or advanced care units.</p>
        </div>
        <div class="quick-card">
          <div class="quick-card-icon">🏥 ➔ 🏠</div>
          <h3>Hospital &rarr; Home</h3>
          <p>Safe post-discharge transport with bedside assistance for elderly or recuperating family members.</p>
        </div>
      </div>

      <!-- Transfer Helper Form -->
      <div class="form-card container-narrow" style="margin: 0 auto;">
        <h3 style="margin-bottom: 0.5rem; text-align: center;">Arrange a Patient Transfer</h3>
        <p style="color: var(--text-muted); font-size: 0.9375rem; text-align: center; margin-bottom: 1.75rem;">Submit transfer details below or call 7075918108 for immediate confirmation.</p>

        <form data-validate data-form-type="patient transfer booking">
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Full Name <span class="req">*</span></label>
              <input type="text" class="form-control" required placeholder="Your Name">
              <div class="invalid-feedback">Please enter your name.</div>
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number <span class="req">*</span></label>
              <input type="tel" class="form-control" required placeholder="10-digit mobile number">
              <div class="invalid-feedback">Please enter a valid phone number.</div>
            </div>
            <div class="form-group">
              <label class="form-label">Pickup Location <span class="req">*</span></label>
              <input type="text" class="form-control" required placeholder="Area / Hospital / Home Address">
              <div class="invalid-feedback">Please enter pickup location.</div>
            </div>
            <div class="form-group">
              <label class="form-label">Destination <span class="req">*</span></label>
              <input type="text" class="form-control" required placeholder="Destination address or Hospital">
              <div class="invalid-feedback">Please enter destination.</div>
            </div>
            <div class="form-group">
              <label class="form-label">Transfer Date <span class="req">*</span></label>
              <input type="date" class="form-control" required>
              <div class="invalid-feedback">Please choose date.</div>
            </div>
            <div class="form-group">
              <label class="form-label">Preferred Time <span class="req">*</span></label>
              <input type="time" class="form-control" required>
              <div class="invalid-feedback">Please choose time.</div>
            </div>
            <div class="form-group form-grid-full">
              <label class="form-label">Ambulance Type <span class="req">*</span></label>
              <select class="form-control" required>
                <option value="">Select Ambulance Category</option>
                <option value="Basic Life Support">Basic Life Support (BLS)</option>
                <option value="Patient Transfer Stretcher">Patient Transfer Stretcher Van</option>
                <option value="Advanced Life Support">Advanced Life Support (ALS)</option>
                <option value="ICU Ambulance">ICU Ambulance</option>
              </select>
              <div class="invalid-feedback">Please select ambulance type.</div>
            </div>
            <div class="form-group form-grid-full">
              <label class="form-label">Patient Requirements / Notes</label>
              <textarea class="form-control" placeholder="E.g., Stretcher required, Oxygen needed, 2 attendants accompanying, wheel chair assistance..."></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%; margin-top: 1.5rem;">
            🚑 BOOK AMBULANCE
          </button>
        </form>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'patient-transfer.html'),
  renderHtmlDocument({
    title: "Patient Transfer Ambulance Hyderabad | Mahesh Ambulance | 7075918108",
    description: "Patient transfer ambulance services in Hyderabad. Home to Hospital, Hospital to Hospital, and Hospital to Home transfers. Stretcher bed care. Call 7075918108.",
    canonical: "patient-transfer.html",
    activePage: "patient-transfer.html",
    mainContent: patientTransferContent
  })
);
console.log("Created patient-transfer.html");

// --------------------------------------------------------------------------
// 9. HOSPITAL-TRANSFER.HTML
// --------------------------------------------------------------------------
const hospitalTransferContent = `
  ${pageHero(
    "Hospital Transfer Ambulance",
    "Seamless, safe inter-hospital patient relocations across Hyderabad and Telangana medical centers.",
    "Hospital Transfer"
  )}

  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div>
          <span class="section-badge">INTER-FACILITY CARE</span>
          <h2>Hospital-to-Hospital Transportation</h2>
          <p class="about-lead">
            Moving a patient from one hospital to another requires careful timing, proper medical equipment, and smooth coordination between discharge and admission teams.
          </p>
          <p>
            Mahesh Ambulance Service regularly conducts transfers between government and private tertiary hospitals across Hyderabad, ensuring continuous patient comfort and reliable transit.
          </p>

          <h3 style="font-size: 1.25rem; margin: 1.5rem 0 0.75rem;">Key Transfer Features</h3>
          <ul style="list-style: disc; padding-left: 1.25rem; color: var(--text-body); margin-bottom: 1.5rem;">
            <li>Planned transfers scheduled around discharge doctor sign-offs</li>
            <li>Direct coordination with pickup and destination hospital ramps</li>
            <li>Multiple vehicle sizes: Eeco for compact access, Force Traveller for spacious care</li>
            <li>Assistance for medical staff or attending family members</li>
          </ul>

          <div class="notice-box">
            <span class="notice-box-icon">📞</span>
            <p style="margin:0;">Call <strong>7075918108</strong> directly to schedule an inter-hospital transfer.</p>
          </div>

          <a href="tel:+917075918108" class="btn btn-primary btn-lg">☎ CALL 7075918108</a>
        </div>

        <div>
          <img src="images/hospital-transfer.jpg" alt="Hospital Transfer Ambulance Stretcher Ramp" style="border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); width: 100%; height: 420px; object-fit: cover;">
        </div>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'hospital-transfer.html'),
  renderHtmlDocument({
    title: "Hospital Transfer Ambulance Hyderabad | Mahesh Ambulance | 7075918108",
    description: "Hospital-to-hospital ambulance transportation in Hyderabad. Coordinated inter-facility transfers between medical institutions. Call 7075918108.",
    canonical: "hospital-transfer.html",
    activePage: "hospital-transfer.html",
    mainContent: hospitalTransferContent
  })
);
console.log("Created hospital-transfer.html");

// --------------------------------------------------------------------------
// 10. MORTUARY.HTML
// --------------------------------------------------------------------------
const mortuaryContent = `
  ${pageHero(
    "Mortuary Ambulance &amp; Freezer Box Services",
    "Respectful, dignified transportation and dead body freezer box rental in Hyderabad.",
    "Mortuary Ambulance"
  )}

  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div>
          <span class="section-badge">DIGNIFIED CARE</span>
          <h2>Respectful Mortuary Transportation</h2>
          <p class="about-lead">
            During difficult times of loss, Mahesh Ambulance Service provides compassionate, dignified mortuary ambulance transportation and refrigerated dead body freezer box rental services.
          </p>
          <p>
            We handle transfers from hospital mortuaries, residences, and nursing homes to burial grounds, crematoriums, or ancestral hometowns across Telangana and neighbouring states.
          </p>

          <h3 style="font-size: 1.25rem; margin: 1.5rem 0 0.75rem;">Services Provided</h3>
          <ul style="list-style: disc; padding-left: 1.25rem; color: var(--text-body); margin-bottom: 1.5rem;">
            <li>Dead body transport ambulance across Hyderabad</li>
            <li>Outstation deceased body transit across Telangana and India</li>
            <li>Stainless steel / golden finish Dead Body Freezer Box on Rent</li>
            <li>Home delivery and prompt setup of freezer boxes</li>
            <li>Courteous, sensitive drivers and support team</li>
          </ul>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="tel:+917075918108" class="btn btn-primary btn-lg">
              ☎ CALL 24/7 HELPLINE: 7075918108
            </a>
            <a href="https://wa.me/917075918108" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg">
              ${icons.whatsapp} WhatsApp Enquiry
            </a>
          </div>
        </div>

        <div>
          <img src="images/mortuary.jpg" alt="Dead Body Freezer Box Unit Mahesh Ambulance" style="border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); width: 100%; height: 420px; object-fit: cover;">
        </div>
      </div>
    </div>
  </section>

  <!-- Freezer Box Highlights -->
  <section class="section" style="background-color: var(--white);">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">EQUIPMENT DETAILS</span>
        <h2>Dead Body Freezer Box on Rent</h2>
        <p class="section-subtitle">Hygienic, temperature-controlled preservation boxes for home and transit needs.</p>
      </div>

      <div class="quick-services-grid" style="grid-template-columns: repeat(3, 1fr);">
        <div class="quick-card">
          <div class="quick-card-icon">❄️</div>
          <h3>Home Delivery &amp; Setup</h3>
          <p>Prompt delivery to your residence across Hyderabad with electrical cable setup and operating instructions.</p>
        </div>
        <div class="quick-card">
          <div class="quick-card-icon">✨</div>
          <h3>Clean &amp; Maintained</h3>
          <p>Modern glass-top display, stainless steel/golden finish, and sanitized internal chambers.</p>
        </div>
        <div class="quick-card">
          <div class="quick-card-icon">🛣️</div>
          <h3>Long-Distance Transit</h3>
          <p>Support for native place transfers across rural Telangana, Andhra Pradesh, and other states.</p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 3rem;">
        <p style="font-size: 1.125rem; font-weight: 600; color: var(--dark-navy);">
          Please call <strong>7075918108</strong> to arrange freezer box delivery or mortuary transit.
        </p>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'mortuary.html'),
  renderHtmlDocument({
    title: "Mortuary Ambulance & Freezer Box Hyderabad | Mahesh Ambulance | 7075918108",
    description: "Dignified mortuary ambulance service and dead body freezer box on rent in Hyderabad, Telangana. Local and outstation body transport. Call 7075918108.",
    canonical: "mortuary.html",
    activePage: "mortuary.html",
    mainContent: mortuaryContent
  })
);
console.log("Created mortuary.html");

// --------------------------------------------------------------------------
// 11. CORPORATE.HTML
// --------------------------------------------------------------------------
const corporateContent = `
  ${pageHero(
    "Corporate Ambulance Services",
    "On-site ambulance standby, workplace health coverage, and event medical support in Hyderabad.",
    "Corporate Ambulance"
  )}

  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div>
          <span class="section-badge">ENTERPRISE SOLUTIONS</span>
          <h2>Medical Standby for Organizations</h2>
          <p class="about-lead">
            Mahesh Ambulance Service provides dedicated corporate medical standby ambulances for businesses, factories, tech parks, educational campuses, and special events in Hyderabad.
          </p>
          <p>
            Having an on-site ambulance ensures regulatory occupational health compliance and provides immediate peace of mind for employees, visitors, and event organizers.
          </p>

          <h3 style="font-size: 1.25rem; margin: 1.5rem 0 0.75rem;">Suitable Organizations &amp; Venues</h3>
          <ul style="list-style: disc; padding-left: 1.25rem; color: var(--text-body); margin-bottom: 1.5rem;">
            <li>IT Parks and Corporate Office Campuses</li>
            <li>Industrial Estates and Manufacturing Factories</li>
            <li>Construction and Infrastructure Sites</li>
            <li>Sports Tournaments, Marathons &amp; Concerts</li>
            <li>Conferences, Exhibitions &amp; Public Gatherings</li>
          </ul>

          <a href="tel:+917075918108" class="btn btn-primary btn-lg">
            ☎ CALL CORPORATE DESK: 7075918108
          </a>
        </div>

        <div>
          <img src="images/corporate.jpg" alt="Mahesh Ambulance Corporate Standby Unit" style="border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); width: 100%; height: 420px; object-fit: cover;">
        </div>
      </div>
    </div>
  </section>

  <!-- Corporate Enquiry Form -->
  <section class="section" style="background-color: var(--white);">
    <div class="container container-narrow">
      <div class="section-header">
        <span class="section-badge">STANDBY REQUEST</span>
        <h2>Corporate Ambulance Enquiry</h2>
        <p class="section-subtitle">Submit your organization's requirements for on-site ambulance deployment.</p>
      </div>

      <div class="form-card">
        <form data-validate data-form-type="corporate enquiry">
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Company / Organization Name <span class="req">*</span></label>
              <input type="text" class="form-control" required placeholder="Organization Name">
              <div class="invalid-feedback">Please enter organization name.</div>
            </div>
            <div class="form-group">
              <label class="form-label">Contact Person <span class="req">*</span></label>
              <input type="text" class="form-control" required placeholder="Full Name">
              <div class="invalid-feedback">Please enter contact person name.</div>
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number <span class="req">*</span></label>
              <input type="tel" class="form-control" required placeholder="Contact Mobile">
              <div class="invalid-feedback">Please enter a valid phone number.</div>
            </div>
            <div class="form-group">
              <label class="form-label">Email Address <span class="req">*</span></label>
              <input type="email" class="form-control" required placeholder="corporate@company.com">
              <div class="invalid-feedback">Please enter a valid business email.</div>
            </div>
            <div class="form-group">
              <label class="form-label">Location / Site Address <span class="req">*</span></label>
              <input type="text" class="form-control" required placeholder="Facility or Event Location in Hyderabad">
              <div class="invalid-feedback">Please enter location address.</div>
            </div>
            <div class="form-group">
              <label class="form-label">Required Date / Duration <span class="req">*</span></label>
              <input type="text" class="form-control" required placeholder="E.g., 2026-10-15 or Monthly Standby">
              <div class="invalid-feedback">Please specify date or duration.</div>
            </div>
            <div class="form-group form-grid-full">
              <label class="form-label">Message / Specific Requirements</label>
              <textarea class="form-control" placeholder="Provide details on expected attendance, shift timings, or ambulance type..."></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%; margin-top: 1.5rem;">
            SUBMIT CORPORATE ENQUIRY
          </button>
        </form>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'corporate.html'),
  renderHtmlDocument({
    title: "Corporate Ambulance Service Hyderabad | Mahesh Ambulance | 7075918108",
    description: "Corporate ambulance standby services for offices, factories, events, and campuses in Hyderabad. Submit enquiry or call 7075918108.",
    canonical: "corporate.html",
    activePage: "corporate.html",
    mainContent: corporateContent
  })
);
console.log("Created corporate.html");

// --------------------------------------------------------------------------
// 12. GALLERY.HTML
// --------------------------------------------------------------------------
const galleryData = [
  { img: 'gallery-1.jpg', cat: 'ambulances', cap: 'Advanced Life Support Force Traveller - Mahesh Ambulance' },
  { img: 'gallery-2.jpg', cat: 'emergency', cap: 'Rapid Emergency Response Ambulance with Flashing Siren' },
  { img: 'gallery-3.jpg', cat: 'medical', cap: 'ICU Critical Care Equipment - Multi-Para Monitor Console' },
  { img: 'gallery-4.jpg', cat: 'patient', cap: 'Clean Stretcher Bed & Attendant Seating Setup' },
  { img: 'gallery-5.jpg', cat: 'patient', cap: 'Hospital Transfer Stretcher Loading Ramp Configuration' },
  { img: 'gallery-6.jpg', cat: 'ambulances', cap: 'Full Side Profile of Advanced Life Support Fleet (TS07 UK 2556)' },
  { img: 'gallery-7.jpg', cat: 'ambulances', cap: 'Spacious Patient Compartment with Side Utility Locker' },
  { img: 'gallery-8.jpg', cat: 'ambulances', cap: 'Front View of Mahesh Ambulance Service Force Traveller' },
  { img: 'gallery-9.jpg', cat: 'patient', cap: 'Night-Shift Patient Compartment with Calming LED System' },
  { img: 'gallery-10.jpg', cat: 'medical', cap: 'Dignified Dead Body Freezer Box Equipment with Gold Finish' },
  { img: 'gallery-11.jpg', cat: 'medical', cap: 'Portable Stainless Steel Freezer Box for Home Use' },
  { img: 'gallery-12.jpg', cat: 'areas', cap: 'Rear View Showing 24/7 Helpline & Star of Life Decals' },
  { img: 'gallery-13.jpg', cat: 'emergency', cap: 'Urban Rapid-Dispatch Emergency Ambulance' },
  { img: 'gallery-14.jpg', cat: 'emergency', cap: 'Emergency Response Van Ready for Immediate Departure' },
  { img: 'gallery-15.jpg', cat: 'areas', cap: 'Official Mahesh Ambulance Services Information Brochure' }
];

const galleryContent = `
  ${pageHero(
    "Vehicle & Equipment Gallery",
    "Real photographs of our ambulance fleet, intensive care interiors, and medical support equipment in Hyderabad.",
    "Gallery"
  )}

  <section class="section">
    <div class="container">
      <!-- Filter Tabs -->
      <div class="gallery-filters" role="tablist">
        <button class="filter-btn active" data-filter="all">ALL PHOTOS</button>
        <button class="filter-btn" data-filter="ambulances">AMBULANCES</button>
        <button class="filter-btn" data-filter="emergency">EMERGENCY SERVICES</button>
        <button class="filter-btn" data-filter="patient">PATIENT TRANSPORT</button>
        <button class="filter-btn" data-filter="medical">MEDICAL SUPPORT</button>
        <button class="filter-btn" data-filter="areas">SERVICE AREAS</button>
      </div>

      <!-- Gallery Grid -->
      <div class="gallery-grid">
        ${galleryData.map((item, idx) => `
          <div class="gallery-item" data-category="${item.cat}">
            <img src="images/gallery/${item.img}" alt="${item.cap}" loading="lazy">
            <div class="gallery-overlay">
              <span class="gallery-category-badge">${item.cat.toUpperCase()}</span>
              <span class="gallery-caption">${item.cap}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Lightbox Modal Component -->
  <div class="lightbox-modal" role="dialog" aria-modal="true" aria-label="Photo Lightbox">
    <button class="lightbox-close" aria-label="Close Lightbox">&times;</button>
    <button class="lightbox-prev" aria-label="Previous Photo">&#10094;</button>
    <div class="lightbox-content">
      <img src="" alt="" class="lightbox-img">
      <div class="lightbox-caption"></div>
    </div>
    <button class="lightbox-next" aria-label="Next Photo">&#10095;</button>
  </div>
`;

fs.writeFileSync(
  path.join(rootDir, 'gallery.html'),
  renderHtmlDocument({
    title: "Photo Gallery | Mahesh Ambulance Service Fleet Hyderabad | 7075918108",
    description: "Browse real photos of Mahesh Ambulance Service vehicles, ICU interiors, stretcher systems, and dead body freezer box equipment in Hyderabad. Call 7075918108.",
    canonical: "gallery.html",
    activePage: "gallery.html",
    mainContent: galleryContent
  })
);
console.log("Created gallery.html");

// --------------------------------------------------------------------------
// 13. TESTIMONIALS.HTML
// --------------------------------------------------------------------------
const testimonialsContent = `
  ${pageHero(
    "Client Testimonials",
    "Sample feedback and customer experiences with Mahesh Ambulance Service across Hyderabad.",
    "Testimonials"
  )}

  <section class="section">
    <div class="container container-narrow">
      <div class="notice-box" style="margin-bottom: 3rem;">
        <span class="notice-box-icon">ℹ️</span>
        <p style="margin:0;">The testimonials below represent demonstration and client feedback collected to illustrate typical patient transfer and emergency experiences. We do not publish unverified reviews.</p>
      </div>

      <!-- Testimonial Slider -->
      <div class="testimonials-slider-container" style="margin-bottom: 4rem;">
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
          <div class="testimonial-slide">
            <div class="testimonial-card">
              <div class="testimonial-stars">★★★★★</div>
              <p class="testimonial-quote">"We requested an Advanced Life Support ambulance for transfer to an outstation hospital in Warangal. The driver drove smoothly and the vehicle was very comfortable."</p>
              <h4 class="testimonial-author">Dr. A. Ramesh</h4>
              <span class="testimonial-location">Telangana</span>
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

      <!-- Additional Grid of Testimonials -->
      <div class="quick-services-grid" style="grid-template-columns: repeat(2, 1fr);">
        <div class="testimonial-card" style="text-align: left; padding: 2rem;">
          <div class="testimonial-stars" style="margin-bottom: 0.75rem;">★★★★★</div>
          <p class="testimonial-quote" style="font-size: 0.9375rem;">"Prompt phone answering at 2:00 AM. Clear pricing quote without any hidden surprises. Highly grateful for their timely support."</p>
          <h4 class="testimonial-author">K. Anand</h4>
          <span class="testimonial-location">Madhapur, Hyderabad</span>
          <span class="testimonial-label">Sample Feedback</span>
        </div>
        <div class="testimonial-card" style="text-align: left; padding: 2rem;">
          <div class="testimonial-stars" style="margin-bottom: 0.75rem;">★★★★★</div>
          <p class="testimonial-quote" style="font-size: 0.9375rem;">"Assisted my elderly mother with a comfortable bed transfer after knee replacement surgery. Courteous staff and smooth driving."</p>
          <h4 class="testimonial-author">P. Laxmi</h4>
          <span class="testimonial-location">LB Nagar, Hyderabad</span>
          <span class="testimonial-label">Sample Feedback</span>
        </div>
      </div>

      <div style="text-align: center; margin-top: 3.5rem;">
        <a href="tel:+917075918108" class="btn btn-primary btn-lg">
          ☎ Call 7075918108 for Assistance
        </a>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'testimonials.html'),
  renderHtmlDocument({
    title: "Testimonials & Reviews | Mahesh Ambulance Service Hyderabad | 7075918108",
    description: "Read sample feedback and client reviews for Mahesh Ambulance Service in Hyderabad, Telangana. 24/7 dedicated patient transport. Call 7075918108.",
    canonical: "testimonials.html",
    activePage: "testimonials.html",
    mainContent: testimonialsContent
  })
);
console.log("Created testimonials.html");

// --------------------------------------------------------------------------
// 14. AREAS.HTML
// --------------------------------------------------------------------------
const areasContent = `
  ${pageHero(
    "Ambulance Service Areas in Hyderabad",
    "Comprehensive coverage across Hyderabad, Secunderabad, Greater Hyderabad, and Telangana.",
    "Service Areas"
  )}

  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">PRIMARY REGION</span>
        <h2>HYDERABAD, TELANGANA</h2>
        <p class="section-subtitle">Round-the-clock road transportation across all urban, residential, and highway zones.</p>
      </div>

      <div class="notice-box container-narrow" style="margin: 0 auto 3rem auto;">
        <span class="notice-box-icon">⚠️</span>
        <div>
          <strong style="display:block;margin-bottom:0.25rem;">LOCATION AVAILABILITY NOTICE</strong>
          <p style="margin:0;">Availability may vary by location, ambulance type and time. Please call <strong>7075918108</strong> to confirm.</p>
        </div>
      </div>

      <!-- Area Breakdown Grid -->
      <div class="quick-services-grid" style="margin-bottom: 3.5rem;">
        <div class="why-card">
          <div class="why-icon">🏙️</div>
          <h3>Central Hyderabad</h3>
          <p>Banjara Hills, Jubilee Hills, Somajiguda, Nampally, Abids, Lakdikapul, Basheerbagh, Koti, Charminar, Mehdipatnam.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">🏢</div>
          <h3>Cyberabad &amp; IT Zone</h3>
          <p>HITEC City, Gachibowli, Madhapur, Kondapur, Kukatpally, Miyapur, Manikonda, Financial District, Chandanagar.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">🚆</div>
          <h3>Secunderabad &amp; North</h3>
          <p>Secunderabad Station, Begumpet, Malkajgiri, Marredpally, Alwal, Kompally, Bowenpally, Trimulgherry, Sainikpuri.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">🛣️</div>
          <h3>East &amp; South Zones</h3>
          <p>LB Nagar, Uppal, Dilsukhnagar, Malakpet, Nagole, Hayathnagar, Chandrayangutta, Falaknuma, Shamshabad Airport.</p>
        </div>
      </div>

      <!-- Outstation / Telangana -->
      <div class="trust-banner" style="margin-bottom: 3.5rem;">
        <div class="trust-content">
          <span class="section-badge section-badge-dark">STATEWIDE ROUTE COVERAGE</span>
          <h2>Inter-District &amp; Outstation Patient Transit</h2>
          <p>In addition to local Hyderabad transfers, Mahesh Ambulance Service coordinates outstation ambulance transit across Telangana and adjacent states:</p>
          <div class="trust-checklist">
            <div class="trust-check-item"><span>✓</span> Warangal &amp; Hanamkonda</div>
            <div class="trust-check-item"><span>✓</span> Karimnagar</div>
            <div class="trust-check-item"><span>✓</span> Nizamabad</div>
            <div class="trust-check-item"><span>✓</span> Khammam</div>
            <div class="trust-check-item"><span>✓</span> Mahabubnagar</div>
            <div class="trust-check-item"><span>✓</span> Nalgonda</div>
          </div>
          <a href="tel:+917075918108" class="btn btn-primary btn-lg">
            ☎ Check Outstation Availability: 7075918108
          </a>
        </div>
        <div class="trust-contact-box">
          <h3>Confirm Vehicle Route</h3>
          <p>Call our dispatch line to check current vehicle positioning and travel estimates.</p>
          <a href="tel:+917075918108" class="btn btn-primary" style="width:100%;">CALL: 7075918108</a>
        </div>
      </div>

      <!-- Map Section Placeholder -->
      <div class="section-header" style="margin-bottom: 1.5rem;">
        <span class="section-badge">LOCATION MAP</span>
        <h2>Hyderabad Geographic Coverage</h2>
      </div>

      <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg); border: 1px solid var(--border-light); background: #E2E8F0; height: 380px; position: relative;">
        <!-- Embedded Google Maps iframe for Hyderabad Center -->
        <iframe
          title="Mahesh Ambulance Service Area Map Hyderabad"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160408544!2d78.26795856752763!3d17.41229980145233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'areas.html'),
  renderHtmlDocument({
    title: "Ambulance Service Areas in Hyderabad | Mahesh Ambulance | 7075918108",
    description: "Ambulance coverage areas in Hyderabad, Secunderabad, Cyberabad, Greater Hyderabad, and Telangana. Local and outstation routes. Call 7075918108.",
    canonical: "areas.html",
    activePage: "areas.html",
    mainContent: areasContent
  })
);
console.log("Created areas.html");

// --------------------------------------------------------------------------
// 15. PRICING.HTML
// --------------------------------------------------------------------------
const pricingContent = `
  ${pageHero(
    "Ambulance Pricing Information",
    "Transparent, straightforward pricing guidelines for ambulance transportation in Hyderabad.",
    "Pricing"
  )}

  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">TRANSPARENT QUOTES</span>
        <h2>How Ambulance Pricing Works</h2>
        <p class="section-subtitle">We believe in transparent, upfront quotes without hidden surprises. Pricing is determined fairly based on specific trip factors.</p>
      </div>

      <!-- Pricing Factors -->
      <div class="form-card container-narrow" style="margin: 0 auto 3.5rem auto;">
        <h3 style="margin-bottom: 1rem;">Key Factors That Influence Ambulance Pricing:</h3>
        <ul style="list-style: disc; padding-left: 1.25rem; color: var(--text-body); line-height: 1.8;">
          <li><strong>Distance:</strong> Total kilometers traveled from pickup point to destination (local city transit vs. inter-district highway trips).</li>
          <li><strong>Ambulance Type:</strong> Choice between Basic Life Support van, spacious Force Traveller Advanced Life Support unit, or critical care ICU vehicle.</li>
          <li><strong>Patient Requirements:</strong> Need for continuous medical oxygen supply, suction apparatus, or specialized monitoring equipment.</li>
          <li><strong>Trip Duration &amp; Waiting Time:</strong> For scheduled diagnostic scans or return transfers where the ambulance remains on standby.</li>
          <li><strong>Timing:</strong> Rapid emergency dispatch vs. pre-scheduled routine hospital discharges.</li>
          <li><strong>Additional Requirements:</strong> For mortuary services, whether refrigerated dead body freezer box rental is required.</li>
        </ul>
      </div>

      <!-- 4 Transparent Quote Cards -->
      <div class="pricing-grid">
        <!-- 1. Emergency Ambulance -->
        <div class="pricing-card">
          <div class="pricing-card-header">
            <span class="pricing-badge">Immediate Care</span>
            <h3 class="pricing-title">Emergency Ambulance</h3>
            <div class="pricing-status">Contact for Current Quote</div>
          </div>
          <ul class="pricing-features">
            <li class="pricing-feature-item">${icons.check} Immediate telephone dispatch</li>
            <li class="pricing-feature-item">${icons.check} Patient stretcher equipment</li>
            <li class="pricing-feature-item">${icons.check} Attendant seating capacity</li>
            <li class="pricing-feature-item">${icons.check} Direct hospital route</li>
          </ul>
          <a href="tel:+917075918108" class="btn btn-primary" style="width: 100%;">
            ☎ Call for Quote
          </a>
        </div>

        <!-- 2. ICU Ambulance -->
        <div class="pricing-card">
          <div class="pricing-card-header">
            <span class="pricing-badge">Critical Care</span>
            <h3 class="pricing-title">ICU Ambulance</h3>
            <div class="pricing-status">Contact for Current Quote</div>
          </div>
          <ul class="pricing-features">
            <li class="pricing-feature-item">${icons.check} High-roof Force Traveller vehicle</li>
            <li class="pricing-feature-item">${icons.check} Multi-para monitor setup</li>
            <li class="pricing-feature-item">${icons.check} Critical inter-hospital transfers</li>
            <li class="pricing-feature-item">${icons.check} Stretcher ramp infrastructure</li>
          </ul>
          <a href="tel:+917075918108" class="btn btn-primary" style="width: 100%;">
            ☎ Call for Quote
          </a>
        </div>

        <!-- 3. Patient Transfer -->
        <div class="pricing-card">
          <div class="pricing-card-header">
            <span class="pricing-badge">Non-Emergency</span>
            <h3 class="pricing-title">Patient Transfer</h3>
            <div class="pricing-status">Contact for Current Quote</div>
          </div>
          <ul class="pricing-features">
            <li class="pricing-feature-item">${icons.check} Hospital discharge to home</li>
            <li class="pricing-feature-item">${icons.check} Diagnostic clinic visits</li>
            <li class="pricing-feature-item">${icons.check} Dialysis scheduled transit</li>
            <li class="pricing-feature-item">${icons.check} Bed-to-bed assistance</li>
          </ul>
          <a href="tel:+917075918108" class="btn btn-primary" style="width: 100%;">
            ☎ Call for Quote
          </a>
        </div>

        <!-- 4. Mortuary Ambulance -->
        <div class="pricing-card">
          <div class="pricing-card-header">
            <span class="pricing-badge">Dignified Transit</span>
            <h3 class="pricing-title">Mortuary Ambulance</h3>
            <div class="pricing-status">Contact for Current Quote</div>
          </div>
          <ul class="pricing-features">
            <li class="pricing-feature-item">${icons.check} Respectful dead body transport</li>
            <li class="pricing-feature-item">${icons.check} Freezer box on rent option</li>
            <li class="pricing-feature-item">${icons.check} Local &amp; interstate travel</li>
            <li class="pricing-feature-item">${icons.check} Prompt home delivery</li>
          </ul>
          <a href="tel:+917075918108" class="btn btn-primary" style="width: 100%;">
            ☎ Call for Quote
          </a>
        </div>
      </div>

      <!-- CTA Box -->
      <div style="background-color: var(--white); border-radius: var(--radius-xl); padding: 3rem; text-align: center; margin-top: 3.5rem; border: 1px solid var(--border-light); box-shadow: var(--shadow-md);">
        <h3 style="font-size: 1.5rem; margin-bottom: 0.75rem;">Need an Immediate, Accurate Price Estimate?</h3>
        <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto 1.5rem auto;">Tell us your pickup location, destination, and patient condition for a quick, transparent quote.</p>
        <a href="tel:+917075918108" class="btn btn-primary btn-lg" style="font-size: 1.25rem;">
          ☎ Call 7075918108 for Current Pricing
        </a>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'pricing.html'),
  renderHtmlDocument({
    title: "Ambulance Pricing in Hyderabad | Mahesh Ambulance | 7075918108",
    description: "Transparent ambulance pricing in Hyderabad, Telangana. Explaining distance, ambulance type, and care requirements. Call 7075918108 for a current quote.",
    canonical: "pricing.html",
    activePage: "pricing.html",
    mainContent: pricingContent
  })
);
console.log("Created pricing.html");

// --------------------------------------------------------------------------
// 16. FAQ.HTML
// --------------------------------------------------------------------------
const faqContent = `
  ${pageHero(
    "Frequently Asked Questions",
    "Find clear, helpful answers to common questions about Mahesh Ambulance Service in Hyderabad.",
    "FAQ"
  )}

  <section class="section">
    <div class="container">
      <div class="faq-accordion">
        <!-- 1 -->
        <div class="faq-item active">
          <button class="faq-header" aria-expanded="true">
            <span>1. How can I book an ambulance?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body" style="max-height: 200px;">
            <div class="faq-content">
              You can book an ambulance immediately by calling our 24/7 helpline at <strong>7075918108</strong>, sending a WhatsApp message, or submitting our online request form. For urgent emergency needs, calling directly by phone is always recommended for the fastest response.
            </div>
          </div>
        </div>

        <!-- 2 -->
        <div class="faq-item">
          <button class="faq-header" aria-expanded="false">
            <span>2. Is Mahesh Ambulance Service available 24/7?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              Yes. Mahesh Ambulance Service operates 24 hours a day, 7 days a week, 365 days a year across Hyderabad, Secunderabad, and Telangana, including nighttime and holidays.
            </div>
          </div>
        </div>

        <!-- 3 -->
        <div class="faq-item">
          <button class="faq-header" aria-expanded="false">
            <span>3. Do you provide ambulance service in Hyderabad?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              Yes, Greater Hyderabad is our central operating hub. We cover Banjara Hills, Jubilee Hills, Secunderabad, HITEC City, Gachibowli, Kukatpally, LB Nagar, Charminar, Begumpet, and surrounding Telangana corridors.
            </div>
          </div>
        </div>

        <!-- 4 -->
        <div class="faq-item">
          <button class="faq-header" aria-expanded="false">
            <span>4. Do you provide ICU ambulance service?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              Yes, we provide ICU ambulances designed for critical care patient transfers. Please call 7075918108 to specify the patient's medical requirements and verify current vehicle equipment availability.
            </div>
          </div>
        </div>

        <!-- 5 -->
        <div class="faq-item">
          <button class="faq-header" aria-expanded="false">
            <span>5. Do you provide patient transfer?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              Yes, we offer patient transfer services including Home to Hospital, Hospital to Hospital, and Hospital to Home transfers with stretcher support and attendant seating.
            </div>
          </div>
        </div>

        <!-- 6 -->
        <div class="faq-item">
          <button class="faq-header" aria-expanded="false">
            <span>6. Do you provide hospital-to-hospital transfers?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              Yes, we coordinate hospital-to-hospital shifts across Hyderabad and Telangana for specialized surgeries, ICU transfers, and diagnostic procedures.
            </div>
          </div>
        </div>

        <!-- 7 -->
        <div class="faq-item">
          <button class="faq-header" aria-expanded="false">
            <span>7. Do you provide mortuary ambulance service?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              Yes, we provide dignified mortuary ambulance transportation as well as refrigerated dead body freezer boxes on rent for preservation at home and long-distance native place transit.
            </div>
          </div>
        </div>

        <!-- 8 -->
        <div class="faq-item">
          <button class="faq-header" aria-expanded="false">
            <span>8. How can I check ambulance availability?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              To check real-time vehicle availability and proximity in your specific area of Hyderabad, please call <strong>7075918108</strong> directly. Our team will immediately inform you of the nearest available vehicle.
            </div>
          </div>
        </div>

        <!-- 9 -->
        <div class="faq-item">
          <button class="faq-header" aria-expanded="false">
            <span>9. How much does an ambulance cost?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              Ambulance pricing depends on distance traveled, vehicle type (BLS, ALS, ICU), patient medical support requirements, and timing. Call <strong>7075918108</strong> for an upfront, accurate quote for your specific route.
            </div>
          </div>
        </div>

        <!-- 10 -->
        <div class="faq-item">
          <button class="faq-header" aria-expanded="false">
            <span>10. How can I contact Mahesh Ambulance Service?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-body">
            <div class="faq-content">
              You can reach us 24/7 by phone at <strong>7075918108</strong>, WhatsApp at <strong>+91 7075918108</strong>, or email at <strong>madagonisrisailam353@gmail.com</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'faq.html'),
  renderHtmlDocument({
    title: "FAQ | Mahesh Ambulance Service Hyderabad | 7075918108",
    description: "Frequently asked questions regarding Mahesh Ambulance Service: booking, 24/7 availability, ICU care, patient transfers, mortuary services, and pricing. Call 7075918108.",
    canonical: "faq.html",
    activePage: "faq.html",
    mainContent: faqContent
  })
);
console.log("Created faq.html");

// --------------------------------------------------------------------------
// 17. CONTACT.HTML
// --------------------------------------------------------------------------
const contactContent = `
  ${pageHero(
    "Contact Mahesh Ambulance Service",
    "Direct contact channels for 24/7 emergency dispatch, booking, and general enquiries in Hyderabad.",
    "Contact"
  )}

  <section class="section">
    <div class="container">
      <div class="about-grid">
        <!-- Contact Information Column -->
        <div>
          <span class="section-badge">GET IN TOUCH</span>
          <h2>24/7 Ambulance Helpline</h2>
          <p class="about-lead">
            Contact Mahesh Ambulance Service directly to verify vehicle availability, request immediate emergency dispatch, or arrange scheduled patient transfers.
          </p>

          <div style="display: flex; flex-direction: column; gap: 1.25rem; margin: 2rem 0;">
            <div style="display: flex; align-items: flex-start; gap: 1rem;">
              <div style="width: 44px; height: 44px; background: var(--primary-red-light); color: var(--primary-red); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">📍</div>
              <div>
                <strong style="color: var(--dark-navy); display: block; font-size: 1rem;">Business Location</strong>
                <span style="color: var(--text-body);">Hyderabad, Telangana, India</span>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 1rem;">
              <div style="width: 44px; height: 44px; background: var(--primary-red-light); color: var(--primary-red); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">☎</div>
              <div>
                <strong style="color: var(--dark-navy); display: block; font-size: 1rem;">Direct Telephone</strong>
                <a href="tel:+917075918108" style="font-size: 1.25rem; font-weight: 800; color: var(--primary-red);">7075918108</a>
                <span style="display: block; font-size: 0.8125rem; color: var(--text-muted);">Additional lines: 9390878054 / 6301888681</span>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 1rem;">
              <div style="width: 44px; height: 44px; background: var(--primary-red-light); color: var(--primary-red); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">✉</div>
              <div>
                <strong style="color: var(--dark-navy); display: block; font-size: 1rem;">Email Address</strong>
                <a href="mailto:madagonisrisailam353@gmail.com" style="color: var(--text-body); font-weight: 600;">madagonisrisailam353@gmail.com</a>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 1rem;">
              <div style="width: 44px; height: 44px; background: var(--primary-red-light); color: var(--primary-red); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">⏰</div>
              <div>
                <strong style="color: var(--dark-navy); display: block; font-size: 1rem;">Service Hours</strong>
                <span style="color: var(--text-body);">24 Hours / 7 Days a Week</span>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
            <a href="tel:+917075918108" class="btn btn-primary">CALL NOW</a>
            <a href="mailto:madagonisrisailam353@gmail.com" class="btn btn-secondary">EMAIL US</a>
            <a href="https://wa.me/917075918108" target="_blank" rel="noopener" class="btn btn-whatsapp">
              ${icons.whatsapp} WHATSAPP
            </a>
          </div>
        </div>

        <!-- Contact Form Column -->
        <div>
          <div class="form-card">
            <h3 style="margin-bottom: 0.5rem;">Send a Message</h3>
            <p style="color: var(--text-muted); font-size: 0.875rem; margin-bottom: 1.5rem;">For general enquiries or planned transfers. For emergencies, please call directly.</p>

            <form data-validate data-form-type="enquiry">
              <div class="form-group" style="margin-bottom: 1.25rem;">
                <label class="form-label">Your Name <span class="req">*</span></label>
                <input type="text" class="form-control" required placeholder="Full Name">
                <div class="invalid-feedback">Please enter your name.</div>
              </div>

              <div class="form-group" style="margin-bottom: 1.25rem;">
                <label class="form-label">Phone Number <span class="req">*</span></label>
                <input type="tel" class="form-control" required placeholder="10-digit Phone Number">
                <div class="invalid-feedback">Please enter a valid phone number.</div>
              </div>

              <div class="form-group" style="margin-bottom: 1.25rem;">
                <label class="form-label">Email Address <span class="req">*</span></label>
                <input type="email" class="form-control" required placeholder="email@example.com">
                <div class="invalid-feedback">Please enter a valid email address.</div>
              </div>

              <div class="form-group" style="margin-bottom: 1.5rem;">
                <label class="form-label">Message <span class="req">*</span></label>
                <textarea class="form-control" required placeholder="How can we assist you? (Pickup, destination, patient details...)"></textarea>
                <div class="invalid-feedback">Please enter your message.</div>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%;">
                SUBMIT MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'contact.html'),
  renderHtmlDocument({
    title: "Contact Us | Mahesh Ambulance Service Hyderabad | 7075918108",
    description: "Contact Mahesh Ambulance Service in Hyderabad, Telangana. 24/7 hotline 7075918108, email madagonisrisailam353@gmail.com, WhatsApp and direct inquiry form.",
    canonical: "contact.html",
    activePage: "contact.html",
    mainContent: contactContent
  })
);
console.log("Created contact.html");

// --------------------------------------------------------------------------
// 18. BOOKING.HTML
// --------------------------------------------------------------------------
const bookingContent = `
  ${pageHero(
    "Book an Ambulance in Hyderabad",
    "Reserve an emergency or scheduled ambulance transportation with Mahesh Ambulance Service.",
    "Book Ambulance"
  )}

  <section class="section">
    <div class="container container-narrow">
      <div class="notice-box notice-box-danger" style="margin-bottom: 2rem;">
        <span class="notice-box-icon">🚨</span>
        <div>
          <strong style="display:block;margin-bottom:0.25rem;">IMMEDIATE EMERGENCY ASSISTANCE</strong>
          <p style="margin:0;">This website request form provides convenient online reservation. If you need an ambulance immediately, please call our 24/7 dispatch hotline directly at <strong><a href="tel:+917075918108" style="color:#B91C1C; text-decoration:underline;">7075918108</a></strong>.</p>
        </div>
      </div>

      <div class="form-card">
        <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; text-align: center;">Ambulance Reservation Form</h2>
        <p style="color: var(--text-muted); font-size: 0.9375rem; text-align: center; margin-bottom: 2rem;">Fill in the trip parameters below to initiate your ambulance request.</p>

        <form data-validate data-form-type="ambulance reservation">
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Full Name <span class="req">*</span></label>
              <input type="text" class="form-control" required placeholder="Patient / Contact Person Name">
              <div class="invalid-feedback">Please enter your full name.</div>
            </div>

            <div class="form-group">
              <label class="form-label">Phone Number <span class="req">*</span></label>
              <input type="tel" class="form-control" required placeholder="10-digit mobile number">
              <div class="invalid-feedback">Please enter a valid phone number.</div>
            </div>

            <div class="form-group">
              <label class="form-label">Email Address <span class="req">*</span></label>
              <input type="email" class="form-control" required placeholder="name@example.com">
              <div class="invalid-feedback">Please enter a valid email address.</div>
            </div>

            <div class="form-group">
              <label class="form-label">Ambulance Type <span class="req">*</span></label>
              <select class="form-control" required>
                <option value="">-- Choose Ambulance Type --</option>
                <option value="Emergency Ambulance">Emergency Ambulance</option>
                <option value="ICU Ambulance">ICU Ambulance</option>
                <option value="Advanced Life Support">Advanced Life Support</option>
                <option value="Basic Life Support">Basic Life Support</option>
                <option value="Patient Transfer">Patient Transfer</option>
                <option value="Hospital Transfer">Hospital Transfer</option>
                <option value="Mortuary Ambulance">Mortuary Ambulance</option>
                <option value="Corporate Ambulance">Corporate Ambulance</option>
              </select>
              <div class="invalid-feedback">Please select an ambulance type.</div>
            </div>

            <div class="form-group">
              <label class="form-label">Pickup Location &amp; Landmark <span class="req">*</span></label>
              <input type="text" class="form-control" required placeholder="Full pickup address in Hyderabad">
              <div class="invalid-feedback">Please enter pickup location.</div>
            </div>

            <div class="form-group">
              <label class="form-label">Destination Address / Hospital <span class="req">*</span></label>
              <input type="text" class="form-control" required placeholder="Destination address or Hospital name">
              <div class="invalid-feedback">Please enter destination.</div>
            </div>

            <div class="form-group">
              <label class="form-label">Required Date <span class="req">*</span></label>
              <input type="date" class="form-control" required>
              <div class="invalid-feedback">Please choose date.</div>
            </div>

            <div class="form-group">
              <label class="form-label">Required Time <span class="req">*</span></label>
              <input type="time" class="form-control" required>
              <div class="invalid-feedback">Please choose time.</div>
            </div>

            <div class="form-group form-grid-full">
              <label class="form-label">Patient Medical Requirements</label>
              <input type="text" class="form-control" placeholder="E.g., Stretcher bed, Oxygen needed, Multi-para monitor, Attendants accompanying...">
            </div>

            <div class="form-group form-grid-full">
              <label class="form-label">Additional Message / Special Instructions</label>
              <textarea class="form-control" placeholder="Any additional notes regarding building floor, elevator access, or landmark directions..."></textarea>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%; margin-top: 1.75rem;">
            🚑 SUBMIT AMBULANCE REQUEST
          </button>
        </form>
      </div>
    </div>
  </section>
`;

fs.writeFileSync(
  path.join(rootDir, 'booking.html'),
  renderHtmlDocument({
    title: "Book an Ambulance in Hyderabad | Mahesh Ambulance | 7075918108",
    description: "Book an ambulance online in Hyderabad. Emergency, ICU, patient transfer and life support reservations. For immediate dispatch, call 7075918108.",
    canonical: "booking.html",
    activePage: "booking.html",
    mainContent: bookingContent
  })
);
console.log("Created booking.html");

console.log("All 18 HTML pages generated successfully!");
