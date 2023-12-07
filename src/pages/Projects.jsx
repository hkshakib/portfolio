import { motion } from "framer-motion";
import React from "react";
import Project from "../components/Project";
import ProjectLive from "../components/ProjectLive";
import ProjectWithLive from "../components/ProjectWithLive";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center text-[35px] lg:text-[56px] font-mono mb-[20px]">
        <h1>Projects</h1>
      </div>

      <motion.div
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-8 lg:p-12 justify-center"
      >
        <Project
          Title={"Luxehaven"}
          Summery={
            "A complete E-commerce backend system that includes user registration, login functionality, product browsing, cart management, and a customizable admin panel."
          }
          Technologies={[
            "Django",
            "Django Rest",
            "Djoser",
            "django Filters",
            "JWT Authentication",
            "drf-Nexted-Router",
            "Pillow",
          ]}
          CodeUrl={"https://github.com/hkshakib/luxehaven"}
        />
        <ProjectLive />
        <Project
          Title={"Project Manager"}
          Summery={
            "I implemented a Project Manager with CRUD opertaion and Notification for both Create And Delete Project. This Project is basically built for Learning Purpose"
          }
          Technologies={[
            "React",
            "React Router Dom",
            "React-Redux",
            "React ToolKit",
            "Material UI",
          ]}
          CodeUrl={"https://github.com/hkshakib/projectmanager"}
        />
        <ProjectWithLive />
        <Project
          Title={"Personal Protfolio"}
          Summery={
            "I designed and built a visually appealing and responsive portfolio website using React and Tailwind CSS. The website consists of a single page with distinct sections, such as Home, Skills, Problem Solving, Education, Achivements, and Contact."
          }
          Technologies={["React", "React Router Dom", "Tailwind CSS"]}
          CodeUrl={"https://github.com/hkshakib/protfolio"}
        />

        <Project
          Title={"StoreFront (Backend)"}
          Summery={
            "I have developed a complete E-commerce backend system that includes user registration, login functionality, product browsing, cart management, and a customizable admin panel."
          }
          Technologies={[
            "Django",
            "Django Rest",
            "Djoser",
            "django Filters",
            "Session Authentication",
          ]}
          CodeUrl={"https://github.com/hkshakib/storefront2"}
        />
        <Project
          Title={"Django Authentication (Backend)"}
          Summery={
            "This is the complete package of Django authentication system using Django Simple JWT.I implemented it using Django REST framework. It has several Endpoints for user including login, logout, signup and user profile."
          }
          Technologies={["Django", "Django Rest", "Django Simple-JWT"]}
          CodeUrl={"https://github.com/hkshakib/DjangoAuthentication"}
        />
        <Project
          Title={"BID Buddy (Backend)"}
          Summery={
            "BID BUDDY Project is a web application that enables users to participate in auctions for various items. It provides features such as user registration and authentication, an auction gallery to browse available items, the ability to place bids on items."
          }
          Technologies={[
            "React",
            "CSS",
            "Tailwind CSS",
            "React Router Dom",
            "Custom Hooks",
          ]}
          CodeUrl={"https://github.com/hkshakib/auctionfrontend"}
        />
        <Project
          Title={"BID Buddy (Backend)"}
          Summery={
            "BID BUDDY Project is a web application that enables users to participate in auctions for various items. It provides features such as user registration and authentication, an auction gallery to browse available items, the ability to place bids on items. Also, Included some endpoints for the Admin dashboard and statistics that not includes in frontend yet"
          }
          Technologies={["Django", "Django Rest", "Django Simple-JWT"]}
          CodeUrl={"https://github.com/hkshakib/auctionbackend"}
        />

        <Project
          Title={"Steller (FullStack)"}
          Summery={
            "An Real Estate App Using Django REST, React And Redux. I implement REST, React Redux in this project while Learning Redux from Scratch."
          }
          Technologies={[
            "Django",
            "Django Rest",
            "React Js",
            "React Router",
            "Custom Hooks",
          ]}
          CodeUrl={"https://github.com/hkshakib/Stellar"}
        />

        <Project
          Title={"Blog (Frontend)"}
          Summery={"I implement this blog using React while Learning React."}
          Technologies={["React Js", "React Router Dom"]}
          CodeUrl={"https://github.com/hkshakib/blogfrontend"}
        />
      </motion.div>
    </div>
  );
};

export default Projects;
// FCF4FF
