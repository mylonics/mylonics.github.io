// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Products', url: '/products' },
  { name: 'Tools', url: '/tools' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Services',
    links: [
      { name: 'Industrial Automation', url: '/services#industrial-automation' },
      { name: 'Field Robotics', url: '/services#field-robotics' },
      { name: 'Analog Sensing', url: '/services#analog-sensing' },
      { name: 'Wireless / IoT', url: '/services#wireless-communication' },
      { name: 'Firmware Development', url: '/services#firmware-development' },
      { name: 'Electrical Systems Design', url: '/services#electrical-systems-design' },
    ],
  },
  {
    section: 'Tools',
    links: [
      { name: 'IDE for Zephyr', url: '/tools#zephyr-ide' },
      { name: 'Struct Frame', url: '/tools#struct-frame' },
      { name: 'BMP Debug', url: '/tools#bmp-debug' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About', url: '/about' },
      { name: 'Products', url: '/products' },
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
