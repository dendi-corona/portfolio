"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Network, Brain, Code, Mail, SquareArrowOutUpRight, User, ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const skills = [
  { name: "System Administration", icon: Terminal, level: 95, color: "#00f0ff" },
  { name: "Network Infrastructure", icon: Network, level: 90, color: "#7b2cbf" },
  { name: "Cloud & DevOps", icon: Cpu, level: 85, color: "#f72585" },
  { name: "AI / Machine Learning", icon: Brain, level: 70, color: "#00ff88" },
  { name: "Scripting & Automation", icon: Code, level: 88, color: "#ffaa00" },
];

const projects = [
  {
    title: "AI-Powered Monitoring System",
    description: "Automated infrastructure monitoring with ML-based anomaly detection",
    tags: ["Python", "TensorFlow", "Prometheus", "Grafana"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Cloud Migration Framework",
    description: "Zero-downtime migration strategy for enterprise workloads",
    tags: ["AWS", "Terraform", "Kubernetes", "CI/CD"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Network Security Dashboard",
    description: "Real-time threat detection and visualization platform",
    tags: ["React", "Node.js", "Elasticsearch", "Security"],
    gradient: "from-orange-500 to-red-500"
  }
];

const experiences = [
  {
    role: "IT System Administrator",
    company: "Current Company",
    period: "2022 - Present",
    description: "Managing enterprise infrastructure, automation, and security"
  },
  {
    role: "AI & ML Enthusiast",
    company: "Self-Learning Journey",
    period: "2024 - Present",
    description: "Deep diving into neural networks, LLMs, and practical AI applications"
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main className="animated-gradient min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            DV
          </motion.div>
          <div className="flex gap-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white/70 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              👋 Welcome to my digital space
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I&apos;m <span className="gradient-text">Duy Vo</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/70 mb-8"
          >
            IT System Administrator | AI Enthusiast | Problem Solver
          </motion.p>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-white/50 mb-12 max-w-2xl mx-auto"
          >
            Building robust infrastructure today while mastering the AI technologies of tomorrow. 
            Passionate about automation, security, and making complex systems simple.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
            <a 
              href="#projects"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold hover:opacity-90 transition-opacity glow"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 rounded-lg border border-white/30 font-semibold hover:bg-white/10 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white/50 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-white/70 leading-relaxed">
                I&apos;m an experienced <strong className="text-cyan-400">IT System Administrator</strong> with a passion for 
                building and maintaining reliable, scalable infrastructure. My day-to-day involves everything from 
                network architecture to cloud deployments.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Currently, I&apos;m diving deep into <strong className="text-purple-400">Artificial Intelligence</strong> and 
                Machine Learning, exploring how AI can revolutionize IT operations, automate complex tasks, 
                and enhance system intelligence.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                When I&apos;m not managing systems or training models, you&apos;ll find me experimenting with new 
                technologies, contributing to open source, or sharing knowledge with the community.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 p-8 glow">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Terminal className="w-24 h-24 mx-auto mb-4 text-cyan-400" />
                    <p className="text-2xl font-bold gradient-text">IT + AI</p>
                    <p className="text-white/50 mt-2">The Perfect Combination</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-hover p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon className="w-10 h-10" style={{ color: skill.color }} />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <p className="text-right text-sm text-white/50 mt-2">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-hover group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Experience
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-cyan-500/50"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-cyan-500 -translate-x-1/2" />
                <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
                <p className="text-white/70">{exp.company}</p>
                <p className="text-sm text-white/50 mb-2">{exp.period}</p>
                <p className="text-white/70">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            Let&apos;s <span className="gradient-text">Connect</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-white/70 mb-12"
          >
            Interested in collaboration or just want to chat about tech? 
            Feel free to reach out!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <a 
              href="mailto:your.email@example.com"
              className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-cyan-500/20 hover:border-cyan-500 transition-all card-hover"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-purple-500/20 hover:border-purple-500 transition-all card-hover"
            >
              <SquareArrowOutUpRight className="w-8 h-8" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-blue-500/20 hover:border-blue-500 transition-all card-hover"
            >
              <User className="w-8 h-8" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-white/50">
          <p>© 2024 Duy Vo. Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
