import sliderImg1 from "../assets/images/slider-image-1.jpg";
import sliderImg2 from "../assets/images/slider-image-2.jpg";
import sliderImg3 from "../assets/images/slider-image-3.jpg";
import CowMilk from "../assets/images/product-1.webp";
import BuffaloeMilk from "../assets/images/product-2.jpg";
import Paneer from "../assets/images/product-3.webp";
import DesiGhee from "../assets/images/product-4.jpg";
import heroImgUP from "../assets/images/hero-img-up.avif";
import heroImgDW from "../assets/images/hero-img.png";
import rupay from "../assets/images/rupay.svg";
import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/mastercard.svg";
import upi from "../assets/images/upi.jpeg";

import Gurugram from "../assets/images/Gurugram.jpg";
import Gurugram2 from "../assets/images/Gurugram-2.jpg";
import Noida from "../assets/images/Noida.jpeg";
import Ghaziabad from "../assets/images/Ghaziabad.jpg";

import DesiCowBanner from "../assets/images/a2-desi-cow-banner.jpg";
import CowBanner from "../assets/images/cow-milk-banner.jpg";
import BuffaloeBanner from "../assets/images/buffaloe-banner-image.jpg";
import PaneerBanner from "../assets/images/panner-banner-image.jpg";
import DesiGheeBanner from "../assets/images/desi-ghee-banner-image.avif";

import APPSS1 from "../assets/images/AppSS1.png";
import APPSS2 from "../assets/images/AppSS2.png";
import APPSS3 from "../assets/images/AppSS3.png";

// constants.js
export const APP_SCREENSHOTS = [APPSS1, APPSS2, APPSS3];

export const PAGES = [
  { id: 1, name: "Home", path: "/" },
  { id: 3, name: "Products", path: "products" },
  { id: 4, name: "Support", path: "support" },
  { id: 4, name: "Community", path: "community" },
];

// constants.js
export const MAIN_PAGES = [
  { name: "Home", path: "/" },
  { name: "Why SRIRAMS", path: "/whyus" },
  { name: "Support", path: "/support" },
  { name: "Careers", path: "/community" },
];

export const PRODUCTS = [
  { id: 1, name: "Cow Milk" },
  { id: 3, name: "Buffaloe Milk" },
  { id: 4, name: "Paneer" },
  { id: 5, name: "Desi Ghee" },
];

export const IMPORTANT_LINKS = [
  { id: 1, name: "FAQ'S", path: "/faq" },
  { id: 2, name: "Privacy Policy", path: "/privacy-policy" },
  { id: 3, name: "Refund Policy", path: "/refund-policy" },
  { id: 4, name: "Shipping Policy", path: "/shipping-policy" },
];

export const ADDRESS_CONTACT = {
  address: "GhoshGarh-Jori Rd, GhoshGarh, Gurugram, haryana",
  email: "srirams@gmail.com",
  phone: "9876543210",
};

// constants.js
// constants.js
export const IMAGES = [sliderImg1, sliderImg2, sliderImg3];
export const HERO_IMG = [heroImgUP];
export const HERO_IMG_DW = [heroImgDW];

export const HERO_DATA = {
  content: `SRIRAMS is a brand which stands for providing really good quality farm fresh food. We ensure that our food products do not have the presence of any harmful substances which are widely present in our food today. We conduct strict quality tests through FSSAI accredited laboratories to ensure that there are no traces of any pesticides, chemicals.

Our journey has started with one of the most essential and important parts of our daily diet - Milk and Dairy products. We are using our knowledge and expertise in building complex supply chains to make this possible on a daily basis. We aim to take these good quality food products to more and more households. In the future, we look to bringing more farm fresh products to your dining table.`,
  buttonText: "Know More",
};

export const PRODUCT = [
  {
    id: 1,
    name: "Cow Milk",
    image: CowMilk,
    price: "65-85",
  },
  {
    id: 3,
    name: "Buffaloe Milk",
    image: BuffaloeMilk,
    price: 75,
  },
  // Add more product objects as needed
  {
    id: 4,
    name: "Paneer",
    price: 350,
    image: Paneer,
  },
  {
    id: 5,
    name: "Desi Ghee",
    price: 1200,
    image: DesiGhee,
  },
];

// constants.js

// Supported Payment Methods
export const SUPPORTED_PAYMENTS = [
  {
    name: "Visa",
    image: visa, // Replace with the path to the Visa image
    // Replace with the link for Visa
  },
  {
    name: "Rupay",
    image: rupay, // Replace with the path to the Rupay image
    // Replace with the link for Rupay
  },
  {
    name: "UPI",
    image: upi, // Replace with the path to the Rupay image
    // Replace with the link for Rupay
  },
  {
    name: "MasterCard",
    image: mastercard, // Replace with the path to the Rupay image
    // Replace with the link for Rupay
  },
  // Add more payment methods here if needed
];

// Social Links
export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    icon: "/path/to/instagram.png", // Replace with the path to the Instagram icon
    link: "https://www.instagram.com/ydv.bhupesh", // Replace with the link for Instagram
  },
  {
    name: "YouTube",
    icon: "/path/to/youtube.png", // Replace with the path to the YouTube icon
    link: "https://www.youtube.com/@bhupeshyadav0001", // Replace with the link for YouTube
  },
  {
    name: "Twitter",
    icon: "/path/to/twitter.png", // Replace with the path to the Twitter icon
    link: "https://twitter.com/ygbhupesh003", // Replace with the link for Twitter
  },
  // Add more social links here if needed
];

// constants.js

// constants.js

// constants.js

export const TESTIMONIALS = [
  {
    id: 1,
    name: "John Doe",
    image: "https://picsum.photos/201/300", // Replace with the path to the user's image
    comment:
      "The website is amazing! I love the user interface and the ease of navigation. It provides all the information I need and has a great selection of products. The customer service is also top-notch. I highly recommend this website to everyone.",
    stars: 5, // Number of stars given by the user (1 to 5)
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://picsum.photos/200/302", // Replace with the path to the user's image
    comment:
      "This website has been a game-changer for me. It has made my life so much easier with its user-friendly features and quick checkout process. The product quality is excellent, and they offer a wide range of options. I'm really impressed with their service.",
    stars: 4, // Number of stars given by the user (1 to 5)
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: "https://picsum.photos/204/300", // Replace with the path to the user's image
    comment:
      "I can't express how much I love this website. It's my go-to place for all my shopping needs. The website design is modern and appealing. The search functionality works like a charm, making it easy to find what I'm looking for. I highly recommend giving it a try.",
    stars: 5, // Number of stars given by the user (1 to 5)
  },
  {
    id: 4,
    name: "Emily Williams",
    image: "https://picsum.photos/200/305", // Replace with the path to the user's image
    comment:
      "I've been using this website for a while now, and I'm very satisfied with my experience. The website is fast, and the checkout process is seamless. The customer support team is helpful and responsive. I've recommended it to my friends, and they love it too!",
    stars: 4, // Number of stars given by the user (1 to 5)
  },
  // Add more reviews here as needed
];

export const ARTICLES = [
  {
    title: "Article 1",
    image: "https://picsum.photos/200/300", // Replace with the URL to the image for Article 1
  },
  {
    title: "Article 2",
    image: "https://picsum.photos/201/300", // Replace with the URL to the image for Article 2
  },
  {
    title: "Article 3",
    image: "https://picsum.photos/202/300", // Replace with the URL to the image for Article 2
  },
  // Add more articles with their respective images
];

export const COMMUNITY_DATA = [
  {
    id: 1,
    image: Gurugram, // Replace with the URL of the image for the first community item
    heading: "Gurugram",
  },
  {
    id: 2,
    image: Noida, // Replace with the URL of the image for the second community item
    heading: "Noida",
  },
  {
    id: 3,
    image: Gurugram2, // Replace with the URL of the image for the second community item
    heading: "Gurugram 2",
  },
  {
    id: 4,
    image: Ghaziabad, // Replace with the URL of the image for the second community item
    heading: "Ghaziabad",
  },
  // Add more community items as needed
];

export const PRODUCTS_DATA = {
  categories: [
    { id: 1, name: "Cow Milk", image: CowMilk, bannerImage: CowBanner },
    {
      id: 2,
      name: "Buffaloe Milk",
      image: BuffaloeMilk,
      bannerImage: BuffaloeBanner,
    },
    { id: 3, name: "Paneer", image: Paneer, bannerImage: PaneerBanner },
    { id: 4, name: "Desi Ghee", image: DesiGhee, bannerImage: DesiGheeBanner },
    // Add more categories if needed
  ],
  products: [
    {
      id: 1,
      name: "A2 Desi Cow Milk",
      category: 1,
      description:
        "Our A2 Desi Cow Milk is sourced from indigenous Indian cow breeds known for their A2 beta-casein protein. It is rich in essential nutrients and has a natural taste.",
      image: CowMilk,
      bannerImage: DesiCowBanner, // Add the banner image URL
      price: "₹85/ l",
      quantity: "Customizable",
    },
    {
      id: 2,
      name: "A1 Cow Milk",
      category: 1,
      description:
        "Enjoy the goodness of fresh and pure A1 Cow Milk, sourced from healthy cows. It is pasteurized to retain its natural freshness and quality.",
      image: CowMilk,
      bannerImage: CowBanner, // Add the banner image URL
      price: "₹65/ l",
      quantity: "Customizable",
    },
    {
      id: 3,
      name: "Buffaloe Milk",
      category: 2,
      description:
        "Indulge in the rich and creamy taste of our farm-fresh Buffaloe Milk. It is hygienically processed and packed to ensure superior quality.",
      image: BuffaloeMilk,
      bannerImage: BuffaloeBanner, // Add the banner image URL
      price: "₹75/ l",
      quantity: "Customizable",
    },
    // Add more products if needed
    {
      id: 4,
      name: "Paneer",
      category: 3,
      description:
        "Our soft and fresh Paneer is made from pure cow's milk. It adds a delightful taste and texture to your favorite Indian dishes.",
      image: Paneer,
      bannerImage: PaneerBanner, // Add the banner image URL
      price: "₹350/ kg",
      quantity: "Customizable",
    },
    {
      id: 5,
      name: "Desi Ghee",
      category: 4,
      description:
        "Experience the rich aroma and authentic taste of our Desi Ghee, made from pure cow's milk. It is ideal for cooking and enhances the flavors of your meals.",
      image: DesiGhee,
      bannerImage: DesiGheeBanner, // Add the banner image URL
      price: "₹1200/ kg",
      quantity: "Customizable",
    },
  ],
};

// constant.js
// You can replace the placeholder data with your actual data

export const EVENTS_DATA = [
  {
    id: 1,
    title: "Event 1",
    description: "Description for Event 1",
    image: "https://picsum.photos/1260/192",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Description for Event 2",
    image: "https://picsum.photos/1263/192",
  },
  // Add more community events if needed
];

export const faqData = [
  {
    id: 1,
    question: "How can I make a payment?",
    answer:
      "You can make a payment using various methods such as credit card, debit card, PayPal, or bank transfer.",
  },
  {
    id: 2,
    question: "Can I cancel my order?",
    answer:
      "Yes, you can cancel your order before it has been shipped. Contact our support team for assistance.",
  },
  {
    id: 3,
    question: "What is your return policy?",
    answer:
      "Our return policy allows you to return the product within 30 days of purchase for a full refund.",
  },
  {
    id: 4,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping costs may vary depending on the destination.",
  },
  {
    id: 5,
    question: "How long does shipping take?",
    answer:
      "Shipping within the country usually takes 3-5 business days. International shipping may take longer.",
  },
  {
    id: 6,
    question: "Do you provide tracking numbers for orders?",
    answer:
      "Yes, we provide tracking numbers for all orders. You can track your order's status on our website.",
  },
  {
    id: 7,
    question: "Is my personal information secure?",
    answer:
      "Yes, we take data security seriously. Your personal information is encrypted and protected.",
  },
  {
    id: 8,
    question: "Can I change my shipping address after placing the order?",
    answer:
      "If your order has not been shipped yet, we can update your shipping address. Contact us immediately for assistance.",
  },
  {
    id: 9,
    question: "What if my package is damaged during shipping?",
    answer:
      "If your package arrives damaged, please take photos and contact our support team for a replacement or refund.",
  },
  {
    id: 10,
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@example.com or by calling our helpline at +1 123-456-7890.",
  },
];

export const privacyPolicyData = [
  "Privacy Policy",
  "",
  "This policy explains how SRIRAMS (srms01.netlify.app), a brand of FreshDairy Pvt. Ltd, use your personal information that you provide to us when using our milk delivery service, including but not limited to our website, mobile applications (apps) and any other modes of communication / interaction.",
  // ... (rest of the privacy policy content)
  "SRIRAMS.in uses stringent security guidelines and some of the highest security standards to protect our customers from security issues, and any loss and misuse of their information.",
  "Feel free to contact SRIRAMS at info@srirams.in for any further questions on our privacy policy.",
];

export const refundPolicyData = [
  "Refund Policy",
  "",
  "At SRIRAMS, we want to ensure your satisfaction with our milk delivery service. If you are not entirely satisfied with your purchase, we're here to help.",
  "",
  "Returns",
  "You have 1 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.",
  "",
  "Refunds",
  "Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.",
  "",
  "If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies.",
  "",
  "Contact Us",
  "If you have any questions on how to return your item to us, contact our customer support team at support@srirams.com.",
];

// constants.js
export const shippingPolicyData = [
  "Shipping Policy",
  "",
  "At SRIRAMS, we strive to provide timely and reliable milk delivery services to our customers. This shipping policy outlines the details of our shipping process.",
  "",
  "Shipping Methods",
  "We offer standard shipping for all orders within our service area. Orders are typically shipped within 10-12 hours from the date of order placement. You can expect to receive your order within 16-18 hours from the shipping date.",
  "",
  "Shipping Fees",
  "Shipping fees are calculated based on the delivery location and order size. The shipping fee will be displayed during the checkout process before you confirm your order.",
  "",
  "Tracking Information",
  "Once your order is shipped, we will provide you with a tracking number via email. You can use this tracking number to monitor the status and estimated delivery date of your package.",
  "",
  "Undeliverable Packages",
  "If a package is returned to us due to an incorrect or incomplete address provided by the customer, or if the package is refused by the recipient, a re-shipping fee may apply. Please ensure that your shipping address is accurate and complete before placing your order.",
  "",
  "Contact Us",
  "If you have any questions about our shipping policy or need assistance with tracking your order, please contact our customer support team at support@srirams.com.",
];
