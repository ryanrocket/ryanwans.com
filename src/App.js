import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Default from './assets/page';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import BlogHome from './components/BlogHome';
import Swapa from './components/Swapa';
import WansResearch from './components/WansResearch';

import { Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Locked from './components/Locked';

function App() {
  Default()
  return (
    <div>
      <NavBar />
      <div className="content" style={{marginTop: '65px'}}>
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={BlogHome} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/opensource" component={Locked} />
        <Route exact path="/services" component={Locked} />
        <Route exact path="/cdn" component={Locked} />
        <Route exact path="/analytics" component={Locked} />
        <Route exact path="/chatintro" component={Locked} />
        <Route exact path="/swapa" component={Swapa} />
        <Route exact path="/wans-research" component={WansResearch} />
       </div>
      <Footer />
    </div>
  );
}

export default App;
