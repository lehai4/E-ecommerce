import { TypeBannerLink } from "@/interface";
import {
  CalendarOutlined,
  CommentOutlined,
  ContactsOutlined,
  EyeOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneFilled,
  UserOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import {
  CreditCardIcon,
  CurrencyYenIcon,
  ShieldExclamationIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
type CommentTab = {
  id: number;
  title: string;
  content?: string | any;
};

export const page = [
  {
    id: 0,
    path: "/",
    content: "Home",
  },
  {
    id: 1,
    path: "/product",
    content: "Product",
  },
  {
    id: 2,
    path: "/blog",
    content: "Blog",
  },
  {
    id: 3,
    path: "/contact",
    content: "Contact",
  },
];

// mockAPI of Home
export const newsBlog = [
  {
    id: 0,
    img: "news1.png",
    info: {
      creator: "By Admin",
      comments: {
        count: 5,
      },
    },
    title: "The Richland Center Shooping News and weekly shooper",
    desc: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
    path: "/news/fasion-news",
  },
  {
    id: 1,
    img: "news2.png",
    info: {
      creator: "By Admin",
      comments: {
        count: 5,
      },
    },
    title: "The Shopping News also offers top-quality printing services",
    desc: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
    path: "/news/shoping-news",
  },
  {
    id: 2,
    img: "news3.png",
    info: {
      creator: "By Admin",
      comments: {
        count: 5,
      },
    },
    title:
      "Professional design staff and efficient equipment you’ll find we offer",
    desc: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
    path: "/news/design-news",
  },
];

export const footerBannerLink: TypeBannerLink[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Product",
    path: "/product",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
export const footerBannerImage = [
  {
    url: "hero_r1_footer.png",
  },
  {
    url: "hero_r2_footer.png",
  },
  {
    url: "hero_r3_footer.png",
  },
  {
    url: "hero_r4_footer.png",
  },
  {
    url: "hero_r5_footer.png",
  },
  {
    url: "hero_r6_footer.png",
  },
];
export const footerBannerAddress = [
  {
    id: 0,
    intro: "Head Office",
    des: "70, Tan Binh, HCM",
    icon: <EnvironmentOutlined />,
  },
  {
    id: 1,
    intro: "Phone Number",
    des: "+123 456 7890",
    desExtra: "+123 456 7890",
    icon: <PhoneFilled />,
  },
  {
    id: 2,
    intro: "Email",
    des: "free@infoexample.com",
    desExtra: "www.infoexample.com",
    icon: <MailOutlined />,
  },
];
export const commentTab: CommentTab[] = [
  {
    id: 0,
    title: "Description",
  },
  {
    id: 1,
    title: "Specification",
  },
  {
    id: 2,
    title: "Comments",
  },
  {
    id: 3,
    title: "Reviews",
  },
];
export const contact = [
  {
    id: 0,
    icon: <HomeOutlined />,
    title: "Ho Chi Minh City",
    info: "Tan Binh HCM",
  },
  {
    id: 1,
    icon: <ContactsOutlined />,
    title: "037 6782 528",
    info: "Mon to Fri 9am to 6pm",
  },
  {
    id: 2,
    icon: <MailOutlined />,
    title: "chihaile4@gmail.com",
    info: "Send us your query anytime!",
  },
];
export const policy = [
  {
    name: "Fast Delivery",
    description: "Free shipping with orders > 239K",
    icon: <TruckIcon className="h-8 w-8" />,
  },
  {
    name: "Payment COD",
    description: "Payment on delivery (COD)",
    icon: <CreditCardIcon className="h-8 w-8" />,
  },
  {
    name: "Customer VIP",
    description: "Promotions for VIP customers",
    icon: <CurrencyYenIcon className="h-8 w-8" />,
  },
  {
    name: "Warranty support",
    description: "Exchange items at all stores",
    icon: <ShieldExclamationIcon className="h-8 w-8" />,
  },
];
//mockAPI of BlogPage
export const blogOption = [
  {
    id: 0,
    image:
      "https://preview.colorlib.com/theme/aroma/img/blog/cat-post/cat-post-3.jpg.webp",
    title: "social life",
    desc: "Enjoy your social life together",
  },
  {
    id: 1,
    image:
      "https://preview.colorlib.com/theme/aroma/img/blog/cat-post/cat-post-2.jpg.webp",
    title: "politics",
    desc: "Be a part of politics",
  },
  {
    id: 2,
    image:
      "https://preview.colorlib.com/theme/aroma/img/blog/cat-post/cat-post-1.jpg.webp",
    title: "food",
    desc: "Let the food be finished",
  },
];
export const blogPopular = [
  {
    id: 0,
    image:
      "https://preview.colorlib.com/theme/aroma/img/blog/popular-post/post1.jpg.webp",
    title: "Space The Final Frontier",
    time: "02 Hours ago",
  },
  {
    id: 1,
    image:
      "https://preview.colorlib.com/theme/aroma/img/blog/popular-post/post2.jpg.webp",
    title: "The Amazing Hubble",
    time: "02 Hours ago",
  },
  {
    id: 2,
    image:
      "https://preview.colorlib.com/theme/aroma/img/blog/popular-post/post3.jpg.webp",
    title: "Astronomy Or Astrology",
    time: "03 Hours ago",
  },
  {
    id: 3,
    image:
      "https://preview.colorlib.com/theme/aroma/img/blog/popular-post/post4.jpg.webp",
    title: "Asteroids telescope",
    time: "01 Hours ago",
  },
];
export const blogCategories = [
  {
    title: "Technology",
    index: "37",
  },
  {
    title: "Lifestyle",
    index: "24",
  },
  {
    title: "Fashion",
    index: "59",
  },
  {
    title: "Art",
    index: "29",
  },
  {
    title: "Food",
    index: "15",
  },
  {
    title: "Architecture",
    index: "09",
  },
  {
    title: "Adventure",
    index: "44",
  },
];
export const blogArticle = [
  {
    id: 0,
    image:
      "https://preview.colorlib.com/theme/aroma/img/blog/main-blog/m-blog-1.jpg.webp",
    title: "Astronomy Binoculars A Great Alternative",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus sint tempora magnam, qui suscipit maiores saepe obcaecati! Cumque iusto mollitia minima veniam beatae blanditiis ad aliquam fugiat quod nihil.",
    tag: ["Food", "Technology", "Politics", "Lifestyle"],
    meta: [
      {
        id_x: 0,
        title_chill: "Mark wiens",
        icon: <UserOutlined className="text-[18px]" />,
      },
      {
        id_x: 1,
        title_chill: "01 Jan, 2024",
        icon: <CalendarOutlined className="text-[18px]" />,
      },
      {
        id_x: 2,
        title_chill: "1.2M Views",
        icon: <EyeOutlined className="text-[18px]" />,
      },
      {
        id_x: 3,
        title_chill: "06 Comments",
        icon: <CommentOutlined className="text-[18px]" />,
      },
    ],
  },
  {
    id: 1,
    image:
      "https://preview.colorlib.com/theme/aroma/img/blog/main-blog/m-blog-2.jpg.webp",
    title: "The Basics Of Buying A Telescope",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus sint tempora magnam, qui suscipit maiores saepe obcaecati! Cumque iusto mollitia minima veniam beatae blanditiis ad aliquam fugiat quod nihil.",
    tag: ["Food", "Technology", "Politics", "Lifestyle"],
    meta: [
      {
        id_x: 0,
        title_chill: "Mark wiens",
        icon: <UserOutlined className="text-[18px]" />,
      },
      {
        id_x: 1,
        title_chill: "01 Jan, 2024",
        icon: <CalendarOutlined className="text-[18px]" />,
      },
      {
        id_x: 2,
        title_chill: "1.2M Views",
        icon: <EyeOutlined className="text-[18px]" />,
      },
      {
        id_x: 3,
        title_chill: "06 Comments",
        icon: <CommentOutlined className="text-[18px]" />,
      },
    ],
  },
  {
    id: 2,
    image:
      "https://preview.colorlib.com/theme/aroma/img/blog/main-blog/m-blog-3.jpg.webp",
    title: "The Glossary Of Telescopes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus sint tempora magnam, qui suscipit maiores saepe obcaecati! Cumque iusto mollitia minima veniam beatae blanditiis ad aliquam fugiat quod nihil.",
    tag: ["Food", "Technology", "Politics", "Lifestyle"],
    meta: [
      {
        id_x: 0,
        title_chill: "Mark wiens",
        icon: <UserOutlined className="text-[18px]" />,
      },
      {
        id_x: 1,
        title_chill: "01 Jan, 2024",
        icon: <CalendarOutlined className="text-[18px]" />,
      },
      {
        id_x: 2,
        title_chill: "1.2M Views",
        icon: <EyeOutlined className="text-[18px]" />,
      },
      {
        id_x: 3,
        title_chill: "06 Comments",
        icon: <CommentOutlined className="text-[18px]" />,
      },
    ],
  },
  {
    id: 3,
    image:
      "https://preview.colorlib.com/theme/aroma/img/blog/main-blog/m-blog-4.jpg.webp",
    title: "The Night Sky",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus sint tempora magnam, qui suscipit maiores saepe obcaecati! Cumque iusto mollitia minima veniam beatae blanditiis ad aliquam fugiat quod nihil.",
    tag: ["Food", "Technology", "Politics", "Lifestyle"],
    meta: [
      {
        id_x: 0,
        title_chill: "Mark wiens",
        icon: <UserOutlined className="text-[18px]" />,
      },
      {
        id_x: 1,
        title_chill: "01 Jan, 2024",
        icon: <CalendarOutlined className="text-[18px]" />,
      },
      {
        id_x: 2,
        title_chill: "1.2M Views",
        icon: <EyeOutlined className="text-[18px]" />,
      },
      {
        id_x: 3,
        title_chill: "06 Comments",
        icon: <CommentOutlined className="text-[18px]" />,
      },
    ],
  },
];
export const blogInstar = [
  {
    id: 0,
    image:
      "https://preview.colorlib.com/theme/aroma/img/instagram/ins-1.jpg.webp",
  },
  {
    id: 1,
    image:
      "https://preview.colorlib.com/theme/aroma/img/instagram/ins-2.jpg.webp",
  },
  {
    id: 2,
    image:
      "https://preview.colorlib.com/theme/aroma/img/instagram/ins-3.jpg.webp",
  },
  {
    id: 3,
    image:
      "https://preview.colorlib.com/theme/aroma/img/instagram/ins-4.jpg.webp",
  },
  {
    id: 4,
    image:
      "https://preview.colorlib.com/theme/aroma/img/instagram/ins-5.jpg.webp",
  },
  {
    id: 5,
    image:
      "https://preview.colorlib.com/theme/aroma/img/instagram/ins-6.jpg.webp",
  },
];
export const coupon = [
  { id: 0, code: "aws-123", info: "10%" },
  { id: 1, code: "aws-152", info: "5%" },
  { id: 2, code: "aws-124", info: "8%" },
  { id: 3, code: "aws-120", info: "15%" },
  { id: 4, code: "aws-100", info: "3%" },
];
