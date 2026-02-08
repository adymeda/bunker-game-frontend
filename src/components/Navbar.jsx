import { useState } from "react"
import { useTranslation } from "react-i18next"
import "../styles/Navbar.scss"
import BunkerIcon from "../assets/shelter-icon.png"
import BurgerMenu from "./ui/BurgerMenu"
import Avatar from "./ui/Avatar"

function Navbar() {
	const { t } = useTranslation()
	const [navExpanded, setNavExpanded] = useState(false) 

	let navClass = "navbar"
	if(navExpanded) navClass = `${navClass} expanded`

	let loggedIn = true

	return (
	<>
		<nav className={navClass}>
			<div className="navbar__spacer"></div>

			<div className="navbar__mid">
				<div className="navbar__logo">
					{/* img should be a button that redirects back to / path */}
					<img src={BunkerIcon} draggable={false} className="navbar__logo-img"/>
					<div className="navbar__logo-slogan">{t("info.name")}</div>

					<div className="navbar__logo-burger" onClick={() => setNavExpanded(!navExpanded)}>
						<BurgerMenu isOpened={navExpanded}/>
					</div>
				</div>

				<div className="navbar__buttons">
					{/* These buttons should be turned into new component*/}
					<div className="navbar__button">{t("navigation.home")}</div>
					<div className="navbar__button">{t("navigation.howToPlay")}</div>
				</div>
			</div>

			<div className="navbar__spacer">
				<div className="navbar__profile">
					<Avatar />
					<div className="navbar__profile-info">
						Username
					</div>
					<div className="navbar__profile-expand">
						:
					</div>
				</div>
			</div>
		</nav>
		<div className="navbar__afterspacer"></div>
	</>
	)
}

export default Navbar