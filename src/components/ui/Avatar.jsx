import "../../styles/ui/Avatar.scss"
import UserIcon from "../../assets/user-icon.png"

function Avatar({ url, alt="" }) {
	if(!url) url = UserIcon

	return (
		<div className="avatar">
				<img src={url} alt={alt} draggable={false}/>
		</div>
	)
}

export default Avatar