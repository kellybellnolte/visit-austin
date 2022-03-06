import Header from './layout/Header'
import Footer from './layout/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import HelpfulInfo from '../pages/HelpfulInfo'
import ThingsToDo from '../pages/ThingsToDo'
import Home from '../pages/Home'
import Appbar from '../components/Appbar/Appbar'
import Topic from '../pages/Topic'
import { CssBaseline } from '@mui/material';




function App() {
  return (
    <Router>
    <div className="App">
      <CssBaseline/>
      <Header />
      <Appbar/>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/helpful-info" element={<HelpfulInfo />} />
          <Route path=":infoId" element={<Topic/>}/>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  )
}


export const NotFound = () => {
  return <div>This is a 404 page</div>
}

export default App

