import './App.css';
import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <Card
        img="cover.jpg"
        rating={5.0}
        reviewCount={60}
        country="USA"
        title="Life Lesons with Ketie zeferees"
        price={136}
      />
    </div>
  );
}

export default App;
