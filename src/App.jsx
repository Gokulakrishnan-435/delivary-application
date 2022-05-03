import React from 'react'
import Login from './Component/Login';
import Slider1 from './Component/Slider1';
import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar';

const App = () => {
    return (
      <Router>
        <section>
          <Navbar />
          <article>
            
                    <Routes>
                        <Route path="/" element={<Slider1/>}/>
              <Route path="/login" element={<Login />} />
            </Routes>
          </article>
        </section>
      </Router>
    );
}

export default App
