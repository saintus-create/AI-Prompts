// Site configuration
export const SITE = {
  title: 'Your Name',
  description: 'Front-end Developer & Designer',
  url: 'https://yourdomain.com',
  // Social links
  social: {
    twitter: 'yourtwitter',
    github: 'yourgithub',
    linkedin: 'yourlinkedin',
  },
  // Navigation
  nav: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Blog', href: '/blog' },
  ],
  // Theme colors (matches CSS variables in app.css)
  theme: {
    light: {
      primary: '0 0% 9%',
      primaryForeground: '0 0% 98%',
      secondary: '0 0% 96.1%',
      secondaryForeground: '0 0% 9%',
      accent: '0 0% 96.1%',
      accentForeground: '0 0% 9%',
    },
    dark: {
      primary: '0 0% 98%',
      primaryForeground: '0 0% 9%',
      secondary: '0 0% 14.9%',
      secondaryForeground: '0 0% 98%',
      accent: '0 0% 14.9%',
      accentForeground: '0 0% 98%',
    },
  },
  // Custom colors (used for gradients, accents, etc.)
  colors: {
    // These match the --color-one, --color-two, --color-three in app.css
    primary: '#ffbd7a',
    secondary: '#fe8bbb',
    accent: '#9e7aff',
  },
} as const

export default SITE
