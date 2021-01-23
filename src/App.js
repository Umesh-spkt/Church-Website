
import './App.css';
import Banner from './components/banner';
import Header from './components/header';
import Services from './components/services';
import Events_Container from './components/events';
import News_container from './components/news/news';
import Events from './components/events/components/event';
import Footer from './components/footer';


function App() {
  return (
    <div >
    <Header/>
    <Services/>
    <Banner/>
    <Events_Container/>
    <News_container/>
    <Footer/>
    
    </div>
  
  );
}

export default App;
