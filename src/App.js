import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data";

function App() {

  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section style={{
        display: "flex",
        flexDirection: "row",
        padding: "10px",
       
      }}>{data.map((item) => {
        return (
          <Card
            img="cover.jpg"
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots = {item.openSpots}
          />
        );
      }
      )}</section>
    </div>
  );
}

export default App;
