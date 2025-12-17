# Abhijeet Singh - Portfolio Website

A modern, responsive single-page portfolio website built with React, Vite, and Tailwind CSS. Features smooth scrolling navigation, dark mode, and beautiful animations.

## ✨ Features

- 🎨 Modern and clean design
- 🌓 Dark mode with keyboard shortcut (Ctrl/Cmd + K)
- 📱 Fully responsive for all devices
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 📊 Projects showcase with filtering
- 📝 Contact form
- 🎓 Education timeline
- 🎥 Video CV section
- ⬆️ Scroll to top button
- ♿ Accessible and SEO optimized

## 🚀 Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Custom CSS animations

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Abhijeet14d/Abhijeet_Portfolio.git
cd protfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🎯 Project Structure

```
protfolio/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── SectionHeading.jsx
│   ├── pages/           # Page sections
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── VideoCV.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Public assets
└── index.html           # HTML template
```

## 🎨 Customization

### Update Personal Information

1. **Profile Information**: Edit the content in `src/pages/Home.jsx` and `src/pages/About.jsx`
2. **Projects**: Update projects array in `src/pages/Projects.jsx`
3. **Skills**: Modify skills in `src/pages/Skills.jsx`
4. **Education**: Update education history in `src/pages/Education.jsx`
5. **Contact**: Change contact details in `src/pages/Contact.jsx`

### Change Colors

The website uses Tailwind CSS. To change the color scheme:
- Edit gradient colors in component files
- Primary colors: emerald, blue, purple
- Modify theme colors in `tailwind.config.js`

### Add/Remove Sections

1. Create new component in `src/pages/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## ⌨️ Keyboard Shortcuts

- **Ctrl/Cmd + K**: Toggle dark mode

## 🌐 Deployment

This project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Abhijeet Singh**
- Email: abhijeetsingh28004@gmail.com
- GitHub: [@Abhijeet14d](https://github.com/Abhijeet14d)
- LinkedIn: [Abhijeet Singh](https://www.linkedin.com/in/abhijeet-singh-394769248/)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
