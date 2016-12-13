import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import UrlForm from './urlForm';
import TagSummary from './tagSummary';
import PrettyPrintPageSource from './prettyPrintPageSource';
import { bindActionCreators } from 'redux';
import * as GetPageSourceActions from '../../actions/getPageSourceAction';
import DisplayChart from './displayChart'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: null,
            url: null
        };
        this.getPageSource = this.getPageSource.bind(this);
        this.updateURLstate = this.updateURLstate.bind(this);
        this.clearHighlight = this.clearHighlight.bind(this);
        this.setHighlightTag = this.setHighlightTag.bind(this);
    }

    // isNewTags(tags) {
    //     if (Object.getOwnPropertyNames(tags).length > 0) {
    //         let newTags = Object.getOwnPropertyNames(tags);
    //         let stateTags = Object.getOwnPropertyNames(this.state.tags);
    //
    //         // compare length
    //         if (newTags.length != stateTags.length) {
    //             return false;
    //         }
    //
    //         for (let i = 0; i < newTags.length; i++) {
    //             let propName = newTags[i];
    //
    //             // compare values of object
    //             if (newTags[propName] !== stateTags[propName]) {
    //                 return false;
    //             }
    //         }
    //         this.setState({
    //             tags
    //         });
    //         return true;
    //     }
    // }


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

    setHighlightTag(tag) {
        this.setState({
            highlight: tag
        });
    }

    clearHighlight() {
        this.setState({
            highlight: null
        });
    }


    highlightTag(pageSource, tag) {
        if (tag && pageSource) {
            // let re = new RegExp("<(\/)?" + tag + "(.*)?>", "g");
            // let re = new RegExp("\s*<(\/){0,1}" + tag + "[^>]*>", "g");
            let re = new RegExp("\s*<[^>]*" + tag + "[^>]*>[\s]*", "g");
            let matchingHTMLChunks = pageSource.match(re);
            let htmlChunks = pageSource.split(re);
            let pageSourceArray = [];
            let htmlChunkFlag = 0;
            let len = htmlChunks.length + matchingHTMLChunks.length;
            for (let i = 0; i < len; i++) {
                if (htmlChunkFlag) {
                    pageSourceArray.push(matchingHTMLChunks.shift());
                    htmlChunkFlag = 0;
                } else {
                    pageSourceArray.push(htmlChunks.shift());
                    htmlChunkFlag = 1;
                }
            }

            return pageSourceArray;
        } else if (pageSource && !tag) {
            return [pageSource];
        } else {
            return [];
        }
    }

    render() {
        // console.log(this.props.payload);
        // console.log(this.state);
        return (
            <div id="content-wrapper">
                <div id="search">
                    <img id="logo"/>
                    <UrlForm
                        onSearch={ this.getPageSource }
                        onChange={ this.updateURLstate }
                    />
                </div>
                <div id="sourcerer-content">
                    <div className="left-content ">
                        <PrettyPrintPageSource
                            badUrl={ this.props.payload.error }
                            prettyPrintPageSource={ this.props.payload.prettySource }
                            highlighter={ this.highlightTag }
                            tag={ this.state.highlight }
                        />
                    </div>
                    <div className="right-content">
                        <div id="chart">
                            <DisplayChart
                                tags={ this.props.payload.tagData }
                            />
                        </div>
                        <div id="tags">
                            <TagSummary
                                tags={ this.props.payload.tagData }
                                setHighlightTag={ this.setHighlightTag }
                                clearHighlight={ this.clearHighlight }
                            />
                        </div>
                    </div>
                </div>
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

