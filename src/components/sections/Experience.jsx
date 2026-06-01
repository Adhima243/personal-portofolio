import { motion } from 'framer-motion'
import { experience } from '../../data/experience'
import SectionTitle from '../ui/SectionTitle'

const Experience = () => {
  return (
    <section id="experience" className="section-wrap">
      <div className="container-wide space-y-10">
        <SectionTitle
          label="Journey"
          title="A timeline of growth and experience."
          subtitle="Milestones that shaped my focus on premium interface craft."
        />
        <div className="space-y-6 border-l border-white/10 pl-6">
          {experience.map((item) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute -left-8 top-2 h-3 w-3 rounded-full bg-violet-500 shadow-glow" />
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                {item.year}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/60">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
