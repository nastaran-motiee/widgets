import React, { useEffect, useState, useRef } from "react";


const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div className="item" key={option.value} onClick={() => onSelectedChange(option)}>

                {option.label}
            </div>
        );
    });

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        });
    }, []);


    return (
        <div ref={ref} className="ui form">
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