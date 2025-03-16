import React, { useState } from "react";

export function ColoredBox(): React.JSX.Element {
    // Define the color sequence
    const colors = ["red", "blue", "green"];
    const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);

    const changeColor = () => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    return (
        <div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: colors[currentColorIndex],
                    width: "100px",
                    height: "100px",
                }}
            />
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}
