'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Cpu, Database, Zap } from 'lucide-react'

const skills = [
  {
    category: 'Programming',
    items: ['Python', 'C++', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'AI/ML Libraries',
    items: ['LangChain', 'PyTorch', 'TensorFlow', 'Transformers', 'Autogen', 'FastAPI'],
    icon: Cpu,
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Databases & Cloud',
    items: ['MongoDB', 'MySQL', 'ElasticSearch', 'AWS', 'Google Cloud', 'Docker'],
    icon: Database,
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Kubernetes', 'Ansible', 'Linux', 'Tableau', 'Postman'],
    icon: Zap,
    color: 'from-orange-500 to-red-500'
  }
]

export default function About() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent"></div>
      
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about leveraging AI and cutting-edge technologies to solve complex problems 
            and create innovative solutions that make a meaningful impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Currently serving as a <strong className="text-blue-400">Senior Research & Development Engineer at Synopsys</strong>, 
                I specialize in full-stack RTL Assistant integration and AI workflow orchestration. 
                My work involves engineering backend, frontend, and AI workflows for generative RTL-based chatbots.
              </p>
              <p>
                With a <strong className="text-purple-400">Master's in Big Data Analytics</strong> from VIT (CGPA: 9.31) 
                and extensive experience at Intel Corporation and Cimba AI, I've developed expertise in 
                generative AI, LLM evaluation pipelines, and scalable microservices architecture.
              </p>
              <p>
                My projects have achieved remarkable results, including <strong className="text-green-400">90% time reduction</strong> in 
                customer tasks and <strong className="text-green-400">50% cost savings</strong> through AI-driven solutions. 
                I was recognized as a top 10 finalist out of 130+ entries in Intel's "Applying AI in DCAI" competition.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Education & Achievements</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-400">Master of Technology - Big Data Analytics</h4>
                  <p className="text-gray-300">Vellore Institute of Technology (2024)</p>
                  <p className="text-green-400 font-semibold">CGPA: 9.31</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-purple-400">Diploma - AI & Machine Learning</h4>
                  <p className="text-gray-300">University of Hyderabad (2022)</p>
                  <p className="text-green-400 font-semibold">CGPA: 7.1</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-3">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}