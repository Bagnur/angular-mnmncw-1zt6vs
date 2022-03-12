export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  link: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Seagate Portable 2TB',
    price: 59.99,
    description:
      'Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)',
    photo: 'https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg',
    link: 'https://www.amazon.com/Seagate-Portable-External-Hard-Drive/dp/B07CRG94G3/ref=lp_16225007011_1_2?th=1',
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB',
    price: 299.0,
    description:
      'Next-level Hardware - Make every move count with a blazing-fast processor and our highest-resolution display',
    photo: 'https://m.media-amazon.com/images/I/615YaAiA-ML._SX522_.jpg',
    link: 'https://www.amazon.com/Oculus-Quest-Advanced-All-One-Virtual/dp/B099VMT8VZ/ref=lp_16225016011_1_1',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Nintendo Switch – OLED Model w/ White Joy-Con',
    price: 337.0,
    description:
      '7-inch OLED screen - Enjoy vivid colors and crisp contrast with a screen that makes colors pop Wired LAN port - \n Use the dock’s LAN port when playing in TV mode for a wired internet connection 64 GB internal storage - Save games to your system with 64 GB of internal storage',
    photo: 'https://m.media-amazon.com/images/I/51YLbkYOhlL._SX522_.jpg',
    link: 'https://www.amazon.com/Nintendo-Switch-OLED-Model-White-Joy/dp/B098RKWHHZ/ref=lp_16225016011_1_3?th=1',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'SENZER SG500 Surround Sound Pro',
    price: 30.0,
    description:
      '[FOLDABLE & DETACHABLE EAR PADS]: Features flexible headphones with telescopic arms and detachable ear pads. The headphones fold inside the arm, making them perfect for easy storage and travelling and the ear pads are magnetic, allowing them to be conveniently attached and removed, making them easier to clean and maintain compared with other headphones.',
    photo: 'https://m.media-amazon.com/images/I/71ZW0p+mWwL._AC_SX679_.jpg',
    link: 'https://www.amazon.com/SENZER-SG500-Surround-Cancelling-Microphone/dp/B08FX35S7K/ref=sr_1_1_sspa?keywords=gaming+headsets&pd_rd_r=62548b29-c7ad-4df4-bbf4-1a7407f5555b&pd_rd_w=Hars9&pd_rd_wg=jJJ4s&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=0J88W7ZASFJCBDM1KFY5&qid=1647088082&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMUlINjY1TkIxWFZTJmVuY3J5cHRlZElkPUEwOTg2MDgzMjdLR1VYOE01ODZJQSZlbmNyeXB0ZWRBZElkPUEwNDA4ODI2NVdENUFKRUFEVVFZJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    rating: 4.4,
  },
  {
    id: 5,
    name: 'BENGOO G9000 Stereo Gaming',
    price: 49.99,
    description:
      '【Multi-Platform Compatible】Support PlayStation 4, New Xbox One, PC, Nintendo 3DS, Laptop, PSP, Tablet, iPad, Computer, Mobile Phone. Please note you need an extra Microsoft Adapter (Not Included) when connect with an old version Xbox One controller.',
    photo: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SY450_.jpg',
    link: 'https://www.amazon.com/BENGOO-G9000-Controller-Cancelling-Headphones/dp/B01H6GUCCQ/ref=sr_1_4?keywords=gaming%2Bheadsets&pd_rd_r=62548b29-c7ad-4df4-bbf4-1a7407f5555b&pd_rd_w=Hars9&pd_rd_wg=jJJ4s&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=0J88W7ZASFJCBDM1KFY5&qid=1647088203&sr=8-4&th=1',
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Seagate Portable 1TB',
    price: 59.99,
    description:
      'Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)',
    photo: 'https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg',
    link: 'https://www.amazon.com/Seagate-Portable-External-Hard-Drive/dp/B07CRG94G3/ref=lp_16225007011_1_2?th=1',
    rating: 4.7,
  },
  {
    id: 7,
    name: 'Oculus Quest 1 — Advanced All-In-One Virtual Reality Headset — 128 GB',
    price: 299.0,
    description:
      'Next-level Hardware - Make every move count with a blazing-fast processor and our highest-resolution display',
    photo: 'https://m.media-amazon.com/images/I/615YaAiA-ML._SX522_.jpg',
    link: 'https://www.amazon.com/Oculus-Quest-Advanced-All-One-Virtual/dp/B099VMT8VZ/ref=lp_16225016011_1_1',
    rating: 4.8,
  },
  {
    id: 8,
    name: 'Nintendo Switch  w/ White Joy-Con',
    price: 337.0,
    description:
      '7-inch OLED screen - Enjoy vivid colors and crisp contrast with a screen that makes colors pop Wired LAN port - \n Use the dock’s LAN port when playing in TV mode for a wired internet connection 64 GB internal storage - Save games to your system with 64 GB of internal storage',
    photo: 'https://m.media-amazon.com/images/I/51YLbkYOhlL._SX522_.jpg',
    link: 'https://www.amazon.com/Nintendo-Switch-OLED-Model-White-Joy/dp/B098RKWHHZ/ref=lp_16225016011_1_3?th=1',
    rating: 4.8,
  },
  {
    id: 9,
    name: 'SENZER SG400 Surround Sound Pro',
    price: 30.0,
    description:
      '[FOLDABLE & DETACHABLE EAR PADS]: Features flexible headphones with telescopic arms and detachable ear pads. The headphones fold inside the arm, making them perfect for easy storage and travelling and the ear pads are magnetic, allowing them to be conveniently attached and removed, making them easier to clean and maintain compared with other headphones.',
    photo: 'https://m.media-amazon.com/images/I/71ZW0p+mWwL._AC_SX679_.jpg',
    link: 'https://www.amazon.com/SENZER-SG500-Surround-Cancelling-Microphone/dp/B08FX35S7K/ref=sr_1_1_sspa?keywords=gaming+headsets&pd_rd_r=62548b29-c7ad-4df4-bbf4-1a7407f5555b&pd_rd_w=Hars9&pd_rd_wg=jJJ4s&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=0J88W7ZASFJCBDM1KFY5&qid=1647088082&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMUlINjY1TkIxWFZTJmVuY3J5cHRlZElkPUEwOTg2MDgzMjdLR1VYOE01ODZJQSZlbmNyeXB0ZWRBZElkPUEwNDA4ODI2NVdENUFKRUFEVVFZJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    rating: 4.4,
  },
  {
    id: 10,
    name: 'BENGOO G8000 Stereo Gaming',
    price: 49.99,
    description:
      '【Multi-Platform Compatible】Support PlayStation 4, New Xbox One, PC, Nintendo 3DS, Laptop, PSP, Tablet, iPad, Computer, Mobile Phone. Please note you need an extra Microsoft Adapter (Not Included) when connect with an old version Xbox One controller.',
    photo: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SY450_.jpg',
    link: 'https://www.amazon.com/BENGOO-G9000-Controller-Cancelling-Headphones/dp/B01H6GUCCQ/ref=sr_1_4?keywords=gaming%2Bheadsets&pd_rd_r=62548b29-c7ad-4df4-bbf4-1a7407f5555b&pd_rd_w=Hars9&pd_rd_wg=jJJ4s&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=0J88W7ZASFJCBDM1KFY5&qid=1647088203&sr=8-4&th=1',
    rating: 4.8,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
