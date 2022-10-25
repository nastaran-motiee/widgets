import React from "react";

const Dropdown = ({ options }) => {
    const renderedOptions = options.map((option) => {
        return (
            <div className="item" key={option.value}>
                <div className={`ui ${option.value} empty circular label`}></div>
                {option.label}
            </div>
        );
    })
    return (
        <div className="ui form">
            <div className="ui field">
                <div className="ui labeled icon dropdown selection visible active">
                    <i className="dropdown icon"></i>
                    <span className="text">Select Color</span>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Dropdown;