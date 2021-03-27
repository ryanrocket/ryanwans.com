import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Default from './assets/page';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import BlogHome from './components/BlogHome';

import { Route } from 'react-router-dom';

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
       </div>
      <Footer />
    </div>
  );
}

export default App;
