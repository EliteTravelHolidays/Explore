Elite Travels — React Frontend
Official website frontend for Elite Travels, built in React and styled with Tailwind CSS. This repo contains the about.elitetravelholidays.com site — a marketing and enquiry platform that pulls content from a WordPress CMS backend.

🌐 Domain Structure
URLPurposewww.elitetravelholidays.comMain booking site (vendor managed — do not touch)about.elitetravelholidays.comThis React site (our responsibility)cms.elitetravelholidays.comWordPress CMS backend (our responsibility)

🛠 Tech Stack
LayerTechnologyFrameworkReact (Create React App)StylingTailwind CSS v3AnimationFramer MotionIconsLucide React + React IconsCarouselSwiper.jsRoutingReact Router DOMHTTPAxiosSEOReact Helmet AsyncNotificationsReact Hot Toast

📁 Project Structure
elite-travels/
├── src/
│   ├── assets/              # Logo and static images
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, Layout wrapper
│   │   ├── home/            # All home page sections
│   │   ├── blog/            # Blog card and grid components
│   │   ├── testimonials/    # Testimonial card and grid
│   │   ├── about/           # Company story, team, why us
│   │   └── common/          # Shared: forms, CTA, buttons, skeletons
│   ├── pages/               # Route-level pages (Home, About, Blog, Testimonials)
│   ├── utils/
│   │   ├── api.js           # All WordPress REST API calls
│   │   └── constants.js     # URLs, phone, email, WhatsApp link
│   ├── App.jsx
│   ├── index.css
│   └── index.js
└── public/

⚙️ Local Setup
Requirements: Node.js 18+, npm
bash# Clone the repo
git clone https://github.com/elitetravelholidays-ADMIN/Explore-.git
cd Explore-

# Install dependencies
npm install

# Start development server
npm start
App runs at http://localhost:3000

🔑 Key Constants (src/utils/constants.js)
All URLs, phone numbers, and contact links live here. If any contact details change, update this file only — nowhere else.
jsWP_BASE_URL  = "https://cms.elitetravelholidays.com"   // WordPress CMS
SITE_URL     = "https://about.elitetravelholidays.com"  // This React site
WHATSAPP_URL = "https://wa.me/919740004573"
PHONE        = "+91 9740004573"
EMAIL        = "support@elitetravelholidays.com"

📡 WordPress CMS Integration
React fetches all dynamic content (blogs, testimonials, enquiry submissions) from the WordPress REST API at cms.elitetravelholidays.com.
DataEndpointBlog posts/wp-json/wp/v2/posts?_embedTestimonials/wp-json/wp/v2/testimonials?_embedACF fields/wp-json/acf/v3/testimonialsEnquiry form/wp-json/wpforms/v1/form/submit

Note: CMS is not yet live. API calls use mock/fallback data until WordPress is deployed.


🚀 Deployment
Build for production:
bashnpm run build
This generates a build/ folder of static files. Upload the contents to Hostinger via File Manager or GitHub Actions FTP (auto-deploy is planned — see next steps).
Required .htaccess on Hostinger (for React Router to work):
apacheOptions -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]

📋 Contributing Guidelines
Branch naming
feature/navbar-fix
fix/blog-card-contrast
chore/update-constants
Commit messages
feat: add WhatsApp floating button
fix: hero text contrast on mobile
chore: update phone number in constants
Rules

JSX only — no TypeScript
Tailwind only — no inline styles unless Tailwind genuinely cannot handle it
No <form> tags — use <div> with onClick handlers
External links — always use window.open(url, '_blank', 'noopener,noreferrer')
All images must have alt attributes
Every component must have a default export
Never leave a file half-complete — finish or revert

Before pushing
bashnpm run build   # Must complete with zero errors

🎨 Brand Guidelines
TokenValueUsagePrimary Blue#0078D7Navbar, headings, linksSky Blue#38BDF8Accents, highlightsOrange#F97316CTA buttons onlyDark Navy#0A1F44Backgrounds, footerWhite#FFFFFFText on dark backgrounds

Never use gray text on colored backgrounds. It fails contrast checks.


📌 Current Status

 React site built and running locally
 All pages scaffolded (Home, About, Blog, Testimonials)
 Tailwind + Framer Motion integrated
 UI fixes in progress (navbar, blog cards, floating buttons, footer)
 npm run build clean pass
 GitHub Actions FTP auto-deploy setup
 WordPress CMS deployed to subdomain
 React connected to live WordPress API
 Live on about.elitetravelholidays.com


📞 Contact
Email: support@elitetravelholidays.com
Phone: +91 9740004573
WhatsApp: Chat with us
