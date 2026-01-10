# Global SP Solutions Website

Professional business development and consulting services website for Global SP Solutions.

## 🌐 Website Structure

- **index.html** - Home page with hero section and call-to-action
- **services.html** - Services overview with process and benefits
- **experiences.html** - Company expertise and track record
- **solution.html** - Solutions and value proposition
- **contact.html** - Contact information and email link
- **styles.css** - Main stylesheet with responsive design
- **script.js** - JavaScript for smooth interactions and animations

## 📁 Folder Structure

```
global-solutions-sp/
├── index.html
├── services.html
├── experiences.html
├── solution.html
├── contact.html
├── styles.css
├── script.js
├── README.md
└── images/
    ├── logo.png
    ├── services-revenue.jpg
    ├── services-process.jpg
    ├── services-benefits.png
    ├── experiences-1.jpg
    ├── experiences-2.jpg
    ├── solution-partnership.jpg
    └── contact-phone.jpg
```

## 🚀 Setup Instructions

### 1. Upload Files to GitHub

1. Create an `images` folder in your repository
2. Upload all HTML, CSS, and JS files to the root directory
3. Upload your images to the `images` folder with these names:
   - `logo.png` - Company logo
   - `services-revenue.jpg` - Services revenue section image
   - `services-process.jpg` - Process section image
   - `services-benefits.png` - Benefits section image
   - `experiences-1.jpg` - First experience image
   - `experiences-2.jpg` - Second experience image
   - `solution-partnership.jpg` - Solution partnership image
   - `contact-phone.jpg` - Contact page image

### 2. Enable GitHub Pages

1. Go to repository **Settings**
2. Navigate to **Pages** in the left sidebar
3. Under "Source", select **"Deploy from a branch"**
4. Select branch: **main** and folder: **/ (root)**
5. Click **Save**
6. Your site will be live at: `https://[your-username].github.io/global-solutions-sp/`

### 3. Connect Custom Domain (Squarespace)

To point your Squarespace domain to GitHub Pages:

1. In your Squarespace account, go to **Settings** > **Domains**
2. Click on your domain
3. Navigate to **Advanced Settings** > **Custom DNS**
4. Add these DNS records:
   - **A Record**: `185.199.108.153`
   - **A Record**: `185.199.109.153`
   - **A Record**: `185.199.110.153`
   - **A Record**: `185.199.111.153`
   - **CNAME Record**: `www` → `[your-username].github.io`
5. In GitHub repository settings under **Pages**, add your custom domain
6. Enable "Enforce HTTPS"

DNS changes may take 24-48 hours to propagate.

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fast Loading** - Optimized CSS and minimal JavaScript
- **SEO Friendly** - Semantic HTML structure
- **Easy to Maintain** - Well-organized code with comments

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1a5490;
    --secondary-color: #2c7bc4;
    --accent-color: #f39c12;
}
```

### Content
Edit the HTML files directly to update text, images, or add new sections.

### Images
Replace images in the `images/` folder. Make sure to use the same filenames or update the references in your HTML files.

## 📞 Contact Information

**Calvin Toone**  
Email: caltoone@gmail.com

## 📄 License

© 2026 Global SP Solutions. All rights reserved.

---

**Need help?** Contact the site administrator or refer to GitHub Pages documentation.