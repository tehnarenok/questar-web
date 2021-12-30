import '../Home/index.css'
import Block from "@components/Block";
import useUser from "@hooks/useUser";
import './index.css'
import {useEffect, useState} from "react";
import CustomInput from "@components/CustomInput";
import useAuth from "@hooks/useAuth";

const Question = () => {
    const { currentUser } = useUser()
    const { signOut } = useAuth()

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
                    <div className="user_icon top-header-w-content__logo icon2" onClick={() => signOut()}/>
                </div>

                <Block>
                    <div className={"question"}>
                        <h1>Вопрос 1</h1>
                        <p style={{lineHeight: "150%"}}>
                            Зайдите во двор около дома на Алтайской улице, 20. Раньше в этом дворе стоял
                            памятник личности, которая имела большое влияние на создание Санкт-Петербурга.
                            Раньше в этой дворе стоят памятник этой личности. Осмотрите внимательно двор в
                            режиме AR и найдите памятник. Напишите название этой личности. Но не все так просто –
                            памятник сделан зеркальным, чтобы было интереснее искать =)
                        </p>
                        <p>
                            <a href={"https://quest-ar-demo.vercel.app/"}>Открыть AR-режим</a>
                        </p>

                        <div>
                            <hr/>
                            Ваш ответ <br/><br/>
                            <CustomInput value={answer} onChange={(e) => setAnswer(e)} />
                        </div>

                        <div>
                            <a href="#" className={"quest-small__button top-header-btn"} onClick={
                                () => {
                                    if (answer.toLowerCase() === "петр 1" || answer.toLowerCase() === "петр1" ||
                                        answer.toLowerCase() === "петрпервый" || answer.toLowerCase() === "петр первый"
                                    ) {
                                        alert("Правильный ответ")
                                        window.location.href = '/success'
                                    }
                                    else if (answer.toLowerCase() === "петр") {
                                        alert("Уточните ответ")
                                    }
                                    else {
                                        alert("Неправильный ответ")
                                    }
                                }
                            }>Начать</a>
                        </div>
                    </div>


                </Block>
            </div>
        </div>
    )
}

export default Question