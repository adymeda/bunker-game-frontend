import "../../styles/ui/BurgerMenu.scss"

function BurgerMenu({ isOpened, color }) {
	let className = "burger__button"
	if(isOpened) className = `${className} opened`

	if(!color) color="#dedede"

	return (
		<div className={className}>
			<span style={{ background: color }}></span>
			<span style={{ background: color }}></span>
			<span style={{ background: color }}></span>
		</div>
	)
}

export default BurgerMenu