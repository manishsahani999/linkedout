import React from 'react';
import { connect } from 'react-redux';

import { userActions } from 'actions';

class WorkersDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        }
    }

    // handleChange = e => {
    //     // this.setState({ filename: name })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     // this.props.getAllPlantImages();
    // }

    render() {

        return (
            <div>
                <h1>Workers Dashboard</h1>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    auth: state.authentication,
});

const mapDispatchToProps = {
    logout: userActions.logout,
};

const connected = connect(mapStateToProps, mapDispatchToProps)(WorkersDashboard);

export { connected as WorkersDashboard }
