"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, Server, Cloud, Brain, Code2, Mail, Github, Linkedin, ExternalLink, ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

// Skills data
const skills = [
  { category: "Infrastructure", items: ["Windows/Linux Server", "Active Directory", "VMware/Hyper-V", "PowerShell/Bash"] },
  { category: "Networking", items: ["Cisco/Juniper", "Firewalls (pfSense, ASA)", "VLANs/Subnetting", "Load Balancers"] },
  { category: "Cloud & DevOps", items: ["AWS/Azure", "Docker/Kubernetes", "Terraform", "CI/CD Pipelines"] },
  { category: "AI & Automation", items: ["Python", "TensorFlow/PyTorch", "LLM Fine-tuning", "ML Ops"] },
];

const projects = [
  {
    title: "AI Infrastructure Monitoring",
    description: "Machine learning system for predictive infrastructure monitoring. Detects anomalies 48h before failure.",
    tech: ["Python", "TensorFlow", "Prometheus", "Grafana"],
    link: "#",
    image: "gradient-1"
  },
  {
    title: "Cloud Migration Framework",
    description: "Automated framework for zero-downtime migration of 200+ enterprise VMs to AWS.",
    tech: ["AWS", "Terraform", "Python", "Ansible"],
    link: "#",
    image: "gradient-2"
  },
  {
    title: "Security Operations Dashboard",
    description: "Real-time security monitoring with automated incident response and threat intelligence.",
    tech: ["React", "Elasticsearch", "Python", "SIEM"],
    link: "#",
    image: "gradient-3"
  }
];

const experiences = [
  {
    role: "Senior IT System Administrator",
    company: "Enterprise Corporation",
    period: "2022 — Present",
    description: "Leading infrastructure operations for 500+ servers and 2000+ users across multiple data centers.",
    achievements: [
      "Achieved 99.99% uptime across all critical systems",
      "Reduced manual operations by 60% through automation",
      "Led cloud migration saving $200K annually"
    ]
  },
  {
    role: "IT Administrator",
    company: "Tech Company",
    period: "2019 — 2022",
    description: "Managed day-to-day IT operations, network infrastructure, and security compliance.",
    achievements: [
      "Implemented company-wide security hardening",
      "Deployed automated backup and DR solution",
      "Reduced helpdesk tickets by 40%"
    ]
  }
];

// Components
function NavBar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-lg font-bold tracking-tight">DV</a>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="text-white/60 hover:text-white transition-colors">About</a>
          <a href="#skills" className="text-white/60 hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-white/60 hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="text-white/60 hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div style={{ y, opacity }} className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-white/50 mb-4 uppercase tracking-widest">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Duy Vo
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-8 font-light">
            IT System Administrator <span className="text-white/30 mx-3">•</span> AI Enthusiast
          </p>
          <p className="text-lg text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building resilient infrastructure and exploring the intersection of IT operations and artificial intelligence.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#projects"
              className="px-6 py-3 bg-white text-black font-medium hover:bg-white/90 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="px-6 py-3 border border-white/20 font-medium hover:bg-white/5 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-white/30 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                I'm an experienced IT System Administrator with a passion for building 
                reliable, scalable infrastructure that powers modern businesses.
              </p>
              <p>
                Currently, I'm diving deep into Artificial Intelligence and Machine Learning, 
                exploring how AI can transform IT operations through predictive maintenance, 
                intelligent automation, and self-healing systems.
              </p>
              <p>
                When I'm not managing infrastructure or training models, you'll find me 
                experimenting with new technologies, contributing to open source, or 
                sharing knowledge with the community.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Facts</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-white/40">Servers Managed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">99.99%</div>
                <div className="text-sm text-white/40">Uptime Achieved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">60%</div>
                <div className="text-sm text-white/40">Automation Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-sm text-white/40">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="p-6 border border-white/10 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-white/30" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className={`h-48 rounded-lg bg-gradient-to-br ${
                  project.image === "gradient-1" ? "from-cyan-500/20 to-blue-500/20" :
                  project.image === "gradient-2" ? "from-purple-500/20 to-pink-500/20" :
                  "from-orange-500/20 to-red-500/20"
                } border border-white/10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l border-white/10"
            >
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-white/30 -translate-x-1/2" />
              
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-sm text-white/40">{exp.period}</span>
              </div>
              
              <p className="text-white/60 mb-4">{exp.company}</p>
              <p className="text-white/50 mb-4 leading-relaxed">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3 text-white/50 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-white/60 mb-12 leading-relaxed">
          Interested in collaboration or just want to discuss technology? 
          Feel free to reach out. I'm always open to interesting conversations.
        </p>
        
        <div className="flex justify-center gap-6">
          <a 
            href="mailto:your.email@example.com"
            className="p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/dendi-corona"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <p>© 2024 Duy Vo</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
