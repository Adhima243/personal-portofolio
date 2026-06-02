import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import heroImg from '../../assets/Profile.jpeg'
import Card from '../ui/Card'
import Button from '../ui/Button'
import GlowBackground from '../ui/GlowBackground'

const roles = ['Frontend Website Developer', 'UI Enthusiast', 'Creative Thinker']

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2400)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="section-wrap pt-28 sm:pt-32">
      <GlowBackground />
      <div className="container-wide relative z-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <Card className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60 sm:right-6 sm:top-6">
              Open for Work
            </div>
            <div className="flex flex-col items-start gap-6">
              <div className="relative">
                <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-violet-500/40 via-fuchsia-500/40 to-indigo-500/40 blur-2xl" />
                <img
                  src={heroImg}
                  alt="Fauzan portrait"
                  className="relative h-40 w-40 rounded-[32px] object-cover sm:h-48 sm:w-48"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/50">Ahmad Fauzan</p>
                <h1 className="mt-3 text-3xl font-semibold">Frontend Developer</h1>
                <p className="mt-2 text-white/60">Bali, Indonesia</p>
              </div>
              <div className="grid w-full gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <div className="flex items-center justify-between">
                  <span>Focus</span>
                  <span className="text-white">React & UI Design</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Status</span>
                  <span className="text-white">Available for Projects</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-white/70">
                {[
                  { icon: Github, href: 'https://github.com/Adhima243' },
                  { icon: Whatsapp, href: 'https://wa.me/6281237149464' },
                  { icon: Instagram, href: 'https://instagram.com/_jannn.__' },
                  { icon: Mail, href: 'mailto:cahyoashofar@gmail.com' },
                ].map((item, index) => (
                  <a
                    key={`${item.href}-${index}`}
                    href={item.href}
                    className="rounded-full border border-white/10 p-3 transition-all hover:border-white/40 hover:text-white"
                  >
                    <item.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Card>

          <div className="relative mt-6 flex flex-wrap gap-2 sm:absolute sm:-bottom-8 sm:left-10">
            {['React.js', 'Tailwind', 'UI Design', 'Open to Work'].map((badge) => (
              <span key={badge} className="badge">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="flex flex-col justify-center gap-8"
        >
          <p className="section-title">Digital Identity Portfolio</p>
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
              Crafting <span className="text-gradient">modern</span> and elegant
              digital experiences.
            </h2>
            <p className="text-white/60 max-w-xl">
              I build responsive websites and modern interfaces with focus on
              performance, interaction, and clean design.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-white/80">
            <span className="text-lg font-semibold">{roles[roleIndex]}</span>
            <span className="typing-caret" aria-hidden="true" />
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="#projects" className="w-full sm:w-auto">
              View Projects
            </Button>
            <Button href="#contact" variant="ghost" className="w-full sm:w-auto">
              Download CV
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 pt-6 text-sm text-white/60 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold text-white">10+</p>
              <p>Projects built</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">2+ Years</p>
              <p>Learning journey</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">Frontend</p>
              <p>Focused craft</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
