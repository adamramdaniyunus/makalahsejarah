import Navbar from './components/Navbar';
import './App.css';
import KataPengantar from './components/KataPengantar';
import BABI from './components/BABI';
import BABII from './components/BABII';
import BABIII from './components/BABIII';
import Footer from './components/Footer';
import Loading from './Utils/Loading';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // loading beberapa detik sebelum diload semua
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // window.onload = handleLoad
  }, []);

  useEffect(() => {
    if (!loading) {
      AOS.init({
        once: true,
      })
      AOS.refresh()
    }
  }, [loading])


  return (
    <div>
      {loading ? (<Loading />) : (
        <div>
          <Navbar />
          <KataPengantar />
          <BABI />
          <BABII />
          <BABIII />
          <Footer />
        </div>
      )
      }
    </div>
  );
}

export default App;
