import React, { PropTypes } from 'react';


const TagSummary = ({ tags, highlightTag, clearHighlight }) => {
    if (!tags) {
        return <div />;
    }
    return (
        <div>
            {Object.keys(tags).map((tag) => {
                return (
                    <div key={ tag }>
                        <button type="button" onClick={ highlightTag.bind(this, tag) }>
                            <pre>&lt;{ tag }&gt;</pre>
                        </button>
                        <p>{ tags[tag] }</p>
                    </div>

                );
            })}
            <button onClick={}>Clear</button>
        </div>
    );
};

TagSummary.propTypes = {
    tags: PropTypes.object,
    highlightTag: PropTypes.func.isRequired,
    clearHighlight: PropTypes.func.isRequired
};

export default TagSummary;