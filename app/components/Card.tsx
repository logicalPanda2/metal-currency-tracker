export default function Card({accentedMainText, mainText, subText}: CardProps) {
    return (
        <div className="p-4 rounded inline-block [box-shadow:0_1.5px_2.5px_0_rgb(20,20,20)]">
            <p className="text-2xl mb-0.5">
                <span className="text-green-700">{accentedMainText}</span>
                &nbsp;
                <span>{mainText}</span>
            </p>
            <p className="text-neutral-900">{subText}</p>
        </div>
    );
}
