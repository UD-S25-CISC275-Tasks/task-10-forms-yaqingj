import React, { useState, useEffect } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);
    useEffect(() => {
        setSelectedAnswer(options[0]);
    }, [options]);
    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setSelectedAnswer(event.target.value);
    };

    return (
        <div>
            <select
                role="combobox"
                value={selectedAnswer}
                onChange={handleSelectChange}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>{selectedAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
