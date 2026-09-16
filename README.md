# Mahesh Ambulance Service - Website

A complete, production-quality, premium, fast-loading, mobile-friendly, accessible, and SEO-optimized website for **Mahesh Ambulance Service**, based in **Hyderabad, Telangana, India**.

Built strictly using **HTML5, Vanilla CSS3, and Vanilla JavaScript** (no heavy frameworks, zero runtime dependencies).

---

## 📞 Primary Contact & Helpline
- **Primary 24/7 Phone:** `+91 7075918108` (`tel:+917075918108`)
- **Additional Lines:** `9390878054`, `6301888681`
- **Email:** `madagonisrisailam353@gmail.com` (`mailto:madagonisrisailam353@gmail.com`)
- **WhatsApp:** [https://wa.me/917075918108](https://wa.me/917075918108)
- **Location:** Hyderabad, Telangana, India
- **Operating Hours:** 24 Hours / 7 Days a Week

---

## 📁 Complete Folder Structure

```
Mahesh Ambulance service/
│
├── index.html                   # Modern Homepage with Hero, Emergency Strip, Quick Services, Fleet, Steps
├── about.html                   # Detailed Company Story, Leadership & Operating Principles
├── services.html                # Comprehensive Catalog of all 8 Ambulance Services
├── emergency.html               # Emergency Dispatch, Pickup Guide & Triage Notice
├── icu.html                     # ICU Critical Care Ambulance & Patient Transport
├── advanced-life-support.html   # Advanced Life Support (ALS) Ambulance Features & Booking
├── basic-life-support.html      # Basic Life Support (BLS) Patient Transportation
├── patient-transfer.html        # Home-to-Hospital, Hospital-to-Hospital, Hospital-to-Home
├── hospital-transfer.html       # Planned Inter-Facility Transfers Across Hyderabad
├── mortuary.html                # Dignified Dead Body Transport & Freezer Box on Rent
├── corporate.html               # Corporate On-Site Standby & Workplace Health Coverage
├── gallery.html                 # Interactive Fleet & Equipment Photo Gallery with Lightbox
├── testimonials.html            # Client Feedback & Demonstration Testimonial Slider
├── areas.html                   # Coverage Areas Across Hyderabad, Secunderabad & Telangana
├── pricing.html                 # Transparent Pricing Information & Quote Factors
├── faq.html                     # 10 Interactive Accordion FAQs
├── contact.html                 # Directory, Call/Email/WhatsApp Buttons & Enquiry Form
├── booking.html                 # Complete Ambulance Reservation Form with Validation
│
├── css/
│   └── style.css                # Production CSS with Custom Medical Design System
│
├── js/
│   └── script.js                # Clean Vanilla JS (Sticky Nav, Drawers, Accordions, Lightbox, Slider, Validation)
│
├── images/
│   ├── logo.svg                 # Red & Dark Navy Medical Cross Vector Logo
│   ├── logo-white.svg           # White Variation for Dark Footer
│   ├── ambulance-hero.jpg       # Force Traveller ALS Fleet Hero Photo
│   ├── ambulance-emergency.jpg  # Urban Rapid Response Ambulance Photo
│   ├── icu-ambulance.jpg        # Intensive Care Equipment & Multi-Para Monitor
│   ├── patient-transfer.jpg     # Patient Bed & Stretcher Interior Setup
│   ├── hospital-transfer.jpg    # Hospital Stretcher Ramp Loading System
│   ├── advanced-life-support.jpg# Full Side Profile of ALS Force Traveller (TS07 UK 2556)
│   ├── basic-life-support.jpg   # Calming Patient Compartment with LED System
│   ├── mortuary.jpg             # Dignified Dead Body Freezer Box Equipment
│   ├── corporate.jpg            # Mahesh Ambulance Rear Fleet View
│   ├── brochure-poster.jpg      # Official Mahesh Ambulance Service Brochure
│   └── gallery/                 # 15 High-Resolution Fleet & Equipment Photos
│       ├── gallery-1.jpg to gallery-15.jpg
│
├── robots.txt                   # Search Engine Directive Linking to Sitemap
├── sitemap.xml                  # XML Sitemap for Search Engine Crawlers
└── README.md                    # Project Documentation, Run & Deployment Guide
```

---

## 🚀 Key Features

1. **Healthcare & Emergency Design System**:
   - Primary Red (`#E63946`), Dark Navy (`#0B1B2B`), White (`#FFFFFF`), Light Background (`#F5F7FA`), Success Green (`#16A34A`).
   - Sticky navbar with glassmorphism blur and shadow.
   - Emergency call strip with pulsating attention beacon.
   - Mobile floating bottom buttons (Phone Call on right, WhatsApp on left).

2. **Real Fleet & Equipment Photos**:
   - Integrated authentic photographs of Force Traveller ambulances (`TS07 UK 2556`), ICU patient monitors, stretcher bed setups, and refrigerated freezer box preservation units.

3. **Complete Interactivity (Pure Vanilla JavaScript)**:
   - Sticky header with scroll detection.
   - Mobile sliding drawer navigation with nested accordion dropdown.
   - Interactive FAQ accordion with smooth CSS height animations.
   - Category-filterable gallery with fullscreen lightbox (next, previous, close, keyboard arrow controls).
   - Testimonial slider with automatic slide rotation, touch/mouse pause, and pagination dots.
   - Comprehensive client-side form validation with accessible error highlights and instant confirmation modal.

4. **SEO & Local SEO**:
   - Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Unique descriptive `<title>` and `<meta name="description">` on all 18 pages.
   - Canonical URLs, Open Graph, and Twitter Cards on every page.
   - Schema.org JSON-LD structured data for `LocalBusiness` / `EmergencyService` containing verified facts only.

---

## 💻 Instructions to Run Locally

### Option 1: VS Code Live Server (Recommended)
1. Open the project folder (`Mahesh Ambulance service`) in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if not already installed.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The website will automatically launch at `http://127.0.0.1:5500/index.html`.

### Option 2: Using Node.js (Built-in HTTP Server)
Run the following in PowerShell/terminal from the project directory:
```bash
npx serve .
# Or using http-server
npx http-server -p 8080
```
Open `http://localhost:8080` in any web browser.

### Option 3: Using Python
If Python is installed:
```bash
# Python 3
python -m http.server 8000
```
Open `http://localhost:8000` in any web browser.

---

## 🌐 Instructions to Deploy

Because this site is built with static HTML, CSS, and vanilla JS, it can be hosted on any web server or static platform for free or low cost with maximum speed and security:

### 1. Netlify
1. Log in to [netlify.com](https://www.netlify.com/).
2. Drag and drop the `Mahesh Ambulance service` folder directly into the Netlify Sites dashboard.
3. Your website is live within seconds with free SSL.
4. Add your custom domain (e.g. `maheshambulanceservice.com`) in Domain Settings.

### 2. Vercel
1. Install Vercel CLI (`npm i -g vercel`) or log in to [vercel.com](https://vercel.com).
2. Run `vercel` in the project root and select defaults.
3. Your deployment is immediately active with global CDN caching.

### 3. GitHub Pages
1. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial Mahesh Ambulance Service website"
   ```
2. Push to GitHub and go to **Repository Settings > Pages**.
3. Select the `main` branch as the source and click **Save**.

### 4. Traditional cPanel / Shared Hosting (Hostinger, GoDaddy, Namecheap, Bluehost)
1. Log in to your hosting cPanel.
2. Open **File Manager** and go to `public_html/`.
3. Upload all files from this directory directly into `public_html/`.
4. Ensure `index.html` is located directly at the root of `public_html/`.
