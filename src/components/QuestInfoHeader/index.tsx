import './index.css'

type QuestInfoHeaderProps = {
	icon: any
	members: string
	score: number
	rating: number
	name: string
}

const QuestInfoHeader = (props: QuestInfoHeaderProps) => {
	return (
		<div className="quest-info__header">
			<div className="quest-info__header__iconwrap">
				<div className="quest-info__header__icon">
					<img src={props.icon}/>
				</div>
			</div>
			<span className="quest-info__header__name">
					{props.name}
				</span>
			<div className="quest-info__header__info">
				<div className="quest-info__header__info__members">
					<div className="icon-members quest-info__header__smallicon"/>
					{props.members}
				</div>
				<div className="quest-info__header__info__score">
					<div className="icon-score quest-info__header__smallicon"/>
					{props.score}/5
				</div>
				<div className="quest-info__header__info__rating">
					<div className="icon-rating quest-info__header__smallicon"/>
					{props.rating}
				</div>
			</div>
		</div>
	)
}

export default QuestInfoHeader