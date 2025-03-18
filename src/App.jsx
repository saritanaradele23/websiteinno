import Home from './pages/company/Home'
import { Routes, Route } from 'react-router-dom'
import Blogs from './pages/resources/Blogs'
import Case_Studies from './pages/resources/Case_Studies'
import Videos from './pages/resources/Videos'

import White_papers from './pages/resources/White_papers'
import AboutUs from './pages/company/AboutUs'
import Careers from './pages/company/Careers'
import Events from './pages/company/Events'
import News from './pages/company/News'
import Security from './pages/company/Security'
import ApplicationForm from './pages/company/ApplicationForm'
import ApplicationSuccess from './pages/company/ApplicationSuccess'
import BlogDetails from './pages/resources/BlogDetails'
import EventDetail1 from './pages/company/EventDetail1'
import EventDetail2 from './pages/company/EventDetail2'
import EventDetail3 from './pages/company/EventDetail3'
import Admin from './pages/admin/Admin'
import Data_DeepInsights from './pages/services/Data_DeepInsights'
import AI_GenWorks from './pages/services/AI_GenWorks'
import AI_CyberShield from './pages/services/AI_CyberShield'
import CaseStudyDetail from './pages/resources/CaseStudyDetail'
import Contact from './pages/company/Contact'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Careers" element={<Careers/>}/>
      <Route path="/Events" element={<Events/>}/>
      <Route path="/News" element={<News/>}/>
      <Route path="/Security" element={<Security/>}/>
      {/* <Route path="/AI_Knowledge" element={<AI_Knowledge/>}/>
      <Route path="/AI_ML" element={<AI_ML/>}/>
      <Route path="/Next_Gen" element={<Next_Gen/>}/> */}
      <Route path="/Blogs" element={<Blogs/>}/>
      <Route path="/Case_Studies" element={<Case_Studies/>}/>
      <Route path="/case-study/:id" element={<CaseStudyDetail />} />

      <Route path="/Videos" element={<Videos/>}/>
      
      <Route path="/White_papers" element={<White_papers/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/apply/:jobId" element={<ApplicationForm />} />
      <Route path="/application-success" element={<ApplicationSuccess/>} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/event1" element={<EventDetail1 />} />
      <Route path="/event2" element={<EventDetail2 />} />
      <Route path="/event3" element={<EventDetail3 />} />

      <Route path="/Data_DeepInsights" element={<Data_DeepInsights/>} />
      <Route path="/AI_GenWorks" element={<AI_GenWorks/>} />
      <Route path="/AI_CyberShield" element={<AI_CyberShield/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
  )
}

export default App;