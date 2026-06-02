import { motion } from 'framer-motion'
import Button from '../ui/Button'
import Card from '../ui/Card'
import SectionTitle from '../ui/SectionTitle'

const Contact = () => {
  return (
    <section id="contact" className="section-wrap">
      <div className="container-wide space-y-10">
        <SectionTitle
          label="Contact"
          title="Have an idea? Lets build it together."
          subtitle="Tell me about your project, and I will get back to you within 24 hours."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="space-y-4">
              <input className="input-field" placeholder="Your name" />
              <input className="input-field" placeholder="Email address" />
              <textarea
                className="input-field min-h-[140px] resize-none"
                placeholder="Tell me about your project"
              />
              <Button type="submit">Send Message</Button>
            </form>
            <div className="space-y-4 text-sm text-white/60">
              <p>
                Prefer a faster conversation? Reach me directly through these
                channels.
              </p>
              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    WhatsApp
                  </p>
                  <p className="mt-2 text-white">+62 812 3714 9464</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Email
                  </p>
                  <p className="mt-2 text-white">cahyoashofar@gmail.com</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    GitHub
                  </p>
                  <p className="mt-2 text-white">github.com/Adhima243</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
