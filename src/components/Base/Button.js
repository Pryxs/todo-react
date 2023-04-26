const Button = ({text, action, disabled}) => {
    return (
        <button 
            onClick={action}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;