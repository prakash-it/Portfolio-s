import {
    IoLogoJavascript, 
    IoLogoHtml5,
    IoLogoReact,
    IoLogoNodejs
} from 'react-icons/io5';

import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";

import pic5 from '../assets/pic5.png'
import pic1 from '../assets/img1.png'
import pic2 from '../assets/img2.png'
import pic3 from '../assets/pic3.png'

 export const PROFIL_data = {
    profilPic: "https://via.placeholder.com/150",
    name: "PRAKASH",
    tagline: "As a passionate React.js developer exploring your career with fresh knowledge, diving into MERN stack development can significantly enhance your capabilities and open new opportunities.",
    jobtitle: "MERN Stack Developer",
    experience: "Fresher",
    location: "INDIA",
    skills: [
        "HTML", "CSS", "Git", "React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"
    ],
    email: "prakashkandasamy4@gmail.com",
    Phone:"Click to Call",

    website: "prakash-joyboy"
};

export const Skills = [
    {
        id: "01",
        icon: IoLogoHtml5,
        title: "HTML",
        comment: "HTML is the foundation of every web project I work on."
    },
    {
        id: "02",
        icon: RiTailwindCssFill,
        title: "Tailwind CSS",
        comment: "Tailwind CSS helps me quickly style my components with utility classes."
    },
    {
        id: "03",
        icon: IoLogoJavascript,
        title: "JavaScript",
        comment: "JavaScript adds interactivity to my web applications."
    },
    {
        id: "04",
        icon: IoLogoReact,
        title: "React.js",
        comment: "React.js allows me to build dynamic user interfaces."
    },
    {
        id: "05",
        icon: IoLogoNodejs,
        title: "Node.js",
        comment: "Node.js enables me to create server-side applications."
    },
    {
        id: "06",
        icon: SiMongodb,
        title: "MongoDB",
        comment: "MongoDB is my go-to database for flexible data storage."
    },
    {
        id: "07",
        icon: SiExpress,
        title: "Express.js",
        comment: "Express.js is a lightweight web framework for Node.js that simplifies building web servers and APIs."
    }
];

export const EDUexperience = [
    {
        id:"01",
        Degree: "Full-Stack-Development",
        specfication:"MERN Stack Developer",
        duration: "Jan - Jun",
        decription:"The Full-Stack Development degree with a specialization in MERN Stack Development is a comprehensive program that prepares students to become proficient in building dynamic and responsive web applications. "
    },
    {
        id:"02",
        Degree: "Becholer of Technology",
        specfication:"Infromation Teachnology",
        duration: "2019-2023",
        decription:"The Bachelor of Technology (B.Tech) in Information Technology is a comprehensive undergraduate program designed to equip students with a robust foundation in both theoretical and practical aspects of information technology. "
    },
    {
        id:"03",
        Degree: "HSC",
        specfication:"Computer science",
        duration: "2018-2019",
        decription:"The Higher Secondary Certificate (HSC) with a specialization in Computer Science is a pre-university program that provides students with a foundational understanding of computer science principles and practices. "
    }
]

export const ABOUT = {
    
    introduction: 
       " Hello! I'm Prakash, a passionate MERN Stack Developer from India. I have a keen interest in building efficient and scalable web applications using modern technologies.",

    background:
      "I started my journey in web development with a strong foundation in HTML, CSS, and JavaScript. Over time, I have honed my skills in React.js for front-end development and Node.js, Express.js, and MongoDB for back-end development. My experience includes working on various projects, both personal and collaborative, that have helped me understand the intricacies of full-stack development.",

    Skils:`Proficient in HTML, CSS, JavaScript,
      - Experienced in front-end frameworks like React.js 
      - Skilled in back-end development with Node.js, Express.js
      - Knowledgeable in database management with MongoDB 
      - Familiar with version control systems like Git and GitHub`,
    Career_Goals:
       " My goal is to continuously learn and explore new technologies to enhance my skills and deliver high-quality projects. I aspire to work on innovative projects that solve real-world problems and contribute to the tech community. In the long term, I aim to become a lead developer, guiding teams to build impactful applications and driving technological advancements in the industry."
    ,
    stats:{
        certifications : 4,
        project :5,
        Resume:1
    }
};


export const slides = [
    { id: 1, image: pic1},
    { id: 2, image: pic2 },
    { id: 3, image: pic3 },
    { id: 4, image: 'https://via.placeholder.com/150' },
    { id: 5, image: pic5 },
];