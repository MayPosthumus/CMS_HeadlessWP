import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./gameboy.module.css"


const Gameboy = ({ gameboy }) => {
    console.log(gameboy)
    return(
        <div>
            <Link to={`/${gameboy.slug}`}>
            <h4>{gameboy.gameboyMeta.gameboyTitle}</h4>
            <img src={gameboy.gameboyMeta.gameboyPicture.sourceUrl} />
            </Link>
        </div>
)}

export default Gameboy