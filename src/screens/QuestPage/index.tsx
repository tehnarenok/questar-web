import '../Home/index.css'
import FancyBackground from "@components/FancyBackground";
import Block from "@components/Block";
import './simvol-goroda-sankt-peterburga.png';
import useUser from "@hooks/useUser";
import QuestInfoHeader from "@components/QuestInfoHeader";
import QuestSmall from "@components/QuestSmall";

const QuestPage = () => {
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
					<div className={"top-header-quest"}>
						<div className={"top-header-questinfo"}>
							<QuestInfoHeader icon={require('./simvol-goroda-sankt-peterburga.png')}
											 members={"3-5"} score={4} rating={4}
											 name={"Квест по Центральному району Санкт-Петербурга"}/>
						</div>
						<div className={"top-header-quest-image"}>
							<img src={"https://cdn5.vedomosti.ru/crop/image/2019/9e/187n18/original-1las.jpg?height=934&width=1660"}/>
						</div>
						<div className={"top-header-questdescr"}>
							Во время этого квеста вы окунетесь в историю одного из самых богатых на события городов России. Во время приключения вы увидите Эрмитаж, Казанский и Исакиевский соборы, а также арку главного штаба.
						</div>
						<div className={"top-header-quest__biginfo"}>
							30-40 минут на выполнение
						</div>
					</div>
				</Block>
			</div>
		</div>
	)
}

export default QuestPage