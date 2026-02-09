import "@styles/ui/Hero.scss"

function Hero({ image, title, text, children }) {
	return (
		<div className="hero-screen">
			<div className="hero-screen__image">
				<img src={image} alt="" draggable={false}/>
			</div>
			<div className="hero-screen__content">
				{children}
			</div>
		</div>
	)
}

export default Hero