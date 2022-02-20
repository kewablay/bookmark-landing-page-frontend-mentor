import './App.css';
import Layout from './components/Layout'
import Banner from './components/Banner'
import HeroImg from './images/illustration-hero.svg'

function App() {
  return (
    <div className="App">
      <Layout>
        <Banner image={HeroImg} title={"A Simple Bookmark Manager"} content={"A clean and simple interface to organize your favourite websites. Open a new   browser tab and see your sites load instantly. Try it for free."} />
      </Layout>
    </div>
  );
}

export default App;
