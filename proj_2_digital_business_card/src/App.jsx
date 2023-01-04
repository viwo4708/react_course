import { useState } from 'react'
import reactLogo from './assets/react.svg'
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx"
import Info from "./components/Info.jsx"
import Interests from "./components/Interests.jsx"
import headshot from "./assets/headshot.jpeg"
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <img src={headshot} className="headshot"></img>
      <div className='body-container'>
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  )
}

export default App
