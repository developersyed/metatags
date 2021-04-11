import React, { Component, useCallback, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle, faFacebook, faTwitter, faLinkedin, faPinterest, faSlack} from "@fortawesome/free-brands-svg-icons";

export default class Channels extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            channelsList : [
                {
                    id: 0,
                    name: 'Google',
                    icon: faGoogle,
                    isActive: false
                },
                {
                    id: 1,
                    name: 'Facebook',
                    icon: faFacebook,
                    isActive: false
                },
                {
                    id: 2,
                    name: 'Twitter',
                    icon: faTwitter,
                    isActive: false
                },
                {
                    id: 3,
                    name: 'Linkedin',
                    icon: faLinkedin,
                    isActive: false
                },
                {
                    id: 4,
                    name: 'Pinterest',
                    icon: faPinterest,
                    isActive: false
                },
                {
                    id: 5,
                    name: 'Slack',
                    icon: faSlack,
                    isActive: false
                }
            ],
            selected : ''
        }
        this.channelSelect = this.channelSelect;
    }
    
    channelSelect(id) {
        let channelsList = [ ...this.state.channelsList ];
        channelsList[id] = {...channelsList[id], isActive: !channelsList[id].isActive};
        this.setState({ channelsList });
    }
    render() {
        
        
        const channelsList = this.state.channelsList;
        return (
            <div>
                <div className="channels p2">
                    <p className="channels_title">Channels</p>
                    <ul className="channels_list p0">
                        {
                            channelsList.map(channel => {
                                return (
                                    <li 
                                        id={channel.id} 
                                        key={channel.id} 
                                        className={channel.isActive ? 'active' : ''}  
                                        onClick={(e) => this.channelSelect(channel.id)} >
                                        <span className="channels_icon"><FontAwesomeIcon icon={channel.icon} /></span>
                                        <p>{channel.name}</p>
                                    </li>
                                )
                            })
                        }
                        
                        
                    </ul>
                </div>
            </div>
        )
    }
}
