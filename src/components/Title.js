import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Title extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { text } = this.props;
        return (
            <div className='titleContainer'>
                <div className='titleWrapper'>
                    <h1>{text}</h1>
                </div>
            </div>
        )
    }
}

Title.propTypes = {
    text: PropTypes.string.isRequired
}

export default Title
