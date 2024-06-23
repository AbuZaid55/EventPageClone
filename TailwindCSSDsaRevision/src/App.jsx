import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'
import { useState } from 'react'
function App() {
  const [isBlack,setBlack]=useState(false)
  return (
   <div className={isBlack?'bg-black':'bg-white'}>
    <div className='h-full font-sans antialiased text-gray-950 selection:bg-primary-500 selection:text-white'>
     <div className='flex flex-col min-h-screen'>
      <Header isBlack={isBlack} setBlack={setBlack}/>
      <Main isBlack={isBlack}/>
      <Footer isBlack={isBlack}/>
    </div>
   </div>
   </div>
  )
}

export default App
