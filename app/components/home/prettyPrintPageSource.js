import React, { PropTypes } from 'react';

const PrettyPrintPageSource = ({ prettyPrintPageSource, badUrl, highlighter, tag }) => {
    if (badUrl) {
        return (
            <div>
                Bad URL!
            </div>
        );
    } else {
        console.log(highlighter(prettyPrintPageSource, tag));
        return (
            <pre id="page-source">
                { highlighter(prettyPrintPageSource, tag).map((htmlString, idx) => {
                    let html = htmlString.match(new RegExp("<(\/){0,1}" + tag + "[^>]*>", "g"));
                    if (html) {
                        return <span id="page-source" key={ idx }><mark>{ htmlString }</mark></span>;
                    } else {
                        return <span id="page-source" key={ idx }>{ htmlString }</span>
                    }
                }) }
            </pre>
        );
    }
};

PrettyPrintPageSource.propTypes = {
    badUrl: PropTypes.number.isRequired,
    prettyPrintPageSource: PropTypes.string,
    highlighter: PropTypes.func.isRequired

};

export default PrettyPrintPageSource;