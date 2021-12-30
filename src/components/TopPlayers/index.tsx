type PlayerProps = {
    name: string,
}

export const Player = () => {
    return (
        <div className={'player-row'}>
            <div className={'player-row__place'}>

            </div>
            <div className={'player-row__player'}>
                <div className={'player-row__player__avatar'} />
                <div className={'player-row__player__name'}>

                </div>
            </div>
        </div>
    )
}

const TopPlayers = () => {
    return (
        <div className={'top-players'}>

        </div>
    )
}

export default TopPlayers