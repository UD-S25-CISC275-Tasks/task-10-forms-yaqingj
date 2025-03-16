import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
    ];

    return (
        <div>
            <div>
                {colors.map((colorOption, index) => (
                    <label
                        key={index}
                        style={{ display: "inline-block", marginRight: "10px" }}
                    >
                        <input
                            type="radio"
                            name="color"
                            value={colorOption}
                            checked={color === colorOption}
                            onChange={() => {
                                setColor(colorOption);
                            }}
                        />
                        {colorOption}
                    </label>
                ))}
            </div>

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: "black",
                    padding: "20px",
                    marginTop: "20px",
                }}
            >
                You have chosen {color}
            </div>
        </div>
    );
}
