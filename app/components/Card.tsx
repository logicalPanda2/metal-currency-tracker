export default function Card({mainText, subText}: CardProps) {
    return (
        <div className="p-4 rounded border inline-block">
            <p className="text-2xl mb-0.5">{mainText}</p>
            <p className="text-neutral-900">{subText}</p>
        </div>
    );
}
