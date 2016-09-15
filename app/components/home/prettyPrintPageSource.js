import React, { PropTypes } from 'react';

const PrettyPrintPageSource = ({ prettyPrintPageSource, badUrl, highlighted }) => {
    if (badUrl) {
        return (
            <div>
                Bad URL!
            </div>
        );
    } else {
        return (
            <pre>
                { prettyPrintPageSource }
            </pre>
        );
    }
};

PrettyPrintPageSource.propTypes = {
    badUrl: PropTypes.number.isRequired,
    prettyPrintPageSource: PropTypes.string,
    highlighted: PropTypes.string
};

export default PrettyPrintPageSource;