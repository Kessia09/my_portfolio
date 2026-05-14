import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "ResQ",
      desc: "AI-powered accident detection system.",
      details: "ResQ uses machine learning and real-time data processing to detect accidents and alert emergency responders instantly. Built with a focus on performance and reliability.",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      github: "https://github.com/kessia09/resq",
      live: "https://resq.vercel.app"
    },
    {
      title: "THE YOT",
      desc: "Restaurant ordering platform.",
      details: "A full-stack restaurant system enabling users to order food, manage menus, and handle payments efficiently. Designed for scalability and smooth UX.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      github: "https://github.com/kessia09/the-yot",
      live: "https://theyot.vercel.app"
    },
    {
      title: "Assignment Platform",
      desc: "Student submission system.",
      details: "A platform where students submit assignments and instructors review them. Includes authentication, file uploads, and grading features.",
      img: "/images/submission.jpg",
      github: "https://github.com/Kessia09/OnlineSubmissionSystem"
    },
    {
      title: "Vita",
      desc: "Digital mental health platform.",
      details: "Vita is a mental wellness platform offering journaling, mood tracking, and AI-driven insights to improve emotional well-being.",
      img: `/images/vita.jpg`,
      github: "https://github.com/kessia09/vita",
      live: "https://vita-blush.vercel.app/"
    },
  ];

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-lg tracking-widest">KESSIA</h1>
        <div className="space-x-8 text-sm text-gray-400">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="grid md:grid-cols-2 min-h-[80vh]">
        <div className="relative">
          <img
            src="/images/my_image.jpg"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="flex flex-col justify-center px-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Kessia <br /> Agasaro Ndinda
          </motion.h1>

          <p className="text-gray-400 mt-6 max-w-md">
            Full-stack developer focused on building modern, scalable and visually stunning web applications.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full text-sm">
              Explore Work
            </a>
            <a href="#contact" className="border border-gray-600 px-6 py-3 rounded-full text-sm">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT + SKILLS */}
      <section id="about" className="px-10 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I'm a software developer passionate about building clean, efficient and impactful systems. I enjoy combining design and engineering to create user-centered digital experiences.
          </p>

          <h3 className="text-xl mt-8 mb-3">Skills</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>• Problem Solving & Algorithms</li>
            <li>• REST API Development</li>
            <li>• Database Design</li>
            <li>• UI/UX Design Principles</li>
            <li>• Agile Development</li>
          </ul>
        </div>

        <div className="border border-gray-800 p-6 rounded-2xl">
          <p className="text-gray-300">Tech Stack</p>
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-400">
            {["Java","Python","JavaScript","React","Spring Boot","Node.js","MySQL","Docker"].map((tech) => (
              <div key={tech}>{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-10 py-20">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveProject(project)}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img src={project.img}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"/>

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECT MODAL */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#111] p-8 rounded-2xl max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">{activeProject.title}</h2>
            <p className="text-gray-400 mb-4">{activeProject.details}</p>

            <div className="flex gap-4 mt-4">
              <a
                href={activeProject.github}
                target="_blank"
                className="bg-white text-black px-4 py-2 rounded"
              >
                GitHub
              </a>

              <a
                href={activeProject.live}
                target="_blank"
                className="border border-gray-500 px-4 py-2 rounded"
              >
                Live Demo
              </a>
            </div>

            <button
              onClick={() => setActiveProject(null)}
              className="mt-6 block border border-gray-600 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CONTACT */}
      <section id="contact" className="px-10 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-400 mb-6">Let's build something great together.</p>

        <div className="flex flex-col items-center gap-4 text-gray-300">
          <p>Email: agasarokessia@gmail.com</p>
          <p>Phone: +250 795 065 060</p>
        </div>
      </section>

      <footer className="text-center text-gray-600 py-6 text-sm">
        © {new Date().getFullYear()} Kessia
      </footer>
    </div>
  );
}
