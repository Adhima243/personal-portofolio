import { motion } from 'framer-motion'
import {
  SiDart,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import SectionTitle from '../ui/SectionTitle'

const stack = [
  { name: 'React', icon: SiReact },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'PHP', icon: SiPhp },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Figma', icon: SiFigma },
  { name: 'Git', icon: SiGit },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Dart', icon: SiDart },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'Python', icon: SiPython },
  { name: 'Java', icon: SiOpenjdk },
  { name: 'Node.js', icon: SiNodedotjs },
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
              <item.icon className="h-8 w-8 text-white/70 transition duration-300 group-hover:text-white" />
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
