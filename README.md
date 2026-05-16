# AirSign - Digital Signature Capture

A modern, browser-based digital signature capture application using hand gesture recognition powered by MediaPipe Hands. Sign documents naturally with your finger or stylus, generate professional PDFs, and download your signed documents instantly.

![AirSign](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

### Core Functionality
- 🖐️ **Hand Gesture Recognition** - Real-time hand detection using MediaPipe Hands AI
- ✍️ **Natural Signature Capture** - Draw signatures naturally using your finger or stylus
- 📄 **PDF Generation** - Generate professional digital documents with signatures
- 🎯 **Dual Download Options** - Download full document or signature-only PDF
- ⏸️ **Pause/Resume** - Pause drawing and resume without losing progress
- 🎨 **Real-time Preview** - See your signature as you draw it
- 📱 **Responsive Design** - Works on desktop and tablet devices

### Hand Gestures
- **Index Finger Up** - Activate signature drawing mode
- **Thumb + Index Pinch** - Draw when fingers pinched together
- **Closed Fist** - Pause/resume drawing
- **Open Hand** - Clear current signature and start over

### Document Features
- 📅 **Automatic Date** - Indian format (DD/MM/YYYY), non-editable for document integrity
- 🔐 **Digital Timestamps** - ISO timestamps for certification and legal binding
- 📊 **Complete Metadata** - Records signer name, email, company, hand used, duration, stroke count
- 🏢 **Professional Branding** - Ananta Labs branding and legal notices
- ✅ **Verification Badges** - Visual confirmation of signature capture and document signing

### Legal & Compliance
- 📋 **Privacy Policy** - Detailed data protection and camera access information
- ⚖️ **Terms & Conditions** - Legal framework compliant with E-SIGN Act and UETA
- 📖 **How to Use Guide** - 7-step instructions with gesture guide and troubleshooting
- 💬 **Contact Support** - Direct email link to support team

## 🚀 Quick Start

### Installation
1. Download `air_signature.html`
2. Open the file in a modern web browser (Chrome, Firefox, Safari, Edge)
3. Allow camera access when prompted
4. Start signing!

### No Installation Required
- Single HTML file - no build process, no dependencies to install
- Runs entirely in your browser - no server required
- All data processed locally - nothing uploaded to the cloud

## 📖 How to Use

### Step-by-Step Guide
1. **Allow Camera Access** - Click "Allow Camera & Begin" to enable hand detection
2. **Enter Details** - Fill in your name, email, and optionally company information
3. **Agree to Terms** - Check the agreement checkbox to proceed
4. **Start Signing** - Click "Start Signature" when your hand is detected
5. **Draw Your Signature** - Use index finger or pinch gesture to draw
6. **Capture Signature** - Click "Use Signature" when done
7. **Download** - Choose to download full PDF or signature only
8. **Sign Again** - Click "Sign Another" to start fresh

### Gesture Controls
- **Raise Index Finger** - Activates signature drawing mode
- **Pinch Thumb + Index** - Draw while pinched together
- **Make a Fist** - Pause drawing (fist relaxes to resume)
- **Open Both Hands** - Clear and start over

### Tips for Best Results
- ✅ Use good lighting for accurate hand detection
- ✅ Keep your hand in frame while drawing
- ✅ Move your finger smoothly for consistent signatures
- ✅ Ensure camera has clear view of your hand
- ✅ Use index finger or stylus for precise drawing

## 🛠️ Technical Stack

### Technologies Used
- **MediaPipe Hands** - AI-powered hand landmark detection and gesture recognition
- **HTML5 Canvas** - Real-time signature drawing and rendering
- **html2pdf.js** - PDF generation from HTML content
- **Google Fonts** - Professional typography (Syne & DM Sans)
- **Vanilla JavaScript** - Pure client-side processing, no frameworks

### Browser Requirements
- Modern browser with WebGL support (Chrome, Firefox, Safari, Edge)
- WebGL enabled for MediaPipe hand detection
- Camera/webcam access enabled
- JavaScript enabled
- Minimum 640x480 camera resolution

### Performance
- Real-time hand detection at 30+ FPS
- Smooth signature rendering with interpolation
- Optimized canvas drawing for mobile devices
- Efficient PDF generation under 2 seconds

## 🔒 Privacy & Security

### Data Handling
- ✅ All processing happens in your browser
- ✅ No signatures uploaded to any server
- ✅ No data stored on our servers
- ✅ Camera feed is never recorded or transmitted
- ✅ PDFs are stored only on your device

### Camera Access
- Only enabled when you authorize
- Can be disabled in browser settings anytime
- Revocable through browser permissions
- No background recording

## 📋 Document Details

### Full PDF Includes
- Complete signer information (name, email, company)
- Document date in Indian format
- Signature image
- Signing timestamp (ISO 8601)
- Hand used for signing (Left/Right)
- Total signing duration
- Total strokes count
- Legal terms and conditions
- Ananta Labs branding

### Signature-Only PDF Includes
- Clean signature image
- Minimal padding
- No metadata or text
- Ideal for letterheads and documents

## 🚨 Troubleshooting

### Hand Not Detected?
- Ensure good lighting and clear camera view
- Keep hand in frame and visible
- Check camera permissions in browser settings
- Try adjusting camera angle or position

### Signature Skipping Points?
- Move your finger more slowly
- Use steady, continuous gestures
- Ensure good hand lighting
- Maintain consistent distance from camera

### Download Not Working?
- Check browser download settings
- Disable pop-up blockers
- Try a different browser
- Ensure sufficient storage space

### Camera Permission Denied?
- Check browser settings for camera access
- Clear browser cache and reload
- Try a different browser
- Reload the page and allow permissions

## 📦 File Structure

```
air_signature.html          # Single complete application file
│
├── HTML Structure (5 sections)
│   ├── Permission Screen
│   ├── Header (navbar with links)
│   ├── Main Layout (2-column: camera + form)
│   ├── Success Overlay (download options)
│   └── Footer (links and copyright)
│
├── CSS Styles (520+ lines)
│   ├── Variables & Typography
│   ├── Layout & Grid
│   ├── Buttons & Forms
│   ├── Modals & Overlays
│   ├── Canvas & Signature Box
│   └── Animations & Responsive
│
├── JavaScript (1000+ lines)
│   ├── MediaPipe Setup
│   ├── Gesture Recognition
│   ├── Drawing & Interpolation
│   ├── State Management
│   ├── Form Validation
│   ├── PDF Generation
│   └── Modal System
│
└── Modals (5 information sections)
    ├── Privacy Policy
    ├── Terms & Conditions
    ├── How to Use
    ├── Contact Us
    └── Success Confirmation
```

## 🎨 Customization

The app can be easily customized:

### Colors
Edit CSS variables at the top of the `<style>` section:
```css
--primary: #000000;      /* Black */
--accent: #4A90E2;       /* Blue */
--success: #27AE60;      /* Green */
--error: #E74C3C;        /* Red */
--warning: #F39C12;      /* Orange */
--light-bg: #F8F9FA;     /* Light gray */
--dark-text: #2C3E50;    /* Dark text */
```

### Branding
Update company name and email in:
- HTML footer section
- Contact modal
- PDF footer text
- Privacy policy content

### Form Fields
Modify required fields in the form section:
- Add/remove input fields
- Change validation rules
- Update placeholder text

## 📞 Contact & Support

**Email:** [work.anantalabs@gmail.com](https://mail.google.com/mail/?compose=new&to=work.anantalabs@gmail.com)

**Support Response Time:** 24-48 business hours

**We Can Help With:**
- Technical issues and troubleshooting
- Feature requests and suggestions
- Partnership opportunities
- Privacy and security concerns
- General inquiries about AirSign

## 📄 Legal Information

### Compliance
- Compliant with E-SIGN Act (US)
- Compliant with UETA (Uniform Electronic Transactions Act)
- Supports digital signature certification
- Legally binding signatures in most jurisdictions

### Terms
Full terms and conditions available in the app's "Terms & Conditions" modal.

### Privacy
Complete privacy policy available in the app's "Privacy Policy" modal.

## 🌟 About Ananta Labs

Ananta Labs is dedicated to bringing innovative digital solutions. AirSign represents our commitment to security, accessibility, and user experience.

**Website:** Coming soon  
**GitHub:** [@anantalabs](https://github.com)

## 📊 System Requirements

| Requirement | Minimum | Recommended |
|------------|---------|-------------|
| Browser | Chrome 70+ | Chrome/Firefox latest |
| RAM | 2 GB | 4 GB |
| Camera | 640x480 | 1280x720 |
| Internet | None (offline ready) | For Gmail compose link |
| Storage | 50 MB | 100 MB |

## 🔄 Version History

### v1.0.0 - May 2026
- ✅ Initial release
- ✅ Hand gesture recognition
- ✅ Signature capture and drawing
- ✅ PDF generation (full + signature-only)
- ✅ Pause/resume functionality
- ✅ Form validation
- ✅ Modal system
- ✅ Legal documentation
- ✅ Contact support

## 📝 License

MIT License - Free for personal and commercial use.

See LICENSE file for details.

## 🙏 Acknowledgments

- **MediaPipe** - Hand landmark detection AI
- **html2pdf.js** - PDF generation library
- **Google Fonts** - Typography

## 🤝 Contributing

Found a bug or have a feature request? Email us at [work.anantalabs@gmail.com](https://mail.google.com/mail/?compose=new&to=work.anantalabs@gmail.com)

---

**Made with ❤️ by Ananta Labs**

© 2026 AirSign by Ananta Labs. All rights reserved.
