import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import UrlForm from './urlForm';
import TagSummary from './tagSummary';
import PrettyPrintPageSource from './prettyPrintPageSource';
import { bindActionCreators } from 'redux';
import * as GetPageSourceActions from '../../actions/getPageSourceAction';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            highlight: null
        };
        this.getPageSource = this.getPageSource.bind(this);
        this.updateURLstate = this.updateURLstate.bind(this);
        this.highlightTag = this.highlightTag.bind(this);
        this.clearHighlight = this.clearHighlight(this);

    }

    getPageSource(event) {
        event.preventDefault();
        this.props.actions.getPageSource(this.state.url);
    }

    updateURLstate(event) {
        const url = event.target.value;
        this.setState({
            url
        });
    }

    highlightTag(tag) {
        this.setState({
            highlight: tag
        });
    }

    clearHighlight() {
        this.setState({
            highlight: null
        });
    }

    render() {
        console.log(this.props.payload);
        return (
            <div>
                <UrlForm
                    onSearch={ this.getPageSource }
                    onChange={ this.updateURLstate }
                />

                <PrettyPrintPageSource
                    badUrl={ this.props.payload.error }
                    prettyPrintPageSource={ this.props.payload.prettySource }
                    higlighted={ this.state.highlight }
                />
                <TagSummary
                    tags={ this.props.payload.tagData }
                    highlightTag={ this.highlightTag }
                    clearHighlight={ this.clearHighlight }
                />
            </div>
        );
    }
}

HomePage.propTypes = {
    actions: PropTypes.object.isRequired,
    payload: PropTypes.object.isRequired
};

// ownProps is a reference to the components attached to this component. That is why it is called own props
// state is the state that is in our redux store
// state.pageSource refers to the pageSource within redux-store --> rootReducer --> pageSourceReducer
function mapStateToProps(state, ownProps) {
    return {
        payload: state.pageSource

    };
}

// determines what actions are available in the component
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(GetPageSourceActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

