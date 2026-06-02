import { motion } from 'framer-motion'
import Card from '../ui/Card'
import SectionTitle from '../ui/SectionTitle'

const About = () => {
  return (
    <section id="about" className="section-wrap">
      <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <SectionTitle
            label="About"
            title="Developer and designer who cares about the details."
            subtitle="I focus on building premium interfaces that feel smooth, modern, and intentional. My goal is to craft experiences that reflect strong personal branding and visual clarity."
          />
          <div className="flex flex-wrap gap-3">
            {['React', 'Tailwind', 'Framer Motion', 'Figma'].map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <div className="space-y-6 text-sm text-white/60">
              <p>
                Currently focused on building digital products with cinematic
                scrolling, subtle motion, and strong typography. I love combining
                engineering with visual storytelling.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-2xl font-semibold text-white">10+</p>
                  <p>Projects shipped</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">3 Years</p>
                  <p>Design exploration</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">Open</p>
                  <p>for collaborations</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">Remote</p>
                  <p>and hybrid work</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About
