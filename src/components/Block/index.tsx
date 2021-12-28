import {ReactElement, ReactNode} from "react";
import {JsxElement} from "typescript";

import './index.css'

type BlockProps = {
    children: ReactElement | ReactNode | JsxElement
}

const Block = (props: BlockProps) => {
    return (
        <div className={"block"}>
            {props.children}
        </div>
    )
}

export default Block