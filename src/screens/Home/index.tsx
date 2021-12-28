import './index.css'
import FancyBackground from "@components/FancyBackground";
import Block from "@components/Block";
import './simvol-goroda-sankt-peterburga.png';
import useUser from "@hooks/useUser";

const Home = () => {
	const { currentUser } = useUser()
	return (
		<div style={{width: "100%"}}>
			<div className={"top-header-w-content"}>
				<FancyBackground className={"fancy-background__fullWidth"}/>
				<div className={"top-header-w-content__wrapper"}>
					<div className="questar-logo top-header-w-content__logo logogrid"/>
					<div className="vertex_icon top-header-w-content__logo filtergrid"/>
					<div className="spacer"/>
					<div className="top-header-w-content__username usernamegrid">{currentUser()?.name}</div>
					<div className="user_icon top-header-w-content__logo icon2"/>
				</div>

				<Block>
					<div className={"top-header-item"}>
						<div className={"top-header-item-top"}>
							<div className={"top-header-item-top-icon"}>
								<img src={require('./simvol-goroda-sankt-peterburga.png')}/>
							</div>
							<div className={"top-header-item-top-name"}>Квест по Центральному району Санкт-Петербурга</div>
							<div className={"top-header-item-top-icons"}>cde</div>
						</div>
					</div>
				</Block>
			</div>
		</div>
	)
}

export default Home