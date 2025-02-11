import Home from './pages/company/Home'
import { Routes, Route } from 'react-router-dom'
import AI_Knoweledge from './pages/platforms/AI_Knoweledge'
import AI_ML from './pages/platforms/AI_ML'
import Next_Gen from './pages/platforms/Next_Gen'
import Blogs from './pages/resources/Blogs'
import Case_Studies from './pages/resources/Case_Studies'
import Videos from './pages/resources/Videos'
import Webinars from './pages/resources/Webinars'
import White_papers from './pages/resources/White_papers'
import AboutUs from './pages/company/AboutUs'
import Carrers from './pages/company/Carrers'
import Events from './pages/company/Events'
import News from './pages/company/News'
import Security from './pages/company/Security'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Carrers" element={<Carrers/>}/>
      <Route path="/Events" element={<Events/>}/>
      <Route path="/News" element={<News/>}/>
      <Route path="/Security" element={<Security/>}/>
      <Route path="/AI_Knoweledge" element={<AI_Knoweledge/>}/>
      <Route path="/AI_ML" element={<AI_ML/>}/>
      <Route path="/Next_Gen" element={<Next_Gen/>}/>
      <Route path="/Blogs" element={<Blogs/>}/>
      <Route path="/Case_Studies" element={<Case_Studies/>}/>
      <Route path="/Videos" element={<Videos/>}/>
      <Route path="/Webinars" element={<Webinars/>}/>
      <Route path="/White_papers" element={<White_papers/>}/>
    </Routes>
  )
}

export default App