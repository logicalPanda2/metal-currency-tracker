export default function Button({onClick, styles, textContent}: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`px-3 py-1 text-white bg-blue-700 [box-shadow:0_1.5px_2px_0_rgb(10,10,10)] rounded ${styles} hover:bg-blue-800 active:bg-blue-900 focus-visible:outline-1.5 transition`}
        >
            {textContent}
        </button>
    )
}
