import { useId } from "react";

interface StarProps {
    width: number;
}

const Star: React.FC<StarProps> = ({width}) => {
    // Generate a unique ID for the mask for each star otherwise it won't work
    const maskId = useId();
    return (
        <svg className="w-6 h-6 text-starFill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* Mask definition */}
            <defs>
                <mask id={maskId}>
                    <rect x="0" y="0" width={`${width}%`} height="100%" fill="white" />
                </mask>
            </defs>

            {/* Full Star Path with Mask Applied for Fill */}
            <path
                d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.336 24 12 20.203 4.664 24l1.336-8.73L0 9.423l8.332-1.268L12 .587z"
                fill="currentColor"
                mask={`url(#${maskId})`} // Fill only a portion of the star
            />

            {/* Outline Stroke (Visible Regardless of Fill) */}
            <path className="text-starStroke"
                d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.336 24 12 20.203 4.664 24l1.336-8.73L0 9.423l8.332-1.268L12 .587z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
            />
        </svg>
    )
}

export default Star;