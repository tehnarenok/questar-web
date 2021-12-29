import Block from "@components/Block";
import QuestInfoHeader from "@components/QuestInfoHeader";
import './index.css'

type QuestSmallProps = {
    price: number
    link: string

    icon: any
    members: string
    score: number
    rating: number
    name: string
}

const QuestSmall = (props: QuestSmallProps) => {
   return (
       <Block>
           <div className={"quest-small"}>
                <QuestInfoHeader icon={props.icon}
                                 members={props.members} score={props.score}
                                 rating={props.rating} name={props.name}/>
               <div className={"quest-small__buttonwrap"}>
                   <a href={props.link} className={"quest-small__button"}>{props.price === 0 ? "Бесплатно" : "$" + props.price}</a>
               </div>
           </div>
       </Block>
   )
}

export default QuestSmall