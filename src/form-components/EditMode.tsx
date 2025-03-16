import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <label className="form-switch">
                <input
                    type="checkbox"
                    role="checkbox"
                    checked={editMode}
                    onChange={toggleEditMode}
                />
                Edit Mode
            </label>
            {editMode ?
                <div>
                    <input
                        type="text"
                        role="textbox"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <label>
                        <input
                            type="checkbox"
                            role="checkbox"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                        Student
                    </label>
                </div>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
