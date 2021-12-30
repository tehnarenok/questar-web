type PlayerProps = {
    name: string,
    time: string,
    place: number,
    image: any,
}

export const Player = (props: PlayerProps) => {
    return (
        <div className={'player-row'}>
            <div className={'player-row__place'}>
                {props.place === 1 && <div className={'first-place place-icon'} />}
                {props.place === 2 && <div className={'second-place place-icon'} />}
                {props.place === 3 && <div className={'third-place place-icon'} />}
                {props.place > 3 && <div className={'place-icon'}/>}
                {props.place}
            </div>
            <div className={'player-row__player'}>
                <img className={'player-row__player__avatar'} src={props.image} />
                <div className={'player-row__player__name'}>
                    {props.name}
                </div>
            </div>
            <div className={'player-row__time'}>
                {props.time}
            </div>
        </div>
    )
}

const TopPlayers = () => {
    let players = [
        {name: 'Sashiyamo', time: '1:10:31,71', image: require('./sashiyamo.png')},
        {name: 'tehnarenok', time: '1:11:33,10', image: require('./tehnarenok.png')},
        {name: 'whytrall', time: '2:20:65,99', image: require('./whytrall.png')},
        {name: 'Mr.Fant', time: '2:50:56,66', image: require('./mrfant.png')},
        {name: 'Sergeeva', time: '2:51:32,11', image: require('./sergeeva.png')},
        {name: 'UserDog', time: '30:01:45,23', image: require('./userdog.png')}
    ]

    return (
        <Block>
            <div className={'top-players'}>
                <div className={'top-players__header'}>
                <h4 className={'top-players__header__title'}>
                    Топ игроков
                </h4>
                </div>
                <div className={'top'}>
                    <div className={'top-players__table__header player-row'}>
                    <span>
                        Место
                    </span>
                        <span>
                        Игрок
                    </span>
                        <span>
                        Время
                    </span>
                    </div>
                    {players.map((player,idx) => {
                        return (
                            <Player name={player.name} time={player.time} place={idx+1} image={player.image} />
                        )
                    })}
                </div>
            </div>
        </Block>
    )
}

export default TopPlayers