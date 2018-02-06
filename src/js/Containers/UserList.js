import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../Actions/index';

class UserList extends Component {
 
    createListitems() {
        return this.props.users.map((user) => {
            return(
                <li 
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.firstName} {user.lastName}
                </li>
            )
        });
    }

    render() {
        return(
            <ul>
                {this.createListitems()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);