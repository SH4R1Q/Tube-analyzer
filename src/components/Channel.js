import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Channel extends Component {
    render() {
        return (
            <div>
                <div className="my-3">
                    <button type="button" className="btn btn-info" onClick={this.props.loadChannelDetails}>
                        {this.props.load?"":!this.props.showTitle ? "Load Channel Details" : "Loaded!!"}
                        <span className={`spinner-grow spinner-grow-sm ${this.props.load?"":"visually-hidden"}`} role="status" aria-hidden="true"></span>
                        {this.props.load?"Loading...":""}
                    </button>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Channel Description
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {(!this.props.showTitle || this.props.channelDscp === null) ? "Not Available" : this.props.channelDscp}
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Related Links
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {(!this.props.showTitle || this.props.channelDscp === null) ? "Not Available" : this.props.contact.map((elements) => {
                                    return <div className="my-2">
                                        <img className="mx-2" src={elements.icon} alt="" />
                                        <a className="btn btn-light" target='_blank' href={elements.targetUrl} role='button'>{elements.title}</a><hr />
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card my-3">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>{!this.props.showTitle ? "Channel Name Not Available" : this.props.channelTitle}</strong></li>
                        <li className="list-group-item"><strong>Subscribers : </strong>{(!this.props.showTitle || this.props.channelSubs === null) ? "N/A" : this.props.channelSubs}</li>
                        <li className="list-group-item"><strong>Videos : </strong>{(!this.props.showTitle || this.props.channelVids === null) ? "N/A" : this.props.channelVids}</li>
                        <li className="list-group-item"><strong>Views : </strong>{(!this.props.showTitle || this.props.channelViews === null) ? "N/A" : this.props.channelViews}</li>
                    </ul>
                </div>
                <span className={`badge rounded-pill text-bg-${!this.props.showTitle ? "light" : this.props.verif ? "success" : "secondary"}`}>{!this.props.showTitle ? "" : this.props.verif ? "VERIFIED" : "UNVERIFIED"}</span>
                <span className={`badge text-bg-${!this.props.showTitle ? "light" : "dark"} mx-2`}>{!this.props.showTitle ? "" : this.props.chCountry}</span><br />
                <span className={`badge my-3 text-bg-${!this.props.showTitle ? "light" : "secondary"}`}>{!this.props.showTitle ? "" : this.props.created}</span>
            </div>
        )
    }
}
