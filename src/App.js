import logo from './images/logo.svg';



import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import Articles from './components/Articles/Articles';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Info />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
