const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\A.PRAVEEN\\.gemini\\antigravity-ide\\brain\\073c2921-1194-4f46-ba63-5442244d4f46\\.user_uploaded';
const destImages = path.join(__dirname, 'images');
const destGallery = path.join(__dirname, 'images', 'gallery');

if (!fs.existsSync(destImages)) fs.mkdirSync(destImages, { recursive: true });
if (!fs.existsSync(destGallery)) fs.mkdirSync(destGallery, { recursive: true });

const mappings = {
  // Main feature images
  'media_1789554550298.jpg': 'ambulance-hero.jpg', // Blue/white Force Traveller front angle
  'media_1789554192307.jpg': 'ambulance-emergency.jpg', // Eeco ambulance front view with flashing lights
  'media_1789554513210.jpg': 'icu-ambulance.jpg', // High-tech ICU interior monitor/ventilator
  'media_1789554192205.jpg': 'patient-transfer.jpg', // Clean ambulance stretcher interior
  'media_1789554513236.jpg': 'hospital-transfer.jpg', // Force Traveller interior stretcher ramp
  'media_1789554550211.jpg': 'advanced-life-support.jpg', // Full side profile of ALS ambulance
  'media_1789554378082.jpg': 'basic-life-support.jpg', // Force Traveller ambulance interior with mood lighting
  'media_1789554378246.jpg': 'mortuary.jpg', // Stainless steel & golden freezer box unit
  'media_1789554513289.jpg': 'corporate.jpg', // Force Traveller rear profile Mahesh Ambulance
  'media_1789554578173.jpg': 'brochure-poster.jpg', // Official Mahesh Ambulance Services poster
  'media_1789554550240.jpg': 'force-front.jpg', // Force front straight angle TS07 UK 2556
  'media_1789554550222.jpg': 'force-side-open.jpg', // Force side open hatch
  'media_1789554192181.jpg': 'eeco-front.jpg', // Eeco front 3/4 angle
  'media_1789554192276.jpg': 'eeco-rear.jpg', // Eeco rear view
  'media_1789554192319.jpg': 'mortuary-outdoor.jpg', // Mortuary box outdoor view
};

for (const [srcFile, destFile] of Object.entries(mappings)) {
  const fullSrc = path.join(srcDir, srcFile);
  const fullDest = path.join(destImages, destFile);
  if (fs.existsSync(fullSrc)) {
    fs.copyFileSync(fullSrc, fullDest);
    console.log(`Copied ${srcFile} -> images/${destFile}`);
  } else {
    console.warn(`Source file not found: ${fullSrc}`);
  }
}

// Populate gallery images
const galleryFiles = [
  { file: 'ambulance-hero.jpg', caption: 'Mahesh Ambulance Service - Advanced Life Support Fleet', category: 'ambulances' },
  { file: 'ambulance-emergency.jpg', caption: '24/7 Rapid Emergency Response Vehicle in Hyderabad', category: 'emergency' },
  { file: 'icu-ambulance.jpg', caption: 'ICU Critical Care Equipment - Multi-Para Monitor & Infusion', category: 'medical' },
  { file: 'patient-transfer.jpg', caption: 'Clean Stretcher Bed & Attendant Seating Setup', category: 'patient' },
  { file: 'hospital-transfer.jpg', caption: 'Hospital-to-Hospital Transfer Stretcher Ramp Setup', category: 'patient' },
  { file: 'advanced-life-support.jpg', caption: 'Advanced Life Support Unit - Mahesh Ambulance Service', category: 'ambulances' },
  { file: 'force-front.jpg', caption: 'Front Profile - TS07 UK 2556 Mahesh Ambulance', category: 'ambulances' },
  { file: 'force-side-open.jpg', caption: 'Side Utility & Quick-Access Equipment Locker', category: 'ambulances' },
  { file: 'basic-life-support.jpg', caption: 'Night-Shift Patient Compartment with Calming LED System', category: 'patient' },
  { file: 'mortuary.jpg', caption: 'Dignified Dead Body Freezer Box Equipment', category: 'medical' },
  { file: 'mortuary-outdoor.jpg', caption: 'Stainless Steel Portable Freezer Box for Home Use', category: 'medical' },
  { file: 'corporate.jpg', caption: 'Mahesh Ambulance Service Fleet Rear Profile & Contacts', category: 'areas' },
  { file: 'eeco-front.jpg', caption: 'Quick Response Urban Ambulance for Hyderabad Streets', category: 'emergency' },
  { file: 'eeco-rear.jpg', caption: 'Emergency Ambulance Ready for Immediate Dispatch', category: 'emergency' },
  { file: 'brochure-poster.jpg', caption: 'Mahesh Ambulance Services - Official Information Poster', category: 'areas' }
];

galleryFiles.forEach((item, index) => {
  const src = path.join(destImages, item.file);
  const dest = path.join(destGallery, `gallery-${index + 1}.jpg`);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
});

console.log('Gallery images created:', galleryFiles.length);
