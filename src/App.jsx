import { useState, useEffect } from 'react'
import './style.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },
    5000);

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
    <div className='center-middle-container'>
      <h2>I have babies</h2>
    </div>
  )
}

export default App
