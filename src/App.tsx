import './App.css';
import Header from './views/header/Header';
import Preheader from './views/preheader/Preheader';
import About from './views/about/About';
import WhatWeDo from './views/whatwedo/Whatwedo';
import Events from './views/events/Events';
import CodeofConduct from './views/codeofconduct/CodeofConduct';
import Footer from './views/footer/Footer';

function App() {
  return (
    <div className="App bg-black-100">
      <div className="header-banner-area">
        <section id="top">
          <Header />
          <Preheader />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="what-we-do">
          <WhatWeDo />
        </section>
      </div>
      <section id="events">
        <Events />
      </section>
      <section id="code-of-conduct">
        <CodeofConduct />
      </section>
      <footer id="contact-us">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
