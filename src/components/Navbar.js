import React from "react"
import myimage from "../../public/images/myimage.png";


export default function Navbar() {
    return (
        <nav>
            <img src={myimage} alt="logo" className="nav--logo">
            </img>
            <h1 style={{color:"red"}}>SYC.in</h1>
        </nav>
    )
}