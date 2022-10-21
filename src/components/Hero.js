import React from "react"
import gridbg from "../images/gridbg.png"
// import logo1 from "../images/logo1.png"
export default function Hero() {
    return (
        <section className="hero">
            <img src={gridbg} alt="grid" className="hero--photo"></img>
            <h1 className="hero--header"> Online Experience</h1>
            <p className="hero--text">Join the airbnb for better experience. This is thee best place to share the  experience with the peers </p>
        </section>
    )
}