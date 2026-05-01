import { useState, useEffect } from 'react'
import Logo from './assets/Urbansoft-Primary-Logo.svg'
import WhiteLogo from './assets/Urbansoft-White-logo.svg'
import './style.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },
    2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      { loading ? <LoadingScreen /> : <MainScreen /> }
    </>
  )
}

function LoadingScreen(){
  return (
    <div className='loading-container'>
      <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
  )
}

function MainScreen(){
  return(
    <div className='center-container'>
      <NavigationBar />
      <div className='page-content'>
        <Header />
        <LogoSection />
      </div>
    </div>
  )
}

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={Logo} alt="Urbansoft Logo" />
      </div>

      <div className="links">
        <a href='#Logo'>Logo</a>
        <a href='#'>Graphics</a>
        <a href='#'>Typography</a>
        <a href='#'>Stationary</a>
      </div>

      <div className="actions">
        <button className="primary">Download</button>
      </div>
    </div>
  );
}

// function NavigationBar(){
//   return(
//     <div className='nav-bar'>
//       <img src={Logo} alt="Urbansoft Logo" />
//       <a href='#Logo'>Logo</a>
//       <a href='#Graphics'>Graphics</a>
//       <a href='#Icons'>Iconography</a>
//       <a href='#Fonts'>Fonts</a>
//     </div>
//   )
// }

function Header(){
  return (
    <div className='header'>
      {/* <img src={HeaderImage} alt="Urbansoft Header" /> */}
      <div className='Mission'>
        <h1>The challenge</h1>
        <p>GIG Bahrain needed to streamline their processes, enhance customer convenience, and optimize policy management for both their customers and internal brokers. Their existing core system was not equipped to handle the growing need for seamless online and offline policy transactions, renewals, and claims management.</p>
      </div>
    </div>
  )
}

function LogoSection(){
  const [DarkMode, setDarkMode] = useState(false);

  return(
    <div className={`Logo-container ${DarkMode ? "black-mode-bg" : "white-mode-bg"}`} id='Logo'>
      <div className='Logo-section'>
        <div className='flex'>
          <div className='logo-description'>
            <h1 className={` ${DarkMode ? "white-h1" : "black-h1"} `}>Metaphor and symbol</h1>
            <p className={` ${DarkMode ? "white-p" : "black-p"} `}>The logo metaphor is based on «slash» — one of the basic elements of an Internet address. It works as a symbol of nesting, denoting the strategy of Rambler.ru as a single portal on whose services you can find solutions to any issues.</p>
          </div>
          <div className='System-modes'>
            <div className={`box box-white ${DarkMode ? "" : "selected-mode"}`} onClick={() => setDarkMode(false)}></div>
            <div className={`box box-black ${DarkMode ? "selected-mode" : "" }`} onClick={() => setDarkMode(true)}></div>
          </div>
        </div>
        <div className='logo-image'>
          {DarkMode ? <img src={WhiteLogo} alt='normal-logo' /> : <img src={Logo} alt='white-mode-logo' />}
        </div>
        <div className='logo-ctas flex'>
          <p className={` ${DarkMode ? "white-p" : "black-p"} `}>Download Logo</p>
          <a href='#'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E529B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-vector-square-icon lucide-vector-square"><path d="M19.5 7a24 24 0 0 1 0 10"/><path d="M4.5 7a24 24 0 0 0 0 10"/><path d="M7 19.5a24 24 0 0 0 10 0"/><path d="M7 4.5a24 24 0 0 1 10 0"/><rect x="17" y="17" width="5" height="5" rx="1"/><rect x="17" y="2" width="5" height="5" rx="1"/><rect x="2" y="17" width="5" height="5" rx="1"/><rect x="2" y="2" width="5" height="5" rx="1"/></svg></a>
          <a href='#'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E529B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-icon lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg></a>
        </div>
      </div>
    </div>
  )
}

export default App
