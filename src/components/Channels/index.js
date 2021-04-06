import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle, faFacebook, faTwitter, faLinkedin, faPinterest, faSlack} from "@fortawesome/free-brands-svg-icons";


export default class Channels extends Component {
    render() {
        return (
            <div>
                <div className="channels p2">
                    <p className="channels_title">Channels</p>
                    <ul className="channels_list p0">
                        <li>
                            <span className="channels_icon"><FontAwesomeIcon icon={faGoogle} /></span>
                            <p>Google</p>
                        </li>
                        <li>
                            <span className="channels_icon"><FontAwesomeIcon icon={faFacebook} /></span>
                            <p>Facebook</p>
                        </li>
                        <li>
                            <span className="channels_icon"><FontAwesomeIcon icon={faTwitter} /></span>
                            <p>Twitter</p>
                        </li>
                        <li>
                            <span className="channels_icon"><FontAwesomeIcon icon={faLinkedin} /></span>
                            <p>Linkedin</p>
                        </li>
                        <li>
                            <span className="channels_icon"><FontAwesomeIcon icon={faPinterest} /></span>
                            <p>Pinterest</p>
                        </li>
                        <li>
                            <span className="channels_icon"><FontAwesomeIcon icon={faSlack} /></span>
                            <p>Slack</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
