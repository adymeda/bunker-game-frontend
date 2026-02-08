import { useState } from "react"
import "../styles/Navbar.scss"
import BunkerIcon from "../assets/shelter-icon.png"

function Navbar() {
	const [navExpanded, setNavExpanded] = useState(false) 

	let navClass = "navbar"
	if(navExpanded) navClass = `${navClass} expanded`

	return (
	<>
		<nav className={navClass}>
			{/* img should be a button that redirects back to / path */}
			<div className="navbar__logo">
				<img src={BunkerIcon} draggable={false}/>
				<div className="navbar__logo-slogan">Bunker</div>

				{/* TODO Burger Menu (simply add .expand to .navbar)*/}
				<div className="navbar__logo-burger" onClick={() => setNavExpanded(!navExpanded)}></div>
			</div>

			<div className="navbar__buttons">
				{/* These buttons should be turned into new component*/}
				<div className="navbar__button">Главная</div>
				<div className="navbar__button">Как играть</div>
			</div>
		</nav>
		<div className="navbar__spacer"></div>
	</>
	)
}

export default Navbar