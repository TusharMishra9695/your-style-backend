"API'S REQUIRED FOR BACKEND";

"GET API'S";

"1) For Home Page ";
"API NO 1 :- ";
const header = {
  nav: {
    image: "",
    pages: ["everything", "women", "men", "child", "contact us"],
    subtotal: 0,
  },
  top_sec: {
    main_quote: "Raining Offers For Hot Summer!",
    sec_quote: "25% Off On All Products",
    background: "",
  },
  mid_sec: {
    offers: [
      {
        background: "",
        title: "20% Off On Tank Tops",
        description:
          "Elevate your wardrobe with fashionable deals, ensuring you shine without breaking the bank",
      },
    ],
  },
  bot_sec: {
    background: "",
    quote: "Limited Time Offer",
    title: "Special Edition",
    description:
      "Introducing our exclusive Special Edition Clothing Collection, where style meets sophistication in a seamless blend of luxury and innovation",
    offer_heading:
      "SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.",
  },
  specility: [
    {
      image: "",
      title: "Worldwide Shipping",
      description:
        "Embark on a global fashion with our worldwide shipping service.",
    },
  ],
};
("API 2 : -");
const footer = {
  left_sec: {
    brand_image: "",
    quote: "The best look anytime, anywhere.",
  },
  mid_sec: {
    her: {
      heading: "For Her",
      links: [
        "women jeans",
        "tops and shirts",
        "women jackets",
        "heels and facts",
        "women accessories",
      ],
    },
    him: {
      heading: "For Men",
      links: [
        "Men Jeans",
        "Men shirts",
        "Men jackets",
        "Men shoes",
        "Men Accessories",
      ],
    },
  },
  rgt_sec: {
    subs: "subscribe",
  },
};
("Everything Page");
("API - 1");
const products = {
  categories: {
    women: "7",
    men: "7",
    child: "7",
  },
  items: [
    {
      image: "",
      title: "xyz",
      description: "xyz",
      price: "",
      discounted_price: "",
      category: "",
      rating: "",
    },
  ],
  sorting: {
    low: "low to high",
    high: "high to low",
    rating: "rating",
    trending: "trending",
  },
  total_products: "",
};
("API 2 :");
const prod_detail = {
  details: {
    image: "",
    title: "xyz",
    description: "xyz",
    price: "",
    discounted_price: "",
    category: "",
    rating: "",
    selected_quantity: "",
  },
  review: {
    no_of_rate: "",
    rate: [
      {
        name: "",
        dp: "",
        rating: "",
        message: "",
        approved: "",
      },
    ],
  },
};
("filters : => search api filter , filter by price ; products comes with pagination ");

("Page 3 Cart : -");

("API -1 ");

const cart = {
  total_quantity: "",
  subtotal: "",
  after_discount: "",
  selected_products: [
    {
      image: "",
      title: "",
      price: "",
      discounted_price: "",
      quantity: "",
      subtotal: "",
    },
  ],
};

("POST API");

("SIGN UP");
const signup = {
  dp: "",
  username: "",
  password: "",
  email: "",
  contact_no: "",
};

("Login ");
const login = {
  username: "",
  password: "",
};

"ADD to cart", "Update to cart (use same api in both cases";

const Cart = {
  quantity: "",
};

("Apply coupon");

("DELETE API'S");
"=>"("remove cart prod");
("---------------------------------------");
// {
//   "nav": {
//     "image": "",
//     "pages":["everything","women","men","child","contact us"],
//     "subtotal": "0"
//   },
//   "top_sec": {
//     "main_quote": "Raining Offers For Hot Summer!",
//     "sec_quote": "25% Off On All Products",
//     "background": ""
//   },
//   "mid_sec": {
//     "offers": [
//       {
//         "background": "",
//         "title": "20% Off On Tank Tops",
//         "description":
//           "Elevate your wardrobe with fashionable deals, ensuring you shine without breaking the bank"
//       },
//        {
//         "background": "",
//         "title": "Latest T-Shirts For You",
//         "description":
//           "From laid-back weekends to casual, embrace comfort without compromising on fashion."
//       },
//         {
//         "background": "",
//         "title": "Let's Jewellery Suit Up!",
//         "description":
//           "Unparalleled craftsmanship, timeless designs perfect blend of elegance and allure."
//       }
//     ]
//   },
//   "bot_sec": {
//     "background": "",
//     "quote": "Limited Time Offer",
//     "title": "Special Edition",
//     "description":
//       "Introducing our exclusive Special Edition Clothing Collection, where style meets sophistication in a seamless blend of luxury and innovation",
//     "offer_heading":
//       "SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS."
//   },
//   "specility": [
//     {
//       "image": "",
//       "title": "Worldwide Shipping",
//       "description":
//         "Embark on a global fashion with our worldwide shipping service."
//     },
//     {
//       "image": "",
//       "title": "Best Quality",
//       "description":
//         "Indulge in unparalleled luxury with our meticulously crafted garments."
//     },
//     {
//       "image": "",
//       "title": "Best Offers",
//       "description":
//         "Discover unbeatable style and savings with our exclusive offers."
//     },
//     {
//       "image": "",
//       "title": "Secure Payments",
//       "description":
//         "Shop confidently with our secure payment methods."
//     }
//   ]
// }
