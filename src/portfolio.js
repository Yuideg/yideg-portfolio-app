import emoji from "react-easy-emoji";
import {deepPurple} from "@mui/material/colors";

export const greetings = {
    name: "Yideg Misganaw",
    title: "Hi there,I am Yideg,Your Next Full Stack Developer",
    description:
        "As a seasoned full stack developer, I possess a comprehensive skill set encompassing both front-end and back-end technologies. With a strong understanding of various programming languages, frameworks, and databases, I am adept at designing and implementing end-to-end solutions. My expertise in building intuitive user interfaces, optimizing server-side functionality, and ensuring seamless integration enables me to deliver robust and scalable web applications. By staying updated with the latest industry trends, I continuously strive to enhance the overall user experience and drive business success.",
    resumeLink: "#",
};

export const openSource = {
    githubUserName: "Yuideg",
};

export const contact = {};

export const socialLinks = {
    instagram: "https://www.instagram.com/endegmisganew/",
    twitter: "https://twitter.com/yuideg",
    github: "https://github.com/Yuideg",
    linkedin: "https://www.linkedin.com/in/yideg/",
};

export const skillsSection = {
    title: "Skills",
    subTitle:
        "Experiences from Frontend to Backend: A Full Stack Developer's Skill Set",
    advanced: [
        {
            name: "MYSQL",
            value: 9,
        },
        {
            name: "HTML 5",
            value: 10,
        },
        {
            name: "GIT VC",
            value: 10,
        },
        {
            name: "PYTHON",
            value: 10,
        },
        {
            name: "NODEJS",
            value: 10,
        },
        {
            name: "MONGODB",
            value: 9,
        },

        {
            name: "JAVASCRIPT",
            value: 10,
        },
        {
            name: "POSTGRESQL",
            value: 10,
        },


    ],
    intermidiate: [


        {
            name: "AWS",
            value: 9,
        },
        {
            name: "JAVA",
            value: 9
        },

        {
            name: "REACT",
            value: 9,
        },
        {
            name: "GOLANG",
            value: 9,
        },
        {
            name: "DOCKER",
            value: 9,
        },
        {
            name: "FIREBASE",
            value: 9
        },
        {
            name: "TYPESCRIPT",
            value: 9,
        },
        {
            name: "ELASTIC SEARCH",
            value: 9,
        }
    ],
    beginner: [
        {
            name: "PHP",
            value: 8,
        },
        {
            name: "GCD",
            value: 8,
        },
        {
            name: "OPENAI",
            value: 8,
        },
        {
            name: "FLUTTER",
            value: 8,
        },
        {
            name: "KUBERNETES",
            value: 8,
        },

        {
            name: "WEB SCRAPING",
            value: 8,
        },
        {
            name: "DATA SCIENCE",
            value: 8,
        },
        {
            name:"MACHINE LEARNING",
            value:8
        },


    ],
};

export const SkillBars = [
    {
        Stack: "Frontend",
        progressPercentage: "90",
    },
    {
        Stack: "Backend",
        progressPercentage: "99",
    },
    {
        Stack: "Mobile Application Development",
        progressPercentage: "70",
    },
    {
        Stack: "General Programming",
        progressPercentage: "98",
    },
];

export const educationInfo = [

    {
        schoolName: "Addis Ababa University",
        subHeader: "Bachelor's of Science in Software Engineering",
        duration: "September 2017 - July 2022",
        desc: "Over the course of five years, I have acquired proficiency in various programming languages and frameworks, leveraging them to successfully execute diverse projects.",
        descBullets:[
            "Programming Languages: Python, C, Go (Golang), Dart (Flutter)",

"Mobile & Web Development: Flutter for cross-platform app development",

"Software Engineering & Design: Software Quality Assurance (SQA), Software Requirements & Specifications (SRS), Object-Oriented Design",

"AI & Robotics: Introduction to Artificial Intelligence (AI), Machine Learning (ML), basic robotics system design and control",

"Systems & Networking: Operating Systems (OS), Computer Networking fundamentals",

"Tools & Technologies: Git, VS Code, Jupyter, Linux, Python libraries for ML (NumPy, pandas, scikit-learn)"
        ]
    },

];

export const experience = [
    {
        role: "Backend web developer",
        company: "2F Capital",
        country: "Ethiopia",
        job: "Hybrid",
        companylogo: "/img/icons/2f.png",
        date: " July 2021 – July 2022",
        desc: "With my exceptional talent and extensive experience, I have excelled as a back-end developer at Twof Times Software Development Company. Leveraging Golang and the Gin framework, I adeptly craft high-quality and maintainable REST APIs. Additionally, my proficiency in utilizing diverse services further enhances the overall functionality and performance of the applications I develop.",
        descBullets: [],
        color:deepPurple[500]

    },
    {
        role: "Full Stack Developer",
        company: "ZehuTech Comapny",
        country: "Chinna",
        job: "Internship",
        companylogo: "",
        date: "May 2022 – Nov 2022",
        desc: "As a full stack developer at ZehuTech, Chinna, I have successfully utilized my expertise in Flutter, Spring Boot Java, MySQL, and the WeChat framework to develop robust and scalable ecommerce applications. With a strong command over both front-end and back-end technologies, I have consistently delivered high-quality solutions that meet client requirements. My versatile skill set and ability to adapt to new technologies make me a valuable asset to any development team.",
        descBullets: [],
        color:deepPurple[500]

    },
    {
        role: "Backend Developer",
        company: "OLI System Development",
        country: "Ethiopia",
        job: "Contract",
        companylogo: "",
        date: "July 2022 – Nov 2022",
        desc:"During my tenure at OSI Company, I excelled as a backend developer proficient in Golang, Gin, Casbin, PostgreSQL, and other relevant technologies. Leveraging my expertise, I successfully designed and implemented efficient and secure backend solutions, ensuring seamless data management and integration. My dedication to delivering high-quality code and my ability to collaborate effectively make me a valuable asset to any development team.",
        descBullets: [],
        color:deepPurple[500]

    },
    {
        role: "Backend Developer",
        company: "L-IFT",
        country: "Netherlands",
        job: "Full-Time",
        companylogo: "/img/icons/lift.png",
        date: "Aug 2022 – April 2025",
        desc:"As a backend developer at L-IFT, I utilized my proficiency in Python, Django, PostgreSQL, Firebase, RabbitMQ, Redis, Celery, and AWS S3, among other technologies, to deliver high-quality solutions. With expertise in developing and optimizing backend functionalities, I ensured seamless data management, messaging, and task processing. My ability to thrive in a dynamic environment and effectively collaborate with cross-functional teams makes me a valuable asset to any organization.",
        descBullets: [],
        color:deepPurple[500]

    }

];

export const projects = [
    {
        name: "Inventory API",
        desc: "Inventory APi is A rest api developed in the fastest programmming language called Golang",
        github: "https://github.com/endeg-dev/inventory_api",
        link: "https://github.com/endeg-dev/inventory_api",
    },
    {
        name: "Chat App API",
        desc: "This an api for multi broad cast and end to end communication restful api developed by golang and websocket framework called melody ",
        github: "https://github.com/endeg-dev/chat-application_backend",
        link: "https://github.com/endeg-dev/chat-application_backend",
    },
    {
        name: "Football Managment System",
        desc: "Football managment system is an appliction for managing footballs it has admin ,coach,player,club and clubadmin.This sytem handles footbal information effectively.",
        github: "https://github.com/endeg-dev/football-management--system--php",
        link: "https://github.com/endeg-dev/football-management--system--php",
    },
    {
        name: "Chat Application ",
        desc: "Chat app is a front end responsive application developed  react js with antd library..",
        github: "https://github.com/endeg-dev/chat_app",
        link: "https://github.com/endeg-dev/chat_app",
    },
];
export const realProjects = [
    {
        name:"FINBIT App",
        cover:"/img/finbit.png",
        role:"Backend Developer(Python Django)",
        desc:"FINBIT is a modular, multipurpose technology system designed for financial monitoring and learning ecosystems. It can be tailored to an organization’s specific needs, allowing users to select and customize components and sub-components as required.",
    },
    {
        name:"Ecommerce App",
        cover:"/img/ecommerce.png",
        role:"Full Stack Developer",
        desc:"Developed an eCommerce web and mobile application using the WeChat Framework for " +
            "the front end and Spring Boot (Java) for the backend. Implemented user authentication, product management, " +
            "and order processing features. Ensured responsive design and seamless integration between client and server components."
    },
    {
        name:"Ride Plus App",
        cover:"/img/ride.png",
        role:"Backend Developer",
        desc:"Contributed to the development of Ride Plus, a ride-hailing web and mobile application. Built and maintained backend services using Golang, ensuring high performance and scalability. Collaborated with frontend teams using React and Flutter to deliver seamless user experiences and real-time ride management features."
    },
    {
        name:"ET Care App",
        cover:"/img/et.png",
        role:"Backend Developer",
        desc:"Worked on ET Care, a mobile and web application focused on healthcare services. Developed the backend using Golang and built responsive, user-friendly interfaces with React for web and Flutter for mobile. Implemented features for appointment booking, user management, and real-time communication between patients and providers."
    },
    {
        name:"E-Learning App",
        cover:"/img/366.png",
        role:"Backend Developer",
        desc:"Developed E-Learning, a multilingual mobile and web application for online education. Built using Node.js, Moleculer (microservices framework), and Angular for a scalable, modular architecture. Implemented core features like course management, user authentication, and multilingual support for a global user base.",
    }

];

export const feedbacks = [
    {
        name: "Getachew Tebkew,FullStack Developer",
        feedback:
            "I had the opportunity to work with Yideg Misganaw on an 8-month-long project. Throughout this period, he proved to be highly active, proficient, and dedicated. Yideg is proactive in tackling challenges and demonstrates strong problem-solving skills that helped keep the project on track. His commitment and technical expertise make him a valuable collaborator on any project.",
    },
    {
        name: "Mekdes Genetu,Backend Developer",
        feedback:
            "I have had the privilege of working alongside Yideg Misganaw for more than 3 years at L-IFT, where he served as a Backend Engineer. Yideg is an exceptionally active and dedicated team member who consistently approaches challenges with strong problem-solving skills. His technical expertise and proactive mindset have been key to overcoming complex issues and delivering high-quality solutions. He is a reliable colleague and an invaluable asset to any engineering team.",
    },
    {
        name: "Fasikaw Kindye, Flutter Developer",
        feedback:
            "I’ve had the pleasure of working closely with Yideg Misganaw on two complex projects after our graduation from Addis Ababa University Technology Campus. Throughout these projects, Yideg showcased exceptional problem-solving skills, technical expertise, and the ability to manage challenging tasks efficiently. His proactive attitude and clear communication made teamwork smooth and productive. Yideg’s strong foundation in software engineering and dedication to quality make him a reliable and valuable collaborator on any technical project.",
    },
    {
        name: "Getahun Honelet,Flutter Developer",
        feedback:
            "I’ve known Yideg Misganaw for over 8 years—we completed our BSc together at Addis Ababa University Technology Campus(5 years). " +
            "Yideg is not only a talented Full Stack Developer but also a very sociable and proactive person." +
            " He consistently approaches challenges with enthusiasm and a collaborative spirit, making him a great teammate and friend. His strong technical skills, gained through his software engineering education and practical experience, combined with his positive attitude, make him an asset to any project or team.",
    },
];
