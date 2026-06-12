import { ComponentItem, PreconfiguredRig } from './types';

export const COMPONENT_LIST: ComponentItem[] = [
  // --- CPUs ---
  {
    id: 'cpu-i9-14900k',
    name: 'Intel Core i9-14900K',
    brand: 'Intel',
    price: 58900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEK-6NvwyqDMYMje2h4NAX5RLeWGEav9TAgrJS0fw-3pUmvpiplwpAPouxxKBVCQAs5p6iAv6pQXVC0ObpOL9ji60k2_oiMBUDaL7GB9DoB17G5mIpMPvP83u2ogwID87UpL7_hVuC2e0ggLTiopBFT5YTN6sz9vk43rWct_tS0g0YUQ8OgTFI-yrdLCeO8jMAUEcXdyRDkt_JXVx7MSKe0m0QoCd1ocKmwHhz_C6hEtCTiP51a6HjEw9qDH0tzCuT0wc13KndNBM',
    rating: 4.9,
    category: 'CPU',
    specs: {
      'Cores/Threads': '24C / 32T',
      'Max Clock': '6.0 GHz',
      'Wattage': '125W',
      'Socket': 'LGA1700'
    },
    status: 'IN STOCK',
    wattage: 125
  },
  {
    id: 'cpu-r9-7950x',
    name: 'AMD Ryzen 9 7950X',
    brand: 'AMD',
    price: 54900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9ihhDUIk093N_87Bqro-6V4DRTTs5OKJsPO1JHpOv5ZKzZ5ewdQZkZaELPttF5Xgn34mzRmGJEIcgxbWeNBdg7L-zT3klBS6Eq3xBs--Fjs3yKmbljOJ6beaAf8dlj0r9qyvG-MwdqZ4B_qq2oqT968qUiw_zybogAMj6tOqYE3_O5oC4ZHfZFVwydQ2YcJl4m8Dpn8tt2VRjDAIGXkmBcrgJeegFUS5pT0IJTYbcVVC3yB9nGLsGGpCLQN_f3wWOvtvf0hqjhBc',
    rating: 4.8,
    category: 'CPU',
    specs: {
      'Cores/Threads': '16C / 32T',
      'Max Clock': '5.7 GHz',
      'Wattage': '170W',
      'Socket': 'AM5'
    },
    status: 'IN STOCK',
    wattage: 170
  },
  {
    id: 'cpu-i7-14700k',
    name: 'Intel Core i7-14700K',
    brand: 'Intel',
    price: 40900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOqONFMIGfhsHW6yyLQE8qkMVCzSKGy3YxWiZjFTV2JosDYOJ4OGlVdWE6ZdmTHusUFPLasG0b7y2Aps2IPfbeWWadEcaCaUQaJnKRtkeSXdL2m2SiuFU6-NBsJ4V-pvEJMlpJ7JJB8xLVn-4MChuNU0mHAZLVUvOvUbsO5kYXgy16dqseYgHjghSH5ud3CBOvPMq1fvjr69DbbE15ClWOZoTehLiP56UUsY_s6IIV6GgmTnKqfCbHcYohKS2-lQ6B9ahXETe6Pe8',
    rating: 4.7,
    category: 'CPU',
    specs: {
      'Cores/Threads': '20C / 28T',
      'Max Clock': '5.6 GHz',
      'Wattage': '125W',
      'Socket': 'LGA1700'
    },
    status: 'LIMITED STOCK',
    wattage: 125
  },
  {
    id: 'cpu-r7-7800x3d',
    name: 'AMD Ryzen 7 7800X3D',
    brand: 'AMD',
    price: 36900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9ihhDUIk093N_87Bqro-6V4DRTTs5OKJsPO1JHpOv5ZKzZ5ewdQZkZaELPttF5Xgn34mzRmGJEIcgxbWeNBdg7L-zT3klBS6Eq3xBs--Fjs3yKmbljOJ6beaAf8dlj0r9qyvG-MwdqZ4B_qq2oqT968qUiw_zybogAMj6tOqYE3_O5oC4ZHfZFVwydQ2YcJl4m8Dpn8tt2VRjDAIGXkmBcrgJeegFUS5pT0IJTYbcVVC3yB9nGLsGGpCLQN_f3wWOvtvf0hqjhBc',
    rating: 4.9,
    category: 'CPU',
    specs: {
      'Cores/Threads': '8C / 16T',
      'Max Clock': '5.0 GHz',
      'Wattage': '120W',
      'Socket': 'AM5'
    },
    status: 'IN STOCK',
    wattage: 120
  },

  // --- GPUs ---
  {
    id: 'gpu-rtx-4090',
    name: 'NVIDIA GeForce RTX 4090',
    brand: 'NVIDIA',
    price: 159900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYfvMOup8r_olzHd00LF3KM4pBQZKhe3wBzqpdEfilQiJT94a9v8ihu5BvdJQC0SpOTTHysQN-gzoLGoG3JnZATRFVv8luQviwPcjBXZOZ7P6ijCMQS72a5SJMTrETRq5r59x1R4mvCL5TvEd5TsNjPMwOMxbaRGrvHO5TMqghU3pfTZBVzd06c8QdxATctBKXDZ7-1FK-swPGoBJilbtku6eyRz7JdtkUpZPDrAVqBiZadys20YB5cpnEytoi62xIs6HCDdgIQzs',
    rating: 5.0,
    category: 'GPU',
    specs: {
      'VRAM': '24GB GDDR6X',
      'Edition': 'Founders Edition',
      'Min Power': '850W',
      'Boost Clock': '2.52 GHz'
    },
    status: 'IN STOCK',
    wattage: 450
  },
  {
    id: 'gpu-rtx-4080-super',
    name: 'NVIDIA GeForce RTX 4080 Super',
    brand: 'NVIDIA',
    price: 99900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYfvMOup8r_olzHd00LF3KM4pBQZKhe3wBzqpdEfilQiJT94a9v8ihu5BvdJQC0SpOTTHysQN-gzoLGoG3JnZATRFVv8luQviwPcjBXZOZ7P6ijCMQS72a5SJMTrETRq5r59x1R4mvCL5TvEd5TsNjPMwOMxbaRGrvHO5TMqghU3pfTZBVzd06c8QdxATctBKXDZ7-1FK-swPGoBJilbtku6eyRz7JdtkUpZPDrAVqBiZadys20YB5cpnEytoi62xIs6HCDdgIQzs',
    rating: 4.8,
    category: 'GPU',
    specs: {
      'VRAM': '16GB GDDR6X',
      'Edition': 'TUF Gaming',
      'Min Power': '750W',
      'Boost Clock': '2.64 GHz'
    },
    status: 'IN STOCK',
    wattage: 320
  },
  {
    id: 'gpu-rx-7900xtx',
    name: 'AMD Radeon RX 7900 XTX',
    brand: 'AMD',
    price: 89900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYfvMOup8r_olzHd00LF3KM4pBQZKhe3wBzqpdEfilQiJT94a9v8ihu5BvdJQC0SpOTTHysQN-gzoLGoG3JnZATRFVv8luQviwPcjBXZOZ7P6ijCMQS72a5SJMTrETRq5r59x1R4mvCL5TvEd5TsNjPMwOMxbaRGrvHO5TMqghU3pfTZBVzd06c8QdxATctBKXDZ7-1FK-swPGoBJilbtku6eyRz7JdtkUpZPDrAVqBiZadys20YB5cpnEytoi62xIs6HCDdgIQzs',
    rating: 4.7,
    category: 'GPU',
    specs: {
      'VRAM': '24GB GDDR6',
      'Edition': 'Nitro+ Vapor-X',
      'Min Power': '800W',
      'Boost Clock': '2.68 GHz'
    },
    status: 'LIMITED STOCK',
    wattage: 355
  },

  // --- RAM ---
  {
    id: 'ram-64gb-dom-plat',
    name: '64GB DDR5 Dom. Platinum',
    brand: 'VOIDTECH',
    price: 24500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbKNbV3w2Eas5mFTIF-kYY4FI0AqpfAysBNp5aTFL23oGXTHFvQy4_PirK72BOSK4IKf-k427En18FjzZCXBUpucz87impfkkBlZAYOAP7sGJWrHvuDpscEv4rvPadOXTmRoe1xQvhWykGwBT-Qq0ZFPzUsXoaYqApCXiog6aENQgkCruwbAAk7lS1k_xlJJj8JuDVgYXo0DwhTnOlJykqr5mvZFpCKz0EUxwkIjXlvdBIbTVQO3BOeyz_qu7-CVI02VRXkTB5RMU',
    rating: 4.9,
    category: 'RAM',
    specs: {
      'Speed': '6400MHz',
      'Latency': 'CL32',
      'Configuration': '2x32GB Kit',
      'RGB': 'Custom Capellix'
    },
    status: 'IN STOCK',
    wattage: 15
  },
  {
    id: 'ram-32gb-neo-flux',
    name: '32GB DDR5 Neo-Flux S',
    brand: 'NEO-FLUX',
    price: 13900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbKNbV3w2Eas5mFTIF-kYY4FI0AqpfAysBNp5aTFL23oGXTHFvQy4_PirK72BOSK4IKf-k427En18FjzZCXBUpucz87impfkkBlZAYOAP7sGJWrHvuDpscEv4rvPadOXTmRoe1xQvhWykGwBT-Qq0ZFPzUsXoaYqApCXiog6aENQgkCruwbAAk7lS1k_xlJJj8JuDVgYXo0DwhTnOlJykqr5mvZFpCKz0EUxwkIjXlvdBIbTVQO3BOeyz_qu7-CVI02VRXkTB5RMU',
    rating: 4.8,
    category: 'RAM',
    specs: {
      'Speed': '6000MHz',
      'Latency': 'CL30',
      'Configuration': '2x16GB Kit',
      'RGB': 'Prismatic LED'
    },
    status: 'IN STOCK',
    wattage: 10
  },

  // --- Cooling ---
  {
    id: 'cool-nexus-link',
    name: 'Nexus Link H360 LCD',
    brand: 'VOIDTECH',
    price: 21900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYfvMOup8r_olzHd00LF3KM4pBQZKhe3wBzqpdEfilQiJT94a9v8ihu5BvdJQC0SpOTTHysQN-gzoLGoG3JnZATRFVv8luQviwPcjBXZOZ7P6ijCMQS72a5SJMTrETRq5r59x1R4mvCL5TvEd5TsNjPMwOMxbaRGrvHO5TMqghU3pfTZBVzd06c8QdxATctBKXDZ7-1FK-swPGoBJilbtku6eyRz7JdtkUpZPDrAVqBiZadys20YB5cpnEytoi62xIs6HCDdgIQzs',
    rating: 4.9,
    category: 'Cooling',
    specs: {
      'Radiator Size': '360mm AIO',
      'Fans': '3x 120mm VoidFans',
      'Screen': '2.8" Pure IPS LCD',
      'Pump': 'Asetek 8th Gen'
    },
    status: 'IN STOCK',
    wattage: 25
  },
  {
    id: 'cool-glacier-loop',
    name: 'Glacier Custom Loop Kit',
    brand: 'CYBERCORE',
    price: 34900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYfvMOup8r_olzHd00LF3KM4pBQZKhe3wBzqpdEfilQiJT94a9v8ihu5BvdJQC0SpOTTHysQN-gzoLGoG3JnZATRFVv8luQviwPcjBXZOZ7P6ijCMQS72a5SJMTrETRq5r59x1R4mvCL5TvEd5TsNjPMwOMxbaRGrvHO5TMqghU3pfTZBVzd06c8QdxATctBKXDZ7-1FK-swPGoBJilbtku6eyRz7JdtkUpZPDrAVqBiZadys20YB5cpnEytoi62xIs6HCDdgIQzs',
    rating: 5.0,
    category: 'Cooling',
    specs: {
      'Radiator Size': '420mm Custom',
      'Reservoir': 'VoidPump D5 Helix',
      'Fittings': 'Hardline PETG 14mm',
      'Blocks': 'Universal Gold Nickel'
    },
    status: 'LIMITED EDITION',
    wattage: 40
  },

  // --- Case ---
  {
    id: 'case-apex-mesh',
    name: 'APEX MESH-G1',
    brand: 'CYBERCORE',
    price: 8499,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8x1JeaiIB15HxHyp26oM8Xr7yTMiJT4GqDBG0GyyAKHK_uPLAtSMAMAfpQuEvTpc31QZUlKUjydi8_Y8HsIaY5eOyZudn_KDhGBMXwudHFLx3CT20R-Nl2d_FJ2gJloCq7MWdRH-6HpqUisWgPc_mWXiJf1HJBNGUPTHOL6I3GGbeVt4NE3RNAsYFhWEmjv9mNnxuj7_wV1V8uVMBmNdG3hDc1fVnEbB7Lb-h39FXkHfbCsOZHgDybGig6RdcNSyPvC4QNHQp1zM',
    rating: 4.9,
    category: 'Case',
    specs: {
      'Form Factor': 'ATX / M-ATX',
      'Cooling Limit': '360mm Rad',
      'Materials': 'Steel / Tempered Glass',
      'Fans': '4x pre-installed RGB'
    },
    status: 'NEW ARRIVAL',
    wattage: 0
  },
  {
    id: 'case-titan-flow',
    name: 'TITAN FLOW X',
    brand: 'TITAN SYSTEMS',
    price: 12999,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUhHDHPHPbNyzXMZp4_ttTTMySuYkfbzjLpts1Xcvwct-MTht9XuGliuELOJ5DiZ386hYxbboYrUDyNuzFC_aHrCw8GOJjHMeB_JGRtXkH4ksGaMp6Hp6IgQDkQmLM1zbzU-1BbYsxcZFv78bYPVYM7_k4uupzkpmQXty9-IHSxFP29ZJUYuJFdwmzuoW5A0lGcA26bYDxQKl1MPp2dkkYBWefkqT48byuq31IIfVWWSKHgHuimsYM38GK6pmcxvY25AU5YVXI54I',
    rating: 5.0,
    category: 'Case',
    specs: {
      'Form Factor': 'E-ATX / ATX',
      'Storage': '6x Drive Bays',
      'Thickness': '1.2mm Aluminum',
      'Expansion': '8 Horizontal Slots'
    },
    status: 'IN STOCK',
    wattage: 0
  },

  // --- Accessories ---
  {
    id: 'acc-phantom-glide',
    name: 'Phantom Glide V3 Mouse',
    brand: 'VOIDTECH',
    price: 10499,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9o_cqm2RpIAI4SZcHWisZXd4sUWoUYKxgLoJBAjhNnDOeR3l3sZPT8yiPHsURUhoOBqMdRnLnUBWVFQJGzu1_wrDshGwd6ZJDZ6KlSDWN_c1KueRlML7OS6IQBdoEwn94YpIc4vUj0IoVZzL0BNwMR4s6mE3jEaW3RjVJ09fS4TsYJs_R_R74jXYWOQorESFzuk9eW6g1tqZTyy8n7LcT74gSJ7DA0CrPQMg_atd1evovPJr4TUseG2VTDsny8MEL2JoYpgslFHk',
    rating: 4.8,
    category: 'Accessories',
    specs: {
      'Connectivity': 'Wireless 2.4G',
      'Sensor': '26K DPI Pro',
      'Weight': '49 Grams',
      'Battery Life': '90 Hours'
    },
    status: 'IN STOCK',
    wattage: 5
  },
  {
    id: 'acc-sonic-echo',
    name: 'Sonic Echo Pro Headset',
    brand: 'VOIDTECH',
    price: 24999,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5AHM9PD0177c8NS1ul1tZ8-soBwau2NXkQ82ONnm-RMJhkM8fBPRfQ4TGjJR51wmUFbqWALT5kESkG9bE7zJBs19h9b84lPGw2y2KurtfCY0t-Z-Alq6bU73nHVNsEpW1byas-opaZsp4yDZ-nJ4RkyT3eoRmknNHAWhOcSSreHTP_WJaFOZWq5rA10xMtqw-fVG3UIsZCsKkIbtKJikcyyu250qDTRSes9RNjMnlbvyTpyhMEA2BUj59hhoqS4y-Flw0F52-n6o',
    rating: 4.7,
    category: 'Accessories',
    specs: {
      'Sound': '7.1 Spatial Audio',
      'Drivers': '50mm Neodymium',
      'Wireless Range': '30 Meters',
      'Mic Type': 'Retractable Noise-Canceling'
    },
    status: 'LIMITED EDITION',
    wattage: 5
  },
  {
    id: 'acc-flux-mat',
    name: 'Flux-Mat RGB Deskpad',
    brand: 'NEO-FLUX',
    price: 4499,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAQvWCA8F55yfpaQ7wW_GAuT2tofyrV4vHBrowdnknri1MD35ZRTiiCLVTCLgOOjxfWjoLH-RazGYF9QdySaw2rvzy2lHLN03EOsFND5WU54viuVcc8b7zQC4ITgYdOmJSQ1lvJKk1aMt1dsI_Gb1vn8lgaHOXRDZsXJ3zL5ph--P2yqAqprtd7SXhLKs-OhcHUi3xUWpMoxnYS5iUIpr32IUQzzH6WsVhCXekMi8b8If5GkSrW_IcOI2XKEf-cgsA8ZTtr4ZdScE',
    rating: 4.5,
    category: 'Accessories',
    specs: {
      'Texture': 'Textured Hybrid',
      'Size': '900x400x4mm',
      'Lighting': '16.8M Colors Zone',
      'Base': 'Non-Slip Rubber'
    },
    status: 'IN STOCK',
    wattage: 10
  },

  // --- Displays ---
  {
    id: 'disp-nova-curv',
    name: 'Nova-Curv 34" Ultrawide',
    brand: 'CYBERCORE',
    price: 69999,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZOjDYDW40rGNJBVWz6PAkaAr1QOV3vxMtjbYTbAvX7Cu3mZ4s5TbYDBbyCWag-9SEEKAGNzL-kiz420cEZYSSa2gWBtz4Aa3lsdq3djhuLHIBqTFR4k6o2F8tCjJxtia5aHtRlB1Gy0bcg3RIUer3iVqXvjp_dW7_xFF4VStpD7-36koK46gMLugmHefYEEWfEevSgfBt0Rj3ax_u_hAnv9yVxUohHeD4isRmVhF3ujtqYV5ET-_y0-kGU-1foPHJsEh9fF9Qq8k',
    rating: 5.0,
    category: 'Displays',
    specs: {
      'Resolution': '3440 x 1440 UWQHD',
      'Refresh Rate': '240Hz',
      'Panel Type': 'QD-OLED Curved',
      'Response Time': '0.03ms GtG'
    },
    status: 'IN STOCK',
    wattage: 65
  }
];

export const PRECONFIG_RIGS: PreconfiguredRig[] = [
  {
    id: 'rig-apex-predator',
    name: 'APEX PREDATOR',
    price: 429900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbKNbV3w2Eas5mFTIF-kYY4FI0AqpfAysBNp5aTFL23oGXTHFvQy4_PirK72BOSK4IKf-k427En18FjzZCXBUpucz87impfkkBlZAYOAP7sGJWrHvuDpscEv4rvPadOXTmRoe1xQvhWykGwBT-Qq0ZFPzUsXoaYqApCXiog6aENQgkCruwbAAk7lS1k_xlJJj8JuDVgYXo0DwhTnOlJykqr5mvZFpCKz0EUxwkIjXlvdBIbTVQO3BOeyz_qu7-CVI02VRXkTB5RMU',
    status: 'IN STOCK',
    specs: {
      cpu: 'Intel Core i9-14900K',
      gpu: 'RTX 4090 24GB',
      ram: '64GB DDR5 7200MHz',
      cooling: 'Nexus Link H360 LCD',
      case: 'APEX MESH-G1'
    },
    estimatedFps: {
      cyberpunk: 94,
      valorant: 520,
      benchmarkScore: '26k+'
    }
  },
  {
    id: 'rig-titan-workstation',
    name: 'TITAN WORKSTATION',
    price: 845000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI_1bFvvIKpS56MU1P6Z-9Oq0EBpt5-CP5ey_FwOkuQlt3MSAnQUoiFwIdl2PURuxmJMQ8IoyNtMqdcWYkI_v4N3UQo5_6IGhjDJN0ahWv2Q75wNJlsINWSGsxVyRFt2BeqzdgJ4Wz1PYdh3fbslTkp2DYxi2L7Ye0-J7zDBuudnEC0XMvfInvllvep_JZ3eXhE5a0wWnXQK2bUTKMlg8vH4Hiif5V43wC9QjkWiqErdStgCsAPgmEXLNjr8cxDBrq6rfL2dQ7cSY',
    status: '2 WEEK LEAD',
    specs: {
      cpu: 'Threadripper 7980X',
      gpu: 'Dual RTX 4090 24GB',
      ram: '256GB ECC DDR5',
      cooling: 'Glacier Custom Loop Kit',
      case: 'TITAN FLOW X'
    },
    estimatedFps: {
      cyberpunk: 110,
      valorant: 640,
      benchmarkScore: '48k+'
    }
  },
  {
    id: 'rig-nebula-core',
    name: 'NEBULA CORE',
    price: 219900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAci8byyuNHr6HDnTGUFgzKA32EfgNEZDqRaSXaiHt21mI8sjMAtaRSZLkm1kK-Dj3L2MKOF0uCIhLBUmzEXjW1M5IIIss9PT_x-8098OdBpjkIB3_z9t7j6fWi9sj7bNtJjj02kQvAGsgFxLxbb0wHvpjmFkoguNiSn6WrGvQq9j8PjTfbZUErNqhUbuTFMX85rvy_kLuXNcEXDANehU4-uVdmb8tBsli-6cOmMVMJb0Uql1yFpkic3qoY4HBeW15oxvkrD9CPr_Q',
    status: 'IN STOCK',
    specs: {
      cpu: 'AMD Ryzen 7 7800X3D',
      gpu: 'RTX 4070 Ti Super',
      ram: '32GB DDR5 6000MHz',
      cooling: 'Nexus Link H360 LCD',
      case: 'APEX MESH-G1'
    },
    estimatedFps: {
      cyberpunk: 68,
      valorant: 420,
      benchmarkScore: '18k+'
    }
  }
];
