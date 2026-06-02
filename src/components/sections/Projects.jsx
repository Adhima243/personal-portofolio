import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import { projects } from '../../data/projects'
import Card from '../ui/Card'
import SectionTitle from '../ui/SectionTitle'

const themeMap = {
  indigo: 'from-indigo-500/20 via-indigo-400/10 to-transparent',
  violet: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
  fuchsia: 'from-fuchsia-500/20 via-pink-500/10 to-transparent',
  blue: 'from-sky-500/20 via-indigo-500/10 to-transparent',
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="section-wrap">
      <div className="container-wide space-y-10">
        <SectionTitle
          label="Featured Projects"
          title="Selected work with a premium, modern finish."
          subtitle="Bento-style layout to showcase a mix of web apps, dashboards, and interface explorations."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isLarge = project.size === 'xl'
            const isWide = project.size === 'lg'
            return (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${
                  isLarge ? 'lg:col-span-2' : ''
                } ${isWide ? 'lg:col-span-2' : ''}`}
              >
                <Card className="group relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:border-white/30">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      themeMap[project.theme] || themeMap.indigo
                    }`}
                  />
                  <div className="relative z-10 flex flex-1 flex-col gap-6">
                    <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-white/10 sm:h-48">
                      {project.img ? (
                        <img
                          src={project.img}
                          alt={`${project.title} preview`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-sm uppercase tracking-[0.3em]">
                          Preview
                        </span>
                      )}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      <p className="text-sm text-white/60">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap items-center gap-4 text-sm text-white/70">
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-all hover:border-white/40 hover:text-white"
                      >
                        View Detail
                      </button>
                      <a
                        href={project.links?.demo || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 hover:text-white"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.links?.github || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 hover:text-white"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 py-8 sm:items-center sm:px-6 sm:py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-[#111111] p-6 text-white shadow-soft sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {activeProject.year} · {activeProject.role}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-white/40 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
              {activeProject.img ? (
                <div className="mt-6 max-h-64 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src={activeProject.img}
                    alt={`${activeProject.title} preview`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : null}
              <p className="mt-6 text-sm text-white/60">
                {activeProject.overview}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-3 text-sm text-white/60">
                {activeProject.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
                <a
                  href={activeProject.links?.demo || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={activeProject.links?.github || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

export default Projects
