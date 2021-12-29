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
							Во время этого квеста вы окунетесь в историю одного из самых богатых на события городов России...
						</div>
					</div>
				</Block>
			</div>

			<div className={"quests"}>
				<div className={"quests__item"}>
					<QuestSmall price={13} link={"https://2ch.hk"} icon={"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.6627 0.984282C19.5715 0.711329 19.2977 0.438376 19.024 0.347392C15.1918 -0.653435 11.2684 0.529361 8.6224 3.62283L7.61873 4.80562L5.15519 4.25972C3.96904 3.8048 2.69165 4.3507 2.14419 5.44251L0.136863 8.9909C-0.0456211 9.26385 -0.0456211 9.53681 0.136863 9.80976C0.228106 10.0827 0.501833 10.2647 0.77556 10.3557L3.60407 10.9926C3.33034 11.7204 3.2391 12.4483 3.05662 13.1762C3.05662 13.4491 3.14786 13.7221 3.33034 13.9041L6.15886 16.7246C6.34134 16.9065 6.52382 16.9975 6.79755 16.9975H6.88879C7.70998 16.9065 8.43991 16.8155 9.16985 16.5426L9.71731 19.2721C9.80855 19.5451 9.99103 19.818 10.2648 19.909C10.356 20 10.5385 20 10.6297 20C10.8122 20 10.9035 20 11.0859 19.909L14.6444 17.9074C15.6481 17.3615 16.1955 16.0877 15.9218 14.9049L15.2831 12.3573L16.378 11.3565C19.389 8.80893 20.6664 4.71464 19.6627 0.984282ZM5.70264 7.08023C5.15519 7.8081 4.60774 8.53598 4.24277 9.26385L2.32668 8.80893L3.69531 6.35236C3.8778 5.98842 4.24277 5.89743 4.69898 5.98842L6.2501 6.35236L5.70264 7.08023ZM13.6407 16.2696L11.1772 17.6344L10.8122 15.8147C11.6334 15.4508 12.3633 14.9049 13.002 14.359L13.6407 13.7221L14.0057 15.2688C14.1882 15.7237 13.9145 16.1787 13.6407 16.2696ZM14.2794 7.08023C13.5495 7.08023 12.9108 6.44334 12.9108 5.71547C12.9108 4.98759 13.5495 4.3507 14.2794 4.3507C15.0094 4.3507 15.6481 4.98759 15.6481 5.71547C15.6481 6.44334 15.1006 7.08023 14.2794 7.08023Z' fill='black'/%3E%3C/svg%3E%0A"}
								members={"3-6"} score={3} rating={3} name={"Крестовский остров"}/>
				</div>
			</div>
		</div>
	)
}

export default QuestPage