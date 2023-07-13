import "./App.css"
import "./index.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navigation, Section, Welcome, Footer} from './components';

const App = () => {

  return (
    <div class="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navigation />
        <Welcome />
      </div>
      <Section />
      <div class="options">
        <button className="btn btn-red">Enter as a Buyer</button>
      </div>
      <div class="options">
        <button className="btn btn-blue">Enter as a Creator</button>
      </div>
      <div class="options">
        <button className="btn btn-green">Enter as an Auditor</button>
      </div>
      <Footer />
    </div>
  )
}

export default App
