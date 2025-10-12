'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Globe, Zap, Database, Brain } from 'lucide-react'

const projects = [
  {
    title: "AI Catalog",
    description: "A personalized generative AI chatbot experience tailored to users' specific needs. Leverages microservices architecture for flexibility and scalability.",
    technologies: ["React", "Node.js", "AI/ML", "Microservices", "Google Cloud"],
    liveLink: "https://ai-catalog-sancheet-jseg7i727q-el.a.run.app",
    githubLink: "#",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-900/20 to-pink-900/20"
  },
  {
    title: "Movie Recommendation System",
    description: "Intelligent recommendation system based on TMDB dataset that suggests five personalized movies based on user preferences and viewing history.",
    technologies: ["Python", "Machine Learning", "TMDB API", "Flask", "Data Science"],
    liveLink: "https://movie-rs-sancheet-jseg7i727q-el.a.run.app",
    githubLink: "#",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-900/20 to-cyan-900/20"
  },
  {
    title: "Car Price Prediction",
    description: "Advanced machine learning model to predict used Indian car prices with high accuracy. Features comprehensive data analysis and predictive modeling.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Heroku", "Machine Learning"],
    liveLink: "https://car-sancheet.herokuapp.com",
    githubLink: "#",
    icon: Zap,
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-900/20 to-emerald-900/20"
  }
]

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions combining AI, machine learning, and modern web technologies 
            to solve real-world problems and create meaningful user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, rotateX: 5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100`}></div>
              
              <div className="relative glass rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300">
                {/* Project Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-slate-700/50 text-blue-400 rounded-full border border-blue-500/20 hover:border-blue-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 mt-auto">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <Globe size={16} />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg font-medium hover:border-gray-500 hover:text-white transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/sancheet48"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border border-gray-600 hover:border-gray-500"
          >
            <Github size={24} />
            View More Projects on GitHub
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}