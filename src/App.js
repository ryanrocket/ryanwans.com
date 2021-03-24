import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Default from './assets/page';
import Index from './components/Index';
import PreFoot from './components/PreFoot';
import About from './components/About';

import { Route } from 'react-router-dom';

function App() {
  Default()
  return (
    <div>
      <NavBar />
      <div className="content" style={{marginTop: '65px'}}>
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About} />
       </div>
      <PreFoot message="Shoot me a message" redir="/contact" button="Contact Me" />
      <Footer />
    </div>
  );
}

export default App;
