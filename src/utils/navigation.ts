// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Services',
    links: [
      { name: 'Industrial Automation', url: '/about#industrial-automation' },
      { name: 'Firmware Development', url: '/about#firmware' },
      { name: 'Electrical Systems Design', url: '/about#electrical' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '/about' },
      { name: 'Blog', url: '/blog' },
      { name: 'Contact', url: '/contact' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  github: 'https://github.com/mylonics',
  x: 'https://twitter.com/mylonics',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
