const Header = ({isBlack,setBlack}) =>{
  const scroll = (id) => {
    const section = document.getElementById(id)
    if(section){
      section.scrollIntoView({behavior:'smooth'})
    }
  }
    return (
        <div className={`sticky inset-x-0 top-0 z-50 w-full py-4 ${isBlack?'bg-black/90':'bg-white/90'} backdrop-blur-l`}>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
        <div className="flex items-center justify-between gap-6">
          <a href="#" title="30 Days of Coding" className={`flex items-center shrink-0 ${isBlack?'bg-white':''} p-2 rounded-full`}>
            <img className="w-auto h-8 sm:h-10" src="images/logo.svg" alt="30 Days of Coding logo"/>
          </a>

          <nav className="hidden p-1 bg-gray-100 rounded-full md:justify-center md:items-center md:flex">
            <button onClick={()=>{scroll('intro')}} title="Intro"
              className="text-sm font-medium inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white active:bg-white active:text-gray-900 transition-all duration-150 rounded-full px-3.5 py-2">
              Intro
            </button>

            <button onClick={()=>{scroll('pricing')}} title="Pricing"
              className="text-sm font-medium inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white active:bg-white active:text-gray-900 transition-all duration-150 rounded-full px-3.5 py-2">
              Pricing
            </button>

            <button onClick={()=>{scroll('features')}} title="Features"
              className="text-sm font-medium inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white active:bg-white active:text-gray-900 transition-all duration-150 rounded-full px-3.5 py-2">
              Features
            </button>

            <button onClick={()=>{scroll('testimonials')}} title="Testimonials"
              className="text-sm font-medium inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white active:bg-white active:text-gray-900 transition-all duration-150 rounded-full px-3.5 py-2">
              Testimonials
            </button>

          </nav>
          <div className="flex items-center gap-4">
          <a href="https://bit.ly/30dc-aryan" title="" target="_blank" rel="noreferrer"
            className={`rounded-full ${isBlack?'bg-white text-gray-900':'bg-primary-950 text-white'} px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-150`}
            role="button">
            Join Community
          </a>
          <label className="switch">
            <input type="checkbox" onClick={()=>{setBlack(!isBlack)}}/>
            <span className="slider round"></span>
          </label>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Header;