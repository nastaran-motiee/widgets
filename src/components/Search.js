import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
    const [term, setTerm] = useState('react');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (term) {
                setDebouncedTerm(term);
            }
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };

    }, [term]);


    useEffect(()=> {
        const search = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php",
                {
                    params: {
                        action: "query",
                        list: "search",
                        origin: '*',
                        format: "json",
                        srsearch: debouncedTerm
                    }
                });
            setResults(data.query.search);
        };
        search();
    },[debouncedTerm]);


    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui yellow button">
                        Go to article
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>

                </div>


            </div>
        )
    })


    return (
        <div>
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
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>


    );
}

export default Search;