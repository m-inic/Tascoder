import './App.css'
import AvailableOptions from './components/AvailableOptions'
import Deals from './components/Deals'
import Features from './components/Features'
import Intro from './components/Intro'
import Landing from './components/Landing'
import MainHeader from './components/MainHeader'
import Showcase from './components/Showcase'

function App() {
  return (
    <>
    <MainHeader></MainHeader>
    <Landing></Landing>
    <Intro></Intro>
    <Features></Features>
    <Deals></Deals>
    <Showcase></Showcase>
    <AvailableOptions></AvailableOptions>
    </>
  )
}

export default App
