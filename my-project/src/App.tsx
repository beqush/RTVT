import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import {Routes , Route, BrowserRouter} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  console.log(count)
  return (
   <div>

     
        {/* <Routes>
          <Route path='/'  index element={<Login />} />
            
        </Routes> */}
      
        


        <Login />
   </div>
  )
}

export default App
