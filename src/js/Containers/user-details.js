import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
    render() {
        if(!this.props.user) {
            return(
                <h5>Select Something!</h5>
            )
        }
        return (
            <div>
                <h1>{this.props.user.firstName} {this.props.user.lastName} {this.props.user.id}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetails);