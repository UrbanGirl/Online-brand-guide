import { useState, useEffect } from 'react'
import Logo from './assets/Urbansoft-Primary-Logo.svg'
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
    <div className='center-middle-container'>
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
        <a href='#'>Logo</a>
        <a href='#'>Graphics</a>
        <a href='#'>Typography</a>
        {/* <a href='#'>Iconography</a> */}
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
  return(
    <div className='Logo-section'>
      <div className='logo-description flex'>
        <h2>Metaphor and symbol</h2>
        <p>The logo metaphor is based on «slash» — one of the basic elements of an Internet address. It works as a symbol of nesting, denoting the strategy of Rambler.ru as a single portal on whose services you can find solutions to any issues.</p>
      </div>
      <div className='logo-image'>
        <div className='current-logo'></div>
      </div>
      <div className='logo-ctas flex'>
        <a href='#'>Download Logo</a>
        <a href='#'>Download SVG</a>
        <a href='#'>Download PNG</a>
      </div>
      <div className='System-modes'>
        <a href='#'>
          Black-mode
        </a>
        <a href='#'>
          Light mode
        </a>
      </div>
    </div>
  )
}

export default App
