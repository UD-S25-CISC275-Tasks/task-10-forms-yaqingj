import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value);
    };
    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };
    const handleGainAttempts = () => {
        const requested = parseInt(requestedAttempts);
        if (!isNaN(requested) && requested > 0) {
            setAttemptsLeft(attemptsLeft + requested);
        }
    };
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <p>Attempts left: {attemptsLeft}</p>
            </div>
            <div>
                <input
                    type="number"
                    value={requestedAttempts}
                    onChange={handleInputChange}
                    placeholder="Enter number of attempts"
                />
            </div>
            <div>
                <button onClick={handleUseAttempt} disabled={attemptsLeft <= 0}>
                    Use
                </button>
                <button onClick={handleGainAttempts}>Gain</button>
            </div>
        </div>
    );
}
