export default function Button({onClick, styles, textContent}: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`px-3 py-1 [box-shadow:0_1.5px_2px_0_rgb(20,20,20)] rounded ${styles} hover:bg-neutral-100 active:bg-neutral-200 focus-visible:outline-1 transition`}
        >
            {textContent}
        </button>
    )
}
