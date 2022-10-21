import React, {useState} from "react";

const Search = () => {
    const [term, setTerm] = useState('');
    return (
        <div className="ui center aligned yellow segment">
            <div className="ui category search">
                <div className="ui icon input">
                    <input
                        className="prompt" type="text"
                        placeholder="Enter Search Term ..."
                        style={{ width: "50vw" }}
                        onChange={e => setTerm(e.target.value)}
                    />
                    <i className="search icon"></i>
                </div>
            </div>
        </div>

    );
}

export default Search;