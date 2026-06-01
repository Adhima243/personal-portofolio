import { motion } from 'framer-motion'
import { services } from '../../data/services'
import Card from '../ui/Card'
import SectionTitle from '../ui/SectionTitle'

const Services = () => {
  return (
    <section id="services" className="section-wrap">
      <div className="container-wide space-y-10">
        <SectionTitle
          label="Services"
          title="What I can help you build."
          subtitle="Premium, modern, and responsive experiences for brands and products."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-white/60">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
