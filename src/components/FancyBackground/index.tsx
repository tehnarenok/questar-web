import './index.css'
import {ReactElement, ReactNode} from "react";
import {JsxElement} from "typescript";

interface FancyBgProps extends React.HTMLAttributes<HTMLDivElement> {
}

const FancyBackground = (props: FancyBgProps) => {
  return (
      <div className={"fancy-background "+props.className}>
        {props.children}
      </div>
  )
}

export default FancyBackground