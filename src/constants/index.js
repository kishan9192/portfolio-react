import { sanfoundry, innovaccer, gfg, accolite } from "../assets/images";
import {
  car,
  css,
  estate,
  git,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  geeksforgeeks,
  leetcode,
  hackerRankDark,
  hackerrankLight,
  githubDark,
  githubLight,
  python,
  django,
  reactNative,
  openAI,
  jest,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: django,
    name: "Django",
    type: "Backend",
  },
  {
    imageUrl: jest,
    name: "Jest",
    type: "Testing",
  },
  {
    imageUrl: openAI,
    name: "Prompt Engineering",
    type: "openAI",
  },
  {
    imageUrl: reactNative,
    name: "React Native",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Development Engineer - 2",
    company_name: "Innovaccer",
    icon: innovaccer,
    iconBg: "#F6E0F7",
    date: "Feb 2023 - present",
    points: [
      "Developing and maintaining web applications using React, Redux, Typescript, Python, Django and MongoDB.",
      "Creating prompts for OpenAI to utilize generative AI in developing an AI assistant for healthcare.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developing RESTful APIs using Python, Django, FastAPI and MongoDB.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Development Engineer - 1",
    company_name: "Innovaccer",
    icon: innovaccer,
    iconBg: "#F6E0F7",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Developed scalable, reusable and config-driven UI components using React and Typescript.",
      "Implemented unit tests and automation tests using Jest, Enzyme, Cypress and Playwright.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Accolite Digital",
    icon: accolite,
    iconBg: "#F9B583",
    date: "Feb 2021 - Dev 2021",
    points: [
      "Developed reusable UI components, end to end features and troubleshooting issues for health insurance using React-Native and Javascript.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developed a trainee onboarding system for offloading entire manual labour or managing training sessions, scores, attendances, group allotment and projects distribution between trainees and trainers.",
    ],
  },
  {
    title: "Author - Technical Content",
    company_name: "GeeksforGeeks",
    icon: gfg,
    iconBg: "#EAF9EA",
    date: "Dec 2019 - March 2020",
    points: [
      "Wrote new articles/blogs on Data Structures and Algorithms, Computer Networks, Object oriented programming.",
      "Improved and optimized the existing articles using C++ and Python.",
      "Involved in reviews of the improved or new articles.",
    ],
  },
  {
    title: "Author - Technical Content",
    company_name: "Sanfoundry",
    icon: sanfoundry,
    iconBg: "#B8E3FF",
    date: "Jan 2019 - March 2019",
    points: [
      "Wrote 50+ new articles/blogs on Data Structures and Algorithms, and Object oriented programming.",
      "Improved and optimized the existing articles using C and C++.",
      "Involved in reviews of the improved or new articles.",
    ],
  },
];

export const socialLinks = (theme) => [
  {
    name: "GitHub",
    iconUrl: theme === "light" ? githubLight : githubDark,
    link: "https://github.com/kishan9192",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/kishanmishraa/",
  },
  {
    name: "HackerRank",
    iconUrl: theme === "light" ? hackerRankDark : hackerrankLight,
    link: "https://www.hackerrank.com/profile/kishan_mishra",
  },
  {
    name: "Leetcode",
    iconUrl: leetcode,
    link: "https://leetcode.com/u/kishan9192/",
  },
  {
    name: "GeeksforGeeks",
    iconUrl: geeksforgeeks,
    link: "https://www.geeksforgeeks.org/user/mishrakishan1/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
