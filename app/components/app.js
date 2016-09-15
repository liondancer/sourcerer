import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    {/* Children is receives passed as props from the react-router! */}
                    { this.props.children }
                </div>
            </MuiThemeProvider>
        );
    }
}

// Proptype validation
App.propTypes = {
    children: PropTypes.object.isRequired
};



export default App;
