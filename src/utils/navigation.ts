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
      { name: 'Surveying Technologies', url: '/services#surveying-technologies' },
      { name: 'Wireless / IoT', url: '/services#wireless-communication' },
      { name: 'Firmware Development', url: '/services#firmware-development' },
      { name: 'UX Development', url: '/services#ux-development' },
      { name: 'Server Development', url: '/services#server-development' },
      { name: 'Electrical Systems Design', url: '/services#electrical-systems-design' },
    ],
  },
  {
    section: 'Products',
    links: [
      { name: 'myl-modules', url: '/products/myl-modules' },
      { name: 'USB to 3x CAN Adapter', url: '/products/usb-can-adapter' },
      { name: 'RTK Ground Station', url: '/products/rtk-ground-station' },
      { name: 'myl-debug-probe', url: '/products/myl-debug-probe' },
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
      { name: 'Blog', url: '/blog' },
      { name: 'Contact', url: '/contact' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  github: 'https://github.com/mylonics',
  x: 'https://x.com/mylonics',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
