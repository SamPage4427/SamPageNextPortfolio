export const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2  md:columns-2 lg:columns-3">
        <li>React.js</li>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>GraphQL</li>
        <li>TailwindCSS</li>
        <li>Next.js</li>
        <li>Git</li>
        <li>Webpack</li>
        <li>HeadlessUI</li>
        {/* <li></li> */}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Oklahoma State University, BS in Multimedia Journalism</li>
        <li>TripleTen Software Engineer Program, Certification</li>
        {/* <li></li>
        <li></li>
        <li></li>
        <li></li> */}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>TripleTen Software Engineer Certificate</li>
        {/* <li>AWS Certified Cloud Practitioner</li>
        <li>AWS Certified Developer - Associate</li>
        <li></li>
        <li></li> */}
      </ul>
    ),
  },
];

export const projectsData = [
  {
    id: 1,
    title: "SlopGoblin's Web Reference",
    description:
      "Project created while doing non-profit work for SlopGoblins NPO. It utilizes ReactJS, TailwindCSS, HeadlessUI, ViteJS, StorybookJS, and Apollo Client on the frontend, while utilizing Keystone, TypeScript, Prisma, and Apollo GraphQL on the backend.",
    image: "/images/projects/slopgoblin.png",
    tag: ["All", "Web"],
    git: "",
    preview: "",
  },
  {
    id: 2,
    title: "NewsExplorer",
    description:
      "Project created while studying React.js programming with the TripleTen Online Bootcamp. It utilizes ReactJS, NodeJS, ExpressJS, MongoDB and 2 different APIs(an Open Source News API and a created back-end API for storing user and news article information). The website routes between the main page and the saved articles page so the user can interact with their saved articles and delete them if they desire.",
    image: "/images/projects/news-explorer.png",
    tag: ["All", "Web"],
    git: "https://github.com/SamPage4427/news-explorer-frontend",
    preview: "https://www.newsexplorer.online",
  },
  {
    id: 3,
    title: "WTWR: What to Wear?",
    description:
      "Project created while studying React.js programming with the TripleTen Online Bootcamp. It utilizes ReactJS, JavaScript, CSS, NodeJS, ExpressJS and two different API's (a weather API and a created item storing back-end API). The website includes a toggle switch for the change between fahrenheit and celcius, while also routing between the main interface and the user profile depending on if the site logo is clicked(main page) or if the username or avatar is clicked(profile page).",
    image: "/images/projects/whattowear.png",
    tag: ["All", "Web"],
    git: "https://github.com/SamPage4427/se_project_react",
    preview: "https://www.wtwr.epicgamer.org",
  },
  {
    id: 4,
    title: "Around the US",
    description:
      "Project created while studying with the TripleTen Online Bootcamp. It utilizes JavaScript, HTML, and CSS to create a webpage designed for posting images to the website, showing the user what others have posted, deleting only the user added images, and liking posts. The project includes modals for updating the profile picture, the name and description of the user, along with a modal for adding new pictures and confiming if the user wants to delete their pictures.",
    image: "/images/projects/aroundtheus.png",
    tag: ["All", "Web"],
    git: "https://github.com/SamPage4427/se_project_aroundtheus",
    preview: "https://SamPage4427.github.io/se_project_aroundtheus",
  },
  {
    id: 5,
    title: "React Pizza Website",
    description:
      "A Front-End React website that utilizes NodeJS, ReactJS and CSS for a Pizzaria. The website includes a home, menu, about, and contact page.",
    image: "/images/projects/ReactWebsite.jpg",
    tag: ["All", "Web"],
    git: "https://github.com/SamPage4427/SamPageReactPizza",
    preview: "https://samspizza.netlify.app",
  },
  {
    id: 6,
    title: "2D Java Treasure Adventure",
    description:
      "A 2D Treasure Adventure game created with Java and Pixel Art that resembles older treasure games played on the N64 and Sega.(Not Hosted currently)",
    image: "/images/projects/16bit.jpg",
    tag: ["All", "Game"],
    git: "https://github.com/SamPage4427/2DTreasure",
    preview: "",
  },
  {
    id: 7,
    title: "Employee Reimbursement System",
    description:
      "An Employee reimbursement system created using Java, JSON, Tomcat, Maven, and PostgreSQL, that utilizes Postman to send requests to the DBeaver server.",
    image: "/images/projects/Code.jpg",
    tag: ["All", ""],
    git: "https://github.com/SamPage4427/SamPageProject1",
    preview: "",
  },
  // {
  //   id: 8,
  //   title: "",
  //   description:
  //     "",
  //   image: "",
  //   tag: ["All", ""],
  //   git: "",
  //   preview: "",
  // },
  // {
  //   id: 9,
  //   title: "",
  //   description:
  //     "",
  //   image: "",
  //   tag: ["All", ""],
  //   git: "",
  //   preview: "",
  // },
  // {
  //   id: 10,
  //   title: "",
  //   description:
  //     "",
  //   image: "",
  //   tag: ["All", ""],
  //   git: "",
  //   preview: "",
  // },
  // {
  //   id: 11,
  //   title: "",
  //   description:
  //     "",
  //   image: "",
  //   tag: ["All", ""],
  //   git: "",
  //   preview: "",
  // },
];

export const achievementsList = [
  {
    metric: "Projects",
    value: "14",
  },
  {
    metric: "Skills",
    value: "42",
  },
  {
    metric: "Certifications",
    value: "1",
  },
  {
    metric: "Years",
    value: "2",
  },
];
