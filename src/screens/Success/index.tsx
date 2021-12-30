import '../Home/index.css'
import Block from "@components/Block";
import useUser from "@hooks/useUser";
import './index.css'
import {useEffect, useState} from "react";
import CustomInput from "@components/CustomInput";

const Success = () => {
    const { currentUser } = useUser()

    useEffect(() =>  {
        document.body.classList.add("bg")

        return (() => {
            document.body.classList.remove("bg")
        })
    }, [])

    const [answer, setAnswer] = useState<string>('')

    return (
        <div style={{width: "100%"}}>
            <div className={"top-header-w-content"}>
                <div className={"top-header-w-content__wrapper"}>
                    <div className="questar-logo top-header-w-content__logo logogrid"/>
                    <div className="vertex_icon top-header-w-content__logo filtergrid"/>
                    <div className="spacer"/>
                    <div className="top-header-w-content__username usernamegrid">{currentUser()?.name}</div>
                    <div className="user_icon top-header-w-content__logo icon2"/>
                </div>

                <Block>
                    <div className={"question"}>
                        <h1>Спасибо за прохождение квеста</h1>
                        Мы надеемся, что наш квест вам очень понравился! Кроме этого, попробуйте наши другие квесты!

                        <div>
                            <a href="/" className={"quest-small__button top-header-btn"}>Другие квесты</a>
                        </div>
                    </div>


                </Block>
            </div>
        </div>
    )
}

export default Success