# PRIME WALT NIG LTD - Corporate Website

A professional multi-page corporate website for PRIME WALT NIG LTD, featuring modern design, responsive layout, and all sections from the corporate profile.

## Folder Structure

```
PrimeWaltWebsite/
├── index.html          # Home Page
├── about.html          # About Us, Mission, Vision, Values
├── services.html       # Services Overview
├── projects.html       # Projects & Case Studies
├── team.html           # Management Team & Staff
├── contact.html        # Contact Information & Form
├── style.css           # Main Stylesheet
├── script.js           # JavaScript for Interactivity
└── images/             # Folder for images
    ├── logo.png        # Company logo
    └── [your images]   # Add your images here
```

## Pages Overview

### 1. Home Page (index.html)
- Hero section with company overview
- About company preview
- Mission, Vision, Values overview
- Services preview (4 key services)
- Why Choose Us section
- Projects preview
- Call-to-action section

### 2. About Us (about.html)
- Company description
- Our Story section
- Mission, Vision, Values (detailed)
- Core Values with icons
- Impact statistics
- Partnership CTA

### 3. Services (services.html)
- Downstream Petroleum Supply
- Government Contract Facilitation
- Real Estate Services
- Export of Natural Resources
- Lithium Mining
- Renewable Energy Solutions
- Why Choose Our Services

### 4. Projects (projects.html)
- Oil & Gas Projects (NNPC, Antan)
- Solar Street Lights (500+ installed)
- Education & Community Projects
- Financial Services (Kayi Bank)
- Real Estate (Asokoro Lake View)
- Natural Resources Export
- Technical Consulting (Marino FX)
- Telecommunications (Upcoming)
- Additional Projects

### 5. Team (team.html)
- Co-Founders (3)
- Management Team (6 roles)
- Staff Strength (6 departments)
- Company Commitment to Staff

### 6. Contact (contact.html)
- Contact Information
- Contact Form
- Map Placeholder
- Department-specific contacts

## Features

✅ **Responsive Design** - Works on desktop, tablet, and mobile devices
✅ **Modern Styling** - Clean, professional corporate look
✅ **Interactive Elements** - Hover effects, smooth scrolling, animations
✅ **Mobile Navigation** - Hamburger menu for mobile devices
✅ **Form Validation** - Contact form with validation
✅ **Scroll Animations** - Elements fade in as you scroll
✅ **Image Placeholders** - Clearly marked for easy replacement
✅ **Consistent Header/Footer** - Navigation and contact info on every page

## How to Use

### 1. Open the Website
Simply open `index.html` in any web browser:
```bash
# On Mac
open /Users/musamuhammad/Desktop/PrimeWaltWebsite/index.html

# Or double-click the file in Finder
```

### 2. Customize Content

#### Replace Logo
1. Create your logo (recommended: 200x60px PNG with transparent background)
2. Save it as `logo.png` in the `images/` folder
3. Update the logo section in all HTML files if needed

#### Replace Images
All image placeholders are clearly marked with `[Image Placeholder]` text. To replace:

1. **Hero Images**: Look for `.hero` section backgrounds
2. **Service Images**: Look for `.service-image` divs
3. **Project Images**: Look for `.project-image` divs
4. **Team Photos**: Look for `.team-image` divs
5. **About Images**: Look for `.about-placeholder` divs

Example replacement:
```html
<!-- Before (Placeholder) -->
<div class="service-image">
    <div class="service-image-icon">⛽</div>
    <p>[Petroleum Image]</p>
</div>

<!-- After (With Image) -->
<div class="service-image">
    <img src="images/petroleum-supply.jpg" alt="Petroleum Supply Operations" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

### 3. Update Contact Information

Edit the following files to update contact details:
- **Footer contact info**: All HTML files (footer section)
- **Contact page form**: `contact.html`
- **Contact form email**: `contact.html` (form action)

Search and replace:
- `primewaltnigltd@gmail.com`
- `+234 (0) XXX XXX XXXX`
- `Nigeria` (location)

### 4. Add Your Real Map

In `contact.html`, replace the map placeholder:
```html
<!-- Before -->
<div class="map-placeholder">
    <div class="map-icon">🗺️</div>
    <p class="map-text">[Map Placeholder]</p>
</div>

<!-- After (Google Maps Embed) -->
<div class="map-container">
    <iframe 
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
        width="100%" 
        height="400" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</div>
```

### 5. Customize Colors

Edit `:root` variables in `style.css`:
```css
:root {
    --primary-color: #1a365d;      /* Dark blue - headers, accents */
    --secondary-color: #2c5282;     /* Medium blue */
    --accent-color: #ed8936;       /* Orange - CTAs, highlights */
    --text-dark: #2d3748;           /* Dark text */
    --text-light: #718096;         /* Light text */
    /* ... more variables */
}
```

## Adding New Pages

To add a new page:
1. Copy an existing HTML file (e.g., `services.html`)
2. Rename it (e.g., `careers.html`)
3. Update the navigation menu in ALL HTML files:
```html
<a href="careers.html" class="nav-link">Careers</a>
```

## Image Recommendations

| Section | Recommended Size | Format |
|---------|-----------------|--------|
| Logo | 200x60px | PNG (transparent) |
| Hero/Banner | 1920x600px | JPG or WebP |
| Service Images | 600x400px | JPG or WebP |
| Project Images | 600x400px | JPG or WebP |
| Team Photos | 400x500px | JPG or WebP |
| About Images | 800x600px | JPG or WebP |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Tips

1. **Optimize images** - Use compressed JPG or WebP format
2. **Lazy loading** - Images below the fold load on scroll
3. **Minify CSS/JS** - For production deployment
4. **Use CDN** - For faster loading in different regions

## Deployment

For production deployment:
1. Minify `style.css` and `script.js`
2. Compress all images
3. Upload to web hosting (Netlify, Vercel, etc.)
4. Update all file paths if needed

## Support

For questions or customizations:
- Review the code in each HTML file
- Check CSS classes in `style.css`
- See JavaScript functions in `script.js`

---

**Created for PRIME WALT NIG LTD**
*Excellence in Every Sector*

