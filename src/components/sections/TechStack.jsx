import { motion } from 'framer-motion'
import {
  Atom,
  Wind,
  Braces,
  Database,
  Figma,
  GitBranch,
  Code2,
} from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const stack = [
  { name: 'React', icon: Atom },
  { name: 'Tailwind', icon: Wind },
  { name: 'JavaScript', icon: Braces },
  { name: 'PHP', icon: Code2 },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Figma', icon: Figma },
  { name: 'Git', icon: GitBranch },
  { name: 'MySQL', icon: Database },
]

const TechStack = () => {
  return (
    <section id="stack" className="section-wrap">
      <div className="container-wide space-y-10">
        <SectionTitle
          label="Tech Stack"
          title="Tools I use to build premium interfaces."
          subtitle="A focused stack that supports modern UI, strong performance, and clean developer experience."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {stack.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="stack-item group"
            >
              <item.icon size={28} className="text-white/70" />
              <p className="text-sm text-white/70 group-hover:text-white">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
