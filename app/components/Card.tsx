export default function Card({mainText, subText}: CardProps) {
    return (
        <div className="p-4 rounded inline-block [box-shadow:0_1.5px_2.5px_0_rgb(20,20,20)]">
            <p className="text-2xl mb-0.5">{mainText}</p>
            <p className="text-neutral-900">{subText}</p>
        </div>
    );
}
