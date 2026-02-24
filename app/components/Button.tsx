export default function Button({onClick, styles, textContent}: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`px-3 py-1 border rounded ${styles}`}
        >
            {textContent}
        </button>
    )
}
