import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import'./App.css';
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/value/value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
// import PopularListing from "./components/PopularListing";
import AddResidence from './components/AddResidence/AddResidence';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
      <Hero/>
      </div>
      <Companies/>   
      <AddResidence/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>

  );
}

export default App;
