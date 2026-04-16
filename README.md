# 🚀 Portfolio - Duy Vo

A modern, animated portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Features

- ✨ Smooth animations with Framer Motion
- 🎯 Responsive design (mobile-first)
- 🌙 Dark mode aesthetic with gradient effects
- ⚡ Built with Next.js 14 App Router
- 🎨 Custom gradient themes
- 📱 Fully responsive

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **3D Effects:** Three.js + React Three Fiber (ready for expansion)

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production
```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Info
Edit `src/app/page.tsx`:
- Change name, bio, and descriptions in the Hero section
- Update skills array with your actual skills
- Modify projects with your real projects
- Update experience section
- Add your real contact links (email, GitHub, LinkedIn)

### Change Colors
Edit `src/app/globals.css`:
```css
:root {
  --primary: #00f0ff;    /* Cyan */
  --secondary: #7b2cbf;  /* Purple */
  --accent: #f72585;     /* Pink */
}
```

### Add More Sections
Simply add new sections in `page.tsx` following the existing pattern.

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── globals.css    # Global styles & theme
│       ├── layout.tsx     # Root layout
│       └── page.tsx       # Main portfolio page
├── package.json
└── README.md
```

## 🎯 Next Steps

1. Replace placeholder content with your actual info
2. Add real project screenshots/images
3. Connect your social media links
4. Add a contact form (optional)
5. Deploy to Vercel/Netlify

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Connect to Netlify and deploy the build output
```

---

Built with 💜 by Duy Vo
