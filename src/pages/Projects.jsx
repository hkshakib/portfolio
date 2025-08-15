import { motion } from "framer-motion";

import ProjectWithLive from "../components/ProjectWithLive";
import ProjectLive from "../components/ProjectLive";
import Project from "../components/Project";
import IssueTrackerLive from "../components/IssueTrackerLive";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden py-20 md:py-28"
    >
      <BackgroundFX />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Projects
          </h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Selected builds across backend, full‑stack, and UI engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
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
              "Django Filters",
              "JWT Authentication",
              "Drf-Nexted-Router",
              "Pillow",
            ]}
            CodeUrl={"https://github.com/hkshakib/luxehaven"}
          />

          <IssueTrackerLive />
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
            Title={"Protfolio"}
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
              "Django Filters",
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
              "React",
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
    </section>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(160,160,255,0.25),transparent)]" />
      <div className="absolute inset-0 blur-2xl">
        <div className="absolute -top-24 left-[10%] h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-500/35 to-pink-500/25 mix-blend-screen" />
        <div className="absolute top-[20%] right-[8%] h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/35 to-teal-400/25 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[25%] h-80 w-80 rounded-full bg-gradient-to-br from-amber-400/35 to-rose-400/25 mix-blend-screen" />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_20%,transparent,rgba(0,0,0,0.55))]" />
    </div>
  );
}
