type QuestInfoProps = {

}

const QuestInfo = (props: QuestInfoProps) => {
	return (
		<div className="quest-info">
			<div className="quest-info__header">
				<div className="quest-info__header__icon">

				</div>
				<span className="quest-info__header__name">

				</span>
				<div className="quest-info__header__info">
					<div>
						<div className="icon-members"/>
						3-5
					</div>
					<div>
						<div className="icon-score"/>
						9/10
					</div>
					<div>
						<div className="icon-raiting"/>
						4.5
					</div>
				</div>
			</div>
			<div className="quest-info__galery">

			</div>
			<div className="quest-info__description">

			</div>
			<div className="quest-info__additional-info">
				<div className="quest-info__additional-info__time">
					<div className="icon-time"/> ~30-40 минут
				</div>
				<a href='/' className="quest-info__additional-info__map">
					<div className="icon-map"/> Показать на карте
				</a>
			</div>
			<button className="quest-info__buy-button">
				Купить и начать
			</button>
		</div>
	)
}

export default QuestInfo