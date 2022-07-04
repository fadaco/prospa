interface buttonType {
    text: string
    onClick: (param?: any) => void
    className?: any

}

const Button = ({text, onClick, className}: buttonType) => {
        return (
            <button onClick={() => onClick()} className={className}>{text}</button>
        )
}

export default Button;