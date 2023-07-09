
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class
  Comments extends Component {

  constructor() {
    super();
    this.state = {
      byOwner: false,
      pinned: false,
      verified: false,
      liked: false
    }
  }

  isByOwner = async () => {

    if (this.state.byOwner) {
      this.setState({
        byOwner: false
      })
    }
    else {
      this.setState({
        byOwner: true
      })
    }
  }
  isPinned = async () => {
    if (this.state.pinned) {
      this.setState({
        pinned: false
      })
    }
    else {
      this.setState({
        pinned: true
      })
    }
  }
  isVerified = async () => {
    if (this.state.verified) {
      this.setState({
        verified: false
      })
    }
    else {
      this.setState({
        verified: true
      })
    }
  }
  isLiked = async () => {
    if (this.state.liked) {
      this.setState({
        liked: false
      })
    }
    else {
      this.setState({
        liked: true
      })
    }
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-info my-3" onClick={this.props.loadComments}>
          {this.props.load ? "" : !this.props.sc ? "Load Comments" : "Total Comments : "+this.props.totalComments}
          <span className={`spinner-grow spinner-grow-sm ${this.props.load ? "" : "visually-hidden"}`} role="status" aria-hidden="true"></span>
          {this.props.load ? "Loading..." : ""}
        </button>
        <div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={this.isByOwner} id="flexSwitchCheckReverse" />
            <label className="form-check-label" htmlFor="flexSwitchCheckReverse">By Channel Owner</label>
          </div>
          <div className="form-check form-switch my-2">
            <input className="form-check-input" type="checkbox" onClick={this.isPinned} id="flexSwitchCheckReverse" />
            <label className="form-check-label" htmlFor="flexSwitchCheckReverse">Pinned Comments</label>
          </div>
          <div className="form-check form-switch my-2">
            <input className="form-check-input" type="checkbox" onClick={this.isVerified} id="flexSwitchCheckReverse" />
            <label className="form-check-label" htmlFor="flexSwitchCheckReverse">Verified Comments</label>
          </div>
          <div className="form-check form-switch my-2">
            <input className="form-check-input" type="checkbox" onClick={this.isLiked} id="flexSwitchCheckReverse" />
            <label className="form-check-label" htmlFor="flexSwitchCheckReverse">Liked by Owner</label>
          </div>
        </div>
        <div classame="my-3">
          <ul className="list-group list-group">
            {!this.props.sc ? "" :
              this.state.byOwner ? this.props.cmts.map((element) => {
                return (
                  element.author.isChannelOwner && <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold my-1">{element.author.isChannelOwner ? element.author.title : ""}</div>
                      {element.author.isChannelOwner ? element.content : ""}<br />
                      <span className="badge text-bg-info my-1 mx-1">{element.author.isChannelOwner ? element.stats.replies + " Replies" : ""}</span>
                      <span className="badge text-bg-info my-1 mx-1">{element.author.isChannelOwner ? element.stats.votes + " Likes" : ""}</span>
                      <span className="badge text-bg-info my-1 mx-1">{element.author.isChannelOwner ? element.publishedTimeText : ""}</span>
                    </div>
                  </li>
                )
              }) : this.state.pinned ? this.props.cmts.map((element) => {
                return (
                  element.pinned.status && <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold my-1">{element.pinned.status ? element.author.title : ""}</div>
                      {element.pinned.status ? element.content : ""}<br />
                      <span className="badge text-bg-info my-1 mx-1">{element.pinned.status ? element.stats.replies + " Replies" : ""}</span>
                      <span className="badge text-bg-info my-1 mx-1">{element.pinned.status ? element.stats.votes + " Likes" : ""}</span>
                      <span className="badge text-bg-info my-1 mx-1">{element.pinned.status ? element.publishedTimeText : ""}</span>
                    </div>
                  </li>
                )
              }) : this.state.verified ? this.props.cmts.map((element) => {
                return (
                  !element.author.badges.length === 0 && <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold my-1">{!element.author.badges.length === 0 ? element.author.title : ""}</div>
                      {!element.author.badges.length === 0 ? element.content : ""}<br />
                      <span className="badge text-bg-info my-1 mx-1">{!element.author.badges.length === 0 ? element.stats.replies + " Replies" : ""}</span>
                      <span className="badge text-bg-info my-1 mx-1">{!element.author.badges.length === 0 ? element.stats.votes + " Likes" : ""}</span>
                      <span className="badge text-bg-info my-1 mx-1">{!element.author.badges.length === 0 ? element.publishedTimeText : ""}</span>
                    </div>
                  </li>
                )
              }) : this.state.liked ? this.props.cmts.map((element) => {
                return (
                  element.creatorHeart && <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold my-1">{element.creatorHeart ? element.author.title : ""}</div>
                      {element.creatorHeart ? element.content : ""}<br />
                      <span className="badge text-bg-info my-1 mx-1">{element.creatorHeart ? element.stats.replies + " Replies" : ""}</span>
                      <span className="badge text-bg-info my-1 mx-1">{element.creatorHeart ? element.stats.votes + " Likes" : ""}</span>
                      <span className="badge text-bg-info my-1 mx-1">{element.creatorHeart ? element.publishedTimeText : ""}</span>
                    </div>
                  </li>
                )
              }) : this.props.cmts.map((element) => {
                return (
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold my-1">{element.author.title}</div>
                      {element.content}<br />
                      <span className="badge text-bg-info my-1 mx-1">{element.stats.replies} Replies</span>
                      <span className="badge text-bg-info my-1 mx-1">{element.stats.votes} Likes</span>
                      <span className="badge text-bg-info my-1 mx-1">{element.publishedTimeText}</span>
                    </div>
                  </li>

                )
              })}
          </ul>
        </div>
      </div>
    )
  }
}
