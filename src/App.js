import react, { useEffect } from 'react'
import ReactGA from 'react-ga'
import Header from './components/header/Header'
import About from './components/sections/About'
import Team from './components/sections/Team'
import Portfolio from './components/sections/Portfolio'
import Contact from './components/sections/Contact'

function App() {
  const GA_TRACKING_ID = 'UA-219953408-1'
  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID)
    ReactGA.pageview(window.location.pathname)
  }, [])
  return (
    <div className="App">
      <Header />
      <About />
      <Team />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App

// "build:css": "postcss src/assets/styles/index.css -o src/assets/styles/tailwind.css",
// "build:watch": "postcss src/assets/styles/index.css -o src/assets/styles/tailwind.css --watch"
