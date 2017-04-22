import React, { Component } from 'react';
import { Link } from 'react-router'
import {connect} from 'react-redux'


class Home extends Component {

    render() {
        console.log(this.props.user.name, "statesssssss")
        return (
            <div>
                <h1>
                    Home page
                    <br />
                    {this.props.user.name}
                    <br/>
                    <Link to="/">home</Link>
                </h1>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
          user: state.authUser
    }
}


export default connect(mapStateToProps,null)(Home);
