import { Toaster } from "sonner"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Skills } from "./components/Skills/Skills"
import { Projects } from "./components/Projects/Projects"

function App() {


  return (
    <>
      <Toaster position="top-right" richColors/>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
