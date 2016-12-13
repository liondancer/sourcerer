import React, { PropTypes } from 'react';


const TagSummary = ({ tags, setHighlightTag, clearHighlight }) => {
    if (Object.getOwnPropertyNames(tags).length === 0) {
        return <div />;
    } else {
        return (
            <div id="tag-buttons">
                {Object.keys(tags).map((tag) => {
                    return (
                        <div key={ tag }>
                            <button type="button" onClick={ setHighlightTag.bind(this, tag) }>
                                <pre>&lt;{ tag }&gt;</pre>
                            </button>
                            <span>{ tags[tag] }</span>
                        </div>
                    );
                })}
                <button onClick={ clearHighlight }>Clear</button>
            </div>
        );
    }

};

TagSummary.propTypes = {
    tags: PropTypes.object,
    setHighlightTag: PropTypes.func.isRequired,
    clearHighlight: PropTypes.func.isRequired
};

export default TagSummary;