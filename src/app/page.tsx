"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, Cpu, Network, Brain, Code, Mail, SquareArrowOutUpRight, User, ChevronDown, Sparkles, Zap, Shield, Cloud } from "lucide-react";
import { useState, useEffect } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const skills = [
  { name: "System Administration", icon: Terminal, level: 95, color: "#00d4ff", desc: "Windows, Linux, Active Directory" },
  { name: "Network Infrastructure", icon: Network, level: 90, color: "#7b2cbf", desc: "Cisco, Firewalls, VLANs" },
  { name: "Cloud & DevOps", icon: Cloud, level: 85, color: "#f72585", desc: "AWS, Azure, Docker, K8s" },
  { name: "AI / Machine Learning", icon: Brain, level: 70, color: "#00ff88", desc: "Python, TensorFlow, LLMs" },
  { name: "Automation", icon: Zap, level: 88, color: "#ffaa00", desc: "PowerShell, Python, Bash" },
  { name: "Security", icon: Shield, level: 82, color: "#ff4757", desc: "Hardening, Monitoring, Compliance" },
];

const projects = [
  {
    title: "AI-Powered Infrastructure Monitoring",
    description: "Predictive anomaly detection system using ML algorithms to identify infrastructure issues before they occur. Reduced downtime by 73%.",
    tags: ["Python", "TensorFlow", "Prometheus", "Grafana", "Elasticsearch"],
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    metric: "73% ↓ Downtime"
  },
  {
    title: "Zero-Downtime Cloud Migration",
    description: "Architected and executed seamless migration of 200+ VMs to AWS with automated rollback and real-time monitoring.",
    tags: ["AWS", "Terraform", "Kubernetes", "CI/CD", "Ansible"],
    gradient: "from-purple-500 via-pink-500 to-red-500",
    metric: "200+ VMs Migrated"
  },
  {
    title: "Intelligent Security Dashboard",
    description: "Real-time threat detection platform with AI-powered log analysis and automated incident response workflows.",
    tags: ["React", "Node.js", "SIEM", "Python", "Security"],
    gradient: "from-orange-500 via-red-500 to-pink-500",
    metric: "99.9% Threat Detection"
  },
  {
    title: "Automated Backup & DR System",
    description: "Enterprise backup solution with intelligent scheduling, compression, and one-click disaster recovery.",
    tags: ["PowerShell", "Python", "AWS S3", "Automation"],
    gradient: "from-green-500 via-teal-500 to-cyan-500",
    metric: "100% Recovery Rate"
  }
];

const experiences = [
  {
    role: "IT System Administrator",
    company: "Enterprise Environment",
    period: "2022 - Present",
    description: "Managing 500+ servers, 2000+ users, and critical infrastructure. Implemented automation reducing manual work by 60%.",
    achievements: ["99.99% uptime", "60% automation", "500+ servers"]
  },
  {
    role: "AI & ML Practitioner",
    company: "Self-Directed Learning",
    period: "2024 - Present",
    description: "Deep dive into neural networks, LLMs, and practical AI applications for IT operations.",
    achievements: ["10+ projects", "TensorFlow certified", "LLM fine-tuning"]
  }
];

// Animated background component
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}

// Floating particles
function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="bg-[#030712] min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      <Particles />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            DV
          </motion.div>
          <div className="hidden md:flex gap-8">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/60 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-white/80">Welcome to my digital universe</span>
            </motion.div>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
          >
            <span className="block">I&apos;m</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Duy Vo
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/60 mb-4 font-light"
          >
            IT System Administrator <span className="text-white/30 mx-4">•</span> AI Enthusiast
          </motion.p>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building bulletproof infrastructure by day, exploring the frontiers of AI by night. 
            Where systems meet intelligence.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
            <motion.a 
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>
            <motion.a 
              href="#contact"
              className="px-8 py-4 rounded-xl border border-white/20 font-semibold hover:bg-white/5 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Talk
            </motion.a>
          </motion.div>

          <motion.div 
            style={{ y, opacity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white/40 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl font-black text-center mb-20"
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div className="relative pl-8 border-l-2 border-cyan-500/50">
                <p className="text-xl text-white/70 leading-relaxed">
                  I&apos;m an experienced <strong className="text-cyan-400">IT System Administrator</strong> who lives 
                  at the intersection of <strong className="text-purple-400">infrastructure</strong> and <strong className="text-pink-400">intelligence</strong>.
                </p>
              </div>
              
              <p className="text-lg text-white/60 leading-relaxed">
                My day involves architecting resilient systems, automating complex workflows, and ensuring 
                99.99% uptime for critical infrastructure. I speak fluent PowerShell, Python, and panic-free 
                incident response.
              </p>
              
              <p className="text-lg text-white/60 leading-relaxed">
                But here&apos;s the twist: I&apos;m currently diving deep into <strong className="text-pink-400">AI and Machine Learning</strong>, 
                exploring how neural networks can revolutionize IT operations. Think predictive maintenance, 
                intelligent automation, and systems that learn from themselves.
              </p>
              
              <div className="flex gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-black text-cyan-400">500+</div>
                  <div className="text-sm text-white/40">Servers Managed</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-400">99.99%</div>
                  <div className="text-sm text-white/40">Uptime</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-black text-pink-400">60%</div>
                  <div className="text-sm text-white/40">Automation</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 p-1 backdrop-blur-sm">
                <div className="h-full rounded-3xl bg-black/40 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-3xl" />
                  <div className="text-center relative z-10">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Terminal className="w-32 h-32 mx-auto mb-6 text-cyan-400" />
                    </motion.div>
                    <p className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      IT + AI
                    </p>
                    <p className="text-white/40 mt-2 text-sm">The Future of Infrastructure</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl font-black text-center mb-20"
          >
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${skill.color}15, transparent 70%)`
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="p-3 rounded-xl bg-white/5"
                    >
                      <skill.icon className="w-8 h-8" style={{ color: skill.color }} />
                    </motion.div>
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                  </div>
                  
                  <p className="text-white/40 text-sm mb-4">{skill.desc}</p>
                  
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-white/30">Proficiency</span>
                    <span className="text-sm font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl font-black text-center mb-8"
          >
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/50 mb-20 max-w-2xl mx-auto"
          >
            Real-world solutions that bridge traditional IT infrastructure with cutting-edge AI capabilities
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -12 }}
                className="group relative rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden backdrop-blur-sm"
              >
                {/* Gradient top border */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-8">
                  {/* Metric badge */}
                  <motion.div 
                    className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {project.metric}
                    </span>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1.5 text-xs rounded-lg bg-white/5 border border-white/10 text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, rgba(0,212,255,0.1), transparent 70%)`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl font-black text-center mb-20"
          >
            Experience
          </motion.h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent" />
                
                <div className="ml-8 pl-8 relative">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-cyan-500 -translate-x-1/2 shadow-lg shadow-cyan-500/50" />
                  
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/50">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-lg text-white/70 mb-3">{exp.company}</p>
                  <p className="text-white/50 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.achievements.map((achievement) => (
                      <motion.div
                        key={achievement}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-sm font-medium text-white/80">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl font-black mb-8"
          >
            Let&apos;s <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
          >
            Whether you want to discuss infrastructure architecture, AI applications in IT, 
            or just share tech war stories — I&apos;m always open to great conversations.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <motion.a 
              href="mailto:your.email@example.com"
              className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-7 h-7 text-white/70 group-hover:text-cyan-400 transition-colors" />
            </motion.a>
            <motion.a 
              href="https://github.com/dendi-corona"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <SquareArrowOutUpRight className="w-7 h-7 text-white/70 group-hover:text-purple-400 transition-colors" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-pink-500/20 hover:border-pink-500/50 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="w-7 h-7 text-white/70 group-hover:text-pink-400 transition-colors" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Duy Vo. Crafted with Next.js, Tailwind & Framer Motion
          </p>
          <motion.p 
            className="text-white/30 text-sm"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Built for the future of IT
          </motion.p>
        </div>
      </footer>
    </main>
  );
}
