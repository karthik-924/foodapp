import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import OnBoarding from './screens/OnBoarding'
import Login from './screens/Login'
import Register from './screens/Register'
import PostLogin from './screens/PostLogin'
import Tracking from './screens/Tracking'
import Auth from './Auth'
import ShareScreen from './screens/ShareScreen'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={
          <Register />
        } />
        <Route path="/postlogin" element={
          // <Auth>
            <PostLogin />
          // </Auth>
        } />
        <Route path='/tracking' element={
          <Auth>
            <Tracking />
          </Auth>
        } />
        <Route path='/share' element={
          <ShareScreen />
        } />
      </Routes>
    </Router>
  )
}

export default App
