import React, { useState } from "react";


const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div className="item" key={option.value} onClick={() => onSelectedChange(option)}>

                {option.label}
            </div>
        );
    })
    return (
        <div className="ui form">
            <div className="ui field">
                <label className="label">Select a Color</label>
                <div className={`ui labeled icon dropdown ${open ? 'visible active' : ''} selection`}
                    onClick={() => setOpen(!open)}>
                    <i className="dropdown icon"></i>
                    <span className="text">{selected.label}</span>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Dropdown;