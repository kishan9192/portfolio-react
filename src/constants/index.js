import {
  sanfoundry,
  innovaccer,
  gfg,
  accolite,
  movie,
  gym,
  cash,
} from "../assets/images";
import {
  css,
  git,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
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
    iconUrl: gym,
    name: "Workout pulse",
    techStack: [
      "React",
      "Javascript",
      "NodeJS",
      "Express",
      "MongoDB",
      "TailwindCSS",
    ],
    description:
      "A user dashboard allowing users to register and login to the portal, add their workout, track the calories burned during each set with the help of charts, and track their past workouts to help them progressively overload and achieve their fitness goals better.",
    link: "https://github.com/kishan9192/fitness-tracker",
  },
  {
    iconUrl: movie,
    name: "Watchlistly",
    techStack: ["React-Native", "Javascript", "CSS"],
    description:
      "A movie browsing app that allows browsing through top-rated, trending or upcoming movies. You can like them, add them to your watchlist, share with your friends over whatsapp and watch the trailer on click without navigating to any other app, along with rating, genre and description.",
    link: "https://github.com/kishan9192/React-Native",
  },
  {
    iconUrl: cash,
    name: "Expense calculator",
    techStack: ["React", "Javascript", "TailwindCSS"],
    description:
      "A React application that allows addition or deletion of expenses and income, maintaining the transaction history and displays the remaining balance along with total income and expenditure. Allows better management of expenses.",
    link: "https://github.com/kishan9192/expense-calculator",
  },
];
