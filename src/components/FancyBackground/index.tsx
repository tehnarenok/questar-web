import './index.css'

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