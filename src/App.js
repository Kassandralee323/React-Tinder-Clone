import './App.css';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import {useState,useEffect} from 'react';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    },2000)
  }, [])
  return (
    <div className="App">
      {loading && <Loader />}
      {!loading && 
      <> 
        <Navbar />
        <Welcome />
      </>
      }
    </div>
  );
}

export default App;
