import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import TechStack from '../components/sections/TechStack'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Services from '../components/sections/Services'
import Contact from '../components/sections/Contact'

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
