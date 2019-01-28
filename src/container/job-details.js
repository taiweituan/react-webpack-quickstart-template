import React, { Component } from "react";
import {connect} from "react-redux";

class JobDetail extends Component {

    render() {
        if (!this.props.job){
            return <div>Please make selection.</div>;
        }

        return (
            <div className="jobs__container col-md-9">
                {/* Your Code Here */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        job: state.activeJob
    };
}

export default connect(mapStateToProps)(JobDetail);