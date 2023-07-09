import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Video extends Component {
    render() {
        return (
            this.props.show &&
            <div>
                <div className="alert alert-light alert-dismissible fade show" role="alert">
                    <img className="mx-1 my-1" src={this.props.thmb} alt="" />
                    <strong className="mx-2 my-1">{this.props.name}</strong>  <br/>{this.props.descp?this.props.descp.slice(0, 400):"No Description"}....
                    <br />
                    <strong>Category : </strong> {this.props.ctg}<br />
                    <strong>Published : </strong> {this.props.publ}<br />
                    <strong>Length : </strong> {Math.floor((this.props.len)/60)}m {(this.props.len)%60}s<br />
                    <strong>Comments : </strong> {this.props.cmts}<br />
                    <strong>Likes : </strong> {this.props.likes}<br />
                    <strong>Views : </strong> {this.props.views}<br />
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.props.crossbt} >

                    </button>
                </div>
            </div>
        )
    }
}
