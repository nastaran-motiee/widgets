import React, { useEffect, useState, useRef } from "react";


const Dropdown = ({ label, options, selected, onSelectedChange }) => {
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
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);



    return (
        <div ref={ref} className="ui form">
            <div className="ui field">
                <label className="label">{label}</label>
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