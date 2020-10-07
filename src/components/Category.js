import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";


class Category extends Component {
    constructor() {
        super ();
        this.state = {clues: []};
    }
    componentDidMount() {
        fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
            .then(response => response.json())
            .then(json => this.setState({clues: json}));
    }

    render() {
        console.log('category', this.props)
        return (
            <div>
                <Link className={'link-home'} to={'/'}>Home</Link>
                <h2>{this.props.category.title}</h2>
                {
                    this.state.clues.map(clue => {
                        return(
                            <div key={clue.id}>{clue.question}</div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {category: state.category}
}

export default connect(mapStateToProps)(Category);