import { Facebook, LinkedIn } from './svgImages'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Navbar Data
export const menuData = {
  logoLight: '/images/logo.svg',
  logoDark: '/images/logo-light.svg',
  btnLlink: '/request-demo',
  menuContent: [
    {
      id: 1,
      title: 'Anasayfa',
      path: '/home-3',
      newTab: false,
    },
    {
      id: 2,
      title: 'Özellikler',
      submenu: [
        {
          id: 2.1,
          title: 'Blog',
          path: '/blog',
          newTab: false,
        },
        {
          id: 2.2,
          title: 'Dökümanlar',
          path: '/blog-list',
          newTab: false,
        },
        {
          id: 2.3,
          title: 'Hakkımızda',
          path: '/about',
          newTab: false,
        },
        {
          id: 2.4,
          title: 'İletişim',
          path: '/contact',
          newTab: false,
        },
      ],
    },

    {
      id: 6,
      title: 'Fiyatlandırma',
      path: '/#fiyatlandirma',
      newTab: false,
    },

    {
      id: 8,
      title: 'Kaynaklar',
      submenu: [
        {
          id: 8.1,
          title: 'Blog',
          path: '/blog',
          newTab: false,
        },
        {
          id: 8.2,
          title: 'Dökümanlar',
          path: '/blog-list',
          newTab: false,
        },
        {
          id: 8.3,
          title: 'Hakkımızda',
          path: '/about',
          newTab: false,
        },
        {
          id: 8.4,
          title: 'İletişim',
          path: '/contact',
          newTab: false,
        },
      ],
    },
  ],
}
// Clients
export const ClientData = [
  {
    id: 1,
    imageLight: '/images/clients/group.svg',
    imageDark: '/images/clients/group-dark.svg',
  },
  {
    id: 2,
    imageLight: '/images/clients/infinity.svg',
    imageDark: '/images/clients/infinity-dark.svg',
  },
  {
    id: 3,
    imageLight: '/images/clients/artifact.svg',
    imageDark: '/images/clients/artifact-dark.svg',
  },
  {
    id: 4,
    imageLight: '/images/clients/caudile.svg',
    imageDark: '/images/clients/caudile-dark.svg',
  },
  {
    id: 5,
    imageLight: '/images/clients/axeptio.svg',
    imageDark: '/images/clients/axeptio-dark.svg',
  },
  {
    id: 6,
    imageLight: '/images/clients/mfinity.svg',
    imageDark: '/images/clients/mfinity-dark.svg',
  },
]

export const ServiceData = [
  {
    id: 1,
    slug: 'investment-bank',
    title: 'Investment Banks',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/investment.svg',
    iconDark: '/images/services/investment-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 2,
    slug: 'sales',
    title: 'Sales & Trading',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/sales.svg',
    iconDark: '/images/services/sales-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 3,
    slug: 'mortage-loan',
    title: 'Mortgage Loans',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/loan.svg',
    iconDark: '/images/services/loan-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 4,
    slug: 'finance-analyse',
    title: 'Finance Analysis',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/finance.svg',
    iconDark: '/images/services/finance-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 5,
    slug: 'effeciency',
    title: 'Increased Efficiency',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/effeciency.svg',
    iconDark: '/images/services/effeciency-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 6,
    slug: 'fund',
    title: 'Fundraising Advice',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/fund.svg',
    iconDark: '/images/services/fund-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
]

export const CounterData = [
  {
    id: 1,
    number: '60',
    rightIcon: '%',
    text: 'Project Completed',
  },
  {
    id: 2,
    number: '30',
    rightIcon: '+',
    text: 'Team Members',
  },
  {
    id: 3,
    number: '40',
    rightIcon: 'K',
    text: 'Satisfied Clients',
  },
]

export const FAQData = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is a business agency?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'What services does a business agency provide?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How often should I update my website?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'How do subscriptions work?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 5,
    type: ['changelog', 'terms'],
    question: 'What other services are you compatible with?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'What other services are you compatible with?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
]

export const TestimonialData = [
  {
    id: 1,
    logoLight: '/images/testimonial/bodygroup.svg',
    logoDark: '/images/testimonial/bodygroup-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 4,
    author: {
      name: 'Robert Frost',
      designation: 'Lead Developer',
      image: '/images/testimonial/avatar1.png',
    },
  },
  {
    id: 2,
    logoLight: '/images/testimonial/caudile.svg',
    logoDark: '/images/testimonial/caudile-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 5,
    author: {
      name: 'Guy Hawkins',
      designation: 'Developer',
      image: '/images/testimonial/avatar2.png',
    },
  },
  {
    id: 3,
    logoLight: '/images/testimonial/axeptio.svg',
    logoDark: '/images/testimonial/axeptio-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 3,
    author: {
      name: 'Cody Fisher',
      designation: 'UI Designer',
      image: '/images/testimonial/avatar3.png',
    },
  },
  {
    id: 4,
    logoLight: '/images/testimonial/infinity.svg',
    logoDark: '/images/testimonial/infinity-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 2,
    author: {
      name: 'Albert Flores',
      designation: 'Sr. Developer',
      image: '/images/testimonial/avatar4.png',
    },
  },
  {
    id: 5,
    logoLight: '/images/testimonial/mfinity.svg',
    logoDark: '/images/testimonial/mfinity-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 1,
    author: {
      name: 'Floyed Miles',
      designation: 'Junior Designer',
      image: '/images/testimonial/avatar5.png',
    },
  },
  {
    id: 6,
    logoLight: '/images/testimonial/coolchat.svg',
    logoDark: '/images/testimonial/coolchat-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 5,
    author: {
      name: 'Bessie Cooper',
      designation: 'Manager',
      image: '/images/testimonial/avatar6.png',
    },
  },
]

export const PaymentRatingData = [
  {
    id: 1,
    rating: 4.7,
    name: 'Kullanım Kolaylığı',
    
  },
  {
    id: 2,
    rating: 4.7,
    name: 'Memnuniyet',
   
  },
  {
    id: 3,
    rating: 4.9,
    name: 'Müşteri Güveni',
  
  },
]

export const CoreFeatures = [
  {
    id: 1,
    title: 'Useful Features',
    iconLight: '/images/payment/invoice.svg',
    iconDark: '/images/payment/invoice-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    title: 'Insights and Reports',
    iconLight: '/images/payment/insight.svg',
    iconDark: '/images/payment/insight-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    title: 'Managing Inventory',
    iconLight: '/images/payment/inventory.svg',
    iconDark: '/images/payment/inventory-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 4,
    title: 'Organized Expense',
    iconLight: '/images/payment/expens.svg',
    iconDark: '/images/payment/expens-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 5,
    title: 'Organize Receipts',
    iconLight: '/images/payment/receipts.svg',
    iconDark: '/images/payment/receipts-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 6,
    title: 'Mobile App',
    iconLight: '/images/payment/app.svg',
    iconDark: '/images/payment/app-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const PaymentFeaturesData = [
  {
    id: 1,
    iconLight: '/images/payment/paymentFeature.svg',
    iconDark: '/images/payment/paymentFeature-dark.svg',
    title: 'Zaman',
    desc: 'Tüm mesaj ekranlarınızı tek ekranda toplayarak temsilcilerinizin daha fazla mesaj cevaplamasını sağlar. ',
  },
  {
    id: 2,
    iconLight: '/images/payment/payementSecure.svg',
    iconDark: '/images/payment/payementSecure-dark.svg',
    title: 'Yapay Zeka',
    desc: 'İnsansı yapay zeka neredeyse her soruyu cevaplar bu sayede insan gücüne eskisi kadar gerek duymazsınız',
  },
  {
    id: 3,
    iconLight: '/images/payment/paymentCashback.svg',
    iconDark: '/images/payment/paymentCashback-dark.svg',
    title: 'Pazarlama',
    desc: 'Otomasyonlar sayesinde sizin için potansiyel müşteriler oluşturur ve satış hacminizi arttırmanızı sağlar.',
  },
]

export const PricingData = [
  {
    id: 1,
    featured: false,
    title: 'Basic',
    desc: 'The prevailing view assumed lorem ipsum was born as a nonsense text.',
    priceMonthly: '1800',
    priceYearly: '199',
    save: '',
    priceList: [
      {
        name: 'Track income & expenses',
      },
      {
        name: 'Send custom invoices & quotes',
      },
      {
        name: 'Connect your bank',
      },
      {
        name: 'Insights & reports',
      },
    ],
  },
  {
    id: 2,
    featured: true,
    title: 'Standard',
    desc: 'The prevailing view assumed lorem ipsum was born as a nonsense text.',
    priceMonthly: '32.00',
    priceYearly: '350.00',
    save: '40%',
    priceList: [
      {
        name: 'Track income & expenses',
      },
      {
        name: 'Send custom invoices & quotes',
      },
      {
        name: 'Connect your bank',
      },
      {
        name: 'Insights & reports',
      },
    ],
  },
  {
    id: 3,
    featured: false,
    title: 'Premium',
    desc: 'The prevailing view assumed lorem ipsum was born as a nonsense text.',
    priceMonthly: '48.00',
    priceYearly: '530.00',
    save: '',
    priceList: [
      {
        name: 'Track income & expenses',
      },
      {
        name: 'Send custom invoices & quotes',
      },
      {
        name: 'Connect your bank',
      },
      {
        name: 'Insights & reports',
      },
    ],
  },
]

export const BankingServicesData = [
  {
    id: 1,
    iconLight: '/images/banking/agent.svg',
    iconDark: '/images/banking/agent-dark.svg',
    title: 'Agent Banking',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    iconLight: '/images/banking/savings.svg',
    iconDark: '/images/banking/savings-dark.svg',
    title: 'Savings Account',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    iconLight: '/images/banking/interest.svg',
    iconDark: '/images/banking/interest-dark.svg',
    title: 'Low Interest',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const teamData = [
  {
    id: 1,
    name: 'Cody Fisher',
    designation: 'Lead Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team1.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 2,
    name: 'Kristin Coper',
    designation: 'Project Manager',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team2.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 3,
    name: 'Guy Hawkins',
    designation: 'Lead Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team3.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 4,
    name: 'Wade Wareen',
    designation: 'Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team4.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 5,
    name: 'Bessie Cooper',
    designation: 'Product Manager',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team5.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 6,
    name: 'Jacob Jones',
    designation: 'Art Director',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team6.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
]

export const AboutFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Our Passion',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Transparency',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Our Mission',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const AboutImages = [
  {
    id: 1,
    image: '/images/about/about1.png',
  },
  {
    id: 2,
    image: '/images/about/about2.png',
  },
  {
    id: 3,
    image: '/images/about/about3.png',
  },
]

export const IntegrationData = [
  {
    id: 1,
    image: '/images/figma.svg',
    title: 'Figma',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    image: '/images/dropbox.svg',
    title: 'Dropbox',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    image: '/images/twitter.svg',
    title: 'Twitter/X',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 4,
    image: '/images/slack.svg',
    title: 'Slack',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 5,
    image: '/images/google-drive.svg',
    title: 'Google Drive',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 6,
    image: '/images/asana.svg',
    title: 'Asana',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const FooterData = {
  logo: '/images/logo.svg',
  logoDark: '/images/logo-light.svg',
  footerText: 'Dialog Fusion Tüm iletişim kanallarını tek bir panelde birleştirerek süreçlerinizi optimize eder. Harika bir müşteri deneyimi sunun ve görüşmeleri satışa dönüştürün. ',
  copyright: `${new Date().getFullYear()} Dialog Fusion. Tüm Hakları Saklıdır.`,
  email: 'support@dialogfusion.com',
  phone: '+3 230 705 5448',
  expolre: [
    {
      id: 1,
      name: 'Hakkımızda',
      link: '/about',
    },
    {
      id: 2,
      name: 'Fiyatlandırma',
      link: '/services',
    },
    {
      id: 3,
      name: 'Kariyer',
      link: '/career',
    },
    {
      id: 4,
      name: 'Satış Ortaklığı',
      link: '/home-2',
    },
    {
      id: 5,
      name: 'İletişim',
      link: '/contact',
    },

  ],
  resources: [
    {
      id: 1,
      name: 'Blog',
      link: '/blog',
    },
    {
      id: 2,
      name: 'Dökümanlar',
      link: '/teams',
    },
    {
      id: 3,
      name: 'Privacy',
      link: '/privacy',
    },
    {
      id: 4,
      name: 'Şartlar ve Koşullar',
      link: '/terms',
    },
 
  ],

  socialLinks: [
    {
      id: 1,
      name: <Facebook />,
      link: '#',
    },

    {
      id: 3,
      name: <LinkedIn />,
      link: '#',
    },

  ],
}
