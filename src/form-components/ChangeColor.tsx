import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");

    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
    ];
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChosenColor(event.target.value);
    };

    return (
        <div>
            {colors.map((color) => (
                <div
                    key={color}
                    style={{
                        display: "inline-block",
                        marginRight: "10px",
                    }}
                >
                    <input
                        type="radio"
                        id={color}
                        name="color"
                        value={color}
                        checked={chosenColor === color}
                        onChange={handleColorChange}
                        style={{
                            marginRight: "5px",
                        }}
                    />
                    <label
                        htmlFor={color}
                        style={{
                            color: "black",
                            backgroundColor: color,
                            padding: "5px 10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    >
                        {color}
                    </label>
                </div>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "20px",
                    backgroundColor: chosenColor,
                    color: "black",
                }}
            >
                You have chosen{" "}
                <span
                    style={{
                        fontWeight: "bold",
                        backgroundColor: "white",
                        color: chosenColor,
                        padding: "2px 5px",
                    }}
                >
                    {chosenColor}
                </span>
            </div>
        </div>
    );
}
