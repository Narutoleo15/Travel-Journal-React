import React from "react"

export default function Cards(place){
    return(
        
        <section className="Cards">
            <div className="HeroImg">
                <img src="japanImg.jpg"/>
            </div>
            <div className="Hero-info">
                <div className="place">
                    <img className="LocationIcon" src="location.png"/>
                    <h3 className="Location">Japan</h3>
                    <p><a className="Url" href="#"> View on Google Maps</a></p>
                </div>
                    <h1 className="Title">Mount Fuji</h1>
                    
            </div>
        </section>
    )
}
// console.log(place)