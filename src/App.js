import './index.css';
import data from "./data"
import Header from "./components/Header"
import Cards from "./components/Cards"


export default function App() {
  const places = data.map(place => {
    console.log()
    return (
      <section className="Cards">
        <div className="HeroImg">
          <img src={place.imageUrl} />
        </div>
        <div className="Hero-info">
          <img className="LocationIcon" src="location.png" />
          <span className="Location">{place.location}</span>
          <span><a className="Url" href="#"> View on Google Maps</a></span>
          <h1 className="Title">{place.title}</h1>
          <p className="description">{place.description}</p>

        </div>
      </section>
    )
  })
  return (
    <div className="container">
      <Header />
      {places}
    </div>
  )
}



