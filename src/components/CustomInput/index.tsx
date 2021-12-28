import './index.css'

type CustomInputProps = {
    onChange?: (e: string) => void,
    value: string,
    type?: 'password' | 'email' | 'number' | 'text' | 'tel',
    required?: boolean
}

const CustomInput = (props: CustomInputProps) => {
    return (
        <div
            className={`custom-input__container ${props.required && 'custom-input__container_required'}`}
            onClick={(e) => {
                if(props.onChange) props.onChange('')
            }}
        >
            <input
               onClick={(e) => {
                   e.preventDefault()
                   e.stopPropagation()
               }}
               type={props.type || 'text'}
               value={props.value}
               onChange={(e) => {
                   if(props.onChange) props.onChange(e.target.value)
               }}
            />
        </div>
    )
}

export default CustomInput