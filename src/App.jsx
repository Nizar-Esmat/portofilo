import './App.css'
import About from './compnents/About'
import Contact from './compnents/Contact'
import Experince from './compnents/Experince'
import Hero from './compnents/Hero'
import Navbar from './compnents/Navbar'
import Projects from './compnents/Projects'
import Technologies from './compnents/Technologies'

function App() {

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      {/* Background Layer */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>    

      {/* Main Content */}
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Experince/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
