import {
    IoLogoJavascript, 
    IoLogoHtml5,
    IoLogoReact,
    IoLogoNodejs
} from 'react-icons/io5'

import {RiTailwindCssFill} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"

export const PROFIL_data = {
    profilPic: "https://via.placeholder.com/150",
    name: "PRAKASH",
    tagline: "Passionate React.js developer exploring my career with fresh knowledge",
    jobtitle: "MERN Stack Developer",
    location: "INDIA",
    skills: [
        "HTML", "CSS", "Git", "React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"
    ],
    email:"prakashkandasamy4@gmail.com",
    Phone:"9865579294",
    website:"prakash-joyboy.netlify.app"
}

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
    }
]

export const EDUexperience = [
    {
        id:"01",
        Degree: "Becholer of Technology",
        specfication:"Infromation Teachnology",
        duration: "2019-2023"
    }
]

export const ABOUT = {
    heading: "About Me",
    description: 
       " Hello! I'm Prakash, a passionate MERN Stack Developer from India. I have a keen interest in building efficient and scalable web applications using modern technologies.",

        Background:
      "I started my journey in web development with a strong foundation in HTML, CSS, and JavaScript. Over time, I have honed my skills in React.js for front-end development and Node.js, Express.js, and MongoDB for back-end development. My experience includes working on various projects, both personal and collaborative, that have helped me understand the intricacies of full-stack development.",

    Projects:` - **Project 1**: [Project Name] - A web application built with React.js and Node.js that allows users to [brief description of functionality].
        - **Project 2**: [Project Name] - A responsive website developed using Tailwind CSS and Express.js for [brief description of purpose].
        - **Project 3**: [Project Name] - An e-commerce platform leveraging MongoDB for data storage and React.js for dynamic user interface.`,
    Career_Goals:
       " My goal is to continuously learn and explore new technologies to enhance my skills and deliver high-quality projects. I aspire to work on innovative projects that solve real-world problems and contribute to the tech community. In the long term, I aim to become a lead developer, guiding teams to build impactful applications and driving technological advancements in the industry."
    ,
    stats:{
        certificationsEarned : 3
    }
};

