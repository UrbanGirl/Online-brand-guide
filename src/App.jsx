import { useState, useEffect } from 'react'
import Logo from './assets/Urbansoft-Primary-Logo.svg'
import WhiteLogo from './assets/Urbansoft-White-logo.svg'
import VLogo from './assets/Urbansoft-Vertical-Logo.svg'
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
        <VerticalLogo />
        <Color />
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
        <a href='#graphics'>Graphics</a>
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

function VerticalLogo(){
  return(
    <div className='center-container'>
      <div className='Vertical-logo'>
        <div className='flex'>
          <div className='desc-and-ctas'>
            <div className='logo-description'>
              <h1>Security zone</h1>
              <p>The logo needs «air» – a security zone around it, which should not include other objects. Such a security zone is determined by the height of the sign «slash». Compliance with the security zone guarantees the correct perception of the logoblock.</p>
            </div>
            <div className='logo-ctas'>
              <p>Download Logo</p>
              <a href='#'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E529B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-vector-square-icon lucide-vector-square"><path d="M19.5 7a24 24 0 0 1 0 10"/><path d="M4.5 7a24 24 0 0 0 0 10"/><path d="M7 19.5a24 24 0 0 0 10 0"/><path d="M7 4.5a24 24 0 0 1 10 0"/><rect x="17" y="17" width="5" height="5" rx="1"/><rect x="17" y="2" width="5" height="5" rx="1"/><rect x="2" y="17" width="5" height="5" rx="1"/><rect x="2" y="2" width="5" height="5" rx="1"/></svg></a>
              <a href='#'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E529B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-icon lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg></a>
            </div>
          </div>
          <div className='Logo'>
            <img src={VLogo} alt='Vertical Logo'/>
          </div>
        </div>
      </div>
    </div>
  )
}

function Color(){
  return (
    <div className="center-container flex" id='graphics'>
      <div className='Colors'>
        <div className='left-side'>
          <div className='palette'>
            <h3>Blue palette</h3>
            <div className='color-section'>
              <div className='big-color-box hex-royal-lilac'></div>
              <h5>Royal Lilac</h5>
              <p className='hex'>#7f58a6</p>
            </div>
          </div>
          <div className='palette'>
            {/* <h3>gray palette</h3> */}
            <div className='flex'>
              <div className='color-section'>
                <div className='small-color-box hex-true-teal'></div>
                <h5>True Teal</h5>
                <p className='hex'>#0f8592</p>
              </div>
              <div className='color-section'>
                <div className='small-color-box hex-poseidon'></div>
                <h5>Poseidon</h5>
                <p className='hex'>#1a3c5b</p>
              </div>
            </div>
          </div>
          <div className='palette'>
            {/* <h3>gray palette</h3> */}
              <div className='flex'>
                <div className='color-section'>
                  <div className='small-color-box hex-tin'></div>
                  <h5>Tin</h5>
                  <p className='hex'>#8f8f8f</p>
                </div>
                <div className='color-section'>
                  <div className='small-color-box hex-berry-patch'></div>
                  <h5>Berry Patch</h5>
                  <p className='hex'>#8c3b61</p>
                </div>
              </div>
          </div>
        </div>
        <div className='right-side'>
          <div className='logo-description'>
            <h1>Working with color</h1>
            <p>Work with color is based on the use of neutral and signature gray and black palettes as the basis and signature blue for placing accents. Due to the size of the audience, special attention is paid to the readability of shades of gray and their correct interpretation on as many monitors as possible.</p>
            <div className='logo-ctas'>
              <a target='_blank' href='https://maketintsandshades.com/#colors=7F58A6,1A3C5B,8C3B61,0F8592,8F8F8F&hashtag=0&steps=10'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E529B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> Color Tints and Shades</a>
            </div>
          </div>
          <div className='palette'>
            <h3>Accent palette</h3>
            <div className='flex'>
                <div className='color-section'>
                  <div className='small-color-box hex-red'></div>
                  <h5>Red</h5>
                  <p className='hex'>#8f8f8f</p>
                </div>
                <div className='color-section'>
                  <div className='small-color-box hex-green'></div>
                  <h5>Green</h5>
                  <p className='hex'>#8c3b61</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
