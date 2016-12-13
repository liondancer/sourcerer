import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField'

const UrlForm = ({ onSearch, onChange }) => {
    return (
        <form id="urlform">
            <TextField
                hintText="Ask the Sourcerer ..."
                onChange={ onChange }
            />

            <input
                type="submit"
                onClick={ onSearch }
                value="Submit" />
        </form>
    );
};

UrlForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default UrlForm;