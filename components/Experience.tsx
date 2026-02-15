'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Calendar, Award, TrendingUp } from 'lucide-react'

const experiences = [
  {
    company: "Synopsys",
    position: "Senior Research and Development Engineer",
    location: "Bengaluru",
    period: "January 2025 – Present",
    achievements: [
      "Full stack RTL Assistant Integration: Engineered and integrated backend, frontend, and AI workflows for the RTL Assistant, a generative RTL-based chatbot, ensuring robust and scalable functionality",
      "Orchestrated a major migration of RTL Assistant: Upgrading from legacy system to modern platform with advanced capabilities such as agentic workflows, in-chat editing, and MCP",
      "Delivered tailored customer enhancements, expanding the chatbot's utility and meeting specific client requirements"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    company: "Cimba AI",
    position: "AI Engineer",
    location: "Kolkata",
    period: "September 2024 – December 2024",
    achievements: [
      "Improved AI workflow efficiency: Spearheaded development of end-to-end generative AI power prediction service workflow, achieving 30% improvement in accuracy",
      "Implemented end-to-end LLM based evaluation testing pipeline for agentic workflows, leading to 70% increase in reliability",
      "Designed and developed comprehensive testing frameworks for detecting early failure rates in LLM agents"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    company: "Intel Corporation",
    position: "Software Engineer",
    location: "Bengaluru",
    period: "August 2023 – August 2024",
    achievements: [
      "Achieved Top Recognition: Developed end-to-end generative AI system for inventory management and wiki chatbots, helping customers reduce task time by 90% and achieve 50% cost savings",
      "Recognized by Intel Leadership: Project garnered recognition from VP and GM of Intel's DCAI group, highlighting innovation potential",
      "Benchmarked LLM optimization on Intel Hardware: Evaluated inference and fine-tuning performance on Intel Xeon AI cluster nodes",
      "EVF Console Development: Led end-to-end development of 4 out of 10 Python-based microservices powering data-center management console"
    ],
    color: "from-green-500 to-emerald-500"
  }
]

export default function Experience() {
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
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
      
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
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey through innovative AI projects, scalable solutions, and recognized achievements 
            in the technology industry.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-white rounded-full border-4 border-gray-800 hidden md:block" style={{ top: '1.5rem' }}></div>
                
                <div className="md:ml-20">
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 2 }}
                    className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${exp.color} flex items-center justify-center`}>
                            <Building2 className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                        </div>
                        <h4 className="text-xl text-blue-400 font-semibold mb-2">{exp.position}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                          transition={{ delay: 0.1 * achievementIndex }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                          <p className="text-gray-300 leading-relaxed">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Key metrics for Intel experience */}
                    {exp.company === "Intel Corporation" && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 pt-6 border-t border-gray-700"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <TrendingUp className="w-5 h-5 text-green-400" />
                              <span className="text-2xl font-bold text-green-400">90%</span>
                            </div>
                            <p className="text-gray-400 text-sm">Time Reduction</p>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <TrendingUp className="w-5 h-5 text-blue-400" />
                              <span className="text-2xl font-bold text-blue-400">50%</span>
                            </div>
                            <p className="text-gray-400 text-sm">Cost Savings</p>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <Award className="w-5 h-5 text-yellow-400" />
                              <span className="text-2xl font-bold text-yellow-400">Top 10</span>
                            </div>
                            <p className="text-gray-400 text-sm">Out of 130+</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Key metrics for Cimba AI */}
                    {exp.company === "Cimba AI" && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 pt-6 border-t border-gray-700"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <TrendingUp className="w-5 h-5 text-green-400" />
                              <span className="text-2xl font-bold text-green-400">30%</span>
                            </div>
                            <p className="text-gray-400 text-sm">Accuracy Improvement</p>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <TrendingUp className="w-5 h-5 text-purple-400" />
                              <span className="text-2xl font-bold text-purple-400">70%</span>
                            </div>
                            <p className="text-gray-400 text-sm">Reliability Increase</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}