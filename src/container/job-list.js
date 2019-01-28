import React, { Component } from "react";
import {connect} from "react-redux";
import { selectJob} from  "../actions/index";
import { bindActionCreators } from "redux";

class JobList extends Component {
    renderList() {
        return this.props.jobs.map((job) => {
            return (
                <li 
                    key={job.title} 
                    onClick={() => this.props.selectJob(job)}
                    className="list-group-item">
                    {job.title} at {job.company}
                </li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-md-3">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        jobs: state.jobs
    };
}


// anythong returned from this function will end up as props
// on the JobList container
function mapDipatchToProps(dispatch) {
    // whenever selectJob is called, the result should be passed to 
    // all of our reducers
    return bindActionCreators({selectJob: selectJob }, dispatch);
}

// promot JobList from a component to a container - it needs to know 
// about this new dispatch method, selectJob. Make it available as a prop
export default connect(mapStateToProps, mapDipatchToProps)(JobList);