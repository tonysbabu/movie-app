import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4> Home </h4>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
      
}

export default connect(mapStateToProps)(Home);