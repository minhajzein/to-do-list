import React from "react";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
//library imports

function EditForm({ editedTask, updateTask, closeEditMode }) {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);


    useEffect(() => {
        const closeModalIsEscaped = (e) => {
            e.key === 'Escape' && closeEditMode()
        }
        window.addEventListener('keydown', closeModalIsEscaped)

        return () => {
            window.removeEventListener('keydown', closeModalIsEscaped)
        }
    }, [closeEditMode])

    const handleFormSubmit = e => {
        e.preventDefault();
        updateTask({ ...editedTask, name: updatedTaskName })
    };
    return (
        <div role='dialog'
            aria-labelledby="editTask"
            onClick={(e) => { e.target === e.currentTarget && closeEditMode() }}
        >
            <form className="todo" onSubmit={handleFormSubmit}>
                <div className="wrapper">
                    <input
                        onInput={e => setUpdatedTaskName(e.target.value)}
                        value={updatedTaskName}
                        className="input"
                        type="text"
                        name=""
                        id="editTask"
                        required
                        autoFocus
                        maxLength={60}
                        placeholder="Update Task"
                    />
                    <label className="label" htmlFor="editTask">
                        Update Task
                    </label>
                </div>
                <button
                    className="btn"
                    aria-label={`Comfim edited task to now read ${updatedTaskName}`}
                    type="submit"
                >
                    <CheckIcon
                        strokeWidth={2}
                        height={24}
                        width={24}
                    />
                </button>
            </form>
        </div >
    );
}

export default EditForm;
