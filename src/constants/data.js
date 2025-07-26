import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdDesignServices } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";

export const identity = {
  name: "Yofan Alfiatur",
  position: "Website Developer",
  region: "Central Java, Indonesia",
  description:
    "I am an information system graduate with an interest in information and technology (IT), especially websites and applications. Experienced in creating websites, both static and dynamic.",
  aboutMe: [
    "Hi everyone! I'm an experienced Frontend and WordPress Developer with over 3 years of practical experience in building websites. I specialize in turning designs into responsive, user-friendly interfaces—whether through manual coding or using content management systems like WordPress.",
    "I'm always up-to-date with the latest web technologies and trends, and I'm passionate about creating websites and applications that deliver real value. I'm confident working both independently and collaboratively in a team environment.",
  ],
  profile: ["/image/yofan-1.png", "/image/yofan-1-m.png"],
  cv: "/files/Yofan_Alfiatur_CV_new.pdf",
};

export const linkMenu = [
  {
    title: "Home",
    href: "/#home",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Projects",
    href: "/#project-done",
  },
  {
    title: "Portfolio",
    href: "/#portfolio",
  },
  {
    title: "Experience",
    href: "/#experience",
  },
  {
    title: "Skills",
    href: "/#skills",
  },
  // {
  //   title: "Services",
  //   href: "/#services",
  // },
  {
    title: "Contact",
    href: "#contact",
  },
];
export const about = [
  {
    topDescription: "Has handled",
    counted: "30",
    bottomDescription: "Websites",
  },
  {
    topDescription: "Has been working for",
    counted: "3",
    bottomDescription: "Years",
  },
];

export const experience = [
  {
    job: "Information System",
    company: "UPN Veteran Yogykarta",
    time: "Juli 2018 - Juli 2022",
    summary: [
      "GPA 3.75 graduated with cum laude",
      "2nd winner of the LikaLaku photography exhibition at Jogja Gallery",
      "Member of the Photography Subunit Arts UKM organization",
    ],
    image: "/svg/e-upn.svg",
  },
  {
    job: "Internship Web Developer",
    company: "SMA BOPKRI 1 Yogyakarta",
    time: "March 2021 - Mei 2021",
    summary: [
      "Responsible for designing website user needs for alumni data collection",
      "Create wireframes and website display designs with Adobe XD as well",
      "Implementation of the design results into a website form with the help of the WordPress CMS",
      "Participate in the documentation committee for changing the school principal",
    ],
    image: "/svg/e-bopkri.svg",
  },
  {
    job: "Webmaster Associate",
    company: "PT. Stucel Media Kreasi",
    time: "Juli 2022 - Present",
    summary: [
      "Responsible for managing content using the WordPress CMS.",
      "Slicing the design into a website interface using WordPress page builders such as Oxygen, Elementor, Divi, or custom templates.",
      "Responsible for maintenance tasks, including plugin updates, WordPress core updates, and bug fixes.",
      "Creating user guides for clients to facilitate their understanding of content management using the WordPress CMS.",
    ],
    image: "/svg/e-stucel.svg",
  },
];

export const skills = [
  {
    title: "HTML",
    level: "Intermediate",
    type: "Skill",
    icon: "/svg/icon-html.svg",
  },
  {
    title: "CSS",
    level: "Intermediate",
    type: "Skill",
    icon: "/svg/icon-css.svg",
  },
  {
    title: "JavaScript",
    level: "Intermediate",
    type: "Skill",
    icon: "/svg/icon-javascript.svg",
  },
  {
    title: "Sass",
    level: "Intermediate",
    type: "Skill",
    icon: "/svg/icon-sass.svg",
  },
  {
    title: "React JS",
    level: "Basic",
    type: "Skill",
    icon: "/svg/icon-react.svg",
  },
  {
    title: "Next JS",
    level: "Basic",
    type: "Skill",
    icon: "/svg/icon-nextjs.svg",
  },
  {
    title: "Tailwind",
    level: "Intermediate",
    type: "Skill",
    icon: "/svg/icon-tailwind.svg",
  },
  {
    title: "TypeScript",
    level: "Basic",
    type: "Skill",
    icon: "/svg/icon-typescript.svg",
  },
  {
    title: "Bootstrap",
    level: "Basic",
    type: "Skill",
    icon: "/svg/icon-bootstrap.svg",
  },
  {
    title: "Php",
    level: "Basic",
    type: "Skill",
    icon: "/svg/icon-php.svg",
  },
  {
    title: "MySQL",
    level: "Basic",
    type: "Skill",
    icon: "/svg/icon-mysql.svg",
  },
  {
    title: "CodeIgniter",
    level: "Basic",
    type: "Skill",
    icon: "/svg/icon-codeigniter.svg",
  },
  {
    title: "Node JS",
    level: "Basic",
    type: "Skill",
    icon: "/svg/icon-nodejs.svg",
  },
  {
    title: "Visual Studio Code",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-vscode.svg",
  },
  {
    title: "Git",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-git.svg",
  },
  {
    title: "Github",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-github.svg",
  },
  {
    title: "Gitlab",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-gitlab.svg",
  },
  {
    title: "Vite",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-vite.svg",
  },
  {
    title: "Adobe XD",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-adobexd.svg",
  },
  {
    title: "Figma",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-figma.svg",
  },
  {
    title: "Android Studio",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-androidstudio.svg",
  },
  {
    title: "XAMPP",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-xampp.svg",
  },
  {
    title: "WordPress",
    level: "Intermediate",
    type: "Tool",
    icon: "/svg/icon-wordpress.svg",
  },
  {
    title: "Oxygen Page Builder",
    level: "Intermediate",
    type: "Tool",
    icon: "/svg/icon-oxygen.svg",
  },
  {
    title: "Bricks Page Builder",
    level: "Intermediate",
    type: "Tool",
    icon: "/svg/icon-bricks.svg",
  },
  {
    title: "Elementor Page Builder",
    level: "Intermediate",
    type: "Tool",
    icon: "/svg/icon-elementor.svg",
  },
  {
    title: "Divi Page Builder",
    level: "Intermediate",
    type: "Tool",
    icon: "/svg/icon-divi.svg",
  },
  {
    title: "Yoast SEO",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-yoastseo.svg",
  },
  {
    title: "Rankmath SEO",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-rankmath.svg",
  },
  {
    title: "ACF Pro",
    level: "Intermediate",
    type: "Tool",
    icon: "/svg/icon-acf.svg",
  },
  {
    title: "WPML",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-wpml.svg",
  },
  {
    title: "Google Analytics",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-googleanalytics.svg",
  },
  {
    title: "Webflow",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-webflow.svg",
  },
  {
    title: "Canva",
    level: "Basic",
    type: "Tool",
    icon: "/svg/icon-canva.svg",
  },
];

export const projectDone = [
  {
    title: "Invi Indonesia",
    description:
      "The INVI Indonesia project uses a special theme for the WordPress CMS by combining several tech stacks such as SCSS/SASS, gulp, and splide js. INVI Indonesia is a company profile website that focuses on providing information about electric vehicles. The company value raised is realizing transportation stability through electrification.",
    thumbnail: "/image/project-invi.jpg",
    techStack: [
      "/svg/icon-wordpress.svg",
      "/svg/icon-acf.svg",
      "/svg/icon-wpml.svg",
      "/svg/icon-sass.svg",
      "/svg/icon-gulp.svg",
    ],
    link: "https://www.invi-indonesia.co.id/",
  },
  {
    title: "Kalista",
    description:
      "Kalista was built using a custom WordPress theme that uses Gulp to compress CSS, JS, and images. Kalista is a company profile website that has the values Net Zero 2050, Collective Responsibilities, and Efficient Energy Cost.",
    thumbnail: "/image/project-kalista.png",
    techStack: [
      "/svg/icon-wordpress.svg",
      "/svg/icon-acf.svg",
      "/svg/icon-wpml.svg",
      "/svg/icon-sass.svg",
      "/svg/icon-gulp.svg",
    ],
    link: "https://kalista.co.id/",
  },
  {
    title: "Ming Media Promotion",
    description:
      "Project Ming is a landing page project focused on driving traffic for promotional purposes. This project was developed using the Bricks Builder page builder, along with some custom CSS styling. The goal of this project is to collect data from form submissions and track traffic through advertisements.",
    thumbnail: "/image/project-ming.jpg",
    techStack: [
      "/svg/icon-bricks.svg",
      "/svg/icon-acf.svg",
      "/svg/icon-css.svg",
      "/svg/icon-javascript.svg",
      "/svg/icon-php.svg",
    ],
    link: "https://order.mingpromo.com/",
  },
  {
    title: "Mawatu Labuan Bajo",
    description:
      "On the Mawatu Labuan Bajo project, use the Oxygen page builder from the WordPress CMS to create elements per section, then use the WP Codebox plugin to style SCSS/SASS and JAVASCRIPT. MAWATU is a website project for promoting real estate or tenants that will be built.",
    thumbnail: "/image/project-mawatu.jpg",
    techStack: [
      "/svg/icon-wordpress.svg",
      "/svg/icon-sass.svg",
      "/svg/icon-acf.svg",
      "/svg/icon-wpml.svg",
      "/svg/icon-oxygen.svg",
    ],
    link: "https://www.invi-indonesia.co.id/",
  },
  {
    title: "Kinarya Bangun Sesama",
    description:
      "The kinarya project uses the Oxygen page builder to create elements on each page then for styling and javascript using the WP Codebox plugin. Kinarya is a company profile website that provides information on several main programs including Forest to Cups, Food Waste to Compost, Pratama Health Clinic, and Training Center.",
    thumbnail: "/image/project-kinarya.jpg",
    techStack: [
      "/svg/icon-wordpress.svg",
      "/svg/icon-sass.svg",
      "/svg/icon-acf.svg",
      "/svg/icon-wpml.svg",
      "/svg/icon-oxygen.svg",
    ],
    link: "https://lyusjayasentosa.com/",
  },
  {
    title: "Indika Nature",
    description:
      "Indika Nature is a custom WordPress website theme that combines GASP and AOS for website animation. Indika is a company profile website that focuses on using nature to solve social and environmental problems.",
    thumbnail: "/image/project-indika-nature.png",
    techStack: [
      "/svg/icon-wordpress.svg",
      "/svg/icon-sass.svg",
      "/svg/icon-acf.svg",
      "/svg/icon-gulp.svg",
    ],
    link: "https://indikanature.co.id/",
  },
  {
    title: "Lyus Jaya Sentosa",
    description:
      "Lyus Jaya Sentosa every page is created using the Oxygen page builder from the WordPress CMS then for styling and JavaScript using the WP Codebox plugin. Lyus Jaya Sentosa is a company profile website that focuses on making crackers.",
    thumbnail: "/image/project-lyus.jpg",
    techStack: [
      "/svg/icon-wordpress.svg",
      "/svg/icon-sass.svg",
      "/svg/icon-acf.svg",
      "/svg/icon-wpml.svg",
      "/svg/icon-oxygen.svg",
    ],
    link: "https://lyusjayasentosa.com/",
  },
];

export const project = [
  {
    name: "Woodenloka",
    description:
      "Woodenloka is a catalog of premium teak wood tableware products, using Bricks Builder for the development of each template and section, and ACF Pro for creating product post types.",
    preview: "/image/porto-woodenloka.jpg",
    techStack: [
      "/svg/icon-bricks.svg",
      "/svg/icon-sass.svg",
      "/svg/icon-acf.svg",
      "/svg/icon-wordpress.svg",
    ],
    // repository: "https://github.com/yofanalfiatur/portfolio-vite",
    link: "https://woodenloka.store/",
  },
  {
    name: "Bakpiaku",
    description:
      "This website showcases the Bakpiaku product catalog using Bricks Builder as the main page builder, and utilizes the WPCodeBox plugin for CSS or SCSS styling. Also using ACF Pro for creating product post types and fields for global content settings.",
    preview: "/image/porto-bakpiaku.jpg",
    techStack: [
      "/svg/icon-bricks.svg",
      "/svg/icon-sass.svg",
      "/svg/icon-acf.svg",
      "/svg/icon-wordpress.svg",
    ],
    // repository: "https://github.com/yofanalfiatur/portfolio-vite",
    link: "https://woodenloka.store/bakpiakustaging/",
  },
  {
    name: "First Portfolio",
    description:
      "This awesome project right here is actually my portfolio, crafted using the amazing React JS library and jazzed up with some slick styling courtesy of Tailwind CSS. How cool is that?",
    preview: "/image/porto-1.jpg",
    techStack: [
      "/svg/icon-react.svg",
      "/svg/icon-tailwind.svg",
      "/svg/icon-vite.svg",
    ],
    repository: "https://github.com/yofanalfiatur/portfolio-vite",
    link: "https://portfolio-vite-yofan.vercel.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "This is my first project using React JS to display movie data from The Movie Database API. Features are limited to the search field.",
    preview: "/image/porto-2.jpg",
    techStack: ["/svg/icon-react.svg"],
    repository: "https://github.com/yofanalfiatur/yofan-movie-list",
    link: "https://yofan-movie-list.vercel.app/",
  },
  {
    name: "Anime List",
    description:
      "A website that displays a list of top anime using the JIKAN API, also equipped with a dark mode feature, but still in the development process.",
    preview: "/image/porto-3.jpg",
    techStack: [
      "/svg/icon-nextjs.svg",
      "/svg/icon-tailwind.svg",
      "/svg/icon-react.svg",
    ],
    repository: "https://github.com/yofanalfiatur/nextjs-anime",
    link: "https://nextjs-anime-yar.vercel.app/",
  },
];

export const services = [
  {
    title: "Web development from scratch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo, aliquam dolores aliquid asperiores deserunt eum ea hic voluptatem accusantium inventore,",
    IconTab: CgWebsite,
    subheading: "What do i provide?",
    service: [
      "Web application development",
      "Web Testing",
      "Web Maintenancing",
      "Web Data Management",
      "Web Bug Fixing",
      "Web interface building",
      "Web experience building",
    ],
    listExample: [
      {
        example: "Wedding Invitation Website",
        link: "https://youtube.com/",
      },
      {
        example: "Portfolio Website",
        link: "https://youtube.com/",
      },
      {
        example: "Profil Company Website",
        link: "https://youtube.com/",
      },
      {
        example: "Promotion Website",
        link: "https://youtube.com/",
      },
    ],
  },
  {
    title: "Web development with Wordpress CMS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo, aliquam dolores aliquid asperiores deserunt eum ea hic voluptatem accusantium inventore,",
    IconTab: HiOutlineDesktopComputer,
    subheading: "What do i provide?",
    service: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    listExample: [
      {
        example: "Wedding Invitation Website",
        link: "https://youtube.com/",
      },
      {
        example: "Portfolio Website",
        link: "https://youtube.com/",
      },
      {
        example: "Profil Company Website",
        link: "https://youtube.com/",
      },
      {
        example: "Promotion Website",
        link: "https://youtube.com/",
      },
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo, aliquam dolores aliquid asperiores deserunt eum ea hic voluptatem accusantium inventore,",
    IconTab: MdDesignServices,
    subheading: "What do i provide?",
    service: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    listExample: [
      {
        example: "Design Website",
        link: "https://youtube.com/",
      },
      {
        example: "Design Mobile Apps",
        link: "https://youtube.com/",
      },
    ],
  },
  {
    title: "Copywriting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo, aliquam dolores aliquid asperiores deserunt eum ea hic voluptatem accusantium inventore,",
    IconTab: GrDocumentText,
    subheading: "What do i provide?",
    service: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    listExample: [
      {
        example: "Example Copywriting",
        link: "https://youtube.com/",
      },
      {
        example: "Example2 Copywriting",
        link: "https://youtube.com/",
      },
    ],
  },
];

export const sosmed = [
  {
    LogoSosmed: AiFillGithub,
    link: "https://github.com/yofanalfiatur",
  },
  {
    LogoSosmed: AiFillFacebook,
    link: "https://www.facebook.com/yopan.alfiatur",
  },
  {
    LogoSosmed: AiFillInstagram,
    link: "https://www.instagram.com/yofanalfiatur/",
  },
  {
    LogoSosmed: AiFillLinkedin,
    link: "https://www.linkedin.com/in/yofan-alfiatur-a74a491a4/",
  },
  {
    LogoSosmed: BsDiscord,
    link: "https://discord.com/users/YofanAlfiatur#4327",
  },
  {
    LogoSosmed: AiOutlineWhatsApp,
    link: "https://wa.me/6285640503753",
  },
];
