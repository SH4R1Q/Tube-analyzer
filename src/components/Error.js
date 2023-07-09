import React, { Component } from 'react'

export default class
    extends Component {
    render() {
        return (
            this.props.errorOccured &&
            <div>
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Something Went Wrong</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.props.crossbt}></button>
                </div>
            </div>
        )
    }
}
