import type React from "react"

interface Props {
    children : React.ReactNode;
    title? : string;
    handleClick: () => void;
    className: string
    disabled? : boolean
}

const Button = ({ children, title, handleClick, className, disabled}: Props) => {
    return (
        <div className="space-y-2 relative">
            <button disabled={disabled} type="button" onClick={handleClick} title={title} className={className}> { children } </button>
        </div>
    )
}

export default Button