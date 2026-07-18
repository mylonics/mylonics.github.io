import type { ImageMetadata } from 'astro';
import mylNrfUsbImage from '@images/products/myl-nrf-usb-1.0-front.png';
import mylRpUsbImage from '@images/products/myl-rp-usb-1.0-front.png';
import mylStmUsbImage from '@images/products/myl-stm-usb-1.0-front.png';

export interface ProductVariant {
  name: string;
  attributes: Record<string, string>;
}

export interface ProductOptionGroup {
  label: string;
  options: string[];
}

export interface ProductImage {
  src: ImageMetadata;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  summary: string;
  description: string[];
  highlights: string[];
  variantColumns?: string[];
  variants?: ProductVariant[];
  optionGroups?: ProductOptionGroup[];
  images?: ProductImage[];
  icon: string;
}

export const products: Product[] = [
  {
    id: 'myl-modules',
    name: 'myl-modules',
    subtitle: 'Castellated MCU Development Modules',
    badge: 'Open Hardware',
    summary:
      "Drop-in, castellated microcontroller modules built around Nordic nRF, Raspberry Pi RP2040, and STM32 silicon — with or without onboard USB.",
    description: [
      "The myl-modules family is a set of compact, castellated microcontroller modules designed to be reflowed directly onto a carrier PCB, much like a Wi-Fi or Bluetooth module. Each module exposes the MCU's I/O, power, and debug pins along its edge, so you can design a carrier board around a proven, pre-validated MCU footprint instead of routing a full BGA or QFN yourself.",
      'Three MCU platforms are available: Nordic nRF for Bluetooth Low Energy applications, Raspberry Pi RP2040 for general-purpose control with PIO peripherals, and STM32 for a broad range of performance and peripheral options. Each platform ships in a USB variant with an onboard USB connector for development, and a non-USB variant for space-constrained or production-only designs.',
    ],
    highlights: [
      'Castellated edges for direct reflow onto a carrier board',
      'Pre-validated MCU, power, and crystal layout',
      'USB variants for development; non-USB variants for production',
      'Compatible with the IDE for Zephyr toolchain',
      'Consistent pinout across the module family',
    ],
    variantColumns: ['Module', 'MCU Platform', 'USB'],
    variants: [
      { name: 'myl-nrf-usb', attributes: { 'MCU Platform': 'Nordic nRF', USB: 'Yes' } },
      { name: 'myl-nrf', attributes: { 'MCU Platform': 'Nordic nRF', USB: 'No' } },
      { name: 'myl-rp-usb', attributes: { 'MCU Platform': 'RP2040 (Raspberry Pi)', USB: 'Yes' } },
      { name: 'myl-rp', attributes: { 'MCU Platform': 'RP2040 (Raspberry Pi)', USB: 'No' } },
      { name: 'myl-stm-usb', attributes: { 'MCU Platform': 'STM32', USB: 'Yes' } },
      { name: 'myl-stm', attributes: { 'MCU Platform': 'STM32', USB: 'No' } },
    ],
    images: [
      { src: mylNrfUsbImage, alt: 'myl-nrf-usb module — Nordic nRF based castellated MCU module' },
      { src: mylRpUsbImage, alt: 'myl-rp-usb module — RP2040 based castellated MCU module' },
      { src: mylStmUsbImage, alt: 'myl-stm-usb module — STM32 based castellated MCU module' },
    ],
    icon: 'puzzle',
  },
  {
    id: 'usb-can-adapter',
    name: 'Industrial USB to 3x CAN Adapter',
    subtitle: 'Multi-Channel Industrial CAN Interface',
    badge: 'In Development',
    summary:
      'A ruggedized USB adapter with three independent CAN channels supporting CAN-FD, OpenCAN, and essentially all major CAN standards, with RS-485 and RS-232 variants.',
    description: [
      'The industrial USB to 3x CAN adapter connects a PC to up to three independent CAN buses simultaneously over a single USB connection. It is built for industrial and automotive development environments where multiple CAN networks need to be monitored, logged, or bridged at once.',
      'Full support for classic CAN 2.0, CAN-FD, and OpenCAN means the adapter works with legacy and modern CAN-based equipment alike. For applications that also need a serial interface, RS-485 and RS-232 variants are available alongside the standard 3x CAN configuration.',
    ],
    highlights: [
      'Three independent CAN channels',
      'CAN 2.0, CAN-FD, and OpenCAN support',
      'RS-485 and RS-232 variants available',
      'Single USB connection for all channels',
      'Industrial-grade connectors and enclosure',
    ],
    variantColumns: ['Variant', 'Interfaces'],
    variants: [
      { name: 'Standard', attributes: { Interfaces: '3x CAN (CAN 2.0, CAN-FD, OpenCAN)' } },
      { name: 'RS-485', attributes: { Interfaces: '3x CAN + RS-485' } },
      { name: 'RS-232', attributes: { Interfaces: '3x CAN + RS-232' } },
    ],
    icon: 'server',
  },
  {
    id: 'rtk-ground-station',
    name: 'RTK Ground Station',
    subtitle: 'u-blox ZED-Based RTK GNSS Base Station',
    badge: 'In Development',
    summary:
      'A u-blox ZED-based RTK ground station that streams correction data over your choice of telemetry module, in an enclosure sized for the deployment.',
    description: [
      'The RTK ground station is a survey-grade GNSS base station built around the u-blox ZED RTK module family. It computes and broadcasts RTK correction data to rover receivers in the field, enabling centimeter-level positioning accuracy for surveying, mapping, and autonomous navigation applications.',
      'Because every deployment is different, the ground station is available with a choice of telemetry module for delivering corrections to rovers, and a choice of enclosure waterproofing level for the deployment environment, from sheltered indoor use to fully submersible outdoor installations.',
    ],
    highlights: [
      'u-blox ZED-based survey-grade GNSS receiver',
      'Centimeter-level RTK correction accuracy',
      'Selectable telemetry module for correction delivery',
      'Selectable enclosure waterproofing level',
      'Pairs with Mylonics surveying and field robotics services',
    ],
    optionGroups: [
      {
        label: 'Telemetry Modules',
        options: [
          'LoRa long-range telemetry',
          'ISM-band radio telemetry',
          'Cellular (LTE-M / NB-IoT)',
          'Wi-Fi',
        ],
      },
      {
        label: 'Waterproofing',
        options: [
          'Standard enclosure (indoor / sheltered use)',
          'IP65 weather-resistant enclosure',
          'IP67 fully submersible-rated enclosure',
        ],
      },
    ],
    icon: 'mapPin',
  },
  {
    id: 'myl-debug-probe',
    name: 'myl-debug-probe',
    subtitle: 'Multi-Target Debug Probe & Test Jig',
    badge: 'Open Hardware',
    summary:
      'A Black Magic Probe-based debug probe on RP2040 PIO that stores multiple firmware images and flashes headless — doubling as a test jig and hardware watchdog.',
    description: [
      "myl-debug-probe builds on the open source Black Magic Probe firmware, running on the RP2040's PIO peripherals to implement SWD/JTAG debug and programming without a separate debug chip. A single probe gives you a self-contained GDB server plus a full flashing tool.",
      'Beyond day-to-day development, myl-debug-probe can store multiple firmware binaries onboard and flash targets headless, without a host PC attached. That makes it equally at home on a bench as it is embedded in a production test jig, where it can also act as a hardware watchdog for the unit under test.',
    ],
    highlights: [
      'Built on the open source Black Magic Probe firmware',
      'Runs on RP2040 PIO — no separate debug chip required',
      'Stores multiple binaries for headless, PC-free flashing',
      'Doubles as a production test jig',
      'Hardware watchdog mode for the target under test',
      'Pairs with the BMP Debug VS Code extension',
    ],
    icon: 'hammer',
  },
];
