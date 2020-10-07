import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";


class Category extends Component {
    render() {
        console.log('category', this.props)
        return (
            <div>
                <Link className={'link-home'} to={'/'}>Home</Link>
                <h2>Category title</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {category: state.category}
}

export default connect(mapStateToProps)(Category);